import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../data/translations';
import robertHelen from '../assets/images/illustrations/characters/robert-helen-016-couple.webp';
import helenDavid from '../assets/images/illustrations/characters/helen-david-020-connection.webp';
import anaMaria from '../assets/images/illustrations/characters/ana-maria-018-bilingual.webp';
import carlosRobert from '../assets/images/illustrations/characters/carlos-robert-019-veterans.webp';
import anaHomeVisit from '../assets/images/illustrations/characters/ana-012-home-visit.webp';
import helenPortrait from '../assets/images/illustrations/characters/helen-007-portrait.webp';

interface WhoWeHelpProps {
  lang: Language;
  onOpenHelpModal: (topic?: string) => void;
  largeText: boolean;
}

export const WhoWeHelp: React.FC<WhoWeHelpProps> = ({
  lang,
  onOpenHelpModal,
  largeText,
}) => {
  const t = translations[lang].audiences;

  const audienceImages = [
    robertHelen,    // Seniors
    helenDavid,     // Disabilities / Adaptive
    anaMaria,       // Spanish-Speaking Families
    carlosRobert,   // Military Veterans
    anaHomeVisit,   // Low-Income Families
    helenPortrait,  // Anyone Seeking Guidance
  ];

  return (
    <section id="audiences" className="py-16 sm:py-24 bg-[#F8E9D5]/30 border-b border-[#F8E9D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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

        {/* 6 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-3xl overflow-hidden border-2 border-[#F8E9D5] hover:border-[#F4A259] transition-all hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                {/* Illustration Banner */}
                <div className="relative bg-gradient-to-br from-[#FDF6EC] to-[#F8E9D5] p-5 flex items-center justify-center border-b border-[#F8E9D5]">
                  <div className="w-full h-44 rounded-2xl overflow-hidden bg-white/60 p-2 shadow-xs flex items-center justify-center">
                    <img
                      src={audienceImages[idx]}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Badge */}
                  <span className="absolute top-4 right-4 bg-[#B95E23] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2.5">
                  <h3 className="font-extrabold text-xl text-[#343434] font-display group-hover:text-[#B95E23] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-[#B95E23] uppercase tracking-wide">
                    {item.subtitle}
                  </div>
                  <p className="text-sm text-[#6E6A63] leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenHelpModal(item.title)}
                  className="w-full py-2.5 px-4 bg-[#FDF6EC] hover:bg-[#F4A259] text-[#B95E23] hover:text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 border border-[#F8E9D5] hover:border-[#F4A259]"
                >
                  <span>{lang === 'en' ? 'Get Support for This' : 'Solicitar Este Apoyo'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
