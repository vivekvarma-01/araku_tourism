
import TourPlans from "@/components/tourplans";
import { AnimatedTestimonialsDemo } from "../components/animated-testimonials-demo";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";
import Footer from "@/components/footer";
import AccordionLast from "@/components/ui/accordion-last";
import AnimatedPinDemo from "@/components/AnimatedPinDemo";




export default function Home() {
  return (
    <div>
      <AnimatedTestimonialsDemo />
      <InfiniteMovingCardsDemo />
      <TourPlans />
      <AnimatedPinDemo />
      <AccordionLast />
      <Footer />
  
    </div>
  );
}
