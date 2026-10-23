import { Experience } from "profile/experience/experience.model";
import { ProfileLink } from "profile/profile.model";
import { Project } from "profile/project/project.model";
import { Skill } from "profile/skill/skill.model";


import type DataLoader from 'dataloader';


export interface GraphQlLoaders {
  links: DataLoader<string, ProfileLink[]>;
  skills: DataLoader<string, Skill[]>;
  experience: DataLoader<string, Experience[]>;
  projects: DataLoader<string, Project[]>;
}

export interface GraphqlContext {
  loaders: GraphQlLoaders;
}