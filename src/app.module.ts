import { z } from "zod";

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { PrismaModule } from "prisma/prisma.module";


const envVarsSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  PORT: z.coerce.number().int().positive(),
  DATABASE_URL: z.string().toLowerCase().startsWith('postgresql://'),
});

export type EnvVars = z.infer<typeof envVarsSchema>;

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: envVarsSchema.parse }),
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
