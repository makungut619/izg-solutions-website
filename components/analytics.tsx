"use client";

import Script from "next/script";

export function Analytics() {
  const token = process.env.NEXT_PUBLIC_ANALYTICS_TOKEN;
  const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_URL;
  const flush = process.env.NEXT_PUBLIC_ANALYTICS_FLUSH_MS || "5000";

  if (!token || !endpoint) return null;

  return (
    <Script
      src={`${endpoint.replace("/api/events/ingest", "")}/script.js`}
      data-token={token}
      data-endpoint={endpoint}
      data-flush={flush}
      strategy="afterInteractive"
    />
  );
}
