import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFav } from "../../context/useFav";

export default function Compare() {
  const [sp] = useSearchParams();
  const nav = useNavigate();
  const { addToCart } = useFav?.() || { addToCart: () => {} };

  const productId = sp.get("id");
  const productName = sp.get("name");

  const [medicines, setMeds] = useState([]);
  const [pharmacies, setPharms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then((j) => {
        setMeds(j.medicines || []);
        setPharms(j.pharmacies || []);
      })
      .finally(() => setLoading(false));

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const medicine = useMemo(() => {
    if (!medicines.length) return null;

    if (productId) {
      const pidNum = Number(productId);
      return (
        medicines.find(
          (m) => m.id === pidNum || String(m.id) === String(productId)
        ) || null
      );
    }

    if (productName) {
      return (
        medicines.find(
          (m) => m.name?.toLowerCase() === productName.toLowerCase()
        ) || null
      );
    }

    return null;
  }, [medicines, productId, productName]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const rows = useMemo(() => {
    if (!medicine?.vendors?.length) return [];
   
    const withNames = medicine.vendors
      .map((v) => {
        const ph = pharmacies.find((p) => p.id === v.pharmacyId);
        let distance = null;
        
        if (userLocation && ph) {
          distance = calculateDistance(userLocation.lat, userLocation.lng, ph.lat, ph.lng);
        }
        
        return {
          ...v,
          pharmacy: ph?.name || v.pharmacyId,
          city: ph?.city || "",
          distance: distance,
          coordinates: ph ? { lat: ph.lat, lng: ph.lng } : null
        };
      })
      .sort((a, b) => {
        if (userLocation) {
          if (a.distance !== null && b.distance !== null) {
            return a.distance - b.distance;
          }
          if (a.distance !== null) return -1;
          if (b.distance !== null) return 1;
        }
        return a.price - b.price;
      });

    return withNames;
  }, [medicine, pharmacies, userLocation]);

  if (loading) return <div className="p-6">Loading comparison…</div>;

  if (!medicine) {
    return (
      <div className="p-6">
        <div className="text-lg font-semibold mb-2">No product selected</div>
        <p className="text-gray-600 mb-4">
          افتحي الصفحة هكذا:
          <code className="mx-2 bg-gray-100 px-2 py-1 rounded">/compare?id=2</code>
          أو
          <code className="mx-2 bg-gray-100 px-2 py-1 rounded">/compare?name=Panadol</code>
        </p>
        <button onClick={() => nav(-1)} className="px-4 py-2 rounded bg-black text-white">
          رجوع
        </button>
      </div>
    );
  }

  const best = rows[0];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-5 flex items-center gap-4">
        <img src={medicine.image} alt={medicine.name} className="w-20 h-20 object-cover rounded" />
        <div>
          <h1 className="text-2xl font-bold">{medicine.name}</h1>
          {best && (
            <div className="text-sm text-green-700">
              {userLocation && best.distance ?
                `أقرب صيدلية: ${best.price} EGP من ${best.pharmacy} (${best.distance.toFixed(1)} km)` :
                `أرخص سعر: ${best.price} EGP من ${best.pharmacy}`
              }
            </div>
          )}
          {!userLocation && (
            <div className="text-xs text-gray-500 mt-1">
              لترتيب النتائج حسب القرب، يرجى السماح بالوصول إلى موقعك
            </div>
          )}
        </div>
      </div>

      {rows.length ? (
        <>
          <div className="overflow-x-auto sm:overflow-visible">
            <table className="w-full bg-white rounded-xl shadow">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-3">Pharmacy</th>
                  <th className="p-3">City</th>
                  {userLocation && <th className="p-3">Distance</th>}
                  <th className="p-3">Price</th>
                  <th className="p-3">Stock</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.pharmacyId}
                    className={`border-b last:border-0 ${i === 0 ? "bg-emerald-50" : ""}`}
                  >
                    <td className="p-3">{r.pharmacy}</td>
                    <td className="p-3 text-gray-600">{r.city}</td>
                    {userLocation && (
                      <td className="p-3 text-gray-600">
                        {r.distance ? `${r.distance.toFixed(1)} km` : 'Unknown'}
                      </td>
                    )}
                    <td className="p-3">{r.price} EGP</td>
                    <td className={`p-3 ${r.stock ? "text-green-700" : "text-red-600"}`}>
                      {r.stock ? "Available" : "Out of stock"}
                    </td>
                    <td className="p-3">
                      <button
                        disabled={!r.stock}
                        onClick={() =>
                          addToCart?.({
                            id: `${medicine.id}-${r.pharmacyId}`,
                            name: medicine.name,
                            price: r.price,
                            pharmacyId: r.pharmacyId,
                            qty: 1,
                            image: medicine.image,
                          })
                        }
                        className={
                          "px-3 py-2 rounded " +
                          (r.stock
                            ? "bg-black text-white"
                            : "bg-gray-200 text-gray-500 cursor-not-allowed")
                        }
                        aria-label={`Add ${medicine.name} from ${r.pharmacy} to cart`}
                      >
                        Add to cart
                      </button>
                      {r.coordinates && (
                        <button
                          className="ml-2 px-3 py-2 rounded bg-blue-600 text-white text-sm"
                          onClick={() => {
                            window.open(`https://www.google.com/maps/dir/?api=1&destination=${r.coordinates.lat},${r.coordinates.lng}`, '_blank');
                          }}
                        >
                          Directions
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={() => nav(-1)}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              ⬅ Back
            </button>
            <span className="text-sm text-gray-600">
               {userLocation ? 'الأسعار مرتبة حسب الأقرب أولاً' : 'الأسعار مرتبة حسب الأقل سعراً'}
            </span>
          </div>
        </>
      ) : (
        <div className="text-gray-600">لا توجد بيانات مقارنة لهذا الدواء.</div>
      )}
    </div>
  );
}