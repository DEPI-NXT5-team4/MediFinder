// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// Endpoint: /api/nearby-pharmacies
app.get("/api/nearby-pharmacies", async (req, res) => {
  const { lat, lng, radius = 3000 } = req.query;
  if (!lat || !lng)
    return res.status(400).json({ error: "Latitude and longitude required" });

  // Query to Overpass API
  const query = `
    [out:json][timeout:25];
    (
      node["amenity"="pharmacy"](around:${radius},${lat},${lng});
      way["amenity"="pharmacy"](around:${radius},${lat},${lng});
      relation["amenity"="pharmacy"](around:${radius},${lat},${lng});
    );
    out center;
  `;

  try {
    const r = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ data: query }),
    });
    const json = await r.json();

    const pharmacies = (json.elements || []).map((el) => ({
      id: el.id,
      name: el.tags?.name || "Pharmacy",
      city: el.tags?.["addr:city"] || el.tags?.city || "Unknown",
      lat: el.lat ?? el.center?.lat,
      lng: el.lon ?? el.center?.lon,
    }));

    res.json({ pharmacies });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Overpass API failed" });
  }
});

app.listen(3001, () => console.log("✅ Server running on http://localhost:3001"));
