import { z } from "zod";

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

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
    ProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
