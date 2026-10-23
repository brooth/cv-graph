import { join } from "path";
import { z } from "zod";

import {
	ApolloServerPluginLandingPageLocalDefault
} from "@apollo/server/plugin/landingPage/default";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

import { GraphQlModule } from "graphql/graphql.module";
import { GraphQlLoadersFactory } from "graphql/loaders/loaders.factory";
import { GraphQlLoadersModule } from "graphql/loaders/loaders.module";
import { GraphqlContext } from "graphql/loaders/loaders.types";
import { PrismaModule } from "prisma/prisma.module";
import { ProfileModule } from "profile/profile.module";


const envVarsSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  PORT: z.coerce.number().int().positive(),
  DATABASE_URL: z.string().toLowerCase().startsWith('postgresql://'),
  DEFAULT_PROFILE_SLUG: z.string().nonempty(),
});

export type EnvVars = z.infer<typeof envVarsSchema>;

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: envVarsSchema.parse }),
    PrismaModule,
    GraphQlModule,
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
        context: (): GraphqlContext => ({ loaders: loaders.create() }),
      }),
    }),
    ProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
