"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ui/toggle";

// Add Home back into the navigation
const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "Plans", href: "#plans" },
  { name: "About", href: "#about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[96vw] max-w-7xl
        bg-white/15 dark:bg-zinc-900/15
        backdrop-blur-2xl
        border border-white/10 dark:border-zinc-700/30
        rounded-2xl
        transition-all duration-200
        shadow-lg
      `}
    >
      <div className="relative flex items-center justify-between h-12 px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div>
          <h1
            className={`
              text-2xl font-extrabold tracking-tight
              text-green-500 select-none
            `}
          >
            Araku Travels
          </h1>
        </div>

        {/* Center: Links - Absolutely centered in the box */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="hidden md:flex items-center space-x-8 pointer-events-auto">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-black dark:text-white/90 hover:text-green-400
                  px-3 py-2 text-base font-medium
                  transition-all duration-150
                  hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 rounded-md
                "
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Toggle and Mobile Button */}
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/90 hover:text-green-300 hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-l border-white/10"
              >
                <SheetHeader>
                  <SheetTitle
                    className="
                      text-left text-2xl font-extrabold
                      text-green-600 dark:text-green-400
                      tracking-tight
                    "
                  >
                    Araku
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="
                        text-black/80 dark:text-white/80
                        hover:text-green-700 dark:hover:text-green-400
                        px-4 py-3 text-lg font-semibold
                        transition-all duration-200
                        hover:bg-white/30 dark:hover:bg-zinc-800/40
                        rounded-md
                      "
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
