import ImagesSliderDemo from "@/components/images-slider-demo";
import TourPlans from "@/components/tourplans";
import { AnimatedTestimonialsDemo } from "../components/animated-testimonials-demo";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";


export default function Home() {
  return (
    <div>
      <ImagesSliderDemo />
     <AnimatedTestimonialsDemo />
     <InfiniteMovingCardsDemo />
      <TourPlans />
      {/* Other components can be added here */}
    </div>
  );
}
