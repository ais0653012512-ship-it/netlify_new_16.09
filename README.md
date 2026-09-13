# Saas UI - Next.js - landing page.

This is a free Next.js landing page template based on https://saas-ui.dev.
Feel free to submit any feature requests. If you use this template please share what you've built [on Twitter](https://twitter.com/saas_js) 🚀.

## Tech

- Next.js (App router)
- Chakra UI
- Saas UI
- Typescript

## Features

- Feature blocks
- Testimonials
- Pricing tables
- Log in and Sign up pages
- FAQ

## Getting Started

First, clone this repo and run `pnpm i`

To start the app run:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Configuration

Configuration files to edit basic site information, add testimonials, faq and pricing table can be found in `/data`.

## Learn More

Find out more about Saas UI.

- [Saas UI Documentation](https://saas-ui.dev/docs).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

Import the GitHub repo at [vercel.com/new](https://vercel.com/new) (hoặc dùng Vercel CLI: `npx vercel`).

Vercel tự nhận diện Next.js — không cần cấu hình build đặc biệt:

- Framework Preset: **Next.js**
- Build Command: `npm run build` (mặc định)
- Output Directory: tự động (`.next`)
- Node.js: **20+** (`engines` trong `package.json`)

Đặt biến môi trường từ `.env.example` trong **Project → Settings → Environment Variables**, đặc biệt:

- `NEXT_PUBLIC_SITE_URL` = URL production (ví dụ `https://your-project.vercel.app`)
- Các secret: `TELEGRAM_BOT_TOKEN`, `NEXT_PUBLIC_AES_SECRET_KEY`, …

Nếu không set `NEXT_PUBLIC_SITE_URL`, app dùng `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL` cho metadata/OG.

## License

MIT
