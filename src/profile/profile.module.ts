import { Global, Module } from "@nestjs/common";

import { ExperienceModule } from "./experience/experience.module";
import { ProfileResolver } from "./profile.resolver";
import { ProfileService } from "./profile.service";
import { ProjectsModule } from "./project/project.module";
import { SkillsModule } from "./skill/skill.module";


@Global()
@Module({
  imports: [
    SkillsModule,
    ExperienceModule,
    ProjectsModule,
  ],
  providers: [
    ProfileResolver,
    ProfileService,
  ],
  exports: [
    ProfileService,
    SkillsModule,
    ExperienceModule,
    ProjectsModule,
  ],
})
export class ProfileModule { }
