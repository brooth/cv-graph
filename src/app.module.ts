import { z } from 'zod';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

const envVarsSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  PORT: z.coerce.number().int().positive(),
});

export type EnvVars = z.infer<typeof envVarsSchema>;

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: envVarsSchema.parse }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
