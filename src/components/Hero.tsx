import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, SlidersHorizontal, Award, Layers } from 'lucide-react';
import heroArtImage from '../assets/images/hospitality_hero_art_1789809330303.jpg';
import { HOSPITALITY_CLIENTS } from '../data/hospitalityData';

interface HeroProps {
  onExploreSpaces: () => void;
  onRequestAdvisory: () => void;
  onOpenVisualizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreSpaces,
  onRequestAdvisory,
  onOpenVisualizer,
}) => {
  return (
    <section id="hero" className="relative bg-[#FAF9F6] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E8E3DB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Editorial Typography & Monumental Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Value Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F2EDE4] border border-[#DDD6CB] text-xs font-semibold tracking-wider text-[#3D3730] uppercase">
              <Award className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Dedicated Hospitality Art Advisory</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-[#111111] tracking-tight">
              Curating Iconic Art for <br />
              <span className="italic font-light text-[#2C2723]">World-Class Hospitality</span>
            </h1>

            <p className="text-base sm:text-lg text-[#554E46] leading-relaxed max-w-xl font-normal">
              From boutique coastal retreats to flagship urban towers, our specialized hospitality art advisors collaborate with interior designers, architects, and hotel operators to curate, commission, and install bespoke art collections that embody your brand narrative.
            </p>

            {/* Quick Benefits Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#3E3831]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                <span>Complimentary Curation & Spec Books</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                <span>Direct Site-Specific Artist Commissions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                <span>Tiered Trade Discounts (Up to 30%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                <span>Hospitality-Grade Security Framing</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={onRequestAdvisory}
                id="hero-request-advisory-btn"
                className="px-6 py-3.5 bg-[#111111] hover:bg-[#2A2A2A] text-[#FAF9F6] text-xs sm:text-sm font-medium uppercase tracking-widest transition-all shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Request Free Advisory</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreSpaces}
                id="hero-explore-spaces-btn"
                className="px-6 py-3.5 bg-white hover:bg-[#F4F1EA] text-[#1A1A1A] border border-[#D5CEC4] text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#8C827A]" />
                <span>View Hospitality Spaces</span>
              </button>

              <button
                onClick={onOpenVisualizer}
                id="hero-open-visualizer-btn"
                className="px-5 py-3.5 text-xs text-[#554E46] hover:text-[#111111] underline underline-offset-4 decoration-[#C4BFB4] hover:decoration-[#111111] font-medium flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Interactive Room Visualizer</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with In-Situ Art Details */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden bg-[#E8E2D7] shadow-xl border border-[#DCD6CC]">
              <img
                src={heroArtImage}
                alt="Saatchi Art Hospitality Installation in luxury hotel grand lobby"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover hover:scale-101 transition-transform duration-700"
              />

              {/* In-Situ Floating Project Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-[#111111]/90 backdrop-blur-md text-[#FAF9F6] p-4 border border-[#383430] shadow-lg">
                <div className="flex items-center justify-between border-b border-[#333333] pb-2 mb-2 text-[11px] uppercase tracking-wider text-[#A09890]">
                  <span>Featured Installation</span>
                  <span className="text-[#D4AF37]">Grand Lobby Curation</span>
                </div>
                <div className="font-serif text-lg font-medium text-white tracking-wide">
                  The Luminary Grand Hotel — Zurich
                </div>
                <div className="text-xs text-[#CCC5BC] mt-0.5">
                  Artwork: <span className="italic text-white">Resonance of Strata IV</span> by Elena Vaneva (144" x 96" Heavy Impasto Belgian Linen)
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#9E958C] pt-2 mt-2 border-t border-[#292623]">
                  <span>Custom Commission & Anti-Theft Mounting</span>
                  <button
                    onClick={onExploreSpaces}
                    className="text-[#D4AF37] hover:underline cursor-pointer flex items-center space-x-1"
                  >
                    <span>View Space Details</span>
                    <ArrowRight className="w-3 h-3 ml-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Subtle decorative framing border accent */}
            <div className="hidden sm:block absolute -top-3 -right-3 w-28 h-28 border-t-2 border-r-2 border-[#C4BFB4] pointer-events-none"></div>
            <div className="hidden sm:block absolute -bottom-3 -left-3 w-28 h-28 border-b-2 border-l-2 border-[#C4BFB4] pointer-events-none"></div>
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="mt-14 pt-8 border-t border-[#E5DFD5] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="px-2">
            <div className="font-serif text-3xl sm:text-4xl text-[#111111] font-semibold">10,000+</div>
            <div className="text-xs font-medium text-[#736B63] uppercase tracking-wider mt-1">
              Hospitality Spaces Installed
            </div>
          </div>
          <div className="px-2">
            <div className="font-serif text-3xl sm:text-4xl text-[#111111] font-semibold">100,000+</div>
            <div className="text-xs font-medium text-[#736B63] uppercase tracking-wider mt-1">
              Curated Global Artists
            </div>
          </div>
          <div className="px-2">
            <div className="font-serif text-3xl sm:text-4xl text-[#111111] font-semibold">Up to 30%</div>
            <div className="text-xs font-medium text-[#736B63] uppercase tracking-wider mt-1">
              Tiered Trade Volume Pricing
            </div>
          </div>
          <div className="px-2">
            <div className="font-serif text-3xl sm:text-4xl text-[#111111] font-semibold">100% Free</div>
            <div className="text-xs font-medium text-[#736B63] uppercase tracking-wider mt-1">
              Bespoke Advisory & Spec Books
            </div>
          </div>
        </div>

        {/* Prestigious Hotel Brands Ticker / Trust Bar */}
        <div className="mt-12 pt-6 border-t border-[#ECE6DC]">
          <div className="text-center text-[11px] font-semibold text-[#8C837A] uppercase tracking-[0.25em] mb-4">
            Trusted by World-Renowned Hospitality Brands & Interior Design Firms
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-80 text-xs sm:text-sm font-serif tracking-widest text-[#3D3832] uppercase">
            {HOSPITALITY_CLIENTS.slice(0, 7).map((client, idx) => (
              <span key={idx} className="hover:text-[#111111] transition-colors">
                {client.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
