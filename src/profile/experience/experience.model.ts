import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Experience {
  @Field(() => ID)
  id!: string;

  @Field()
  company!: string;

  @Field()
  title!: string;

  @Field(() => String, { nullable: true })
  location!: string | null;

  @Field()
  startDate!: Date;

  @Field(() => Date, { nullable: true })
  endDate!: Date | null;

  @Field(() => [String])
  bulletpoints!: string[];

  @Field(() => [String])
  stack!: string[];
}