import {
	Args, Context, Parent, Query, ResolveField, Resolver
} from "@nestjs/graphql";

import { Experience } from "profile/experience/experience.model";
import { Profile, ProfileArgs, ProfileLink } from "profile/profile.model";
import { Project } from "profile/project/project.model";
import { Skill } from "profile/skill/skill.model";

import { ProfileService } from "./profile.service";


import type { GraphQlLoaders } from "graphql/loaders/loaders.types";


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

  @ResolveField(() => [ProfileLink])
  links(@Parent() profile: Profile, @Context('loaders') loaders: GraphQlLoaders): Promise<ProfileLink[]> {
    return loaders.links.load(profile.id);
  }

  @ResolveField(() => [Skill])
  skills(@Parent() profile: Profile, @Context('loaders') loaders: GraphQlLoaders): Promise<Skill[]> {
    return loaders.skills.load(profile.id);
  }

  @ResolveField(() => [Experience])
  experience(@Parent() profile: Profile, @Context('loaders') loaders: GraphQlLoaders): Promise<Experience[]> {
    return loaders.experience.load(profile.id);
  }

  @ResolveField(() => [Project])
  projects(@Parent() profile: Profile, @Context('loaders') loaders: GraphQlLoaders): Promise<Project[]> {
    return loaders.projects.load(profile.id);
  }
}