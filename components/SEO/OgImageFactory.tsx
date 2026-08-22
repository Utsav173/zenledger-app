import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function generateOgImage(title: string, kicker = "TEMPORAL DOCS") {
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
          padding: 72,
          border: "6px solid #ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: 8,
            color: "#888888",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              backgroundColor: "#10b981",
              display: "flex",
            }}
          />
          {kicker}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 950,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            letterSpacing: 4,
            color: "#888888",
          }}
        >
          <div style={{ display: "flex" }}>OFFLINE AI — ZERO CLOUD</div>
          <div style={{ display: "flex", color: "#ffffff" }}>
            temporal.khatriutsav.com
          </div>
        </div>
      </div>
    ),
    ogImageSize
  );
}
