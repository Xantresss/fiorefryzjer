"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isOpen
                        ? "bg-stone-50 shadow-sm"
                        : scrolled
                            ? "bg-stone-50/90 backdrop-blur-md shadow-sm"
                            : "bg-transparent"
                    }`}
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="flex h-20 items-center justify-between">
                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-stone-800 hover:text-amber-700 transition-colors z-[60]"
                            aria-label="Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Logo — centered */}
                        <a
                            href="#"
                            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl tracking-[0.3em] text-stone-900 hover:text-amber-700 transition-colors duration-300 z-[60]"
                        >
                            FIORE
                        </a>

                        {/* Desktop nav links */}
                        <div className="hidden lg:flex items-center gap-8">
                            <a
                                href="#uslugi"
                                className="text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-colors duration-300"
                            >
                                Usługi
                            </a>
                            <a
                                href="#rezerwacja"
                                className="text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-colors duration-300"
                            >
                                Rezerwacja
                            </a>
                        </div>

                        {/* CTA — phone */}
                        <a
                            href="tel:+48667801883"
                            className="hidden md:flex items-center gap-2 border border-stone-800 px-5 py-2.5 text-xs tracking-widest uppercase text-stone-800 hover:bg-stone-800 hover:text-stone-50 transition-all duration-300 rounded-md"
                        >
                            <Phone size={14} />
                            <span>667 801 883</span>
                        </a>

                        {/* Mobile phone icon */}
                        <a
                            href="tel:+48667801883"
                            className="md:hidden text-stone-800 hover:text-amber-700 transition-colors z-[60]"
                            aria-label="Zadzwoń"
                        >
                            <Phone size={20} />
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile menu overlay — outside nav for correct fixed positioning */}
            <div
                className={`lg:hidden fixed inset-0 top-20 z-[55] bg-stone-50 transition-all duration-500 ${isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center justify-center gap-10 pt-20">
                    <a
                        href="#uslugi"
                        onClick={() => setIsOpen(false)}
                        className="font-serif text-2xl tracking-widest text-stone-800 hover:text-amber-700 transition-colors"
                    >
                        Usługi
                    </a>
                    <a
                        href="#rezerwacja"
                        onClick={() => setIsOpen(false)}
                        className="font-serif text-2xl tracking-widest text-stone-800 hover:text-amber-700 transition-colors"
                    >
                        Rezerwacja
                    </a>
                    <a
                        href="tel:+48667801883"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 border border-stone-800 px-8 py-3 text-sm tracking-widest uppercase text-stone-800 hover:bg-stone-800 hover:text-stone-50 transition-all duration-300 rounded-md"
                    >
                        <Phone size={16} />
                        667 801 883
                    </a>
                </div>
            </div>
        </>
    );
}
