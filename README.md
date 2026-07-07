# Profolio

A professional full stack web development portfolio built with **Next.js**, **React**, and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customize your portfolio

All content is data-driven — edit these files to make it yours:

| File | What to update |
|------|----------------|
| `src/data/site.ts` | Your name, title, bio, email, location, and social links |
| `src/data/projects.ts` | Your web projects (title, description, tags, URLs) |
| `src/data/skills.ts` | Your skill categories and technologies |
| `public/projects/` | Project thumbnail images (replace the placeholder SVGs) |

## Project structure

```
src/
├── app/           # Next.js App Router pages and layout
├── components/    # React UI components
├── data/          # Portfolio content (edit these!)
└── types/         # TypeScript type definitions
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Deploy

Deploy to [Vercel](https://vercel.com) or any platform that supports Next.js:

```bash
npm run build
```
