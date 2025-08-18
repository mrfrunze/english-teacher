import { motion } from "framer-motion";
import { heroBanner } from "../assets/images";
import {
  baseMotion,
  slideLeft,
  slideRight,
} from "../utils/motionPresets";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[var(--color-white)] py-[var(--space-section)] pt-[95px]">
      <div className="container mx-auto grid items-center justify-between gap-10 [@media(min-width:1100px)]:grid-cols-2">
        

        {/* copy */}
        <motion.div
            {...baseMotion}
            transition={{ duration: 0.5 }}
            variants={slideLeft}
          className="text-left"
        >
          <h1 className="h1 mb-4 text-center [@media(min-width:1100px)]:text-left">
            Speak English with Confidence
          </h1>

          <p className="section-text [@media(min-width:1100px)]:max-w-prose text-center [@media(min-width:1100px)]:text-left">
            Personalized 1:1 lessons for adults and teens. Clear structure,
            real-life speaking practice, and weekly feedback — so you progress
            faster and stay motivated.
          </p>

          {/* No CTA button per requirements */}
        </motion.div>
        {/* image */}
        <motion.figure
          {...baseMotion}
            transition={{ duration: 0.5 }}
            variants={slideRight}
          className="order-1 md:order-none max-w-[600px] mx-auto"
        >
          <img
            src={heroBanner}
            alt="English lesson: a student with a notebook ready to learn."
            loading="eager"
            fetchPriority="high"
            className="w-full max-w-[560px] mx-auto"
          />
        </motion.figure>
      </div>
    </section>
  );
}
