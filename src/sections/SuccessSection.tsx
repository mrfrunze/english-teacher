import { motion } from "framer-motion";
import { baseMotion, slideUp, withDelay } from "../utils/motionPresets";
import StatCard from "../components/StatCard";
import { stats } from "../data/stats";

const SuccessSection = () => {
  return (
    <section id="success" className="py-[var(--space-section)] bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p
            className="mb-1 uppercase tracking-wide"
            style={{
              fontFamily: "var(--font-rubik)",
              color: "var(--color-mango-tango)",
            }}
          >
            Our Success
          </p>
          <h2
            className="font-bold text-[32px] [@media(min-width:1100px)]:text-[38px]"
            style={{
              fontFamily: "var(--font-poppins)",
              color: "var(--color-rich-black-fogra-29)",
              lineHeight: 1.2,
            }}
          >
            About Our Success Story
          </h2>
         
        </div>
        <div className="flex flex-wrap justify-center gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.id}
                {...baseMotion}
                variants={slideUp}
                transition={{ ...withDelay(i, 0.15, 0.45) }}
                className="w-[320px] text-center"
              >
                <StatCard icon={s.icon} value={s.value} label={s.label} />
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default SuccessSection;
