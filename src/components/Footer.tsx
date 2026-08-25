import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, HeartHandshake, ShieldAlert, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Language, translations } from '../data/translations';
import mountainStrip from '../assets/images/illustrations/ui/ui-839-footer-mountain-strip.webp';

interface FooterProps {
  lang: Language;
  onOpenHelpModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenHelpModal }) => {
  const t = translations[lang].footer;
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="contact" className="bg-[#343434] text-[#FDF6EC] pt-12 pb-16 relative overflow-hidden">
      
      {/* San Jacinto Mountains Panoramic Skyline Strip */}
      <div className="w-full h-16 sm:h-24 overflow-hidden mb-8 opacity-90">
        <img
          src={mountainStrip}
          alt="San Jacinto desert mountain skyline illustration"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Scam Warning Alert Box */}
        <div className="bg-[#B95E23]/20 border border-[#F4A259]/40 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
          <ShieldAlert className="w-6 h-6 text-[#F4A259] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#F8E9D5] leading-relaxed">
            <span className="font-extrabold text-[#F4A259] block mb-0.5">
              {lang === 'en' ? 'Community Safety Notice:' : 'Aviso de Seguridad Comunitaria:'}
            </span>
            {t.scamAlert}
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Nonprofit Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F4A259] flex items-center justify-center text-[#343434] font-extrabold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="font-extrabold text-xl text-white font-display">
                Coachella <span className="text-[#F4A259]">Computer Aid</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#F8E9D5]/80 leading-relaxed">
              {t.tagline}
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl text-xs font-bold text-[#F4A259]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nonprofitBadge}</span>
            </div>
          </div>

          {/* Column 2: Direct Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-extrabold text-base text-white font-display uppercase tracking-wider">
              {t.contactTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F8E9D5]/90">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4A259] shrink-0" />
                <a href="tel:7605554357" className="font-bold hover:text-white transition-colors">
                  {t.hotline}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F4A259] shrink-0" />
                <span>{t.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F4A259] shrink-0" />
                <span>{t.hours}</span>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#F4A259] shrink-0 mt-0.5" />
                <span className="text-xs text-[#F8E9D5]/70">{t.serviceAreas}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Large-Print Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-extrabold text-base text-white font-display uppercase tracking-wider">
              {t.newsletterTitle}
            </h4>
            <p className="text-xs text-[#F8E9D5]/80">
              {t.newsletterDesc}
            </p>
            {subscribed ? (
              <div className="p-3 bg-[#8BAE7B]/20 border border-[#8BAE7B]/40 rounded-xl text-xs font-bold text-[#8BAE7B] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{lang === 'en' ? 'Subscribed! Check your inbox soon.' : '¡Suscrito con éxito!'}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={lang === 'en' ? 'Your email address' : 'Su correo electrónico'}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder:text-white/50 focus:outline-hidden focus:border-[#F4A259]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#F4A259] hover:bg-[#e79246] text-[#343434] font-extrabold text-xs rounded-xl transition-colors shrink-0"
                >
                  {t.newsletterBtn}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Mission Pledge */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8E9D5]/60 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {t.rights}
          </div>
          <div className="flex items-center gap-4">
            <a href="#mission" className="hover:text-white transition-colors">Mission</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#pay-what-you-can" className="hover:text-white transition-colors">Pay What You Can</a>
            <a href="#survey" className="hover:text-white transition-colors">Survey</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
