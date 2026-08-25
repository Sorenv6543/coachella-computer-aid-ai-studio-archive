import React from 'react';
import { PhoneCall, HeartHandshake, BookOpenCheck, Award, ArrowRight } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface HowItWorksProps {
  lang: Language;
  onOpenHelpModal: () => void;
  largeText: boolean;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  lang,
  onOpenHelpModal,
  largeText,
}) => {
  const t = translations[lang].howItWorks;

  const stepIcons = [
    <PhoneCall className="w-6 h-6 text-[#B95E23]" />,
    <HeartHandshake className="w-6 h-6 text-[#B95E23]" />,
    <BookOpenCheck className="w-6 h-6 text-[#B95E23]" />,
    <Award className="w-6 h-6 text-[#B95E23]" />,
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#F8E9D5]/20 border-b border-[#F8E9D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
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

        {/* 4 Steps Grid with connecting line effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border-2 border-[#F8E9D5] hover:border-[#F4A259] transition-all hover:shadow-lg relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Step Number Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#B95E23]/10 flex items-center justify-center font-extrabold text-xl text-[#B95E23] font-display">
                    {step.number}
                  </div>
                  <div className="p-2.5 bg-[#FDF6EC] rounded-xl border border-[#F8E9D5]">
                    {stepIcons[idx]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-xl text-[#343434] font-display">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6E6A63] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step reassurance footer */}
              <div className="pt-4 mt-4 border-t border-[#F8E9D5]/60 text-xs font-semibold text-[#8BAE7B]">
                {idx === 0 && (lang === 'en' ? '✓ Zero paper forms' : '✓ Sin formularios difíciles')}
                {idx === 1 && (lang === 'en' ? '✓ No judgment ever' : '✓ Cero juzgar')}
                {idx === 2 && (lang === 'en' ? '✓ Large print notes' : '✓ Apuntes en letra grande')}
                {idx === 3 && (lang === 'en' ? '✓ Free follow-up calls' : '✓ Seguimiento gratuito')}
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenHelpModal}
            className="px-8 py-4 bg-[#B95E23] hover:bg-[#9e4c17] text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-md hover:shadow-xl transition-all inline-flex items-center gap-3"
          >
            <span>{lang === 'en' ? 'Take the First Easy Step Today' : 'Dé el Primer Paso Fácil Hoy'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
