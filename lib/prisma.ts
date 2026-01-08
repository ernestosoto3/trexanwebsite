import { PrismaClient } from "@prisma/client";

// ============================================================================
// TYPES
// ============================================================================
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// ============================================================================
// PRISMA CLIENT CONFIGURATION
// ============================================================================

/**
 * PrismaClient is attached to the `global` object in development to prevent
 * exhausting your database connection limit.
 *
 * Learn more:
 * https://pris.ly/d/help/next-js-best-practices
 */
export const prisma =
  global.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
    errorFormat: "pretty",
  });

// ============================================================================
// PREVENT MULTIPLE INSTANCES IN DEVELOPMENT
// ============================================================================
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

// ============================================================================
// GRACEFUL SHUTDOWN
// ============================================================================

/**
 * Gracefully disconnect Prisma on app shutdown
 */
async function disconnectPrisma() {
  await prisma.$disconnect();
}

// Handle process termination
if (process.env.NODE_ENV === "production") {
  process.on("beforeExit", disconnectPrisma);
  process.on("SIGINT", disconnectPrisma);
  process.on("SIGTERM", disconnectPrisma);
}

// ============================================================================
// EXPORT
// ============================================================================
export default prisma;