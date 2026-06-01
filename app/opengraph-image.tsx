import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "IZG Solutions - Your Business, Always On";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0c4a6e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.izgsolutions.co.za/bulldog-logo.png"
          alt="IZG Solutions Logo"
          width="180"
          height="180"
          style={{ borderRadius: "50%" }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              fontSize: "52px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "16px",
            }}
          >
            IZG Solutions
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#94a3b8",
              textAlign: "center",
            }}
          >
            Your business, always on.
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#64748b",
              marginTop: "16px",
              textAlign: "center",
            }}
          >
            Professional websites &amp; WhatsApp chatbots for growing businesses
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
