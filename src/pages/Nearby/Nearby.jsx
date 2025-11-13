
import React, { useEffect, useMemo, useState } from "react";
import { MapPin, RefreshCcw } from "lucide-react";

/** Haversine distance in KM */
function distanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}


const cityPresets = [
  { key: "cairo", name: "Cairo", lat: 30.0444, lng: 31.2357 },
  { key: "giza", name: "Giza", lat: 30.0131, lng: 31.2089 },
  { key: "alexandria", name: "Alexandria", lat: 31.2001, lng: 29.9187 },
  { key: "mansoura", name: "Mansoura", lat: 31.0409, lng: 31.3785 },
  { key: "tanta", name: "Tanta", lat: 30.7865, lng: 31.0004 },
  { key: "aswan", name: "Aswan", lat: 24.0889, lng: 32.8998 },
  { key: "luxor", name: "Luxor", lat: 25.6872, lng: 32.6396 },
];

export default function Nearby() {
  const [userLoc, setUserLoc] = useState(null); 
  const [pharmacies, setPharmacies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [geoError, setGeoError] = useState("");
  const [manualCity, setManualCity] = useState("");


  const [radiusUi, setRadiusUi] = useState(50);
  const [radiusKm, setRadiusKm] = useState(50);


  const [fetchedAt, setFetchedAt] = useState(null);

  const askForLocation = () => {
    setGeoError("");
    setLoading(true);
    if (!navigator.geolocation) {
      setGeoError("Your browser does not support geolocation.");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLoc({ lat: latitude, lng: longitude });
        setLoading(false);
      },
      () => {
        setGeoError("Location permission denied. You can choose a city instead.");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };


  useEffect(() => {
    askForLocation();
  }, []);


  useEffect(() => {
    if (!manualCity) return;
    const c = cityPresets.find((x) => x.key === manualCity);
    if (c) setUserLoc({ lat: c.lat, lng: c.lng });
  }, [manualCity]);


  useEffect(() => {
    const t = setTimeout(() => setRadiusKm(radiusUi), 400);
    return () => clearTimeout(t);
  }, [radiusUi]);


  useEffect(() => {
    if (!userLoc) return;
    setLoading(true);

    const endpoints = [
      "https://overpass-api.de/api/interpreter",
      "https://overpass.kumi.systems/api/interpreter",
    ];

    const query = `[out:json];node["amenity"="pharmacy"](around:${radiusKm * 1000},${userLoc.lat},${userLoc.lng});out;`;
    const encoded = encodeURIComponent(query);

    let aborted = false;

    (async () => {
      for (const ep of endpoints) {
        try {
          const res = await fetch(`${ep}?data=${encoded}`, { method: "GET" });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = await res.json();
          if (aborted) return;

          const list = (data?.elements || [])
            .filter((el) => el.lat && el.lon)
            .map((el) => ({
              id: `${el.type || "node"}-${el.id}`,
              name: el.tags?.name || "Unnamed Pharmacy",
              city:
                el.tags?.["addr:city"] ||
                el.tags?.city ||
                el.tags?.["addr:district"] ||
                "Unknown",
              lat: el.lat,
              lng: el.lon,
            }));

          setPharmacies(list);
          setFetchedAt(new Date());
          setLoading(false);
          return; 
        } catch {
          //
        }
      }
      if (!aborted) {
        setPharmacies([]);
        setLoading(false);
      }
    })();

    return () => {
      aborted = true;
    };
  }, [userLoc, radiusKm]);

  // compute distances + sort + apply radius filter (UI safety)
  const nearest = useMemo(() => {
    if (!pharmacies.length) return [];
    if (!userLoc) return pharmacies;

    const list = pharmacies
      .map((p) => ({
        ...p,
        distance: distanceKm(userLoc.lat, userLoc.lng, p.lat, p.lng),
      }))
      .sort((a, b) => a.distance - b.distance);

    return list.filter((p) => p.distance <= radiusKm).slice(0, 12);
  }, [pharmacies, userLoc, radiusKm]);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center">
          <MapPin className="w-5 h-5 text-emerald-700" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Nearby Pharmacies</h1>
      </div>
      <p className="text-gray-500 mb-4">
        Find pharmacies closest to your location. Allow location or choose a city.
      </p>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        <button
          onClick={askForLocation}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition"
        >
          <RefreshCcw className="w-4 h-4" />
          Use my current location
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">City:</span>
          <select
            value={manualCity}
            onChange={(e) => setManualCity(e.target.value)}
            className="border rounded-xl px-3 py-2 text-sm"
          >
            <option value="">— Choose —</option>
            {cityPresets.map((c) => (
              <option key={c.key} value={c.key}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Radius:</span>
          <input
            type="range"
            min={5}
            max={100}
            step={5}
            value={radiusUi}
            onChange={(e) => setRadiusUi(Number(e.target.value))}
            className="w-40 accent-emerald-600"
          />
          <span className="text-sm text-gray-800 font-medium w-12">
            {radiusUi} km
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-gray-600">
          {loading ? "Fetching pharmacies…" : `Found ${nearest.length} pharmacies`}
        </div>
        {fetchedAt && (
          <div className="text-xs text-gray-400">
            Updated at {fetchedAt.toLocaleTimeString()}
          </div>
        )}
      </div>

      {/* Info / Error */}
      {geoError && (
        <div className="mb-4 p-3 rounded-xl bg-yellow-50 text-yellow-800 text-sm">
          {geoError}
        </div>
      )}

      {/* List */}
      {nearest.length ? (
        <ul className="space-y-3">
          {nearest.map((p, i) => (
            <li
              key={p.id}
              className={`group p-4 bg-white rounded-2xl shadow border border-transparent hover:border-emerald-300 transition
              ${i === 0 ? "ring-1 ring-emerald-200" : ""}`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{p.name}</div>
                    <div className="text-gray-500 text-sm">{p.city}</div>
                    {typeof p.distance === "number" && (
                      <div className="text-gray-500 text-xs mt-1">
                        Approx. {p.distance.toFixed(1)} km away
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://www.google.com/maps?q=${p.lat},${p.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-gray-900 text-white text-sm hover:bg-gray-700 transition"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        !loading && (
          <div className="text-gray-600">
            No pharmacies found within the selected radius.
          </div>
        )
      )}
    </div>
  );
}
