import _ from "lodash";

import { Injectable, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { EnvVars } from "app.module";
import { PrismaService } from "prisma/prisma.service";
import { Profile, ProfileLink } from "profile/profile.model";


@Injectable()
export class ProfileService {
  constructor(
    private readonly config: ConfigService<EnvVars>,
    private readonly prisma: PrismaService,
  ) { }

  async findBySlug(slug?: string): Promise<Profile> {
    if (!slug?.length)
      slug = this.config.get('DEFAULT_PROFILE_SLUG', { infer: true });

    const profile = await this.prisma.profile.findUnique({ where: { slug } });
    if (!profile)
      throw new NotFoundException(`Profile "${slug}" not found`);

    return profile;
  }

  findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany({ orderBy: { slug: 'asc' } });
  }

  async findLinksByProfileIds(profileIds: readonly string[]): Promise<ProfileLink[][]> {
    const links = await this.prisma.profileLink.findMany({
      where: { profileId: { in: [...profileIds] } },
      orderBy: { position: 'asc' },
    });
    const byProfile = _.groupBy(links, (link) => link.profileId);
    return profileIds.map((profileId) => byProfile[profileId] ?? []);
  }
}
