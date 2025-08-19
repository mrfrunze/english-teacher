import type { Testimonial } from "../data/testimonials";
import { FaCircleUser, FaStar  } from "react-icons/fa6";

type Props = {
  item: Testimonial;
};

const TestimonialCard = ({ item }: Props) => {
  const src = item.avatarKey || undefined;

  return (
    <article className="h-full rounded-2xl bg-white p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
      <header className="mb-4 flex items-center gap-3">
        {src ? (
          <img
            src={src}
            alt={item.name}
            className="h-12 w-12 rounded-full object-cover"
            loading="lazy"
          />
            ) : (
                <FaCircleUser className="h-12 w-12 text-[var(--color-mango-tango)]" />
            )
        }
        <div>
          <div className="font-medium text-[var(--color-rich-black-fogra-29)]">{item.name}</div>
          <div className="text-sm text-[var(--color-sonic-silver)]">{item.dateLabel}</div>
        </div>
      </header>
      {/* rating */}
      <div className="mb-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={i < item.rating ? "text-[var(--color-orange-web)]" : "text-silver-300"}
          />
        ))}
      </div>

      {/* text */}
      <p className="section-text">{item.text}</p>
    </article>
  );
};

export default TestimonialCard;
