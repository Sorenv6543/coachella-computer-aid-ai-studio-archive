import React, { useState } from 'react';
import { MessageSquarePlus, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { Language, translations } from '../data/translations';
import surveyImg from '../assets/images/illustrations/ui/ui-824-community-survey-cta.webp';

interface SurveyProps {
  lang: Language;
  largeText: boolean;
}

export const Survey: React.FC<SurveyProps> = ({ lang, largeText }) => {
  const t = translations[lang].survey;
  const [q1Selected, setQ1Selected] = useState<string>("");
  const [q2Selected, setQ2Selected] = useState<string>("");
  const [q3Selected, setQ3Selected] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="survey" className="py-16 sm:py-24 bg-[#F8E9D5]/30 border-b border-[#F8E9D5]">
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

        {/* Survey Box */}
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 shadow-xl shadow-[#B95E23]/5 border-2 border-[#F8E9D5]">
          
          {isSubmitted ? (
            <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-[#8BAE7B]/20 text-[#3b662a] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-extrabold text-2xl sm:text-3xl text-[#343434] font-display">
                {t.thankYouTitle}
              </h3>
              <p className="text-base text-[#6E6A63] max-w-lg mx-auto">
                {t.thankYouDesc}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-[#FDF6EC] hover:bg-[#F8E9D5] text-[#B95E23] font-bold text-sm rounded-xl transition-colors border border-[#F8E9D5]"
              >
                {lang === 'en' ? 'Submit another suggestion' : 'Enviar otra sugerencia'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Question 1 */}
              <div className="space-y-3">
                <label className="text-base sm:text-lg font-bold text-[#343434] block font-display">
                  {t.q1}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {t.q1Options.map((opt, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setQ1Selected(opt)}
                      className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${
                        q1Selected === opt
                          ? 'bg-[#B95E23] text-white border-[#B95E23] shadow-xs'
                          : 'bg-[#FDF6EC] text-[#343434] border-[#F8E9D5] hover:border-[#F4A259]'
                      }`}
                    >
                      <span>{opt}</span>
                      {q1Selected === opt && <CheckCircle2 className="w-4 h-4 text-white shrink-0 ml-2" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div className="space-y-3 pt-2 border-t border-[#F8E9D5]">
                <label className="text-base sm:text-lg font-bold text-[#343434] block font-display">
                  {t.q2}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {t.q2Options.map((opt, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setQ2Selected(opt)}
                      className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${
                        q2Selected === opt
                          ? 'bg-[#B95E23] text-white border-[#B95E23] shadow-xs'
                          : 'bg-[#FDF6EC] text-[#343434] border-[#F8E9D5] hover:border-[#F4A259]'
                      }`}
                    >
                      <span>{opt}</span>
                      {q2Selected === opt && <CheckCircle2 className="w-4 h-4 text-white shrink-0 ml-2" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3 */}
              <div className="space-y-3 pt-2 border-t border-[#F8E9D5]">
                <label className="text-base sm:text-lg font-bold text-[#343434] block font-display">
                  {t.q3}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {t.q3Options.map((opt, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setQ3Selected(opt)}
                      className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${
                        q3Selected === opt
                          ? 'bg-[#B95E23] text-white border-[#B95E23] shadow-xs'
                          : 'bg-[#FDF6EC] text-[#343434] border-[#F8E9D5] hover:border-[#F4A259]'
                      }`}
                    >
                      <span>{opt}</span>
                      {q3Selected === opt && <CheckCircle2 className="w-4 h-4 text-white shrink-0 ml-2" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#F8E9D5]">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    className="w-full p-3.5 rounded-xl bg-[#FDF6EC] border border-[#F8E9D5] focus:bg-white focus:border-[#B95E23] text-sm text-[#343434] placeholder:text-[#6E6A63]/60 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={t.emailPhonePlaceholder}
                    className="w-full p-3.5 rounded-xl bg-[#FDF6EC] border border-[#F8E9D5] focus:bg-white focus:border-[#B95E23] text-sm text-[#343434] placeholder:text-[#6E6A63]/60 transition-colors"
                  />
                </div>
              </div>

              {/* Comments Text Area */}
              <div>
                <textarea
                  rows={3}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder={t.commentsPlaceholder}
                  className="w-full p-3.5 rounded-xl bg-[#FDF6EC] border border-[#F8E9D5] focus:bg-white focus:border-[#B95E23] text-sm text-[#343434] placeholder:text-[#6E6A63]/60 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#F4A259] hover:bg-[#e79246] text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-[#B95E23]/20"
              >
                <Send className="w-5 h-5" />
                <span>{t.submitBtn}</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
