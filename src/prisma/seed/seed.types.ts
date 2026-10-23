import type { Locale, SkillCategory } from 'generated/prisma/enums';

export interface ProfileSeed {
  locale: Locale;
  slug: string;
  location: string;
  email: string;
  name: string;
  headline: string;
  summary: string;
  links: { label: string; url: string }[];
  skills: { category: SkillCategory; names: string[] }[];
  experiences: {
    company: string;
    title: string;
    location: string | null;
    startDate: string;
    endDate: string | null;
    bulletpoints: string[];
    stack: string[];
  }[];
  projects: {
    name: string;
    description: string;
    url: string | null;
    repositoryUrl: string | null;
    stack: string[];
  }[];
}