
import TourPlans from "@/components/tourplans";
import { AnimatedTestimonialsDemo } from "../components/data/animated-testimonials-demo";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";
import AccordionLast from "@/components/accordion-last";
import AnimatedPinDemo from "@/components/AnimatedPinDemo";
import { ImagesSliderDemo } from "@/components/landingpage";
import Footer4Col from "@/components/footer2";
import { Navbar } from "@/components/navbar";



export default function Home() {
  return (
    <div>
      <Navbar />
      <ImagesSliderDemo />
      <AnimatedTestimonialsDemo />
      <InfiniteMovingCardsDemo />
      <TourPlans />
      <AnimatedPinDemo />
      <AccordionLast />
      <Footer4Col />
  
    </div>
  );
}
