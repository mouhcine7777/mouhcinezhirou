import { ImageResponse } from "next/og";

export const alt =
  "Mouhcine Zhirou — Développeur Web Full Stack Freelance au Maroc";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated at build time — gives every social share (WhatsApp, LinkedIn,
// Facebook, X) a clean branded card instead of a broken/blank preview.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F2F0EB",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              border: "3px solid rgba(0,0,0,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
              color: "rgba(0,0,0,0.8)",
              letterSpacing: 2,
            }}
          >
            MZ
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.45)",
            }}
          >
            Freelance · Depuis 2019
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: "#000",
              lineHeight: 1,
              letterSpacing: -3,
            }}
          >
            Mouhcine Zhirou
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 44,
              fontWeight: 700,
              color: "#000",
            }}
          >
            <span
              style={{
                background: "#e8ff47",
                padding: "6px 18px",
                transform: "rotate(-1deg)",
              }}
            >
              Développeur Web Full Stack
            </span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              color: "rgba(0,0,0,0.55)",
            }}
          >
            Création de sites web & applications sur mesure — Casablanca, Maroc
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 24,
            fontWeight: 600,
            color: "rgba(0,0,0,0.4)",
          }}
        >
          <span>React</span>
          <span>·</span>
          <span>Next.js</span>
          <span>·</span>
          <span>Node.js</span>
          <span>·</span>
          <span>www.mouhcinezhirou.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
