import { Module, OnModuleInit } from "@nestjs/common";
import { registerEnumType } from "@nestjs/graphql";

import { SkillCategory } from "generated/prisma/enums";
import { SkillsService } from "profile/skill/skill.service";


@Module({
  providers: [SkillsService],
  exports: [SkillsService],
})
export class SkillsModule implements OnModuleInit {
  onModuleInit() {
    registerEnumType(SkillCategory, { name: 'SkillCategory' });
  }
}