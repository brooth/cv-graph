
import {
	Injectable, Logger, OnModuleDestroy, OnModuleInit
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaPg } from "@prisma/adapter-pg";

import { EnvVars } from "app.module";
import { PrismaClient } from "generated/prisma/client";


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(config: ConfigService<EnvVars, true>) {
    super({
      adapter: new PrismaPg({
        connectionString: config.get('DATABASE_URL', { infer: true }),
      }),
    });
  }

  async onModuleInit() {
    Logger.debug("Connecting to the DB...", PrismaService.name);
    await this.$connect();
    Logger.debug("Connected to the DB!", PrismaService.name);
  }


  async onModuleDestroy() {
    Logger.debug("Disconnecting from the DB...", PrismaService.name);
    await this.$disconnect();
    Logger.debug("Disconnected from the DB!", PrismaService.name);
  }
}
