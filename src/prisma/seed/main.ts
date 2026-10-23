import { Logger } from "@nestjs/common";
import { PrismaPg } from "@prisma/adapter-pg";

import { Prisma, PrismaClient } from "prisma/generated/client";
import { ProfileSeed } from "prisma/seed/seed.types";

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
        await tx.profile.create({ data: toProfileCreateInput(profile) });
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

function toProfileCreateInput({ links, skills, experiences, projects, ...profile }: ProfileSeed): Prisma.ProfileCreateInput {
  return {
    ...profile,
    links: {
      create: links.map((link, position) => ({ ...link, position })),
    },
    skills: {
      create: skills
        .flatMap(({ category, names }) => names.map((name) => ({ name, category })))
        .map((skill, position) => ({ ...skill, position })),
    },
    experiences: {
      create: experiences.map(({ startDate, endDate, ...experience }) => ({
        ...experience,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
      })),
    },
    projects: {
      create: projects.map((project, position) => ({ ...project, position })),
    },
  };
}