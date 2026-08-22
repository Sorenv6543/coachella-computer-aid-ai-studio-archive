import React from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Language, translations } from '../data/translations';
import workshopSmartphone from '../assets/images/illustrations/workshop/workshop-403-smartphone-basics-title-card.webp';
import workshopComputer from '../assets/images/illustrations/workshop/workshop-404-computer-basics-title-card.webp';
import workshopChat from '../assets/images/illustrations/workshop/workshop-412-post-workshop-chat.webp';
import workshopReminder from '../assets/images/illustrations/workshop/workshop-415-workshop-reminder.webp';

interface WorkshopsProps {
  lang: Language;
  onOpenWorkshopModal: (workshopTitle: string) => void;
  largeText: boolean;
}

export const Workshops: React.FC<WorkshopsProps> = ({
  lang,
  onOpenWorkshopModal,
  largeText,
}) => {
  const t = translations[lang].workshops;

  const workshopThumbnails = [
    workshopSmartphone,
    workshopReminder,
    workshopChat,
    workshopComputer,
  ];

  return (
    <section id="workshops" className="py-16 sm:py-24 bg-[#F8E9D5]/30 border-b border-[#F8E9D5]">
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

        {/* 4 Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.list.map((workshop, idx) => (
            <div
              key={workshop.id}
              className="bg-[#FFFFFF] rounded-3xl overflow-hidden border-2 border-[#F8E9D5] hover:border-[#F4A259] transition-all hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Visual Header / Thumbnail */}
                <div className="relative bg-[#FDF6EC] p-4 flex items-center justify-between border-b border-[#F8E9D5]">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#F8E9D5] bg-white p-1 shrink-0">
                      <img
                        src={workshopThumbnails[idx]}
                        alt={workshop.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#B95E23] bg-[#B95E23]/10 px-2.5 py-0.5 rounded-full">
                        {lang === 'en' ? 'Community Class' : 'Clase Comunitaria'}
                      </span>
                      <div className="text-xs text-[#6E6A63] font-semibold mt-1 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? `Coaches: ${workshop.instructor}` : `Tutores: ${workshop.instructor}`}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-extrabold text-[#3b662a] bg-[#8BAE7B]/20 px-3 py-1 rounded-full">
                    {workshop.seats} {t.spotsLeft}
                  </span>
                </div>

                {/* Main Workshop Info */}
                <div className="p-6 space-y-4">
                  <h3 className="font-extrabold text-xl text-[#343434] font-display">
                    {workshop.title}
                  </h3>

                  <p className="text-sm text-[#6E6A63] leading-relaxed">
                    {workshop.desc}
                  </p>

                  <div className="space-y-2 pt-2 text-xs sm:text-sm font-semibold text-[#343434] bg-[#FDF6EC] p-3.5 rounded-2xl border border-[#F8E9D5]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#B95E23] shrink-0" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#B95E23] shrink-0" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#B95E23] shrink-0" />
                      <span>{workshop.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Register Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenWorkshopModal(workshop.title)}
                  className="w-full py-3.5 bg-[#F4A259] hover:bg-[#e79246] text-white font-extrabold text-base rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 border border-[#B95E23]/20"
                >
                  <span>{t.registerBtn}</span>
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
