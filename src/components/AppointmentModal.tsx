import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { CLINIC_SERVICES, CLINIC_DOCTORS, CLINIC_INFO } from '../data/dentalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedDoctorId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedDoctorId,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [serviceId, setServiceId] = useState<string>(preselectedServiceId || CLINIC_SERVICES[0].id);
  const [doctorId, setDoctorId] = useState<string>(preselectedDoctorId || 'any');
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-20');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  
  // Patient details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hasInsurance, setHasInsurance] = useState(true);
  const [insuranceProvider, setInsuranceProvider] = useState('Delta Dental');
  const [notes, setNotes] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);

  // Booking Result
  const [confirmedBooking, setConfirmedBooking] = useState<{
    refCode: string;
    date: string;
    time: string;
    serviceName: string;
    doctorName: string;
    patientName: string;
  } | null>(null);

  if (!isOpen) return null;

  const timeSlots = [
    '08:30 AM', '09:15 AM', '10:00 AM', '11:00 AM',
    '01:30 PM', '02:30 PM', '03:45 PM', '05:00 PM'
  ];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Validate patient details
      if (!fullName.trim() || !email.trim() || !phone.trim()) {
        return;
      }
      const s = CLINIC_SERVICES.find(srv => srv.id === serviceId);
      const d = CLINIC_DOCTORS.find(doc => doc.id === doctorId);
      
      const ref = 'CRD-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmedBooking({
        refCode: ref,
        date: selectedDate,
        time: selectedTime,
        serviceName: s ? s.title : 'Comprehensive Dental Consultation',
        doctorName: d ? d.name : 'First Available Dental Specialist',
        patientName: fullName
      });
      setStep(3);
    }
  };

  const handleResetAndClose = () => {
    setConfirmedBooking(null);
    setStep(1);
    setFullName('');
    setEmail('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-100 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#004F6E] to-[#00A8CC] text-white flex items-center justify-between sticky top-0 z-10">
          <div>
            <span className="text-xs font-semibold text-[#FDD835] uppercase tracking-wider block">
              Schedule Your Visit
            </span>
            <h2 className="text-xl font-bold">Book a Dental Appointment</h2>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 3 && (
          <div className="px-6 py-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
            <div className={`flex items-center gap-1.5 ${step === 1 ? 'text-[#00A8CC] font-semibold' : 'text-slate-700'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 1 ? 'bg-[#00A8CC] text-white' : 'bg-slate-200'}`}>
                1
              </span>
              <span>Treatment & Time</span>
            </div>
            <div className="h-0.5 w-12 bg-slate-200" />
            <div className={`flex items-center gap-1.5 ${step === 2 ? 'text-[#00A8CC] font-semibold' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 2 ? 'bg-[#00A8CC] text-white' : 'bg-slate-200'}`}>
                2
              </span>
              <span>Patient Details</span>
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6">
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-5">
              {/* Emergency Toggle Alert */}
              <div
                onClick={() => setIsEmergency(!isEmergency)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                  isEmergency ? 'bg-amber-50 border-amber-300 text-amber-900' : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <AlertCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isEmergency ? 'text-amber-600' : 'text-slate-400'}`} />
                <div className="text-xs">
                  <span className="font-semibold block text-sm">Is this a severe pain or dental emergency?</span>
                  <span className="text-slate-500">
                    Check here for prioritized same-day triage or call our 24/7 line at {CLINIC_INFO.emergencyPhone}
                  </span>
                </div>
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Select Dental Treatment
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-hidden focus:border-[#00A8CC] shadow-xs"
                >
                  {CLINIC_SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title} ({srv.category}) — {srv.priceEstimate}
                    </option>
                  ))}
                </select>
              </div>

              {/* Doctor Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Preferred Doctor / Specialist
                </label>
                <select
                  value={doctorId}
                  onChange={(e) => setDoctorId(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-hidden focus:border-[#00A8CC] shadow-xs"
                >
                  <option value="any">First Available Dental Specialist</option>
                  {CLINIC_DOCTORS.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name} — {doc.specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min="2026-10-19"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-hidden focus:border-[#00A8CC] shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-hidden focus:border-[#00A8CC] shadow-xs"
                  >
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#00A8CC] hover:bg-[#008cae] text-white text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Continue to Patient Details
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Adams"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="rachel@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC]"
                />
              </div>

              {/* Insurance */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-800">Do you have dental insurance?</span>
                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center text-xs font-medium text-slate-700 gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="insurance"
                        checked={hasInsurance}
                        onChange={() => setHasInsurance(true)}
                        className="text-[#00A8CC] focus:ring-[#00A8CC]"
                      />
                      <span>Yes (PPO)</span>
                    </label>
                    <label className="inline-flex items-center text-xs font-medium text-slate-700 gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="insurance"
                        checked={!hasInsurance}
                        onChange={() => setHasInsurance(false)}
                        className="text-[#00A8CC] focus:ring-[#00A8CC]"
                      />
                      <span>Self-Pay / Club</span>
                    </label>
                  </div>
                </div>

                {hasInsurance && (
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1">Select Insurance Carrier:</label>
                    <select
                      value={insuranceProvider}
                      onChange={(e) => setInsuranceProvider(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700"
                    >
                      <option value="Delta Dental">Delta Dental PPO / Premier</option>
                      <option value="Cigna Dental">Cigna Dental PPO</option>
                      <option value="Aetna">Aetna Dental</option>
                      <option value="MetLife">MetLife PDP Plus</option>
                      <option value="Guardian">Guardian Dental Guard</option>
                      <option value="UnitedHealthcare">UnitedHealthcare Dental</option>
                      <option value="Other">Other PPO Plan</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Symptoms or Specific Concerns (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Tooth sensitivity on cold drinks, routine cleaning, or interested in whitening consultation"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  ← Back to Time Selection
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#00A8CC] hover:bg-[#008cae] text-white text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          )}

          {step === 3 && confirmedBooking && (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider block">
                  Appointment Confirmed
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  We look forward to seeing you, {confirmedBooking.patientName}!
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  A confirmation SMS and calendar invite have been dispatched.
                </p>
              </div>

              {/* Appointment Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 max-w-md mx-auto text-left space-y-2.5 text-xs text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-400">Confirmation Code:</span>
                  <span className="font-mono font-bold text-[#004F6E]">{confirmedBooking.refCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Treatment:</span>
                  <span className="font-semibold text-slate-800">{confirmedBooking.serviceName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Specialist:</span>
                  <span className="font-semibold text-slate-800">{confirmedBooking.doctorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Date & Time:</span>
                  <span className="font-semibold text-slate-800">
                    {confirmedBooking.date} at {confirmedBooking.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Clinic Location:</span>
                  <span className="font-medium text-slate-800 text-right">{CLINIC_INFO.address}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-[#004F6E] hover:bg-[#003c54] text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
