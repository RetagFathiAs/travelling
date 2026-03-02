import React, { useState } from "react";
import { ReactComponent as LibyaBase } from "../../assets/images/svg/libya-map.svg";

/**
 * LibyaMapWithRoutes.jsx
 * - Renders the uploaded libya-map.svg and draws interactive route paths on an SVG overlay.
 * - Default routes: Coastal A1 (Tripoli→Misrata→Sirte→Benghazi),
 *   Coastal connector, Fezzan (Tripoli→Sabha→Ghat).
 *
 * Adjust coordinates in the `roads` array to fine-tune alignment.
 */

export default function LibyaMapWithRoutes() {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Coordinates are in the same coordinate space as the base SVG (1057 x 720).
  // Edit the `d` values to refine alignment to your map.
  const roads = [
    {
      id: "coastal_a1",
      title: "Libyan Coastal Highway (A1)  Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      d: "M215 120 C320 130, 420 140, 520 160 C640 170, 780 175, 900 180",
      color: "#d37d20",
    },
    {
      id: "coastal_connector",
      title: "Coastal Connector  Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      d: "M210 200 C500 150, 460 200, 600 200 C720 165, 820 300, 880 175",
      color: "#c0df24",
    },
    {
      id: "fezzan_route",
      title: "Fezzan Trans Saharan Route  Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      d: "M250 140 C300 260, 420 360, 480 420 C420 460, 500 500, 920 175",
      color: "#31ff7c",
    },
  ];

  const handleEnter = (road, e) => {
    const svgRect = e.currentTarget.ownerSVGElement.getBoundingClientRect();
    setPos({
      x: e.clientX - svgRect.left + 10,
      y: e.clientY - svgRect.top + 10,
    });
    setHovered(road);
  };

  const handleMove = (e) => {
    const svgRect = e.currentTarget.ownerSVGElement.getBoundingClientRect();
    setPos({
      x: e.clientX - svgRect.left + 10,
      y: e.clientY - svgRect.top + 10,
    });
  };

  const handleLeave = () => {
    setHovered(null);
  };

  return (
    <section aria-label="Map section" style={{ maxWidth: 1057, margin: "0 auto", padding: 16 }}>
      <h3 style={{ margin: "0 0 12px 0" }}>Libya map with travel routes</h3>

      <div style={{ position: "relative", width: "100%", maxWidth: 1057 }}>
        {/* Base map (your uploaded SVG) */}
        <LibyaBase style={{ width: "100%", height: "auto", display: "block" }} />

        {/* Overlay SVG: same coordinate system as the base file */}
        <svg
          viewBox="0 0 1057 720"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none", // allow pointer events only on route paths
          }}
          aria-hidden="false"
        >
         

          <g id="routes" style={{ pointerEvents: "auto" }}>
            {roads.map((r) => {
              const isHovered = hovered?.id === r.id;
              return (
                <g key={r.id}>
                  <path
                    d={r.d}
                    stroke={r.color}
                    strokeWidth={isHovered ? 8 : 5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    markerEnd="url(#arrow)"
                    style={{
                      cursor: "pointer",
                      transition: "stroke-width 120ms, opacity 120ms",
                      opacity: hovered ? (isHovered ? 1 : 0.45) : 0.95,
                    }}
                    onMouseEnter={(e) => handleEnter(r, e)}
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}
                    onFocus={(e) => handleEnter(r, e)}
                    onBlur={handleLeave}
                    tabIndex={0}
                    aria-label={`Road ${r.title}`}
                  />
                </g>
              );
            })}
          </g>
        </svg>

        {/* Tooltip */}
        {hovered && (
          <div
            role="tooltip"
            style={{
              position: "absolute",
              left: pos.x,
              top: pos.y,
              transform: "translate(-8px, -8px)",
              pointerEvents: "none",
              background: "#fff",
              color: "#0b3a66",
              padding: "6px 8px",
              borderRadius: 6,
              boxShadow: "0 8px 18px rgba(10,20,30,0.12)",
              fontSize: 13,
              fontWeight: 700,
              border: "1px solid rgba(0,0,0,0.06)",
              whiteSpace: "nowrap",
            }}
          >
            {hovered.title}
          </div>
        )}
      </div>

      <div style={{ marginTop: 12, fontSize: 13, color: "#334" }}>
        <strong>Notes</strong>
        <div style={{ marginTop: 6 }}>
          The overlay uses the same coordinate space as the original SVG (1057×720). To refine alignment, edit the `d` values in the `roads` array.
        </div>
      </div>
    </section>
  );
}
