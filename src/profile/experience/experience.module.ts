import { Module } from "@nestjs/common";

import { ExperienceService } from "profile/experience/experience.service";


@Module({
  providers: [ExperienceService],
  exports: [ExperienceService],
})
export class ExperienceModule {
}