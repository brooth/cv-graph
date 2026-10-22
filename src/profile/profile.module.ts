import { Global, Module } from "@nestjs/common";

import { ProfileResolver } from "profile/profile.resolver";
import { ProfileService } from "profile/profile.service";


@Global()
@Module({
  providers: [ProfileResolver, ProfileService],
  exports: [ProfileService],
})
export class ProfileModule { }
