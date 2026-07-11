export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/30 bg-white/[0.04]">
        <span className="h-px w-5 bg-white" />
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-signal shadow-[0_0_18px_#f4b400]" />
      </span>
      <span className="text-xl">MailSignal</span>
    </a>
  );
}
