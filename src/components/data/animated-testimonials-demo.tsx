import { AnimatedTestimonials } from "@/components/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Known for its tribal culture and natural beauty, this botanical garden features exotic flora and a toy train ride.",
      name: "Padmapuram Botanical Garden",
      src: "/Padmapuram Botanical Garden.jpg",
    },
    {
      quote:
        "A fun and educational place where visitors can see how chocolate is made and taste freshly prepared treats.",
      name: "Chocolate Factory",
      src: "/Chocolate Factory.jpg",
    },
    {
      quote:
        "Showcasing the lifestyle and heritage of the tribal communities in Araku Valley, this museum is rich in artifacts and cultural history.",
      name: "Tribal Museum",
      src: "/Tribal Museum.jpg",
    },
    {
      quote:
        "Offers insights into coffee production, history, and varieties, along with a relaxing café and scenic plantation surroundings.",
      name: "Coffee Museum & Coffee Plantation",
      src: "/Coffee Museum & Coffee Plantation.jpg",
    },
    {
      quote:
        "A scenic natural spot where cool waters flow over rocks, making it a great picnic and nature relaxation area.",
      name: "Chaprai Waterfalls",
      src: "/chaprai Waterfalls.jpg",
    },
    {
      quote:
        "A dense forest filled with towering pine trees, ideal for a peaceful walk or nature photography.",
      name: "Araku Pine Forest",
      src: "/Araku Pine Forest.jpg",
    },
    {
      quote:
        "One of the highest points in the region, offering panoramic views of the lush Araku valley and hills beyond.",
      name: "Galikonda View Point",
      src: "/Galikonda View Point.jpg",
    },
    {
      quote:
        "A beautiful waterfall surrounded by thick greenery, popular for its serene and untouched natural ambiance.",
      name: "Thatiguda Waterfalls",
      src: "/Thatiguda Waterfalls.jpg",
    },
    {
      quote:
        "A natural wonder formed by limestone, featuring massive stalactites and stalagmites with a railway tunnel nearby.",
      name: "Borra Caves",
      src: "/Borra Caves.jpg",
    },
    {
      quote:
        "A picturesque waterfall accessible by a small trek, known for its refreshing waters and jungle surroundings.",
      name: "Katiki Waterfalls",
      src: "/Katiki Waterfalls.jpg",
    },
    {
      quote:
        "A peaceful village in the hills offering panoramic sunrise views and a calm rural experience.",
      name: "Madagada",
      src: "/Madagada.jpg",
    },
    {
      quote:
        "Famous for its early morning sunrises and foggy hills, Vanajangi offers a breathtaking cloud bed view.",
      name: "Vanajangi",
      src: "/Vanajangi.jpg",
    },
    {
      quote:
        "Often referred to as the Kashmir of Andhra Pradesh, this cool hill station is known for its misty mornings and apple orchards.",
      name: "Lambasingi",
      src: "/Lambasingi.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
