import { ArgsType, Field, ID, ObjectType } from "@nestjs/graphql";

import { Locale } from "generated/prisma/enums";


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
  location!: string;

  @Field()
  email!: string;

  @Field()
  slug!: string;

  @Field()
  name!: string;

  @Field()
  headline!: string;

  @Field()
  summary!: string;
}

@ObjectType()
export class ProfileLink {
  @Field()
  label!: string;

  @Field()
  url!: string;
}

@ArgsType()
export class ProfileArgs {
  @Field({ nullable: true, description: 'Profile slug, e.g. oleg-khalidov-ru. The default profile is used when omitted' })
  slug?: string;
}