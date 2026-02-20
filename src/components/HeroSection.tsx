import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/95 to-stone-50/40 z-10" />

            {/* Hero image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.png"
                    alt="Luksusowy salon fryzjerski Fiore w Toruniu"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12 w-full py-32">
                <div className="max-w-2xl">
                    {/* Eyebrow */}
                    <p className="text-xs tracking-[0.4em] uppercase text-amber-700 font-medium mb-6 animate-fade-in-up">
                        Studio Fryzur - Usługi damsko-męskie
                    </p>

                    {/* Headline */}
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-stone-900 mb-8 animate-fade-in-up delay-100">
                        Zdrowe włosy
                        <br />
                        <span className="text-amber-700">zaczynają się</span>
                        <br />
                        tutaj.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-lg mb-10 animate-fade-in-up delay-200">
                        Eksperci trychologii i stylizacji w Toruniu. Diagnostyka,
                        leczenie i pielęgnacja włosów na najwyższym poziomie.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                        <a
                            href="#rezerwacja"
                            className="group inline-flex items-center justify-center gap-3 bg-stone-900 text-stone-50 px-8 py-4 text-sm tracking-widest uppercase hover:bg-amber-700 transition-all duration-300 rounded-md"
                        >
                            Umów wizytę online
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                        <a
                            href="#uslugi"
                            className="inline-flex items-center justify-center gap-3 border border-stone-400 text-stone-800 px-8 py-4 text-sm tracking-widest uppercase hover:border-stone-800 hover:bg-stone-800 hover:text-stone-50 transition-all duration-300 rounded-md"
                        >
                            Nasze zabiegi
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent z-20" />
        </section>
    );
}
