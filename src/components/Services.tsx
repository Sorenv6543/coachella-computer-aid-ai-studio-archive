import React, { useState } from 'react';
import { BookOpen, Video, ShieldAlert, Wrench, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Language, translations } from '../data/translations';
import learnCard from '../assets/images/illustrations/ui/ui-812-services-learn-card.webp';
import stayConnectedCard from '../assets/images/illustrations/ui/ui-810-services-stay-connected-card.webp';
import staySafeCard from '../assets/images/illustrations/ui/ui-811-services-stay-safe-card.webp';
import repairCard from '../assets/images/illustrations/ui/ui-813-services-repair-card.webp';

interface ServicesProps {
  lang: Language;
  onOpenHelpModal: (topic?: string) => void;
  largeText: boolean;
}

export const Services: React.FC<ServicesProps> = ({
  lang,
  onOpenHelpModal,
  largeText,
}) => {
  const t = translations[lang].services;
  const [activeTab, setActiveTab] = useState<string>("all");

  const serviceImages = [
    learnCard,
    stayConnectedCard,
    staySafeCard,
    repairCard,
  ];

  const serviceIcons = [
    <BookOpen className="w-5 h-5 text-[#B95E23]" />,
    <Video className="w-5 h-5 text-[#B95E23]" />,
    <ShieldAlert className="w-5 h-5 text-[#B95E23]" />,
    <Wrench className="w-5 h-5 text-[#B95E23]" />,
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FDF6EC] border-b border-[#F8E9D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#B95E23]/10 text-[#B95E23] text-xs sm:text-sm font-bold uppercase tracking-wider">
            {t.tag}
          </span>
          <h2 className={`font-extrabold text-[#343434] tracking-tight font-display ${
            largeText ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl lg:text-4xl'
          }`}>
            {t.headline}
          </h2>
          <p className={`text-[#6E6A63] ${largeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}`}>
            {t.subtitle}
          </p>
        </div>

        {/* 4 Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((service, idx) => (
            <div
              key={service.id}
              className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border-2 border-[#F8E9D5] hover:border-[#F4A259] transition-all hover:shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-5">
                
                {/* Top Row: Icon, Title & Graphic */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8E9D5] flex items-center justify-center shrink-0">
                      {serviceIcons[idx]}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xl sm:text-2xl text-[#343434] font-display">
                        {service.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#8BAE7B] bg-[#8BAE7B]/15 px-2 py-0.5 rounded-md">
                        {lang === 'en' ? 'Available 1-on-1 & in Group' : 'Disponible Individual y Grupal'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#6E6A63] leading-relaxed text-sm sm:text-base">
                  {service.desc}
                </p>

                {/* Key Checklist Examples */}
                <div className="bg-[#FDF6EC] p-4 rounded-2xl border border-[#F8E9D5] space-y-2">
                  <span className="text-xs font-extrabold text-[#B95E23] uppercase tracking-wider block">
                    {lang === 'en' ? 'Common Topics Covered:' : 'Temas Populares:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#343434]">
                        <CheckCircle className="w-4 h-4 text-[#8BAE7B] shrink-0" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-[#F8E9D5] flex items-center justify-between">
                <span className="text-xs font-bold text-[#6E6A63]">
                  {lang === 'en' ? '100% Free · No Rush' : '100% Gratuito · Con Calma'}
                </span>
                <button
                  onClick={() => onOpenHelpModal(service.title)}
                  className="px-4 py-2.5 bg-[#B95E23] hover:bg-[#9e4c17] text-white font-bold text-sm rounded-xl shadow-xs hover:shadow-md transition-all flex items-center gap-2"
                >
                  <span>{t.ctaBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Additional Formats Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#F8E9D5] via-[#FDF6EC] to-[#F8E9D5] rounded-3xl p-6 sm:p-8 border border-[#F8E9D5] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-extrabold text-xl text-[#343434] font-display">
              {lang === 'en' ? 'Need Help in Another Location or Language?' : '¿Necesita Ayuda en Otra Ubicación o Idioma?'}
            </h4>
            <p className="text-sm text-[#6E6A63]">
              {lang === 'en'
                ? 'We offer in-home visits for homebound seniors and veterans throughout the Coachella Valley.'
                : 'Ofrecemos visitas a domicilio para adultos mayores y veteranos con movilidad reducida.'}
            </p>
          </div>
          <button
            onClick={() => onOpenHelpModal("Special Request / Home Visit")}
            className="px-5 py-3 bg-[#343434] hover:bg-[#1a1a1a] text-white font-bold text-sm rounded-xl shrink-0 transition-colors"
          >
            {lang === 'en' ? 'Ask About Home Visits' : 'Consultar Visitas a Domicilio'}
          </button>
        </div>

      </div>
    </section>
  );
};
