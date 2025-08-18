import type { ReactElement } from "react";

type Props = {
  icon: ReactElement;
  title: string;
  text: string;
};

export default function FeatureItem({ icon, title, text }: Props) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-floral-white)] shadow">
        <span className="text-xl leading-none">{icon}</span>
      </span>
      <div>
        <h3 className="h3 mb-1">{title}</h3>
        <p className="section-text">{text}</p>
      </div>
    </li>
  );
}