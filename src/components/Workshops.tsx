import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface WorkshopsProps {
  lang: Language;
  onOpenWorkshopModal?: (workshopTitle: string) => void;
  largeText: boolean;
}

export const Workshops: React.FC<WorkshopsProps> = ({
  lang,
  largeText,
}) => {
  const t = translations[lang].workshops;

  return (
    <section id="workshops" className="py-16 sm:py-24 bg-[#F8E9D5]/30 border-b border-[#F8E9D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Content */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#B95E23]/10 text-[#B95E23] text-xs sm:text-sm font-bold uppercase tracking-wider">
            {t.tag}
          </span>
          <h2 className={`font-extrabold text-[#343434] tracking-tight font-display ${
            largeText ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl lg:text-4xl'
          }`}>
            {t.headline}
          </h2>
          <p className={`text-[#6E6A63] leading-relaxed ${largeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}`}>
            {t.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#survey"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F4A259] hover:bg-[#e79246] text-white font-extrabold text-base rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#B95E23]/20"
            >
              <span>{lang === 'en' ? 'Share What You’d Like to Learn' : 'Comparta lo que le gustaría aprender'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

