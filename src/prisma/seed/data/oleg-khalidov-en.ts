import { Locale } from "generated/prisma/enums";

import { email, links, skills } from "./oleg-khalidov-shared";


import type { ProfileSeed } from '../seed.types';


export const olegKhalidovEn: ProfileSeed = {
  slug: 'oleg-khalidov-en',
  locale: Locale.EN,
  name: 'Oleg Khalidov',
  headline: 'Senior Full-Stack Software Engineer · Node.js, TypeScript, React, Flutter',
  summary: '14 years at senior level across mobile, web and backend. 9 years as an independent contractor with 100% Job Success on Upwork and Freelancer.com. Currently focusing on solution architecture and cloud engineering, preparing for AWS Certified Solutions Architect – Associate.',
  location: 'Thailand · Remote',
  email,
  links,
  skills,
  experiences: [
    {
      company: 'Search7',
      title: 'Senior Full-Stack Developer',
      location: 'Australia · Remote, contract',
      startDate: '2022-01-01',
      endDate: '2026-01-01',
      bulletpoints: [
        'Took over the backend from a second developer and consolidated into a solo full-stack role; delivered three products end-to-end over four years, faster and cheaper than the original two-person setup.',
        'Macani: geolocation platform with live ETAs, real-time participant tracking, time-limited location sharing, location tags and geofence alerts.',
        'GeoBubble: location-aware customer service platform with consumer and staff apps, real-time chat, booking, GPS check-in/out and translation.',
        'Curbside Pickup: ordering and pickup platform with geofence-based arrival detection, payments and analytics; integrated the OpenAI API to turn scanned menus into product listings.',
        'Set up AWS from scratch: Docker on ECR/ECS behind a Network Load Balancer, S3 with CloudFront, ACM and Route 53, all within a VPC.',
      ],
      stack: ['Flutter', 'Node.js', 'NestJS', 'TypeScript', 'React', 'Redux', 'MongoDB Atlas', 'AWS', 'Docker', 'Stripe'],
    },
    {
      company: 'Freelance (Upwork, Freelancer.com)',
      title: 'Senior Full-Stack Developer',
      location: null,
      startDate: '2017-01-01',
      endDate: '2022-01-01',
      bulletpoints: [
        'Completed 20+ projects: $100K+ earned, 3,500+ hours billed, 100% Job Success; progressed from Rising Talent to Top Rated on Upwork.',
        'Elegance: one of two mobile developers splitting 23 milestones; completed 18 of them versus 5 by the other developer in the same period.',
        'Home-Time: won the project despite the client being burned by a previous developer and delivered a rebuild rated five stars.',
        'Patient10x: HIPAA-compliant healthcare marketing platform (Reviews, Forms, Analytics): CMS, mobile app and backend.',
      ],
      stack: ['Node.js', 'React', 'Next.js', 'Redux', 'Firebase', 'Flutter', 'React Native', 'AWS'],
    },
    {
      company: 'Haulmont',
      title: 'Lead Android Developer',
      location: 'Samara',
      startDate: '2013-01-01',
      endDate: '2017-01-01',
      bulletpoints: [
        'Led Android development of a taxi fleet automation platform: architecture, development, automated testing, refactoring, code review and interviewing.',
        'Set up continuous integration with TeamCity, integration tests and code generation.',
      ],
      stack: ['Java', 'Android', 'Android Maps API', 'Google Play Services', 'Firebase', 'TeamCity', 'Gradle'],
    },
    {
      company: 'Haulmont',
      title: 'Senior Java Developer',
      location: 'Samara',
      startDate: '2012-01-01',
      endDate: '2013-01-01',
      bulletpoints: [
        'Developed the backend of a taxi fleet automation platform on the company’s own Java framework, CUBA Platform.',
      ],
      stack: ['Java', 'CUBA Platform', 'PostgreSQL', 'TeamCity', 'Gradle'],
    },
    {
      company: 'sklad.com',
      title: 'Middle Java Developer',
      location: 'Almaty',
      startDate: '2010-01-01',
      endDate: '2012-01-01',
      bulletpoints: ['Developed a B2B/B2C platform.'],
      stack: ['Java', 'GWT', 'Wicket', 'Hibernate', 'PostgreSQL', 'Tomcat', 'SVN', 'Jira'],
    },
    {
      company: 'UPITER',
      title: 'Middle Java Developer',
      location: 'Almaty',
      startDate: '2009-01-01',
      endDate: '2010-01-01',
      bulletpoints: [],
      stack: ['Java', 'J2EE', 'Spring', 'Hibernate', 'MySQL', 'Eclipse Plug-in Development'],
    },
    {
      company: 'Asia-Soft',
      title: 'Junior Java Developer',
      location: 'Almaty',
      startDate: '2006-01-01',
      endDate: '2009-01-01',
      bulletpoints: [],
      stack: ['Java', 'Oracle Portal', 'Oracle DB', 'BPEL', 'ESB', 'BPM', 'Tomcat', 'Jetspeed', 'Maven', 'Ant'],
    },
    {
      company: 'Bimash',
      title: 'Junior Java Developer',
      location: 'Almaty',
      startDate: '2004-01-01',
      endDate: '2006-01-01',
      bulletpoints: [],
      stack: ['Java', 'SQL', 'HTML', 'JavaScript', 'C#', 'XML/XSLT', 'IBM DB2', 'WebSphere Studio'],
    },
  ],
  projects: [
    {
      name: 'CV Graph API',
      description: 'This API: a GraphQL CV with English and Russian versions and batched nested queries.',
      url: null,
      repositoryUrl: 'https://github.com/brooth/cv-graph-test-task',
      stack: ['NestJS', 'GraphQL', 'Prisma', 'PostgreSQL', 'DataLoader', 'Docker'],
    },
    {
      name: 'Macani',
      description: 'Geolocation platform with live ETAs, participant tracking and geofence alerts.',
      url: 'https://macani.io',
      repositoryUrl: null,
      stack: ['Flutter', 'Node.js', 'NestJS', 'MongoDB', 'AWS'],
    },
    {
      name: 'GeoBubble',
      description: 'Location-aware customer service platform with chat, booking and GPS check-in.',
      url: 'https://geobubble.io',
      repositoryUrl: null,
      stack: ['Flutter', 'Node.js', 'NestJS', 'React', 'MongoDB', 'AWS'],
    },
    {
      name: 'Curbside Pickup',
      description: 'Online ordering and pickup for restaurants and retail with geofence arrival detection.',
      url: 'https://curbsidepickup.io',
      repositoryUrl: null,
      stack: ['Flutter', 'Node.js', 'NestJS', 'React', 'Stripe', 'OpenAI API'],
    },
    {
      name: 'AnyAsk',
      description: 'AI model aggregator: web app and Telegram bot with a router model that picks the best-fit model.',
      url: 'https://anyask.ru',
      repositoryUrl: null,
      stack: ['React', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Firebase', 'GCP', 'OpenRouter'],
    },
    {
      name: 'Figs',
      description: 'AI pricing assistant for marketplace sellers trained on synthetic market data.',
      url: null,
      repositoryUrl: null,
      stack: ['Node.js', 'NestJS', 'TypeScript', 'TensorFlow.js', 'Telegram'],
    },
  ],
};