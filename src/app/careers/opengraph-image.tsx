import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Join Sri Supraja Infracon as a Channel Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#06142b",
          color: "white",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "58%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px 54px 48px 64px",
            background:
              "linear-gradient(135deg, #06142b 0%, #0a1d3b 72%, #10294f 100%)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 800 }}>Sri Supraja Infracon</div>
            <div
              style={{
                marginTop: 8,
                fontSize: 16,
                letterSpacing: 4,
                color: "#f0a62b",
                textTransform: "uppercase",
              }}
            >
              Builders & Developers
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                width: 92,
                height: 5,
                marginBottom: 24,
                background: "#f0a62b",
              }}
            />
            <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.03 }}>
              Join as a
            </div>
            <div
              style={{
                marginTop: 6,
                fontSize: 70,
                fontWeight: 800,
                lineHeight: 1.02,
                color: "#f0a62b",
              }}
            >
              Channel Partner
            </div>
            <div
              style={{
                marginTop: 24,
                maxWidth: 570,
                fontSize: 25,
                lineHeight: 1.45,
                color: "#dbe4f0",
              }}
            >
              Work with our team, understand the projects and connect genuine buyers with suitable real estate opportunities.
            </div>
          </div>

          <div style={{ display: "flex", gap: 14, fontSize: 18, color: "#f5f7fa" }}>
            <div style={{ display: "flex" }}>Trusted Projects</div>
            <div style={{ color: "#f0a62b" }}>•</div>
            <div style={{ display: "flex" }}>Sales Support</div>
            <div style={{ color: "#f0a62b" }}>•</div>
            <div style={{ display: "flex" }}>Growth Opportunities</div>
          </div>
        </div>

        <div
          style={{
            width: "42%",
            height: "100%",
            display: "flex",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
  style={{
    position: "absolute",
    inset: 0,
    display: "flex",
    background:
      "radial-gradient(circle at 72% 28%, rgba(240,166,43,0.42) 0%, rgba(240,166,43,0.08) 26%, transparent 48%), linear-gradient(145deg, #10294f 0%, #0b1d38 52%, #06142b 100%)",
  }}
/>

<div
  style={{
    position: "absolute",
    width: 280,
    height: 280,
    right: -70,
    top: -50,
    borderRadius: "50%",
    border: "2px solid rgba(240,166,43,0.25)",
    display: "flex",
  }}
/>

<div
  style={{
    position: "absolute",
    width: 190,
    height: 190,
    right: 55,
    top: 115,
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.12)",
    display: "flex",
  }}
/>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background:
                "linear-gradient(90deg, rgba(6,20,43,0.84) 0%, rgba(6,20,43,0.18) 48%, rgba(6,20,43,0.04) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 34,
              bottom: 34,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "11px 18px",
                borderRadius: 999,
                background: "rgba(6,20,43,0.88)",
                border: "1px solid rgba(255,255,255,0.24)",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              Hyderabad & Telangana
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
