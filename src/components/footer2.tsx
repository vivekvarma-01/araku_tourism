import { Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppFloatButton } from "./ui/WhatsAppFloatButton";
import SocialIcons from "./socialmedia";
import { AnimatedTooltipPreview } from "./dev_info";

const data = {
  contact: {
    email: "vivekvarma2004@gmail.com",
    phone: "+91 9550993844",
    address: "Hyderabad, Telangana, India",
  },
  company: {
    name: "Araku Travels",
    description:
      "Araku Travels is your trusted partner for unforgettable journeys to Araku Valley and beyond. We specialize in curated travel experiences, scenic getaways, and local adventures, comfort, culture, and natural beauty to make every trip memorable. With our dedicated local team, you can expect seamless service and authentic insights at every step of your journey.",
  },
};

const serviceLinks = [
  { text: "Tour Packages" },
  { text: "Custom Itineraries" },
  { text: "Local Sightseeing" },
  { text: "Cab & Transport Services" },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="w-full bg-white text-black dark:bg-zinc-950 dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-6">
          {/* Company Info (Half width) */}
          <div className="lg:col-span-3 text-center sm:text-left">
            <h2 className="text-3xl font-extrabold text-green-700 dark:text-green-400">
              {data.company.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {data.company.description}
            </p>
            <div>
              <AnimatedTooltipPreview />
            </div>
            
          </div>

          {/* Our Services (Right quarter) */}
          <div className="lg:col-span-1 text-center sm:text-left flex flex-col">
            <h3 className="text-lg font-bold text-green-700 dark:text-green-400 relative pb-2">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceLinks.map(({ text }) => (
                <li key={text} className="text-zinc-600 dark:text-zinc-300 font-normal">
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Right quarter) */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h3 className="text-lg font-bold text-green-700 dark:text-green-400">Contact Us</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                <li key={text}>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <Icon className="text-green-500 dark:text-green-400 size-5 shrink-0" />
                    {isAddress ? (
                      <address className="not-italic text-zinc-700 dark:text-zinc-300 font-normal">
                        {text}
                      </address>
                    ) : (
                      <span className="text-zinc-700 dark:text-zinc-300 font-normal">{text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-center sm:justify-start mt-4">
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-zinc-200 dark:border-zinc-700 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              <span className="block sm:inline">All rights reserved.</span>
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4 sm:mt-0 sm:order-first">
              &copy; 2025 {data.company.name}
            </p>
          </div>
        </div>
      </div>
      <WhatsAppFloatButton />
    </footer>
  );
}
