import _ from "lodash";

import { Injectable } from "@nestjs/common";

import { Project } from "prisma/generated/client";
import { PrismaService } from "prisma/prisma.service";


@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) { }

  async findByProfileIds(profileIds: readonly string[]): Promise<Project[][]> {
    const projects = await this.prisma.project.findMany({
      where: { profileId: { in: [...profileIds] } },
      orderBy: { position: 'asc' },
    });
    const byProfile = _.groupBy(projects, (project) => project.profileId);
    return profileIds.map((profileId) => byProfile[profileId] ?? []);
  }
}