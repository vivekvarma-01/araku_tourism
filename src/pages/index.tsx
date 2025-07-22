import ImagesSliderDemo from "@/components/images-slider-demo";
import TourPlans from "@/components/tourplans";
import { AnimatedTestimonialsDemo } from "../components/animated-testimonials-demo";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";
import Footer from "@/components/footer";
import AccordionLast from "@/components/ui/accordion-last";
import AnimatedPinDemo from "@/components/AnimatedPinDemo";
import SimplePricing from "@/components/pricing";



export default function Home() {
  return (
    <div>
      <ImagesSliderDemo />
      <AnimatedTestimonialsDemo />
      <InfiniteMovingCardsDemo />
      <TourPlans />
      <SimplePricing />
      <AnimatedPinDemo />
      <AccordionLast />
      <Footer />
  
    </div>
  );
}
