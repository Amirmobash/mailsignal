# راه‌اندازی MailSignal روی Render

1. تمام فایل‌های این پوشه را در ریشه‌ی ریپازیتوری GitHub قرار بده.
2. در Render وارد حساب شو و گزینه **New +** سپس **Blueprint** را انتخاب کن.
3. ریپازیتوری `Amirmobash/mailsignal` را وصل کن.
4. Render فایل `render.yaml` را می‌خواند و سرویس را خودکار می‌سازد.
5. روی **Apply** بزن و منتظر پایان Deploy بمان.
6. برای دامنه، در سرویس Render به **Settings → Custom Domains** برو و `mailsignal.de` را اضافه کن.
7. رکوردهای DNS نمایش‌داده‌شده توسط Render را دقیقاً در پنل شرکت دامنه وارد کن.

## تنظیمات آماده

- Plan: Free
- Runtime: Node
- Build: `npm ci && npm run build`
- Start: `npm start`
- Health check: `/`
- Node: `20.19.4`

## نکته مهم

فایل `package.json` باید مستقیم در صفحه اصلی ریپازیتوری دیده شود. ساختار اشتباه:

`mailsignal/mailsignal-render/package.json`

ساختار درست:

`mailsignal/package.json`
