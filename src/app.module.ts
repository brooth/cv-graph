import { join } from "path";
import { z } from "zod";

import {
	ApolloServerPluginLandingPageLocalDefault
} from "@apollo/server/plugin/landingPage/default";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

import { GraphQlModule } from "graphql/graphql.module";
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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
      playground: false,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
