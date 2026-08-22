import React, { useState, useEffect } from 'react';
import { Phone, Globe, Type, Menu, X, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  largeText: boolean;
  setLargeText: (large: boolean) => void;
  onOpenHelpModal: (preselectedTopic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  largeText,
  setLargeText,
  onOpenHelpModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t.services },
    { href: "#audiences", label: t.audiences },
    { href: "#how-it-works", label: t.howItWorks },
    { href: "#workshops", label: t.workshops },
    { href: "#pay-what-you-can", label: t.payWhatYouCan },
    { href: "#stories", label: t.stories },
    { href: "#survey", label: t.survey },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#F8E9D5]'
          : 'bg-[#FFFFFF] py-3.5 border-b border-[#F8E9D5]/60'
      }`}
    >
      {/* Top Accessibility & Direct Line Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-1.5 hidden md:flex items-center justify-between text-xs text-[#6E6A63] border-b border-[#F8E9D5]/40 pb-1.5">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#B95E23] bg-[#B95E23]/10 px-2.5 py-0.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            501(c)(3) Coachella Valley Nonprofit
          </span>
          <span className="hidden lg:inline text-[#6E6A63]">
            Palm Springs • Cathedral City • Indio • Coachella • Desert Hot Springs
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            id="nav-direct-phone-top"
            href="tel:7605554357"
            className="flex items-center gap-1.5 font-bold text-[#B95E23] hover:text-[#944412] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(760) 555-HELP (4357)</span>
          </a>

          {/* Text Size Toggle */}
          <div className="flex items-center gap-1 bg-[#F8E9D5]/50 px-2 py-0.5 rounded-md">
            <Type className="w-3.5 h-3.5 text-[#B95E23]" />
            <span className="text-[11px] font-medium mr-1">{t.fontSize}:</span>
            <button
              id="font-size-standard-btn"
              onClick={() => setLargeText(false)}
              className={`px-1.5 py-0.5 rounded text-xs font-bold transition-all ${
                !largeText
                  ? 'bg-[#B95E23] text-white'
                  : 'text-[#343434] hover:bg-[#F4A259]/20'
              }`}
              title="Standard text size"
            >
              A
            </button>
            <button
              id="font-size-large-btn"
              onClick={() => setLargeText(true)}
              className={`px-1.5 py-0.5 rounded text-xs font-bold transition-all ${
                largeText
                  ? 'bg-[#B95E23] text-white'
                  : 'text-[#343434] hover:bg-[#F4A259]/20'
              }`}
              title="Large high-visibility text size"
            >
              A+
            </button>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-1 bg-[#F8E9D5]/50 px-2 py-0.5 rounded-md">
            <Globe className="w-3.5 h-3.5 text-[#B95E23]" />
            <button
              id="lang-toggle-en"
              onClick={() => setLang('en')}
              className={`px-1.5 py-0.5 rounded text-xs font-bold transition-all ${
                lang === 'en'
                  ? 'bg-[#B95E23] text-white'
                  : 'text-[#343434] hover:bg-[#F4A259]/20'
              }`}
            >
              EN
            </button>
            <button
              id="lang-toggle-es"
              onClick={() => setLang('es')}
              className={`px-1.5 py-0.5 rounded text-xs font-bold transition-all ${
                lang === 'es'
                  ? 'bg-[#B95E23] text-white'
                  : 'text-[#343434] hover:bg-[#F4A259]/20'
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a id="brand-home-link" href="#" className="flex items-center gap-3 group focus:ring-2 focus:ring-[#B95E23] rounded-lg p-1">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#F4A259] to-[#B95E23] flex items-center justify-center text-white shadow-md shadow-[#B95E23]/20 group-hover:scale-105 transition-transform">
            <HeartHandshake className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-extrabold text-lg sm:text-xl tracking-tight text-[#343434] leading-none font-display">
              Coachella <span className="text-[#B95E23]">Computer Aid</span>
            </div>
            <div className="text-xs text-[#6E6A63] font-medium tracking-wide">
              CCA · Ayuda Tecnológica Comunitaria
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-semibold text-[#343434] hover:text-[#B95E23] hover:bg-[#FDF6EC] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-get-help-btn"
            onClick={() => onOpenHelpModal()}
            className="px-4 sm:px-5 py-2.5 bg-[#F4A259] hover:bg-[#e79246] text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2 border border-[#B95E23]/20 focus:ring-2 focus:ring-[#B95E23]"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>{t.getHelp}</span>
          </button>
        </div>

        {/* Mobile controls: Lang toggle + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="mobile-lang-quick-toggle"
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="px-2.5 py-1.5 bg-[#F8E9D5] text-[#B95E23] text-xs font-bold rounded-lg flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#343434] hover:bg-[#F8E9D5] transition-colors focus:ring-2 focus:ring-[#B95E23]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#FFFFFF] border-b border-[#F8E9D5] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#F8E9D5] mb-3">
            <span className="text-xs font-bold text-[#6E6A63] uppercase tracking-wider">
              {lang === 'en' ? 'Accessibility & Settings' : 'Accesibilidad y Ajustes'}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLargeText(!largeText)}
                className={`px-3 py-1 text-xs font-bold rounded-lg border ${
                  largeText
                    ? 'bg-[#B95E23] text-white border-[#B95E23]'
                    : 'bg-[#FDF6EC] text-[#343434] border-[#F8E9D5]'
                }`}
              >
                {largeText ? 'Large Text: ON' : 'Large Text: OFF'}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 text-base font-semibold text-[#343434] hover:bg-[#FDF6EC] hover:text-[#B95E23] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#F8E9D5] flex flex-col gap-3">
            <button
              id="mobile-drawer-get-help-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHelpModal();
              }}
              className="w-full py-3 bg-[#F4A259] text-white font-bold text-base rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <HeartHandshake className="w-5 h-5" />
              {t.getHelp}
            </button>

            <a
              id="mobile-drawer-call-btn"
              href="tel:7605554357"
              className="w-full py-2.5 bg-[#FDF6EC] text-[#B95E23] border border-[#B95E23]/30 font-bold text-sm rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              (760) 555-HELP (4357)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
