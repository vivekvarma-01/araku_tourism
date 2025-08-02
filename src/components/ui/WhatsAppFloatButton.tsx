import Image from "next/image";

export function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/919494781499" // Replace with your own WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 w-20 h-20 flex items-center justify-center"
      title="Connect on WhatsApp"
      style={{
        borderRadius: "50%"
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
