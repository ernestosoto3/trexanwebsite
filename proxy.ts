// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Protects Prisma Studio in production
// Add to .env.local: STUDIO_USER=admin, STUDIO_PASS=your-password

export function proxy(req: NextRequest) {  // ← Changed from "middleware"
  const { pathname } = req.nextUrl;

  // Only protect /studio in production
  if (
    process.env.NODE_ENV === "production" &&
    pathname.startsWith("/studio")
  ) {
    const auth = req.headers.get("authorization");
    const user = process.env.STUDIO_USER;
    const pass = process.env.STUDIO_PASS;

    if (!auth || !user || !pass) {
      return new NextResponse("Authentication required", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
      });
    }

    const [scheme, encoded] = auth.split(" ");

    if (scheme !== "Basic" || !encoded) {
      return new NextResponse("Invalid authorization format", { status: 400 });
    }

    const decoded = Buffer.from(encoded, "base64").toString();
    const [reqUser, reqPass] = decoded.split(":");

    if (reqUser !== user || reqPass !== pass) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*"],
};