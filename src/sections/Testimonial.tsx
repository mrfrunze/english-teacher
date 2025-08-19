import { motion } from "framer-motion";
import { baseMotion, fadeIn, slideUp, withDelay } from "../utils/motionPresets";
import { testimonials } from "../data/testimonials";
import TestimonialsSlider from "../components/TestimonialsSlider";


const Testimonial = () => {
  return (
    <section id="testimonials" className="py-[var(--space-section)] bg-[var(--color-cultured)]">
      <div className="container mx-auto">
        <motion.div 
          {...baseMotion} 
          variants={fadeIn} 
          transition={{ ...withDelay(0, 0.15, 0.45) }} 
          className="text-center mb-10"
        >
          <p className="overline">Student Voices</p>
          <h2 className="h2 font-bold text-[clamp(28px,3.2vw,40px)]" style={{ lineHeight: 1.2 }}>
            What my students say
          </h2>
        </motion.div>
        <motion.div {...baseMotion} variants={slideUp} transition={{ ...withDelay(1, 0.15, 0.45) }}>
          <TestimonialsSlider items={testimonials} />
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial