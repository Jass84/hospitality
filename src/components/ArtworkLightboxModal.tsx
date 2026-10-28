import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2, ShieldCheck, Sparkles, Check, Plus, FileSpreadsheet } from 'lucide-react';
import { CuratedArtwork, HospitalitySpace, SpecItem } from '../types';

interface ArtworkLightboxModalProps {
  artwork: CuratedArtwork | HospitalitySpace | null;
  onClose: () => void;
  onAddToSpecSheet: (item: any) => void;
  onRequestConsultation: (title: string) => void;
  specItems: SpecItem[];
}

export const ArtworkLightboxModal: React.FC<ArtworkLightboxModalProps> = ({
  artwork,
  onClose,
  onAddToSpecSheet,
  onRequestConsultation,
  specItems
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!artwork) return null;

  const title = 'artworkTitle' in artwork ? artwork.artworkTitle : artwork.title;
  const image = 'artworkImage' in artwork && artwork.artworkImage ? artwork.artworkImage : artwork.image;
  const artist = 'artistName' in artwork ? artwork.artistName : artwork.artist;
  const medium = 'artMedium' in artwork ? artwork.artMedium : artwork.medium;
  const dimensions = artwork.dimensions;
  const price = 'pricePerUnit' in artwork ? artwork.pricePerUnit : artwork.tradePrice;
  const id = artwork.id;

  const isInSpec = specItems.some(i => i.spaceId === id);

  const toggleZoom = () => {
    if (isZoomed) {
      setZoomLevel(1);
      setIsZoomed(false);
    } else {
      setZoomLevel(1.8);
      setIsZoomed(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-[#111111] text-[#FAF9F6] border border-[#333333] shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 bg-[#222222] hover:bg-[#333333] text-white rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Interactive Zoomable Image Viewport */}
        <div className="lg:w-7/12 relative bg-[#0A0A0A] flex items-center justify-center p-4 sm:p-8 overflow-hidden min-h-[340px] sm:min-h-[460px]">
          <div 
            onClick={toggleZoom}
            className={`cursor-zoom-in relative transition-transform duration-300 ${isZoomed ? 'scale-150 sm:scale-175' : 'scale-100'}`}
          >
            <img
              src={image}
              alt={title}
              referrerPolicy="no-referrer"
              className="max-h-[60vh] object-contain shadow-2xl border border-white/10"
            />
          </div>

          {/* Zoom controls */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/70 backdrop-blur-xs px-3 py-1.5 border border-white/20 text-xs">
            <button
              onClick={toggleZoom}
              className="flex items-center space-x-1 text-white hover:text-[#D4AF37] transition-colors"
            >
              {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
              <span>{isZoomed ? 'Reset View' : 'Click to Inspect Texture'}</span>
            </button>
          </div>
        </div>

        {/* Right: Curatorial Specifications & Actions */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[60vh] lg:max-h-[85vh]">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold border-b border-[#2C2723] pb-2 w-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Museum-Grade Masterpiece</span>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-white leading-tight">
                {title}
              </h3>
              <div className="text-xs text-[#A8A096] mt-1">
                By <strong className="text-white">{artist}</strong>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#292522] text-xs text-[#CCCCCC]">
              <div>
                <span className="text-[#8C827A] block text-[11px] uppercase">Medium & Substrate</span>
                <span className="text-white">{medium}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <span className="text-[#8C827A] block text-[11px] uppercase">Dimensions</span>
                  <span className="text-white font-medium">{dimensions}</span>
                </div>
                <div>
                  <span className="text-[#8C827A] block text-[11px] uppercase">Tiered Trade Pricing</span>
                  <span className="text-[#D4AF37] font-semibold">{price}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-3 border border-[#2D2D2D] text-xs text-[#A09890] space-y-1">
              <div className="flex items-center space-x-1.5 text-white text-[11px] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Atelier Vivant Hospitality Certification</span>
              </div>
              <p className="text-[11px] text-[#8C827A]">
                Includes certified Certificate of Authenticity, concealed 3-point anti-theft security cleats, and fire-resistant conservation framing.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-4 border-t border-[#292522]">
            <button
              onClick={() => onAddToSpecSheet(artwork)}
              className={`w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                isInSpec ? 'bg-emerald-900 text-white' : 'bg-white hover:bg-[#F2EDE4] text-[#111111]'
              }`}
            >
              {isInSpec ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Item In Project Spec Sheet</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Project Spec Sheet</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestConsultation(`Inquiry regarding ${title} by ${artist}`);
              }}
              className="w-full py-2.5 px-4 bg-[#222222] hover:bg-[#333333] border border-[#444444] text-white text-xs font-medium uppercase tracking-wider text-center transition-colors cursor-pointer"
            >
              Request Advisory Spec Book
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
