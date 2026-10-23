import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Project {
  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field(() => String, { nullable: true })
  url!: string | null;

  @Field(() => String, { nullable: true })
  repositoryUrl!: string | null;

  @Field(() => [String])
  stack!: string[];
}