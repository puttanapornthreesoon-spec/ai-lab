import { ShieldAlert } from "lucide-react";

export function SafetyNote({
  title = "Use de-identified or synthetic information only",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="safety-note">
      <span className="icon-shell !h-10 !w-10 !shrink-0 !rounded-xl">
        <ShieldAlert aria-hidden="true" size={19} />
      </span>
      <div>
        <p className="font-semibold text-[var(--ink)]">{title}</p>
        <div className="mt-1 text-sm leading-6 text-[var(--ink-muted)]">{children}</div>
      </div>
    </aside>
  );
}
