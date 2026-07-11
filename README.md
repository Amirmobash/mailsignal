# MailSignal Landing Page

Complete responsive landing page built with **Next.js 15**, **React 19**, **TypeScript** and **Tailwind CSS**.

## Upload to GitHub

Copy all files and folders from this package into the root of your repository. You may remove the old static files (`index.html`, `assets/css`, and `assets/js`) after confirming the Next.js version works.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Images

All images used by the page are included locally in:

```text
public/images/
```

No external GitHub image links are required.

## Main files

```text
app/page.tsx          Main landing page
app/layout.tsx        Metadata and root layout
app/globals.css       Tailwind and global styles
components/Logo.tsx   MailSignal logo component
public/images/        Local website images
```
