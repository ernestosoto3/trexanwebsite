// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Reads credentials from environment variables in .env.local
// Add these lines to your .env.local (or .env.production):
// STUDIO_USER=admin
// STUDIO_PASS=super-strong-password

export function proxy(req: NextRequest) {
  // Only run in production and only for the /studio path
  if (
    process.env.NODE_ENV === "production" &&
    req.nextUrl.pathname.startsWith("/studio")
  ) {
    const auth = req.headers.get("authorization");
    const user = process.env.STUDIO_USER;
    const pass = process.env.STUDIO_PASS;

    // If missing credentials, prompt for them
    if (!auth || !user || !pass) {
      return new NextResponse("Authentication required", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
      });
    }

    // Decode the Authorization header
    const [scheme, encoded] = auth.split(" ");
    if (scheme !== "Basic") {
      return new NextResponse("Invalid authorization format", { status: 400 });
    }

    const decoded = Buffer.from(encoded, "base64").toString();
    const [reqUser, reqPass] = decoded.split(":");

    // If credentials don't match, block access
    if (reqUser !== user || reqPass !== pass) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  }

  // Allow the request if everything is fine
  return NextResponse.next();
}

// Limit this middleware to /studio routes only
export const config = {
  matcher: ["/studio/:path*"],
};
