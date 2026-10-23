import { Module, OnModuleInit } from "@nestjs/common";
import { registerEnumType } from "@nestjs/graphql";

import { GraphQlLoadersModule } from "graphql/loaders/loaders.module";
import { Locale } from "generated/prisma/enums";


@Module({
  imports: [GraphQlLoadersModule],
  exports: [GraphQlLoadersModule],
})
export class GraphQlModule implements OnModuleInit {
  onModuleInit() {
    registerEnumType(Locale, { name: 'Locale' });
  }
}