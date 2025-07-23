
import TourPlans from "@/components/tourplans";
import { AnimatedTestimonialsDemo } from "../components/animated-testimonials-demo";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";
import Footer from "@/components/footer";
import AccordionLast from "@/components/ui/accordion-last";
import AnimatedPinDemo from "@/components/AnimatedPinDemo";
import { ImagesSliderDemo } from "@/components/landingpage";



export default function Home() {
  return (
    <div>
      <ImagesSliderDemo />
      <AnimatedTestimonialsDemo />
      <InfiniteMovingCardsDemo />
      <TourPlans />
      <AnimatedPinDemo />
      <AccordionLast />
      <Footer />
  
    </div>
  );
}
