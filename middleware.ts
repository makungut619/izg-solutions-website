import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const appEnv = process.env.APP_ENV || "local";

  // Only gate the test/preview environment
  if (appEnv !== "test") {
    return NextResponse.next();
  }

  // Skip the gate page itself and its API route
  const { pathname } = request.nextUrl;
  if (pathname === "/gate" || pathname === "/api/gate") {
    return NextResponse.next();
  }

  // Skip static assets and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|woff|woff2)$/)
  ) {
    return NextResponse.next();
  }

  // Check for valid access cookie
  const accessCookie = request.cookies.get("preview_access");
  if (accessCookie?.value === "granted") {
    return NextResponse.next();
  }

  // Redirect to gate with the intended destination
  const gateUrl = new URL("/gate", request.url);
  gateUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(gateUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
