import { ArgsType, Field, ID, ObjectType } from "@nestjs/graphql";

import { Locale } from "prisma/generated/enums";


@ObjectType()
export class Profile {
  @Field(() => ID)
  id!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;

  @Field(() => Locale)
  locale!: Locale;

  @Field()
  slug!: string;

  @Field()
  name!: string;

  @Field()
  headline!: string;

  @Field()
  summary!: string;
}

@ArgsType()
export class ProfileArgs {
  @Field({ nullable: true, description: 'Profile slug, e.g. oleg-khalidov-ru. oleg-khalidov-en is used by default' })
  slug?: string;
}