import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Nestled amidst the Eastern Ghats, this is a picturesque spot with cascading waters surrounded by lush greenery. Perfect for nature lovers and photographers.",
      name: "Katiki Waterfalls",
      src: "https://i.pinimg.com/736x/43/85/a7/4385a78b6fa30cbdaaf231e9dc3b0909.jpg",
    },
    {
      quote:
        "Known for its tribal culture and stunning natural landscapes, this garden offers a serene atmosphere with exotic plants and vibrant tribal art.",
      name: "Padmapuram Botanical Gardens",
      src: "https://i.pinimg.com/736x/9f/52/da/9f52da094f3aff6af4d05b1ef311ce36.jpg",
    },
    {
      quote:
        "An engineering marvel and a must-visit, this is one of the deepest and longest tunnels in India, offering a thrilling train journey through scenic mountain terrain.",
      name: "Borra Caves & Tunnel",
      src: "https://i.pinimg.com/736x/fe/83/42/fe83424ec96595b3c0836bacbbd4c478.jpg",
    },
    {
      quote:
        "A perfect viewpoint offering breathtaking views of the valley. The sunrise and sunset from here are truly mesmerizing.",
      name: "Galikonda View Point",
      src: "https://i.pinimg.com/736x/10/a5/e7/10a5e7de2a05b646c18ab847401f6406.jpg",
    },
    {
      quote:
        "A beautiful hill station surrounded by coffee plantations and tribal villages. The cool climate and scenic beauty make it a peaceful getaway.",
      name: "Araku Valley Town",
      src: "https://i.pinimg.com/736x/a1/55/9f/a1559f54a7844ba63a87adf5b90a22a4.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
