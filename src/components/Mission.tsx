import React from 'react';
import { Heart, Sparkles, Clock, ShieldCheck, Users, Smile } from 'lucide-react';
import { Language, translations } from '../data/translations';
import missionImg from '../assets/images/illustrations/hero/hero-110-about-page-mission.webp';
import castImg from '../assets/images/illustrations/characters/all-017-full-cast-group.webp';

interface MissionProps {
  lang: Language;
  largeText: boolean;
}

export const Mission: React.FC<MissionProps> = ({ lang, largeText }) => {
  const t = translations[lang].mission;

  const pillars = [
    {
      icon: <Clock className="w-6 h-6 text-[#B95E23]" />,
      title: t.pillar1Title,
      desc: t.pillar1Desc,
      bg: "bg-[#F4A259]/10"
    },
    {
      icon: <Heart className="w-6 h-6 text-[#B95E23]" />,
      title: t.pillar2Title,
      desc: t.pillar2Desc,
      bg: "bg-[#8BAE7B]/15"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#B95E23]" />,
      title: t.pillar3Title,
      desc: t.pillar3Desc,
      bg: "bg-[#78B8D9]/15"
    },
    {
      icon: <Users className="w-6 h-6 text-[#B95E23]" />,
      title: t.pillar4Title,
      desc: t.pillar4Desc,
      bg: "bg-[#F8E9D5]"
    }
  ];

  return (
    <section id="mission" className="py-16 sm:py-24 bg-[#FDF6EC] border-b border-[#F8E9D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#B95E23]/10 text-[#B95E23] text-xs sm:text-sm font-bold uppercase tracking-wider">
            {t.tag}
          </span>
          <h2 className={`font-extrabold text-[#343434] tracking-tight font-display ${
            largeText ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl lg:text-4xl'
          }`}>
            {t.headline}
          </h2>
          <p className={`font-bold text-[#B95E23] italic ${largeText ? 'text-xl' : 'text-lg'}`}>
            {t.quote}
          </p>
        </div>

        {/* Narrative Box with Group Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 shadow-lg shadow-[#B95E23]/5 border-2 border-[#F8E9D5] mb-14">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="font-extrabold text-2xl sm:text-3xl text-[#343434] font-display">
              {lang === 'en' ? 'Built for Community, Rooted in Empathy' : 'Nacido en la Comunidad, Basado en la Empatía'}
            </h3>
            <p className={`text-[#6E6A63] leading-relaxed ${largeText ? 'text-lg' : 'text-base'}`}>
              {t.body}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FDF6EC] text-[#343434] border border-[#F8E9D5] rounded-lg text-xs font-bold">
                <Smile className="w-4 h-4 text-[#8BAE7B]" />
                {lang === 'en' ? 'Friendly & Patient Coaches' : 'Tutores Amables y Pacientes'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FDF6EC] text-[#343434] border border-[#F8E9D5] rounded-lg text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-[#78B8D9]" />
                {lang === 'en' ? 'Safe & Confidential' : 'Seguro y Confidencial'}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden bg-[#F8E9D5]/40 border border-[#F8E9D5] shadow-xs">
              <img
                src={castImg}
                alt="Diverse cast of community members and coaches smiling together"
                className="w-full h-auto object-cover max-h-80 mx-auto"
              />
              <div className="p-3 bg-[#FDF6EC] text-center text-xs text-[#6E6A63] font-medium border-t border-[#F8E9D5]">
                {lang === 'en'
                  ? 'Coaches, volunteers, and neighbors learning and growing together in Coachella Valley.'
                  : 'Tutores, voluntarios y vecinos aprendiendo juntos en el Valle de Coachella.'}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#F8E9D5] hover:border-[#F4A259] transition-all hover:shadow-md space-y-3"
            >
              <div className={`w-12 h-12 rounded-xl ${pillar.bg} flex items-center justify-center`}>
                {pillar.icon}
              </div>
              <h4 className="font-extrabold text-lg text-[#343434] font-display">
                {pillar.title}
              </h4>
              <p className="text-sm text-[#6E6A63] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
