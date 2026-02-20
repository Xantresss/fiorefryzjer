import { CalendarDays, Phone } from "lucide-react";

export default function CTASection() {
    return (
        <section
            id="rezerwacja"
            className="py-24 lg:py-32 bg-stone-900 text-stone-50 relative overflow-hidden"
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-700/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Eyebrow */}
                    <p className="text-xs tracking-[0.4em] uppercase text-amber-500 font-medium mb-6">
                        Rezerwacja
                    </p>

                    {/* Headline */}
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-50 mb-6 leading-tight">
                        Szanujemy Twój czas.
                    </h2>

                    {/* Description */}
                    <p className="text-stone-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                        Zarezerwuj wizytę wygodnie przez aplikację lub telefonicznie.
                        Nasz zespół jest do Twojej dyspozycji.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#"
                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-700 text-stone-50 px-8 py-4 text-sm tracking-widest uppercase hover:bg-amber-600 transition-all duration-300 rounded-md"
                        >
                            <CalendarDays size={18} />
                            Umów wizytę online
                        </a>
                        <a
                            href="tel:+48667801883"
                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-stone-600 text-stone-300 px-8 py-4 text-sm tracking-widest uppercase hover:border-stone-400 hover:text-stone-50 transition-all duration-300 rounded-md"
                        >
                            <Phone size={18} />
                            667 801 883
                        </a>
                    </div>

                    {/* Trust line */}
                    <p className="mt-8 text-stone-500 text-xs tracking-widest uppercase">
                        Odpowiadamy na każde pytanie w ciągu 24h
                    </p>
                </div>
            </div>
        </section>
    );
}
