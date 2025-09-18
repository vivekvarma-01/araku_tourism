import Image from "next/image";

export function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/919550993844?text=Hi%2C%20I%27m%20excited%20to%20plan%20my%20Araku%20trip%20with%20Araku%20Travels!%20Could%20you%20guide%20me%20with%20the%20best%20packages%20and%20help%20me%20customize%20my%20tour%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 w-20 h-20 flex items-center justify-center"
      title="Connect on WhatsApp"
      style={{
        borderRadius: "50%",
      }}
    >
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        className="w-full h-full object-contain"
        style={{ borderRadius: "50%" }}
        height={300}
        width={300}
      />
    </a>
  );
}
