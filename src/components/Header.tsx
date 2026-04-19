"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#how-it-works", label: "Как это работает" },
    { href: "#stats", label: "О нас" },
    { href: "#quiz", label: "Рассчитать цену" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="text-secondary font-bold text-xl">Ezzy</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+998781136068"
            className="flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors"
          >
            <Phone size={18} />
            +998 78 113-60-68
          </a>
          <a
            href="#quiz"
            className="bg-primary hover:bg-primary-dark text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm"
          >
            Заказать
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-secondary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-primary font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+998781136068"
            className="flex items-center gap-2 text-secondary font-bold mt-2"
          >
            <Phone size={18} />
            +998 78 113-60-68
          </a>
          <a
            href="#quiz"
            className="bg-primary text-white font-bold px-4 py-3 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Рассчитать цену
          </a>
        </div>
      )}
    </header>
  );
}
