import Image from 'next/image';
import React from 'react';

export default function SocialIcons() {
  return (
    <div className="flex space-x-6">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1FK15wmfJM/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <Image
          height={300}
          width={300}
          src="/facebook.png"
          alt="Facebook"
          className="h-7 w-7 object-contain"
        />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/araku.travels?igsh=MWNtcDJhYmxpbTF5aw=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Image
        height={300}
        width={300}
          src="/instagram.png"
          alt="Instagram"
          className="h-7 w-7 object-contain"
        />
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com/@araku.travels?si=N9vP6nzaglpPBc2k"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <Image
        height={300}
        width={300}
          src="/youtube.png"
          alt="YouTube"
          className="h-7 w-7 object-contain"
        />
      </a>
    </div>
  );
}
