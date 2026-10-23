import _ from "lodash";

import { Injectable } from "@nestjs/common";

import { PrismaService } from "prisma/prisma.service";
import { Skill } from "profile/skill/skill.model";


@Injectable()
export class SkillsService {
  constructor(private readonly prisma: PrismaService) { }

  async findByProfileIds(profileIds: readonly string[]): Promise<Skill[][]> {
    const skills = await this.prisma.skill.findMany({
      where: { profileId: { in: [...profileIds] } },
      orderBy: { position: 'asc' },
    })
    const byProfile = _.groupBy(skills, (skill) => skill.profileId);
    return profileIds.map((profileId) => byProfile[profileId] ?? []);
  }
}