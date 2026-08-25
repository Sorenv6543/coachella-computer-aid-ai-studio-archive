import React, { useState } from 'react';
import { Heart, DollarSign, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language, translations } from '../data/translations';
import payIllustration from '../assets/images/illustrations/ui/ui-820-pay-what-you-can-section.webp';

interface PayWhatYouCanProps {
  lang: Language;
  onOpenHelpModal: (topic?: string) => void;
  largeText: boolean;
}

export const PayWhatYouCan: React.FC<PayWhatYouCanProps> = ({
  lang,
  onOpenHelpModal,
  largeText,
}) => {
  const t = translations[lang].payWhatYouCan;
  const [amount, setAmount] = useState<number>(0);

  const getTierMessage = (val: number) => {
    if (val === 0) return t.tier0;
    if (val <= 25) return t.tier25;
    if (val <= 50) return t.tier50;
    return t.tier75;
  };

  return (
    <section id="pay-what-you-can" className="py-16 sm:py-24 bg-[#FDF6EC] border-b border-[#F8E9D5]">
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

        {/* Interactive Slider & Info Card */}
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 shadow-xl shadow-[#B95E23]/5 border-2 border-[#F8E9D5]">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Slider Control */}
            <div className="md:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <label className="text-sm sm:text-base font-bold text-[#343434] block">
                  {t.sliderLabel}
                </label>
                
                {/* Price Display Pill */}
                <div className="flex items-center justify-between bg-[#FDF6EC] p-4 rounded-2xl border border-[#F8E9D5]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#B95E23] font-display">
                      ${amount}
                    </span>
                    <span className="text-sm font-semibold text-[#6E6A63]">
                      {lang === 'en' ? '/ 1-hour session' : '/ sesión de 1 hora'}
                    </span>
                  </div>

                  {amount === 0 ? (
                    <span className="px-3 py-1.5 bg-[#8BAE7B]/20 text-[#3b662a] text-xs font-extrabold rounded-xl flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      {t.freeBadge}
                    </span>
                  ) : (
                    <span className="px-3 py-1.5 bg-[#F4A259]/20 text-[#B95E23] text-xs font-extrabold rounded-xl flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5" />
                      {lang === 'en' ? 'Sponsoring Neighbors' : 'Apoyando a Vecinos'}
                    </span>
                  )}
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="75"
                  step="5"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-3 bg-[#F8E9D5] rounded-lg appearance-none cursor-pointer accent-[#B95E23]"
                  aria-label="Pay what you can contribution slider"
                />
                
                {/* Slider Tick Labels */}
                <div className="flex justify-between text-xs font-bold text-[#6E6A63]">
                  <span>$0 (Free)</span>
                  <span>$25</span>
                  <span>$50</span>
                  <span>$75+ (Community Hero)</span>
                </div>
              </div>

              {/* Dynamic Impact Tier Text */}
              <div className="bg-[#F8E9D5]/40 p-4 rounded-2xl border border-[#F8E9D5] space-y-1">
                <div className="text-xs font-extrabold text-[#B95E23] uppercase tracking-wider">
                  {lang === 'en' ? 'Community Impact:' : 'Impacto Comunitario:'}
                </div>
                <p className="text-sm font-semibold text-[#343434]">
                  {getTierMessage(amount)}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenHelpModal(`Session with $${amount} contribution`)}
                className="w-full py-4 bg-[#B95E23] hover:bg-[#9e4c17] text-white font-extrabold text-base rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>
                  {amount === 0
                    ? (lang === 'en' ? 'Book Free 1-on-1 Session' : 'Reservar Sesión 100% Gratuita')
                    : (lang === 'en' ? `Book Session with $${amount} Contribution` : `Reservar con Aporte de $${amount}`)}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>

            </div>

            {/* Right Column: Reassurance Graphic & Core Principles */}
            <div className="md:col-span-5 bg-[#FDF6EC] p-6 rounded-2xl border border-[#F8E9D5] space-y-4">
              <div className="w-full rounded-xl overflow-hidden shadow-xs bg-white p-2 border border-[#F8E9D5]">
                <img
                  src={payIllustration}
                  alt="Community members participating in pay what you can technology support"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#6E6A63]">
                <div className="flex items-start gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#8BAE7B] shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Zero financial paperwork or eligibility proof required' : 'Cero papeleo financiero ni comprobantes de ingresos'}</span>
                </div>
                <div className="flex items-start gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#8BAE7B] shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'The same patient, 1-on-1 attention for every neighbor' : 'La misma atención paciente y dedicada para cada vecino'}</span>
                </div>
                <div className="flex items-start gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#8BAE7B] shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Funded by local foundations, donations, and grant partners' : 'Financiado por fundaciones locales y donaciones solidarias'}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
