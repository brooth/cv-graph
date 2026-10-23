import _ from "lodash";

import { Injectable } from "@nestjs/common";

import { Experience } from "profile/experience/experience.model";
import { PrismaService } from "prisma/prisma.service";


@Injectable()
export class ExperienceService {
  constructor(private readonly prisma: PrismaService) { }

  async findByProfileIds(profileIds: readonly string[]): Promise<Experience[][]> {
    const experiences = await this.prisma.experience.findMany({
      where: { profileId: { in: [...profileIds] } },
      orderBy: { startDate: 'desc' },
    });
    const byProfile = _.groupBy(experiences, (experience) => experience.profileId);
    return profileIds.map((profileId) => byProfile[profileId] ?? []);
  }
}