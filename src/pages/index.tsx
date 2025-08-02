
import TourPlans from "@/components/tourplans";
import { AnimatedTestimonialsDemo } from "../components/data/animated-testimonials-demo";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";
import AccordionLast from "@/components/accordion-last";
import AnimatedPinDemo from "@/components/AnimatedPinDemo";
import { ImagesSliderDemo } from "@/components/landingpage";
import Footer4Col from "@/components/footer2";
import { Navbar } from "@/components/navbar";
import AboutArakuTravels from "@/components/about";
import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
        <title>Araku Travels | Explore Araku Valley’s Beauty & Culture</title>
        <meta
          name="description"
          content="Discover the magic of Araku with customized travel packages. Enjoy coffee plantations, tribal culture, waterfalls, and scenic train rides."
        />
        <link rel="canonical" href="https://www.arakutravels.com/" />

      </Head>
    <div>
      <Navbar />
      <ImagesSliderDemo />
      <AnimatedTestimonialsDemo />
      <InfiniteMovingCardsDemo />
      <TourPlans />
      <AnimatedPinDemo />
      <AccordionLast />
      <AboutArakuTravels />
      <Footer4Col />
    </div>
    </>
  );
}
