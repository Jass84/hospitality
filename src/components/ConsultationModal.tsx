import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  FileText, 
  Send, 
  ShieldCheck, 
  Download, 
  Calendar, 
  Layers,
  Palette
} from 'lucide-react';
import { AdvisoryInquiry, SpecItem } from '../types';
import { BRAND_NAME, BRAND_EMAIL, BRAND_PHONE } from '../data/hospitalityData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  specItems: SpecItem[];
  preselectedNotes?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  specItems,
  preselectedNotes = ''
}) => {
  const [formData, setFormData] = useState<AdvisoryInquiry>({
    fullName: '',
    email: '',
    phone: '',
    companyOrFirm: '',
    professionalRole: 'Interior Designer',
    propertyType: 'Boutique Hotel',
    propertyName: '',
    location: '',
    numberOfKeys: '50-100 Keys',
    estimatedBudget: '$50,000 - $150,000',
    targetCompletion: 'Q3 2026',
    servicesNeeded: ['Fine Art Portraiture & Commissions', 'Bespoke Curated Lookbook & Spec Book'],
    projectNotes: preselectedNotes
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedNotes) {
      setFormData(prev => ({
        ...prev,
        projectNotes: preselectedNotes
      }));
    }
  }, [preselectedNotes]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(service)
        ? prev.servicesNeeded.filter(s => s !== service)
        : [...prev.servicesNeeded, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleDownloadLookbook = () => {
    const dummyLookbook = `${BRAND_NAME} | FINE ART PORTRAITURE & HOSPITALITY LOOKBOOK (2026 EDITION)
----------------------------------------------------------------------
Curated Fine Art & Portrait Collections for Luxury Hotels, Presidential Suites & Salons
Featured Master Artists: Camille Dumont, Eleanor Vance, Marc Levy, Hanako Soga, Mateo Alvarez
Disciplines: Old Master Oil Glazes, 24k Gold Leafing, Gypsum Bas-Relief, Sumi-e Washi, Palette-Knife Impasto
Trade Inquiries: ${BRAND_EMAIL} | ${BRAND_PHONE}
Paris • London • New York • Worldwide White-Glove Curation`;

    const blob = new Blob([dummyLookbook], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Atelier_Vivant_Portrait_Lookbook_2026.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FAF9F6] border border-[#DDD6CB] w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#FAF9F6]/95 backdrop-blur-md px-6 py-4 border-b border-[#E5DFD5] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C837A]">
              {BRAND_NAME} Advisory
            </span>
            <span className="text-[#C4BFB4]">/</span>
            <span className="text-xs font-medium text-[#111111]">Request Fine Art & Portrait Consultation</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#5C564E] hover:text-[#111111] hover:bg-[#EFEAE1] transition-colors rounded-sm cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#8C827A] uppercase tracking-wider">
                  Inquiry Received
                </span>
                <h3 className="font-serif text-3xl font-medium text-[#111111]">
                  Thank You, {formData.fullName || 'Design Partner'}
                </h3>
                <p className="text-sm text-[#5E574E] max-w-md mx-auto leading-relaxed">
                  Your project brief has been assigned to an {BRAND_NAME} Senior Curator. We will contact you at <strong>{formData.email}</strong> within 1 business day with your tailored portrait and spatial lookbook.
                </p>
              </div>

              {specItems.length > 0 && (
                <div className="p-4 bg-white border border-[#DDD6CB] max-w-md mx-auto text-left text-xs text-[#524B43]">
                  <span className="font-semibold text-[#111111] block mb-1">
                    Attached Spec Sheet Selections ({specItems.length} items):
                  </span>
                  <ul className="list-disc pl-4 space-y-0.5 text-[#7A7268]">
                    {specItems.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="truncate">{item.title} ({item.quantity} units)</li>
                    ))}
                    {specItems.length > 3 && (
                      <li>...and {specItems.length - 3} more items</li>
                    )}
                  </ul>
                </div>
              )}

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleDownloadLookbook}
                  className="px-6 py-3 bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 cursor-pointer hover:bg-[#2C2723]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download 2026 Lookbook (Preview)</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-[#DDD6CB] text-[#111111] text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-[#F2EDE4]"
                >
                  Return to Portfolio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Top intro */}
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-normal text-[#111111]">
                  Commission Bespoke Fine Art & Portraits
                </h3>
                <p className="text-xs sm:text-sm text-[#615A52]">
                  Whether you require master portraiture for presidential suites or curated paintings for an entire boutique resort, our complimentary atelier service provides spatial curation, in-situ mockups, and fixed trade pricing.
                </p>
              </div>

              {/* Contact Info Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#2C2723]">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5CEC4] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#2C2723]">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@studio-interior.com"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5CEC4] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#2C2723]">Company / Architecture Firm *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyOrFirm}
                    onChange={(e) => setFormData({ ...formData, companyOrFirm: e.target.value })}
                    placeholder="Studio Jenkins Interiors"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5CEC4] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#2C2723]">Professional Role</label>
                  <select
                    value={formData.professionalRole}
                    onChange={(e) => setFormData({ ...formData, professionalRole: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5CEC4] focus:outline-none focus:border-[#111111]"
                  >
                    <option value="Interior Designer">Interior Designer</option>
                    <option value="Architect">Architect</option>
                    <option value="Hotelier / Owner">Hotel Owner / Developer</option>
                    <option value="Procurement Agent">FF&E Procurement Agent</option>
                    <option value="Art Consultant">Independent Art Consultant</option>
                  </select>
                </div>
              </div>

              {/* Property Details Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#EFECE6]">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#2C2723]">Property Type</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5CEC4] focus:outline-none focus:border-[#111111]"
                  >
                    <option value="Boutique Hotel">Boutique Hotel</option>
                    <option value="Luxury Flagship Resort">Luxury Flagship Resort</option>
                    <option value="Restaurant & Bar">Restaurant / Cocktail Lounge</option>
                    <option value="Luxury Multi-Family">Luxury Multi-Family Residential</option>
                    <option value="Spa & Wellness Sanctuary">Spa & Wellness Sanctuary</option>
                    <option value="Private Members Club">Private Members Club</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#2C2723]">Estimated Number of Keys</label>
                  <select
                    value={formData.numberOfKeys}
                    onChange={(e) => setFormData({ ...formData, numberOfKeys: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5CEC4] focus:outline-none focus:border-[#111111]"
                  >
                    <option value="Under 25 Keys">Under 25 Keys / Boutique</option>
                    <option value="25-75 Keys">25 - 75 Keys</option>
                    <option value="75-150 Keys">75 - 150 Keys</option>
                    <option value="150-300 Keys">150 - 300 Keys</option>
                    <option value="300+ Keys">300+ Keys (Large Resort)</option>
                    <option value="Public Spaces Only">Public Areas Only (No Guestrooms)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#2C2723]">Target Art Budget Tier</label>
                  <select
                    value={formData.estimatedBudget}
                    onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5CEC4] focus:outline-none focus:border-[#111111]"
                  >
                    <option value="Under $25,000">Under $25,000</option>
                    <option value="$25,000 - $75,000">$25,000 - $75,000</option>
                    <option value="$75,000 - $150,000">$75,000 - $150,000</option>
                    <option value="$150,000 - $350,000">$150,000 - $350,000</option>
                    <option value="$350,000+">$350,000+ (Full Enterprise Rollout)</option>
                  </select>
                </div>
              </div>

              {/* Desired Advisory Services Checkboxes */}
              <div className="space-y-2 pt-2 border-t border-[#EFECE6]">
                <label className="text-xs font-medium text-[#2C2723] block">
                  Services Needed (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#423C35]">
                  {[
                    'Fine Art Portraiture & Commissions',
                    'Bespoke Curated Lookbook & Spec Book',
                    'Direct Site-Specific Master Artist Commissions',
                    'Acoustic Art & Noise Dampening Panels',
                    'Tamper-Proof Security Cleat Hardware',
                    'Global White-Glove Installation & Crating'
                  ].map((service) => (
                    <label key={service} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.servicesNeeded.includes(service)}
                        onChange={() => toggleService(service)}
                        className="w-3.5 h-3.5 accent-[#111111]"
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Notes & Attachments Hint */}
              <div className="space-y-1 pt-2 border-t border-[#EFECE6]">
                <label className="text-xs font-medium text-[#2C2723]">
                  Project Notes, Portrait Preferences or Specific Spaces
                </label>
                <textarea
                  rows={3}
                  value={formData.projectNotes}
                  onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                  placeholder="Share details on your interior concept, color palette, specific rooms (e.g. 84 king suites + presidential salon), or target opening date..."
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#D5CEC4] focus:outline-none focus:border-[#111111]"
                />
              </div>

              {/* Spec items summary note if present */}
              {specItems.length > 0 && (
                <div className="p-3 bg-[#EFEAE1] border border-[#DDD6CB] text-xs text-[#524B43] flex items-center justify-between">
                  <span>
                    Your current <strong>{specItems.length} saved spec sheet items</strong> will be automatically attached to this request.
                  </span>
                  <Layers className="w-4 h-4 text-[#8C827A]" />
                </div>
              )}

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between">
                <span className="text-[11px] text-[#8C827A]">
                  🔒 Your project brief remains strictly confidential.
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#111111] hover:bg-[#2C2723] text-white text-xs font-semibold uppercase tracking-widest transition-colors flex items-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Submit Advisory Request'}</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
