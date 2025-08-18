import { motion } from "framer-motion";
import { baseMotion, fadeIn, slideUp, withDelay, slideLeft, slideRight } from "../utils/motionPresets";
import {FaCrown,} from "react-icons/fa6";
import { avatar, flagGb } from "../assets/images";
import { aboutFeatures } from "../data/features";
import FeatureItem from "../components/FeatureItem";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-[var(--space-section)] bg-[var(--gradient-about)]"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 [@media(min-width:1100px)]:grid-cols-2">
        <motion.figure
          {...baseMotion}
          variants={slideLeft}
          transition={{ ...withDelay(0.5), ease: "easeOut" }}
          className="relative order-1 flex justify-center [@media(min-width:1100px)]:order-none"
        >
          <img
            src={avatar}
            alt="Lynette — English tutor"
            className="relative mx-auto w-full max-w-[380px] [@media(min-width:1100px)]:max-w-[420px]"
          />
        </motion.figure>
        <motion.div
          {...baseMotion}
          variants={slideRight}
          transition={{ ...withDelay(0.5), ease: "easeOut" }}
          className="text-left"
        >
          <p
            className="mb-2 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-rubik)", color: "var(--color-mango-tango)" }}
          >
            Who I am
          </p>

          <h2
            className="mb-4 font-bold [@media(min-width:1100px)]:text-[42px] text-[36px]"
            style={{ fontFamily: "var(--font-poppins)", lineHeight: 1.2, color: "var(--color-rich-black-fogra-29)" }}
          >
            A patient, supportive English tutor for real-life speaking
          </h2>

          <p className="section-text max-w-prose">
            I’m Lynette, a TEFL-certified English tutor. My lessons are relaxed, well-structured,
            and tailored to your goals — pronunciation, fluency, or building vocabulary.
          </p>
          <p className="section-text max-w-prose mt-3">
            You’ll practice speaking from day one and get clear feedback each week,
            so you make steady progress and feel confident in real conversations.
          </p>

          {/* features list */}
          <motion.ul
            {...baseMotion}
            variants={fadeIn}
            transition={{ ...withDelay(2, 0.2, 0.5), ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 space-y-5"
          >
            {aboutFeatures.map((f, i) => (
              <motion.div
                key={f.id}
                {...baseMotion}
                variants={slideUp}
                transition={{ ...withDelay(i + 3, 0.2, 0.5), ease: [0.22, 1, 0.36, 1] }}
              >
                <FeatureItem icon={f.icon} title={f.title} text={f.text} />
              </motion.div>
            ))}
          </motion.ul>
          {/* badges: Super Tutor + flags */}
          <div className="mt-6 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 shadow">
              <FaCrown className="text-[var(--color-gambog)]" />
              <span className="text-sm" style={{ fontFamily: "var(--font-rubik)" }}>
                Super Tutor
              </span>
            </span>
            <figure className="text-xl" role="img" aria-label="UK flag">
                <img src={flagGb}  className="h-6 w-10 rounded-full shadow" alt="United Kingdom flag" />
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
