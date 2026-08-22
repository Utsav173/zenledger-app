import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Temporal — Local-first finance with on-device AI";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: 80,
          border: "6px solid #ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: 8,
            color: "#888888",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              backgroundColor: "#10b981",
              display: "flex",
            }}
          />
          TEMPORAL
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            Financial intelligence.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontStyle: "italic",
              color: "#10b981",
              lineHeight: 1.05,
            }}
          >
            On-device.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            letterSpacing: 4,
            color: "#888888",
          }}
        >
          <div style={{ display: "flex" }}>
            LOCAL-FIRST LEDGER — OFFLINE AI — ZERO CLOUD
          </div>
          <div style={{ display: "flex", color: "#ffffff" }}>
            temporal.khatriutsav.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
