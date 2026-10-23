import { Field, ObjectType } from "@nestjs/graphql";

import { SkillCategory } from "prisma/generated/enums";


@ObjectType()
export class Skill {
  @Field()
  name!: string;

  @Field(() => SkillCategory)
  category!: SkillCategory;
}