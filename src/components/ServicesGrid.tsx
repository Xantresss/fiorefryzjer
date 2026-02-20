import {
    Stethoscope,
    Wind,
    Flame,
    Scissors,
} from "lucide-react";

const services = [
    {
        icon: Stethoscope,
        title: "Konsultacje Trychologiczne",
        description:
            "Profesjonalna diagnostyka skóry głowy i włosów. Indywidualny plan leczenia opracowany przez certyfikowanego trychologa.",
        accent: "from-amber-50 to-orange-50",
        span: "md:col-span-2",
    },
    {
        icon: Wind,
        title: "Infuzja Tlenowa",
        description:
            "Głęboka regeneracja z wykorzystaniem czystego tlenu. Natychmiastowe odżywienie cebulek włosa i poprawa kondycji skóry głowy.",
        accent: "from-stone-100 to-stone-50",
        span: "md:col-span-1",
    },
    {
        icon: Flame,
        title: "Sauna & Pielęgnacja",
        description:
            "Luksusowy rytuał łączący saunę parową z intensywną pielęgnacją. Otwiera łuski włosa dla głębszego wchłaniania składników.",
        accent: "from-stone-100 to-stone-50",
        span: "md:col-span-1",
    },
    {
        icon: Scissors,
        title: "Koloryzacja i Strzyżenie",
        description:
            "Precyzyjne cięcia i koloryzacja premium. Pracujemy wyłącznie na profesjonalnych produktach, szanując strukturę Twoich włosów.",
        accent: "from-amber-50 to-orange-50",
        span: "md:col-span-2",
    },
];

export default function ServicesGrid() {
    return (
        <section id="uslugi" className="py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Section header */}
                <div className="text-center mb-16 lg:mb-20">
                    <p className="text-xs tracking-[0.4em] uppercase text-amber-700 font-medium mb-4">
                        Nasze specjalizacje
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 mb-6">
                        Kompleksowa opieka
                        <br />
                        <span className="text-stone-500">nad Twoimi włosami</span>
                    </h2>
                    <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
                        Łączymy wiedzę medyczną z artystycznym podejściem do fryzjerstwa.
                        Każda wizyta to spersonalizowane doświadczenie.
                    </p>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className={`${service.span} relative bg-gradient-to-br ${service.accent} border border-stone-300 rounded-md p-8 lg:p-10 shadow-lg shadow-stone-200/50 overflow-hidden`}
                        >
                            {/* Subtle corner decoration */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-stone-200/20 to-transparent rounded-bl-full" />

                            <div className="relative">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-amber-700/10">
                                    <service.icon
                                        size={22}
                                        className="text-amber-700"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-xl lg:text-2xl text-stone-900 mb-3">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-stone-500 leading-relaxed text-sm lg:text-base">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
