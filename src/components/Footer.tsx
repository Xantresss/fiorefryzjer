import { Phone, Instagram, Facebook, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stone-100/50 border-t border-stone-200/60">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
                    {/* Brand */}
                    <div>
                        <a
                            href="#"
                            className="font-serif text-2xl tracking-[0.3em] text-stone-900 hover:text-amber-700 transition-colors duration-300"
                        >
                            FIORE
                        </a>
                        <p className="mt-4 text-stone-500 text-sm leading-relaxed max-w-xs">
                            Studio Fryzur &amp; Trychologia. Eksperci zdrowych i pięknych
                            włosów w samym sercu Torunia.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs tracking-[0.3em] uppercase text-stone-400 font-medium mb-5">
                            Kontakt
                        </h4>
                        <div className="space-y-4">
                            <a
                                href="tel:+48667801883"
                                className="flex items-center gap-3 text-stone-600 hover:text-amber-700 transition-colors duration-300 text-sm"
                            >
                                <Phone size={16} strokeWidth={1.5} />
                                667 801 883
                            </a>
                            <div className="flex items-start gap-3 text-stone-600 text-sm">
                                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                                <span>Koniuchy 21/46<br />87-100 Toruń</span>
                            </div>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-xs tracking-[0.3em] uppercase text-stone-400 font-medium mb-5">
                            Social Media
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/studiofryzurfiore/?locale=pl_PL"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-stone-200 text-stone-500 hover:text-amber-700 hover:border-amber-700/30 hover:bg-amber-50/50 transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} strokeWidth={1.5} />
                            </a>
                            <a
                                href="https://www.instagram.com/studiofryzurfiore/"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-stone-200 text-stone-500 hover:text-amber-700 hover:border-amber-700/30 hover:bg-amber-50/50 transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div>
                        <h4 className="text-xs tracking-[0.3em] uppercase text-stone-400 font-medium mb-5">
                            Jak do nas trafić?
                        </h4>
                        <div className="aspect-square rounded-md overflow-hidden border border-stone-200/60 shadow-md shadow-stone-200/50">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1199.6585517151084!2d18.60669594616579!3d53.03263805767798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470334f35ca3552f%3A0xab7d006b5eba8f9b!2sStudio%20Fryzur%20Fiore!5e0!3m2!1spl!2spl!4v1771609473622!5m2!1spl!2spl"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa — Studio Fryzur Fiore, Koniuchy 21/46, Toruń"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-stone-400 text-xs tracking-widest">
                        © {new Date().getFullYear()} FIORE. Wszystkie prawa zastrzeżone.
                    </p>
                    <p className="text-stone-400 text-xs tracking-widest">
                        Studio Fryzur & Trychologia — Toruń
                    </p>
                </div>
            </div>
        </footer>
    );
}
