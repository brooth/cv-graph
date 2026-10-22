import { Module, OnModuleInit } from "@nestjs/common";
import { registerEnumType } from "@nestjs/graphql";

import { Locale } from "prisma/generated/enums";


@Module({})
export class GraphQlModule implements OnModuleInit {

  onModuleInit() {
    registerEnumType(Locale, { name: 'Locale' });
  }
}