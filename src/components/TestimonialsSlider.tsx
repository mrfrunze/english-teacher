import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "../data/testimonials";

type Props = {
  items: readonly Testimonial[];
};

const TestimonialsSlider = ({ items }: Props) => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ clickable: true }}
      navigation={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      grabCursor
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 16 },
        641: { slidesPerView: 2, spaceBetween: 20 },
        1100: { slidesPerView: 3, spaceBetween: 24 },
      }}
      className="!pb-10"
    >
      {items.map((t) => (
        <SwiperSlide key={t.id} className="h-auto">
          <TestimonialCard item={t} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsSlider;
