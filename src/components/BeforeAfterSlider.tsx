import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, SlidersHorizontal, ArrowLeftRight, Eye, CheckCircle2 } from 'lucide-react';
import hospitalityPortraitSuiteImage from '../assets/images/hospitality_portrait_suite.jpg';

interface BeforeAfterSliderProps {
  onRequestAdvisory: () => void;
  onExplorePortraitStudio: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  onRequestAdvisory,
  onExplorePortraitStudio
}) => {
  const [sliderPosition, setSliderPosition] = useState(52);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className="bg-[#141312] text-[#FAF9F6] py-16 lg:py-24 border-b border-[#2C2723] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
            Spatial Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            The Power of Curated Portraiture in Hospitality
          </h2>
          <p className="text-xs sm:text-sm text-[#A8A096] leading-relaxed">
            Drag the slider to experience how bespoke fine art portraiture and architectural illumination transform an empty hotel salon into an iconic, memorable luxury sanctuary.
          </p>
        </div>

        {/* Interactive Split Slider Container */}
        <div className="relative max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="relative h-[380px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden select-none cursor-ew-resize border border-[#3A342E] shadow-2xl bg-[#0D0D0D]"
          >
            {/* "After" Image: Fully Curated Suite with Fine Art Portrait */}
            <img
              src={hospitalityPortraitSuiteImage}
              alt="Curated Luxury Suite with Fine Art Portrait"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* "Before" Image / Simulation (Desaturated Bare Minimal State) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full">
                {/* Desaturated, dimmed & filtered version simulating raw empty room */}
                <img
                  src={hospitalityPortraitSuiteImage}
                  alt="Raw Hotel Wall Before Portrait Curation"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-75 brightness-70"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
                    maxWidth: 'none'
                  }}
                />
                
                {/* Bare wall overlay effect */}
                <div className="absolute inset-0 bg-[#35302B]/60 mix-blend-multiply"></div>

                {/* "Before" Label Badge */}
                <div className="absolute top-5 left-5 bg-[#111111]/85 backdrop-blur-md text-white text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 border border-white/20">
                  Before: Raw Wall Architecture
                </div>
              </div>
            </div>

            {/* "After" Label Badge */}
            <div className="absolute top-5 right-5 bg-[#111111]/85 backdrop-blur-md text-[#D4AF37] text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 border border-[#D4AF37]/40 pointer-events-none">
              After: Atelier Vivant Curation
            </div>

            {/* Draggable Divider Line & Knob */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] z-30 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-[#111111] border-2 border-white shadow-xl flex items-center justify-center text-white cursor-ew-resize">
                <ArrowLeftRight className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </div>

            {/* In-Situ Details Box at Bottom */}
            <div className="absolute bottom-5 inset-x-5 sm:inset-x-8 bg-[#111111]/90 backdrop-blur-md p-4 border border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs z-20">
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="font-serif text-sm sm:text-base text-white font-medium">
                  Hôtel de Crillon Salon • Paris
                </div>
                <div className="text-[11px] text-[#A8A096]">
                  Artwork: <span className="italic text-white">Aurelia in Velvet & 24k Gold</span> by Camille Dumont (48" x 64" Belgian Linen)
                </div>
              </div>

              <div className="flex items-center space-x-3 shrink-0">
                <button
                  onClick={onExplorePortraitStudio}
                  className="px-4 py-2 bg-white hover:bg-[#F2EDE4] text-[#111111] text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Configure In Studio
                </button>
                <button
                  onClick={onRequestAdvisory}
                  className="px-3.5 py-2 border border-[#444444] hover:border-white text-white text-[11px] tracking-wide transition-colors cursor-pointer"
                >
                  Request Lookbook
                </button>
              </div>
            </div>

          </div>

          {/* Quick Preset Buttons */}
          <div className="mt-4 flex items-center justify-center space-x-3 text-xs text-[#A8A096]">
            <span>Quick Views:</span>
            <button
              onClick={() => setSliderPosition(20)}
              className={`px-2.5 py-1 border transition-colors cursor-pointer ${
                sliderPosition <= 25 ? 'bg-white text-black border-white' : 'border-[#333333] hover:border-[#666666]'
              }`}
            >
              Show Full Curation
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-2.5 py-1 border transition-colors cursor-pointer ${
                sliderPosition > 25 && sliderPosition < 75 ? 'bg-white text-black border-white' : 'border-[#333333] hover:border-[#666666]'
              }`}
            >
              50/50 Split Comparison
            </button>
            <button
              onClick={() => setSliderPosition(80)}
              className={`px-2.5 py-1 border transition-colors cursor-pointer ${
                sliderPosition >= 75 ? 'bg-white text-black border-white' : 'border-[#333333] hover:border-[#666666]'
              }`}
            >
              Show Raw Base
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
