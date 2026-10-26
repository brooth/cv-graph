# CV Graph

A test task for `TypeScript-developer (backend)` role at `IT Solutions Management International`

## Tech stack

NestJS 11 · Apollo Server 5 · Prisma 7 · PostgreSQL 17 · DataLoader · Docker

## Live Demo

Go to https://cv-graph.brooth.ru:444/graphql and run...

## Example query

```graphql
query {
  profiles {
    locale
    email
    name
    summary
    links {
      label
      url
    }
    skills {
      name
    }
    experience {
      company
      title
      bulletpoints
      stack
    }
    projects {
      name
      description
      stack
      url
    }
  }
}
```

## Local development

```bash
git clone https://github.com/brooth/cv-graph.git
cd cv-graph
cp .env.example .env
docker compose up -d db
npm prebuild
npm run db:seed
npm run debug
```

Open http://localhost:3000/graphql and run the `Example Query`.

**Note**: `profile(slug) {...}` returns one particular CV. `profile {...} ` (without `slug`) returns the CV specified in `DEFAULT_PROFILE_SLUG` env var.


## Deploy to VPS (production)

Prepare the server. Run once (as `sudo` or `root`)

```bash
# If `Docker` is not installed
curl -fsSL https://get.docker.com | sh

# If `Cerbot` is not installed
apt-get install -y certbot

# Replace <YOUR-DOMAIN> and <YOUR-EMAIL> with actual values
certbot certonly --standalone -d <YOUR-DOMAIN> --agree-tos -m <YOUR-EMAIL> --non-interactive
```


First Deploy 

```bash
# Installation path is `/opt/cv-graph`
cd /opt
git clone https://github.com/brooth/cv-graph.git
cd cv-graph

cp .env.example .env.production

# Replace `NODE_ENV` to `production`
sed -i "s/^NODE_ENV=.*/NODE_ENV=production/" .env.production

# Generate a secure password or skip and enter manually
sed -i "s/^POSTGRES_PASSWORD=.*/POSTGRES_PASSWORD=$(openssl rand -hex 24)/" .env.production

# Replace DB name to include `production` suffix for the awareness
sed -i 's/^POSTGRES_DB=.*/POSTGRES_DB=cv-grach-production/' .env.production

# Specify another env vars accordinly...
vi .env.production

# Build and run
docker compose -f docker-compose.prod.yml --env-file .env.production up -d --build

# Watch logs
docker logs -f $(docker ps -q --filter "ancestor=cv-graph")
```