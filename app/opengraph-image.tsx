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
        {/* Bulldog face simplified */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M8 30C8 18 18 9 32 9C46 9 56 18 56 30V36C56 48 46 54 32 54C18 54 8 48 8 36V30Z"
            fill="#1e293b"
            stroke="#334155"
            strokeWidth="1"
          />
          <path d="M12 26L6 10L20 18Z" fill="#1e293b" />
          <path d="M52 26L58 10L44 18Z" fill="#1e293b" />
          <ellipse cx="24" cy="28" rx="4.5" ry="3.5" fill="#fbbf24" />
          <ellipse cx="24" cy="28" rx="2.5" ry="3" fill="#0f172a" />
          <ellipse cx="40" cy="28" rx="4.5" ry="3.5" fill="#fbbf24" />
          <ellipse cx="40" cy="28" rx="2.5" ry="3" fill="#0f172a" />
          <path
            d="M26 35C26 33 28 31 32 31C36 31 38 33 38 35C38 37 36 39 32 39C28 39 26 37 26 35Z"
            fill="#0f172a"
          />
          <path
            d="M16 50C16 50 24 55 32 55C40 55 48 50 48 50"
            stroke="#0c93e7"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="32" cy="59" r="3.5" fill="#0c93e7" />
        </svg>

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
