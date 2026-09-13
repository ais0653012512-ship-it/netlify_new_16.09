# Saas UI - Next.js - landing page.

This is a free Next.js landing page template based on https://saas-ui.dev.
Feel free to submit any feature requests. If you use this template please share what you've built [on Twitter](https://twitter.com/saas_js) 🚀.

**[View demo](https://vercel.com/)**

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

1. Push repo lên GitHub (hoặc GitLab/Bitbucket).
2. Vào [Vercel Dashboard](https://vercel.com/new) → **Import** project → chọn repo.
3. Framework Preset: **Next.js** (tự nhận). Build Command / Output giữ mặc định.
4. Thêm Environment Variables (Production + Preview) từ `.env.example`, đặc biệt:
   - `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
   - `NEXT_PUBLIC_AES_SECRET_KEY`
   - `NEXT_PUBLIC_SITE_URL` = URL production (vd. `https://your-project.vercel.app`)
5. Deploy. Mỗi push lên branch đã link sẽ tự build lại.

Cấu hình bổ sung: `vercel.json` (headers), `.nvmrc` (Node 20). Redirect cũ → `/business-verify` nằm trong `next.config.mjs`.

## License

MIT
