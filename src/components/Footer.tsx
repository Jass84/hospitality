import React from 'react';
import { PhoneCall, Mail, MapPin, Sparkles, ArrowUp, Palette } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE, BRAND_EMAIL, BRAND_PHONE } from '../data/hospitalityData';

interface FooterProps {
  onOpenConsultation: () => void;
  onNavigateSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
  onNavigateSection
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#FAF9F6] pt-16 pb-12 border-t border-[#292522] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Call to Action Banner */}
        <div className="pb-12 border-b border-[#292522] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
              Start Your Custom Portrait & Art Program
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
              Ready to elevate your suites and salons with museum-grade portraiture?
            </h3>
            <p className="text-xs sm:text-sm text-[#A09890] max-w-xl">
              Connect with an Atelier Vivant fine art curator today. Receive bespoke digital lookbooks, physical canvas swatches, and tiered trade pricing within days.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 bg-white hover:bg-[#EAE4DA] text-[#111111] text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
            >
              Request Free Advisory
            </button>
            <a
              href={`tel:${BRAND_PHONE.replace(/[^0-9]/g, '')}`}
              className="px-5 py-3.5 border border-[#444444] hover:border-white text-white text-xs font-medium tracking-wide flex items-center space-x-2 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{BRAND_PHONE}</span>
            </a>
          </div>
        </div>

        {/* 4 Columns Nav & Info */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-xs">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-baseline space-x-2">
              <span className="font-serif tracking-[0.2em] text-2xl font-bold text-white uppercase">
                {BRAND_NAME}
              </span>
              <span className="text-[10px] tracking-[0.25em] font-semibold text-[#8C827A] uppercase">
                / ATELIER
              </span>
            </div>
            <p className="text-[#A09890] text-xs leading-relaxed max-w-sm">
              The premier fine art atelier and advisory studio for luxury hospitality, interior architects, and hoteliers. Specializing in bespoke portrait commissions, monumental spatial canvases, and white-glove turnkey installation.
            </p>
            <div className="pt-2 text-[11px] text-[#7A7268] space-y-1">
              <div>📍 Paris 75008 • London Mayfair • New York NY 10012</div>
              <div>✉️ {BRAND_EMAIL} • Mon–Fri 9am–6pm EST / CET</div>
            </div>
          </div>

          {/* Col 2: Collections & Portfolios */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Art & Portraits
            </div>
            <ul className="space-y-2 text-[#A09890]">
              <li>
                <button onClick={() => onNavigateSection('portrait-studio')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <Palette className="w-3 h-3 text-[#D4AF37]" />
                  <span>Portrait Commission Studio</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('spaces')} className="hover:text-white transition-colors">
                  Presidential Suite Portraits
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('spaces')} className="hover:text-white transition-colors">
                  Grand Salon & Library Art
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('spaces')} className="hover:text-white transition-colors">
                  Private Dining Paintings
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('spaces')} className="hover:text-white transition-colors">
                  Spa Bas-Relief Sculptures
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('spaces')} className="hover:text-white transition-colors">
                  Corridor Promenade Suites
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Trade Program */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Trade Program
            </div>
            <ul className="space-y-2 text-[#A09890]">
              <li>
                <button onClick={() => onNavigateSection('calculator')} className="hover:text-white transition-colors">
                  Volume Discount Schedule
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('process')} className="hover:text-white transition-colors">
                  How Advisory Works
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('visualizer')} className="hover:text-white transition-colors">
                  Interactive Room Visualizer
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-white transition-colors">
                  Tax-Exempt Ordering
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-white transition-colors">
                  Request 2026 Lookbook (PDF)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('curators')} className="hover:text-white transition-colors">
                  Meet the Atelier Curators
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Commercial Specifications */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Museum Specifications
            </div>
            <ul className="space-y-2 text-[#A09890]">
              <li>24k Hand-Gilded Gold Leaf</li>
              <li>Class A Fire-Rated Substrates</li>
              <li>Tamper-Resistant Security Cleats</li>
              <li>Direct Artist Master Commissions</li>
              <li>Conservation UV99 Anti-Reflective Glass</li>
              <li>Bonded International White-Glove Shipping</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#221F1C] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A7268] gap-4">
          <div>
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved. Fine Art Portraiture & Hospitality Trade Program.
          </div>

          <div className="flex items-center space-x-6">
            <span>Terms of Trade</span>
            <span>Privacy Policy</span>
            <span>Provenance & Authentication</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
