import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/* ---------------- PUBLIC ROUTES ---------------- */
const PUBLIC_ROUTES = ["/", "/signup", "/forgot-password", "/verify-email"];

/* ---------------- PROXY FUNCTION ---------------- */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublic = PUBLIC_ROUTES.includes(pathname);
  const token = request.cookies.get("accessToken")?.value;

  // 🚫 Not logged in → block protected routes
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 🔁 Logged in → block login page
  if (token && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

/* ---------------- MATCHER CONFIG ---------------- */
export const config = {
  matcher: ["/", "/dashboard/:path*", "/bookings/:path*", "/users/:path*"],
};
