import { Args, Query, Resolver } from "@nestjs/graphql";

import { Profile, ProfileArgs } from "profile/profile.model";

import { ProfileService } from "./profile.service";


@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private readonly profileService: ProfileService,
  ) { }

  @Query(() => Profile)
  profile(@Args() { slug }: ProfileArgs): Promise<Profile> {
    return this.profileService.findBySlug(slug);
  }

  @Query(() => [Profile])
  profiles(): Promise<Profile[]> {
    return this.profileService.findAll();
  }
}