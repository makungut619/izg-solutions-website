"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "This site";

function GateForm() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const destination = searchParams.get("next") || "/";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (res.ok) {
        window.location.href = destination;
      } else {
        setError("Incorrect code. Try again.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm text-center">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full border border-amber-200 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              Test Environment
            </div>
            <h1 className="text-lg font-semibold text-gray-900">
              {siteName}
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              This is a testing environment. Enter the access code to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter access code"
              required
              autoFocus
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none"
            />

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 text-white text-sm font-medium py-2 rounded-md hover:bg-gray-800 disabled:opacity-50 transition-colors"
            >
              {loading ? "Verifying..." : "Continue"}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-xs text-amber-600 font-medium">
              ⚠️ Do NOT enter real personal information on this site.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              This environment is for testing purposes only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GatePage() {
  return (
    <Suspense>
      <GateForm />
    </Suspense>
  );
}
