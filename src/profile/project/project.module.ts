import { Module } from "@nestjs/common";

import { ProjectsService } from "profile/project/project.service";


@Module({
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {
}