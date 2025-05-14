import { PrismaClient } from "../generated/prisma";
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Only in development, we attach our client to the global object
// This prevents re-creating Prisma on hot reload in dev environments
// Development (Hot Reloads → Memory Leaks)
// In production, we don’t attach anything to globalThis to keep things clean
// Large backends (lots of unnecessary pools = DB crashes)