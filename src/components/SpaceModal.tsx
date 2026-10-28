import React, { useState, useEffect } from 'react';
import { 
  X, 
  MapPin, 
  Check, 
  Plus, 
  SlidersHorizontal, 
  ShieldCheck, 
  Volume2, 
  Flame, 
  Sparkles, 
  Maximize2,
  FileSpreadsheet,
  Building,
  UserCheck,
  Palette
} from 'lucide-react';
import { HospitalitySpace, SpecItem } from '../types';
import { BRAND_NAME } from '../data/hospitalityData';

interface SpaceModalProps {
  space: HospitalitySpace | null;
  onClose: () => void;
  onAddToSpecSheet: (space: HospitalitySpace) => void;
  onOpenVisualizer: (space: HospitalitySpace) => void;
  onRequestProposal: (space: HospitalitySpace) => void;
  specItems: SpecItem[];
}

export const SpaceModal: React.FC<SpaceModalProps> = ({
  space,
  onClose,
  onAddToSpecSheet,
  onOpenVisualizer,
  onRequestProposal,
  specItems
}) => {
  const [selectedImageView, setSelectedImageView] = useState<'room' | 'artwork'>('room');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!space) return null;

  const inSpec = specItems.some(item => item.spaceId === space.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FAF9F6] border border-[#DDD6CB] w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-[#FAF9F6]/95 backdrop-blur-md px-6 py-4 border-b border-[#E5DFD5] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C837A]">
              Atelier Space & Portrait Curation
            </span>
            <span className="text-[#C4BFB4]">/</span>
            <span className="text-xs font-medium text-[#111111]">{space.propertyName}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#5C564E] hover:text-[#111111] hover:bg-[#EFEAE1] transition-colors rounded-sm cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Visual Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Image & In-Situ Shot */}
            <div className="lg:col-span-7 space-y-3">
              {space.artworkImage && (
                <div className="flex items-center space-x-1.5 p-1 bg-[#EBE5DB] border border-[#DDD6CB] text-xs">
                  <button
                    onClick={() => setSelectedImageView('room')}
                    className={`flex-1 py-1.5 px-3 font-medium transition-all cursor-pointer text-center ${
                      selectedImageView === 'room'
                        ? 'bg-white text-[#111111] shadow-xs'
                        : 'text-[#665F55] hover:text-[#111111]'
                    }`}
                  >
                    In-Situ Room Architecture
                  </button>
                  <button
                    onClick={() => setSelectedImageView('artwork')}
                    className={`flex-1 py-1.5 px-3 font-medium transition-all cursor-pointer text-center flex items-center justify-center space-x-1.5 ${
                      selectedImageView === 'artwork'
                        ? 'bg-white text-[#111111] shadow-xs'
                        : 'text-[#665F55] hover:text-[#111111]'
                    }`}
                  >
                    <span>Curated Artwork Texture</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  </button>
                </div>
              )}

              <div className="relative aspect-4/3 overflow-hidden bg-[#E2DDD3] border border-[#DDD6CB] shadow-sm group">
                <img
                  src={selectedImageView === 'artwork' && space.artworkImage ? space.artworkImage : space.image}
                  alt={space.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101"
                />
                <div className="absolute bottom-3 left-3 bg-[#111111]/90 backdrop-blur-xs text-white text-[11px] px-3 py-1 font-medium">
                  {selectedImageView === 'artwork'
                    ? `Artwork: ${space.artworkTitle} by ${space.artistName}`
                    : `In-situ at ${space.propertyName} (${space.location})`}
                </div>
              </div>

              {/* Dual Thumbnails Selection */}
              {space.artworkImage && (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => setSelectedImageView('room')}
                    className={`flex items-center space-x-2.5 p-2 text-left border transition-all cursor-pointer ${
                      selectedImageView === 'room'
                        ? 'border-[#111111] bg-white ring-1 ring-[#111111]'
                        : 'border-[#DDD6CB] bg-[#FAF9F6] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={space.image}
                      alt="Room view"
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 object-cover border border-[#DDD6CB] shrink-0"
                    />
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-semibold text-[#111111] truncate">In-Situ Room</div>
                      <div className="text-[10px] text-[#7A7268] truncate">{space.propertyName}</div>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedImageView('artwork')}
                    className={`flex items-center space-x-2.5 p-2 text-left border transition-all cursor-pointer ${
                      selectedImageView === 'artwork'
                        ? 'border-[#111111] bg-white ring-1 ring-[#111111]'
                        : 'border-[#DDD6CB] bg-[#FAF9F6] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={space.artworkImage}
                      alt="Curated artwork"
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 object-cover border border-[#DDD6CB] shrink-0"
                    />
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-semibold text-[#111111] truncate">Curated Artwork</div>
                      <div className="text-[10px] text-[#7A7268] truncate">{space.artworkTitle}</div>
                    </div>
                  </button>
                </div>
              )}

              <div className="text-[11px] text-[#7A7268] flex items-center justify-between px-1">
                <span>Photography courtesy of {space.propertyName}</span>
                <span className="text-[#111111] font-medium">Curated by {BRAND_NAME} Trade</span>
              </div>
            </div>

            {/* Quick Artwork Specs & Pricing */}
            <div className="lg:col-span-5 space-y-5 bg-white p-6 border border-[#DDD6CB]">
              <div>
                <div className="text-xs font-semibold text-[#8C827A] uppercase tracking-wider">
                  {space.roomType}
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#111111] mt-1">
                  {space.artworkTitle}
                </h3>
                <div className="text-sm text-[#5E574E] mt-1">
                  By <strong className="text-[#111111]">{space.artistName}</strong> • {space.artistOrigin}
                </div>
              </div>

              {/* Price & Trade Pricing */}
              <div className="p-3.5 bg-[#FAF9F6] border border-[#E5DFD5] space-y-1">
                <div className="text-[11px] text-[#8C827A] uppercase tracking-wider">Trade Pricing Tier</div>
                <div className="font-serif text-xl font-semibold text-[#111111]">
                  {space.pricePerUnit}
                </div>
                <div className="text-[11px] text-[#554E46]">
                  Volume discounts apply to orders of 5+ keys / suites.
                </div>
              </div>

              {/* Spec Checklist */}
              <div className="space-y-2.5 text-xs text-[#3E3831]">
                <div className="flex justify-between border-b border-[#F0ECE4] pb-1.5">
                  <span className="text-[#7A7268]">Medium:</span>
                  <span className="font-medium text-right max-w-[200px]">{space.artMedium}</span>
                </div>
                <div className="flex justify-between border-b border-[#F0ECE4] pb-1.5">
                  <span className="text-[#7A7268]">Dimensions:</span>
                  <span className="font-medium">{space.dimensions}</span>
                </div>
                <div className="flex justify-between border-b border-[#F0ECE4] pb-1.5">
                  <span className="text-[#7A7268]">Framing & Mounting:</span>
                  <span className="font-medium text-right max-w-[200px]">{space.framing}</span>
                </div>
                <div className="flex justify-between border-b border-[#F0ECE4] pb-1.5">
                  <span className="text-[#7A7268]">Hotel Property:</span>
                  <span className="font-medium">{space.propertyName}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => onAddToSpecSheet(space)}
                  className={`w-full py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                    inSpec
                      ? 'bg-emerald-900 hover:bg-emerald-800 text-white'
                      : 'bg-[#111111] hover:bg-[#2A2A2A] text-white'
                  }`}
                >
                  {inSpec ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Project Spec Sheet</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add Artwork to Spec Sheet</span>
                    </>
                  )}
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenVisualizer(space);
                    }}
                    className="py-2.5 px-3 border border-[#C8C2B8] bg-[#FAF9F6] hover:bg-[#F2EDE4] text-[#111111] text-xs font-medium flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Visualizer</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onRequestProposal(space);
                    }}
                    className="py-2.5 px-3 border border-[#C8C2B8] bg-white hover:bg-[#F2EDE4] text-[#111111] text-xs font-medium flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Inquire Style</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Deep Narrative & Hospitality Compliance Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#E5DFD5]">
            <div className="space-y-3">
              <h4 className="font-serif text-lg font-medium text-[#111111]">
                Spatial Narrative & Architectural Fit
              </h4>
              <p className="text-xs sm:text-sm text-[#5E574E] leading-relaxed">
                {space.description}
              </p>
              <div className="p-4 bg-[#F5F1E9] border border-[#E0DACF] space-y-1.5">
                <span className="text-[11px] font-semibold text-[#8C827A] uppercase tracking-wider block">
                  Curator's Concept
                </span>
                <p className="text-xs text-[#3E3831] italic">
                  "{space.curationConcept}"
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif text-lg font-medium text-[#111111]">
                Hospitality & Fine Art Specifications
              </h4>
              <ul className="space-y-2.5 text-xs text-[#4A443D]">
                <li className="flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Theft Security Hardware:</strong> Engineered with commercial 3-point locking cleats to prevent unhooking in public guest areas.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Flame className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span>
                    <strong>Fire & Smoke Safety:</strong> Treated canvas and linen substrates meet Class A (ASTM E84) commercial interior regulations.
                  </span>
                </li>
                {space.acousticRated && (
                  <li className="flex items-start space-x-2">
                    <Volume2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span>
                      <strong>Acoustic Performance:</strong> Integrated acoustic backing (NRC 0.80+) dampens ambient reverberation in high-ceiling dining & lobby zones.
                    </span>
                  </li>
                )}
                <li className="flex items-start space-x-2">
                  <UserCheck className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Atelier Authenticity:</strong> Accompanied by {BRAND_NAME} archival Certificate of Authenticity and provenance record.
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer info strip */}
        <div className="bg-[#EFEAE1] px-6 py-3 border-t border-[#DDD6CB] flex items-center justify-between text-xs text-[#6B6359]">
          <span>Need custom portrait scaling or bespoke frame moulding for this space?</span>
          <button
            onClick={() => {
              onClose();
              onRequestProposal(space);
            }}
            className="text-[#111111] font-semibold hover:underline cursor-pointer"
          >
            Request Custom Sizing Matrix →
          </button>
        </div>

      </div>
    </div>
  );
};
