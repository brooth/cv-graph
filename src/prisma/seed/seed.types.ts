import type { Locale } from '../generated/enums';

export interface ProfileSeed {
  locale: Locale;
  slug: string;
  name: string;
  headline: string;
  summary: string;
}