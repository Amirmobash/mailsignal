# MailSignal — Next.js landing page

Production-ready MailSignal landing page built with Next.js, TypeScript and Tailwind CSS. All images are stored locally in `public/images`.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run typecheck
npm run build
npm start
```

## Deploy on Render

1. Push the contents of this folder to the root of your GitHub repository.
2. In Render, choose **New → Blueprint**.
3. Connect the GitHub repository `Amirmobash/mailsignal`.
4. Render reads `render.yaml` and creates the free Node web service automatically.
5. After the first deploy, add `mailsignal.de` under **Settings → Custom Domains** and copy the DNS records shown by Render to your domain provider.

The included Blueprint uses:

- Build command: `npm ci && npm run build`
- Start command: `npm start`
- Health check: `/`
- Node.js: `20.19.4`
- Free plan

## Important repository layout

`package.json`, `render.yaml`, `app/`, `components/`, and `public/` must be directly in the repository root—not inside another nested folder.
