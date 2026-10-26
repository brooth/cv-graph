import { Module } from "@nestjs/common";

import { ProfileModule } from "profile/profile.module";

import { GraphQlLoadersFactory } from "./loaders.factory";


@Module({
  imports: [ProfileModule],
  providers: [GraphQlLoadersFactory],
  exports: [GraphQlLoadersFactory],
})
export class GraphQlLoadersModule { }