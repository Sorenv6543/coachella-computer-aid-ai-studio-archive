import React from 'react';
import { Phone, Calendar, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Language, translations } from '../data/translations';
import heroCommunity from '../assets/images/illustrations/hero/hero-106-senior-center-outdoor.webp';
import mariaPortrait from '../assets/images/illustrations/characters/maria-004-portrait.webp';

interface HeroProps {
  lang: Language;
  onOpenHelpModal: () => void;
  largeText: boolean;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenHelpModal, largeText }) => {
  const t = translations[lang].hero;

  const currentImg = {
    src: heroCommunity,
    alt: "Senior center friendly technology help session",
    label: lang === 'en' ? 'One-on-One Personalized Support' : 'Apoyo Personalizado Uno a Uno',
    location: 'Cathedral City Senior Center',
    quote: lang === 'en' ? '“They helped fix my tablet and set up online pharmacy.”' : '“Me ayudaron a configurar mi tableta y farmacia en línea.”',
    author: lang === 'en' ? '— Carlos, 75 · Cathedral City' : '— Carlos, 75 · Cathedral City',
    avatar: heroCommunity
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#FDF6EC] via-[#F8E9D5]/40 to-[#FDF6EC] pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-[#F8E9D5]">
      {/* Decorative Desert Sun/Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F4A259]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#78B8D9]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Mission Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B95E23]/10 border border-[#B95E23]/20 text-[#B95E23] text-xs sm:text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#B95E23]" />
              <span>{t.tag}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className={`font-extrabold text-[#343434] tracking-tight leading-[1.08] font-display ${
                largeText ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl lg:text-5xl'
              }`}>
                {lang === 'en' ? (
                  <>
                    Tech Help for <span className="text-[#B95E23]">Seniors</span> & Families
                  </>
                ) : (
                  <>
                    Ayuda Tecnológica para <span className="text-[#B95E23]">Adultos Mayores</span> y Familias
                  </>
                )}
              </h1>
              
              <p className={`font-bold text-[#B95E23] leading-snug font-display ${
                largeText ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
              }`}>
                {t.subheadline}
              </p>
            </div>

            {/* Reassuring Body Text */}
            <p className={`text-[#6E6A63] leading-relaxed max-w-2xl ${
              largeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
            }`}>
              {t.body}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-request-help-btn"
                onClick={onOpenHelpModal}
                className="px-6 py-4 bg-[#B95E23] hover:bg-[#9e4c17] text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-lg shadow-[#B95E23]/25 hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3 border border-[#9e4c17]"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                id="hero-view-workshops-btn"
                href="#workshops"
                className="px-6 py-4 bg-[#FFFFFF] hover:bg-[#FDF6EC] text-[#343434] border-2 border-[#F8E9D5] hover:border-[#F4A259] font-bold text-base sm:text-lg rounded-2xl transition-all flex items-center justify-center gap-2 text-center"
              >
                <Calendar className="w-5 h-5 text-[#B95E23]" />
                <span>{t.ctaSecondary}</span>
              </a>
            </div>

            {/* Phone Call Callout */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-[#6E6A63] bg-[#FFFFFF] p-3.5 rounded-xl border border-[#F8E9D5] shadow-xs">
              <Phone className="w-4 h-4 text-[#B95E23] shrink-0" />
              <span>{t.phoneText}</span>
              <a
                id="hero-phone-link"
                href="tel:7605554357"
                className="font-extrabold text-[#B95E23] hover:underline"
              >
                {t.phone}
              </a>
              <span className="text-xs bg-[#8BAE7B]/20 text-[#3b662a] font-bold px-2 py-0.5 rounded-full ml-auto">
                {lang === 'en' ? 'Live Patient Support' : 'Atención Paciente y Cálida'}
              </span>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-center gap-2 bg-[#F8E9D5]/60 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#343434]">
                <CheckCircle2 className="w-4 h-4 text-[#8BAE7B] shrink-0" />
                <span>{t.badge1}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F8E9D5]/60 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#343434]">
                <CheckCircle2 className="w-4 h-4 text-[#78B8D9] shrink-0" />
                <span>{t.badge2}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F8E9D5]/60 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#343434]">
                <CheckCircle2 className="w-4 h-4 text-[#F4A259] shrink-0" />
                <span>{t.badge3}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Warm Illustration Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="relative rounded-3xl bg-[#FFFFFF] p-4 sm:p-5 shadow-xl shadow-[#B95E23]/10 border-2 border-[#F8E9D5] overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-[#F8E9D5] via-[#FDF6EC] to-[#78B8D9]/20 aspect-4/3 sm:aspect-16/11 flex items-center justify-center group">
                  <img
                    src={currentImg.src}
                    alt={currentImg.alt}
                    className="w-full h-full object-cover rounded-2xl transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#343434]/60 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold bg-[#343434]/85 backdrop-blur-xs px-3 py-1.5 rounded-xl flex items-center justify-between">
                    <span>{currentImg.label}</span>
                    <span className="text-[#F4A259] font-bold">{currentImg.location}</span>
                  </div>
                </div>

                {/* Floating Testimonial Pill */}
                <div className="mt-4 bg-[#FDF6EC] p-3.5 rounded-2xl border border-[#F8E9D5] flex items-center gap-3 transition-all duration-300">
                  <img
                    src={currentImg.avatar}
                    alt="Neighbor portrait"
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#F4A259] shadow-xs shrink-0"
                  />
                  <div className="text-xs sm:text-sm text-[#343434]">
                    <p className="font-bold text-[#B95E23]">
                      {currentImg.quote}
                    </p>
                    <p className="text-[#6E6A63] text-xs">
                      {currentImg.author}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Secondary Mini Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#FFFFFF] p-3 rounded-2xl shadow-lg border border-[#F8E9D5] items-center gap-2.5 max-w-xs animate-bounce-subtle">
                <img
                  src={mariaPortrait}
                  alt="Maria"
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#8BAE7B]"
                />
                <div className="text-xs">
                  <p className="font-bold text-[#343434]">Maria, 68</p>
                  <p className="text-[#8BAE7B] font-semibold">100% Bilingüe en Español</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
