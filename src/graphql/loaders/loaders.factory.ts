import { Injectable } from "@nestjs/common";
import DataLoader from "dataloader";

import { Experience } from "profile/experience/experience.model";
import { ExperienceService } from "profile/experience/experience.service";
import { ProfileLink } from "profile/profile.model";
import { ProfileService } from "profile/profile.service";
import { Project } from "profile/project/project.model";
import { ProjectsService } from "profile/project/project.service";
import { Skill } from "profile/skill/skill.model";
import { SkillsService } from "profile/skill/skill.service";


import type { GraphQlLoaders } from './loaders.types';


@Injectable()
export class GraphQlLoadersFactory {
  constructor(
    private readonly profileService: ProfileService,
    private readonly skillsService: SkillsService,
    private readonly experienceService: ExperienceService,
    private readonly projectsService: ProjectsService,
  ) { }

  create(): GraphQlLoaders {
    return {
      links: new DataLoader<string, ProfileLink[]>((ids) => this.profileService.findLinksByProfileIds(ids)),
      skills: new DataLoader<string, Skill[]>((ids) => this.skillsService.findByProfileIds(ids)),
      experience: new DataLoader<string, Experience[]>((ids) => this.experienceService.findByProfileIds(ids)),
      projects: new DataLoader<string, Project[]>((ids) => this.projectsService.findByProfileIds(ids)),
    };
  }
}