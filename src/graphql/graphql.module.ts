import { join } from "path";

import {
	ApolloServerPluginLandingPageLocalDefault
} from "@apollo/server/plugin/landingPage/default";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { GraphQLModule, registerEnumType } from "@nestjs/graphql";

import { EnvVars } from "app.module";
import { Locale } from "generated/prisma/enums";
import { GraphQlContext } from "graphql/graphql.types";
import { GraphQlLoadersFactory } from "graphql/loaders/loaders.factory";
import { GraphQlLoadersModule } from "graphql/loaders/loaders.module";


registerEnumType(Locale, { name: 'Locale' });

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [GraphQlLoadersModule],
      inject: [GraphQlLoadersFactory, ConfigService],
      useFactory: (loaders: GraphQlLoadersFactory, config: ConfigService<EnvVars, true>) => ({
        autoSchemaFile: config.get('NODE_ENV', { infer: true }) === 'production' ? true : join(process.cwd(), 'schema.gql'),
        sortSchema: true,
        playground: false,
        introspection: true,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        context: (): GraphQlContext => ({ loaders: loaders.create() }),
      }),
    }),
    GraphQlLoadersModule,
  ],
  exports: [GraphQlLoadersModule],
})
export class GraphQlModule {
}