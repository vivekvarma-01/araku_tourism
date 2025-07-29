import React from 'react';

export default function SocialIcons() {
  return (
    <div className="flex space-x-6">
      {/* Facebook */}
      <a
        href="YOUR_FACEBOOK_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <img
          src="/facebook.png"
          alt="Facebook"
          className="h-7 w-7 object-contain"
        />
      </a>

      {/* Instagram */}
      <a
        href="YOUR_INSTAGRAM_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <img
          src="/instagram.png"
          alt="Instagram"
          className="h-7 w-7 object-contain"
        />
      </a>

      {/* YouTube */}
      <a
        href="YOUR_YOUTUBE_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <img
          src="/youtube.png"
          alt="YouTube"
          className="h-7 w-7 object-contain"
        />
      </a>
    </div>
  );
}
