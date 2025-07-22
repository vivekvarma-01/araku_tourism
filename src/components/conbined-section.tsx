'use client';
import React, { useState } from 'react';
import AccordionLast from './ui/accordion-last';
import AnimatedPinDemo from './ui/AnimatedPinDemo';


export default function CombinedSection() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-zinc-950 p-4 gap-6">
      {/* FAQ Section */}
      <div className="w-full lg:w-1/2">
        <AccordionLast />
      </div>

      {/* Pin Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <AnimatedPinDemo />
      </div>
    </div>
  );
}
