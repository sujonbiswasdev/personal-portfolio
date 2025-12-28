"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Size_template } from "@/components/styles";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Skills", href: "/skills" },
  { name: "Works", href: "/works" },
  { name: "Education", href: "/education" }
];

export default function Navbar() {
    const pathname=usePathname()
  const [open, setOpen] = useState(false);
  const [darkMode,setdarkMode] = useState(false);

  const toggleDarkMode = () => {
    setdarkMode(!darkMode)
  };

  return (
   <Size_template className="">
     <header className="sicky top-0 left-0 w-full z-50 bg-[#030712]  dark:bg-slate-900/90 backdrop-blur border-b border-[#314158] dark:border-slate-700 ">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <img src="/photos/sujon_logo.png" alt="" className="size-15" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={`${pathname===item.href?"text-[#9EFF00]":"text-white"} hover:text-[#9EFF00] transition navitem text-[16px]`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="text-lg"
            aria-label="Toggle Dark Mode"
          >
            {darkMode?"🌙":"☀️"}
          </button>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-white"
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <nav className="flex flex-col px-4 py-6 space-y-4 text-sm font-medium text-white">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 px-4 py-2 rounded-md bg-blue-600 text-white text-center"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
   </Size_template>
  );
}
