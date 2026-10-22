import { Logger } from "@nestjs/common";
import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "prisma/generated/client";

import { allProfileSeeds } from "./data";


async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString)
    throw new Error('DATABASE_URL is not set');

  const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
  try {
    await prisma.$transaction(async (tx) => {
      for (const profile of allProfileSeeds) {
        await tx.profile.deleteMany({ where: { slug: profile.slug } });
        await tx.profile.create({ data: profile });
      }
    });
    Logger.log(`Seeded profiles: ${allProfileSeeds.map((profile) => profile.slug).join(', ')}`);

  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error: unknown) => {
  Logger.error(error);
  process.exit(1);
});