import React, { useState } from 'react';
import { X, HeartHandshake, CheckCircle2, Phone, Calendar, User, Mail, MapPin } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface HelpRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedTopic?: string;
}

export const HelpRequestModal: React.FC<HelpRequestModalProps> = ({
  isOpen,
  onClose,
  lang,
  preselectedTopic = "",
}) => {
  const t = translations[lang].modal;
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Palm Springs");
  const [preferredLang, setPreferredLang] = useState(lang === 'es' ? 'Spanish' : 'English');
  const [meetingType, setMeetingType] = useState("library");
  const [topic, setTopic] = useState(preselectedTopic || "Smartphone / Tablet");
  const [notes, setNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#343434]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#F8E9D5] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#6E6A63] hover:text-[#343434] hover:bg-[#FDF6EC] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in">
            <div className="w-16 h-16 bg-[#8BAE7B]/20 text-[#3b662a] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-extrabold text-2xl text-[#343434] font-display">
              {t.successTitle}
            </h3>
            <p className="text-base text-[#6E6A63]">
              {t.successMessage}
            </p>
            <div className="bg-[#FDF6EC] p-4 rounded-2xl border border-[#F8E9D5] text-left text-sm text-[#343434] space-y-1 mt-4">
              <p><strong>{lang === 'en' ? 'Name:' : 'Nombre:'}</strong> {fullName}</p>
              <p><strong>{lang === 'en' ? 'Phone:' : 'Teléfono:'}</strong> {phone}</p>
              <p><strong>{lang === 'en' ? 'Topic:' : 'Tema:'}</strong> {topic}</p>
              <p><strong>{lang === 'en' ? 'City:' : 'Ciudad:'}</strong> {city}</p>
            </div>
            <button
              onClick={resetAndClose}
              className="mt-6 w-full py-3.5 bg-[#B95E23] text-white font-extrabold rounded-2xl"
            >
              {lang === 'en' ? 'Done' : 'Listo'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="flex items-center gap-3 pr-8">
              <div className="w-10 h-10 rounded-xl bg-[#F4A259]/20 flex items-center justify-center text-[#B95E23] shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-[#343434] font-display leading-tight">
                  {t.title}
                </h3>
                <p className="text-xs text-[#6E6A63]">
                  {t.subtitle}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#343434] uppercase tracking-wider mb-1">
                  {t.fullName} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#6E6A63] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Robert Smith / Maria Gomez"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#FDF6EC] border border-[#F8E9D5] text-sm text-[#343434] focus:bg-white focus:border-[#B95E23]"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#343434] uppercase tracking-wider mb-1">
                    {t.phone} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#6E6A63] absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(760) 000-0000"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#FDF6EC] border border-[#F8E9D5] text-sm text-[#343434] focus:bg-white focus:border-[#B95E23]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#343434] uppercase tracking-wider mb-1">
                    {t.email}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#6E6A63] absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#FDF6EC] border border-[#F8E9D5] text-sm text-[#343434] focus:bg-white focus:border-[#B95E23]"
                    />
                  </div>
                </div>
              </div>

              {/* City & Preferred Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#343434] uppercase tracking-wider mb-1">
                    {t.city}
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FDF6EC] border border-[#F8E9D5] text-sm text-[#343434] focus:bg-white focus:border-[#B95E23]"
                  >
                    <option value="Palm Springs">Palm Springs</option>
                    <option value="Cathedral City">Cathedral City</option>
                    <option value="Rancho Mirage">Rancho Mirage</option>
                    <option value="Palm Desert">Palm Desert</option>
                    <option value="Indian Wells">Indian Wells</option>
                    <option value="La Quinta">La Quinta</option>
                    <option value="Indio">Indio</option>
                    <option value="Coachella">Coachella</option>
                    <option value="Desert Hot Springs">Desert Hot Springs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#343434] uppercase tracking-wider mb-1">
                    {t.preferredLanguage}
                  </label>
                  <select
                    value={preferredLang}
                    onChange={(e) => setPreferredLang(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FDF6EC] border border-[#F8E9D5] text-sm text-[#343434] focus:bg-white focus:border-[#B95E23]"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Español (Bilingual Coach)</option>
                  </select>
                </div>
              </div>

              {/* Topic */}
              <div>
                <label className="block text-xs font-bold text-[#343434] uppercase tracking-wider mb-1">
                  {t.topic}
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. Video calls, iPad setup, scam safety"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FDF6EC] border border-[#F8E9D5] text-sm text-[#343434] focus:bg-white focus:border-[#B95E23]"
                />
              </div>

              {/* Meeting Type */}
              <div>
                <label className="block text-xs font-bold text-[#343434] uppercase tracking-wider mb-1">
                  {t.meetingType}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setMeetingType("library")}
                    className={`p-2.5 rounded-xl border text-center font-bold ${
                      meetingType === "library"
                        ? "bg-[#B95E23] text-white border-[#B95E23]"
                        : "bg-[#FDF6EC] text-[#343434] border-[#F8E9D5]"
                    }`}
                  >
                    {t.inPerson}
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeetingType("home")}
                    className={`p-2.5 rounded-xl border text-center font-bold ${
                      meetingType === "home"
                        ? "bg-[#B95E23] text-white border-[#B95E23]"
                        : "bg-[#FDF6EC] text-[#343434] border-[#F8E9D5]"
                    }`}
                  >
                    {t.homeVisit}
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeetingType("phone")}
                    className={`p-2.5 rounded-xl border text-center font-bold ${
                      meetingType === "phone"
                        ? "bg-[#B95E23] text-white border-[#B95E23]"
                        : "bg-[#FDF6EC] text-[#343434] border-[#F8E9D5]"
                    }`}
                  >
                    {t.phoneCall}
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-[#343434] uppercase tracking-wider mb-1">
                  {t.notes}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={lang === 'en' ? 'Any specific details or questions?' : '¿Detalles adicionales sobre su duda?'}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FDF6EC] border border-[#F8E9D5] text-sm text-[#343434] focus:bg-white focus:border-[#B95E23] resize-none"
                />
              </div>

            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#B95E23] hover:bg-[#9e4c17] text-white font-extrabold text-base rounded-2xl shadow-lg transition-all"
            >
              {t.submit}
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
