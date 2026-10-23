import { SkillCategory } from "generated/prisma/enums";
import { ProfileSeed } from "prisma/seed/seed.types";


export const email = 'oleg.khalidov@icloud.com';

export const links: ProfileSeed['links'] = [
  { label: 'GitHub', url: 'https://github.com/brooth' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/brooth' },
  { label: 'Upwork', url: 'https://upwork.com/freelancers/khalidovoleg' },
  { label: 'Freelancer.com', url: 'https://www.freelancer.com/u/brooth' },
  { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/2450439/oleg-k' },
];

export const skills: ProfileSeed['skills'] = [{
  category: SkillCategory.LANGUAGE,
  names: ['TypeScript', 'JavaScript', 'Dart', 'Java', 'SQL'],
}, {
  category: SkillCategory.BACKEND,
  names: ['Node.js', 'NestJS', 'GraphQL', 'REST', 'WebSockets', 'Socket.IO', 'Prisma', 'OAuth2', 'JWT'],
}, {
  category: SkillCategory.DATABASE,
  names: ['PostgreSQL', 'MongoDB', 'Firestore', 'Redis'],
}, {
  category: SkillCategory.CLOUD,
  names: [
    'AWS (ECS/Fargate, EC2, NLB, S3, CloudFront, Route 53)',
    'GCP (Cloud Run)',
    'Firebase',
    'Docker',
    'TeamCity',
    'Gradle',
    'Git',
    'Linux',
  ],
}, {
  category: SkillCategory.FRONTEND,
  names: ['React', 'Next.js', 'Vite', 'Blueprint.js', 'HTML', 'CSS/Sass', 'Tailwind CSS'],
}, {
  category: SkillCategory.MOBILE,
  names: ['Flutter', 'React Native', 'Android (Java)', 'Firebase (FCM, Crashlytics)', 'App Store / Google Play'],
}, {
  category: SkillCategory.AI,
  names: ['LLM integration (OpenAI, Anthropic, OpenRouter)', 'TensorFlow.js', 'AI-assisted development (Claude Code)'],
}, {
  category: SkillCategory.INTEGRATION,
  names: ['Stripe', 'Twilio', 'Cloudflare', 'Sign in with Apple/Google', 'Slack/WhatsApp/Telegram'],
}];