import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Language, translations } from '../data/translations';
import robertPortrait from '../assets/images/illustrations/characters/robert-001-portrait.webp';
import mariaPortrait from '../assets/images/illustrations/characters/maria-004-portrait.webp';
import carlosRobert from '../assets/images/illustrations/characters/carlos-robert-019-veterans.webp';
import helenPortrait from '../assets/images/illustrations/characters/helen-007-portrait.webp';

interface StoriesProps {
  lang: Language;
  largeText: boolean;
}

export const Stories: React.FC<StoriesProps> = ({ lang, largeText }) => {
  const t = translations[lang].stories;

  const avatars = [
    robertPortrait,
    mariaPortrait,
    carlosRobert,
    helenPortrait,
  ];

  return (
    <section id="stories" className="py-16 sm:py-24 bg-[#FDF6EC] border-b border-[#F8E9D5]">
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
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border-2 border-[#F8E9D5] hover:border-[#F4A259] transition-all hover:shadow-lg flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                {/* 5 Stars Rating & Outcome Pill */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#F4A259]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-[#B95E23] bg-[#B95E23]/10 px-3 py-1 rounded-full">
                    {item.outcome}
                  </span>
                </div>

                {/* Quote Body */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-[#F8E9D5] absolute -top-3 -left-2 -z-0" />
                  <p className="text-sm sm:text-base text-[#343434] italic leading-relaxed relative z-10 pt-1">
                    “{item.quote}”
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-[#F8E9D5] flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#F4A259] bg-[#F8E9D5] shrink-0 p-0.5">
                  <img
                    src={avatars[idx]}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-[#343434] font-display">
                    {item.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#B95E23]">
                    {item.city}, CA
                  </p>
                  <p className="text-xs text-[#6E6A63]">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
