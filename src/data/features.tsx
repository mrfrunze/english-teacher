import type { ReactElement } from "react";
import { FaChalkboardUser, FaRegComments, FaChartLine } from "react-icons/fa6";

export type Feature = {
  id: string;
  title: string;
  text: string;
  icon: ReactElement;
};

export const aboutFeatures: Feature[] = [
  {
    id: "f1",
    title: "Personalized 1:1 lessons",
    text: "A plan that matches your level, goals, and schedule.",
    icon: <FaChalkboardUser className="text-[var(--color-mango-tango)]" />,
  },
  {
    id: "f2",
    title: "Real-life speaking practice",
    text: "Build confidence with guided conversations every lesson.",
    icon: <FaRegComments className="text-[var(--color-mango-tango)]" />,
  },
  {
    id: "f3",
    title: "Clear progress plan",
    text: "Weekly feedback and simple milestones to track growth.",
    icon: <FaChartLine className="text-[var(--color-mango-tango)]" />,
  },
];