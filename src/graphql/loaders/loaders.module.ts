import { Module } from "@nestjs/common";

import { ExperienceModule } from "profile/experience/experience.module";
import { ProfileModule } from "profile/profile.module";
import { ProjectsModule } from "profile/project/project.module";
import { SkillsModule } from "profile/skill/skill.module";

import { GraphQlLoadersFactory } from "./loaders.factory";


@Module({
  imports: [
    ProfileModule,
    SkillsModule,
    ExperienceModule,
    ProjectsModule,
  ],
  providers: [GraphQlLoadersFactory],
  exports: [GraphQlLoadersFactory],
})
export class GraphQlLoadersModule { }