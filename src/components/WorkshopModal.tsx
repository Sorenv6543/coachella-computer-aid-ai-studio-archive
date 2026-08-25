import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, User, Phone, Mail, Users } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface WorkshopModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  workshopTitle: string;
}

export const WorkshopModal: React.FC<WorkshopModalProps> = ({
  isOpen,
  onClose,
  lang,
  workshopTitle,
}) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState("1");
  const [needsDevice, setNeedsDevice] = useState(false);
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
      <div className="relative w-full max-w-lg bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#F8E9D5] animate-in fade-in zoom-in-95 duration-200">
        
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
              {lang === 'en' ? 'Seat Reserved!' : '¡Cupo Reservado!'}
            </h3>
            <p className="text-base text-[#6E6A63]">
              {lang === 'en'
                ? `We look forward to seeing you at: ${workshopTitle}. We will send you a text reminder 24 hours prior.`
                : `Le esperamos con gusto en: ${workshopTitle}. Le enviaremos un recordatorio por mensaje de texto 24 horas antes.`}
            </p>
            <div className="bg-[#FDF6EC] p-4 rounded-2xl border border-[#F8E9D5] text-left text-sm text-[#343434] space-y-1 mt-4">
              <p><strong>{lang === 'en' ? 'Attendee:' : 'Asistente:'}</strong> {fullName}</p>
              <p><strong>{lang === 'en' ? 'Seats Reserved:' : 'Cupos:'}</strong> {attendees}</p>
              <p><strong>{lang === 'en' ? 'Loaner Device Needed:' : 'Préstamo de Equipo:'}</strong> {needsDevice ? (lang === 'en' ? 'Yes' : 'Sí') : (lang === 'en' ? 'No, bringing own device' : 'No, traigo mi propio equipo')}</p>
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
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#B95E23] uppercase tracking-wide">
                  {lang === 'en' ? 'Free Community Workshop' : 'Taller Comunitario Gratuito'}
                </span>
                <h3 className="font-extrabold text-lg text-[#343434] font-display leading-tight">
                  {workshopTitle}
                </h3>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#343434] uppercase tracking-wider mb-1">
                  {lang === 'en' ? 'Your Name' : 'Su Nombre'} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#6E6A63] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Helen Palmer"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#FDF6EC] border border-[#F8E9D5] text-sm text-[#343434] focus:bg-white focus:border-[#B95E23]"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#343434] uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'Phone Number' : 'Teléfono'} *
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
                    {lang === 'en' ? 'Email (Optional)' : 'Correo (Opcional)'}
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

              {/* Number of Seats */}
              <div>
                <label className="block text-xs font-bold text-[#343434] uppercase tracking-wider mb-1">
                  {lang === 'en' ? 'How many people are coming with you?' : '¿Cuántas personas asistirán?'}
                </label>
                <select
                  value={attendees}
                  onChange={(e) => setAttendees(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FDF6EC] border border-[#F8E9D5] text-sm text-[#343434] focus:bg-white focus:border-[#B95E23]"
                >
                  <option value="1">Just Me (1 Seat)</option>
                  <option value="2">Me and a Spouse / Friend (2 Seats)</option>
                  <option value="3">Small Family Group (3 Seats)</option>
                </select>
              </div>

              {/* Loaner Tablet Checkbox */}
              <div className="pt-2">
                <label className="flex items-center gap-3 p-3 bg-[#FDF6EC] rounded-xl border border-[#F8E9D5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needsDevice}
                    onChange={(e) => setNeedsDevice(e.target.checked)}
                    className="w-5 h-5 accent-[#B95E23] rounded-sm cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-[#343434]">
                    {lang === 'en'
                      ? 'I do not have a device yet. Please provide a free loaner tablet for this class.'
                      : 'Aún no tengo dispositivo. Por favor préstenme una tableta durante la clase.'}
                  </span>
                </label>
              </div>

            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#F4A259] hover:bg-[#e79246] text-white font-extrabold text-base rounded-2xl shadow-lg transition-all border border-[#B95E23]/20"
            >
              {lang === 'en' ? 'Confirm My Free Reservation' : 'Confirmar mi Reservación Gratuita'}
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
