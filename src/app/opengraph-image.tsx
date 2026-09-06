import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.title} — Building Systems That Scale`;

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#15130f",
          color: "#f3efe6",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a29a86",
          }}
        >
          <span>{site.name}</span>
          <span>Folio No. 01</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 104,
            fontWeight: 800,
            lineHeight: 0.98,
            letterSpacing: -3,
            textTransform: "uppercase",
          }}
        >
          <span>Building</span>
          <span>
            Systems That <span style={{ color: "#c22a1e" }}>Scale.</span>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#a29a86",
          }}
        >
          <span>{site.role}</span>
          <span>Python / FastAPI / PostgreSQL</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
