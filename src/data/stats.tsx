import type { ReactElement } from "react";
import { FaChalkboardUser, FaStar, FaCommentDots, FaCalendarCheck } from "react-icons/fa6";

export type Stat = {
  id: string;
  value: string;   // big number line
  label: string;   // small caption
  icon: ReactElement;
};

export const stats: Stat[] = [
  {
    id: "s1",
    value: "4700+",
    label: "Lessons Taught",
    icon: <FaChalkboardUser />,
  },
  {
    id: "s2",
    value: "5.0",
    label: "Average Rating",
    icon: <FaStar />,
  },
  {
    id: "s3",
    value: "18+",
    label: "Student Reviews",
    icon: <FaCommentDots />,
  },
  {
    id: "s4",
    value: "7+",
    label: "Years Teaching",
    icon: <FaCalendarCheck />,
  },
];