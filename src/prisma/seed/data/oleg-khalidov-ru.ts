import { Locale } from "prisma/generated/enums";

import { email, links, skills } from "./oleg-khalidov-shared";


import type { ProfileSeed } from '../seed.types';


export const olegKhalidovRu: ProfileSeed = {
  slug: 'oleg-khalidov-ru',
  locale: Locale.RU,
  name: 'Олег Халидов',
  headline: 'Senior Full-Stack разработчик · Node.js, TypeScript, React, Flutter',
  summary: '14 лет на уровне Senior: мобильная, веб- и бэкенд-разработка. 9 лет как независимый подрядчик, 100% Job Success на Upwork и Freelancer.com. Сейчас развиваюсь в сторону архитектуры решений и облачной инженерии, готовлюсь к сертификации AWS Certified Solutions Architect – Associate.',
  location: 'Таиланд · удалённо',
  email,
  links,
  skills,
  experiences: [
    {
      company: 'Search7',
      title: 'Senior Full-Stack разработчик',
      location: 'Австралия · удалённо, контракт',
      startDate: '2022-01-01',
      endDate: '2026-01-01',
      bulletpoints: [
        'Перенял бэкенд у второго разработчика и перешёл на сольную full-stack роль; за четыре года выпустил три продукта от начала до конца — быстрее и дешевле, чем в исходной схеме с двумя разработчиками.',
        'Macani: геолокационная платформа с ETA в реальном времени, отслеживанием участников, временным доступом к геопозиции, метками мест и уведомлениями о геозонах.',
        'GeoBubble: платформа клиентского сервиса для бизнеса: приложения для клиентов и сотрудников, чат в реальном времени, бронирование, GPS-отметки и перевод.',
        'Curbside Pickup: платформа заказов и самовывоза с определением прибытия по геозонам, платежами и аналитикой; интегрировал OpenAI API для разбора меню в товарные позиции.',
        'С нуля настроил AWS: Docker на ECR/ECS за Network Load Balancer, S3 с CloudFront, ACM и Route 53, всё внутри VPC.',
      ],
      stack: ['Flutter', 'Node.js', 'NestJS', 'TypeScript', 'React', 'Redux', 'MongoDB Atlas', 'AWS', 'Docker', 'Stripe'],
    },
    {
      company: 'Фриланс (Upwork, Freelancer.com)',
      title: 'Senior Full-Stack разработчик',
      location: null,
      startDate: '2017-01-01',
      endDate: '2022-01-01',
      bulletpoints: [
        'Выполнил 20+ проектов: заработано $100K+, 3 500+ оплаченных часов, 100% Job Success; на Upwork вырос от Rising Talent до Top Rated.',
        'Elegance: один из двух мобильных разработчиков на 23 этапах; за один и тот же период выполнил 18, второй разработчик — 5.',
        'Home-Time: выиграл проект, несмотря на негативный опыт клиента с предыдущим разработчиком, и сдал переработанное приложение с оценкой 5 звёзд.',
        'Patient10x: HIPAA-совместимая платформа маркетинга для врачей (Reviews, Forms, Analytics): CMS, мобильное приложение и бэкенд.',
      ],
      stack: ['Node.js', 'React', 'Next.js', 'Redux', 'Firebase', 'Flutter', 'React Native', 'AWS'],
    },
    {
      company: 'Haulmont',
      title: 'Lead Android-разработчик',
      location: 'Самара',
      startDate: '2013-01-01',
      endDate: '2017-01-01',
      bulletpoints: [
        'Руководил Android-разработкой платформы автоматизации таксопарков: архитектура, разработка, автотесты, рефакторинг, код-ревью и собеседования.',
        'Настроил непрерывную интеграцию на TeamCity, интеграционные тесты и кодогенерацию.',
      ],
      stack: ['Java', 'Android', 'Android Maps API', 'Google Play Services', 'Firebase', 'TeamCity', 'Gradle'],
    },
    {
      company: 'Haulmont',
      title: 'Senior Java-разработчик',
      location: 'Самара',
      startDate: '2012-01-01',
      endDate: '2013-01-01',
      bulletpoints: [
        'Разрабатывал серверную часть платформы автоматизации таксопарков на собственном Java-фреймворке компании — CUBA Platform.',
      ],
      stack: ['Java', 'CUBA Platform', 'PostgreSQL', 'TeamCity', 'Gradle'],
    },
    {
      company: 'sklad.com',
      title: 'Middle Java-разработчик',
      location: 'Алматы',
      startDate: '2010-01-01',
      endDate: '2012-01-01',
      bulletpoints: ['Разрабатывал B2B/B2C-платформу.'],
      stack: ['Java', 'GWT', 'Wicket', 'Hibernate', 'PostgreSQL', 'Tomcat', 'SVN', 'Jira'],
    },
    {
      company: 'UPITER',
      title: 'Middle Java-разработчик',
      location: 'Алматы',
      startDate: '2009-01-01',
      endDate: '2010-01-01',
      bulletpoints: [],
      stack: ['Java', 'J2EE', 'Spring', 'Hibernate', 'MySQL', 'Eclipse Plug-in Development'],
    },
    {
      company: 'Asia-Soft',
      title: 'Junior Java-разработчик',
      location: 'Алматы',
      startDate: '2006-01-01',
      endDate: '2009-01-01',
      bulletpoints: [],
      stack: ['Java', 'Oracle Portal', 'Oracle DB', 'BPEL', 'ESB', 'BPM', 'Tomcat', 'Jetspeed', 'Maven', 'Ant'],
    },
    {
      company: 'Bimash',
      title: 'Junior Java-разработчик',
      location: 'Алматы',
      startDate: '2004-01-01',
      endDate: '2006-01-01',
      bulletpoints: [],
      stack: ['Java', 'SQL', 'HTML', 'JavaScript', 'C#', 'XML/XSLT', 'IBM DB2', 'WebSphere Studio'],
    },
  ],
  projects: [
    {
      name: 'CV Graph API',
      description: 'Этот API: GraphQL-резюме с английской и русской версиями и батчингом вложенных запросов.',
      url: null,
      repositoryUrl: 'https://github.com/brooth/cv-graph-test-task',
      stack: ['NestJS', 'GraphQL', 'Prisma', 'PostgreSQL', 'DataLoader', 'Docker'],
    },
    {
      name: 'Macani',
      description: 'Геолокационная платформа с ETA в реальном времени, отслеживанием участников и геозонами.',
      url: 'https://macani.io',
      repositoryUrl: null,
      stack: ['Flutter', 'Node.js', 'NestJS', 'MongoDB', 'AWS'],
    },
    {
      name: 'GeoBubble',
      description: 'Геолокационная платформа клиентского сервиса: чат, бронирование и GPS-отметки.',
      url: 'https://geobubble.io',
      repositoryUrl: null,
      stack: ['Flutter', 'Node.js', 'NestJS', 'React', 'MongoDB', 'AWS'],
    },
    {
      name: 'Curbside Pickup',
      description: 'Онлайн-заказы и самовывоз для ресторанов и ритейла с определением прибытия по геозонам.',
      url: 'https://curbsidepickup.io',
      repositoryUrl: null,
      stack: ['Flutter', 'Node.js', 'NestJS', 'React', 'Stripe', 'OpenAI API'],
    },
    {
      name: 'AnyAsk',
      description: 'Агрегатор ИИ-моделей: веб-платформа и Telegram-бот с моделью-маршрутизатором.',
      url: 'https://anyask.ru',
      repositoryUrl: null,
      stack: ['React', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Firebase', 'GCP', 'OpenRouter'],
    },
    {
      name: 'Figs',
      description: 'ИИ-ассистент по ценообразованию для продавцов маркетплейсов, обученный на синтетических данных.',
      url: null,
      repositoryUrl: null,
      stack: ['Node.js', 'NestJS', 'TypeScript', 'TensorFlow.js', 'Telegram'],
    },
  ],
};