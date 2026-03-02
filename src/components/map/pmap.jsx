import React from "react";
import { MapContainer, TileLayer /*, Marker, Popup */ } from "react-leaflet";
import "leaflet/dist/leaflet.css";

/**
 * LibyaMapWithRoutes.jsx (routes removed)
 * - Renders a Leaflet map centered on Libya
 * - No polylines or schematic routes included
 * - Optional city markers are provided commented out
 */

export default function Map() {
  // Map center roughly in Libya and zoom level
  const center = [29.5, 16.5];
  const zoom = 5;

  // Optional city markers (uncomment to enable)
  const cities = {
    tripoli: { name: "Tripoli", coords: [32.8872, 13.1913] },
    misrata: { name: "Misrata", coords: [32.3754, 15.0920] },
    sirte: { name: "Sirte", coords: [31.2089, 16.5880] },
    benghazi: { name: "Benghazi", coords: [32.1167, 20.0667] },
    sabha: { name: "Sabha", coords: [27.0336, 14.4286] },
    ghat: { name: "Ghat", coords: [24.9647, 10.1728] },
    zawiya: { name: "Zawiya", coords: [32.7556, 12.7278] },
  };

  return (
    <section aria-label="Map section" style={{ maxWidth: 1057, margin: "0 auto", padding: 16 }}>

      <div style={{ width: "100%", height: 600, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)" }}>
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/*
            // Optional markers: uncomment to show city markers and popups
            {Object.entries(cities).map(([key, c]) => (
              <Marker key={key} position={c.coords} title={c.name}>
                <Popup>
                  <strong>{c.name}</strong>
                </Popup>
              </Marker>
            ))}
          */}
        </MapContainer>
      </div>

     
    </section>
  );
}
