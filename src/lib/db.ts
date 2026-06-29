import { PrismaClient } from '@prisma/client';

// Add prisma to the global type to prevent multiple instances in development
declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // In development, use a global variable to prevent multiple instances
  // from being created by hot-reloading.
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
