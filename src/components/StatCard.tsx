import type { ReactElement } from "react";

type Props = {
  icon: ReactElement;
  value: string;
  label: string;
};

export default function StatCard({ icon, value, label }: Props) {
  return (
    <div className="relative rounded-2xl bg-[var(--color-floral-white)] p-8 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
      {/* icon */}
      <div className="mb-4 text-2xl text-[var(--color-mango-tango)]">{icon}</div>

      {/* number */}
      <div
        className="text-[36px] font-bold leading-none mb-2"
        style={{ fontFamily: "var(--font-poppins)", color: "var(--color-rich-black-fogra-29)" }}
      >
        {value}
      </div>

      {/* label */}
      <div
        className="uppercase tracking-wide text-sm"
        style={{ fontFamily: "var(--font-rubik)", color: "var(--color-onyx)" }}
      >
        {label}
      </div>

      {/* bottom accent bar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 rounded-b-2xl bg-[var(--color-mango-tango)]" />
    </div>
  );
}