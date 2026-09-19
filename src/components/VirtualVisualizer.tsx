import React, { useState, useEffect } from 'react';
import { 
  SlidersHorizontal, 
  Sun, 
  Moon, 
  Sparkles, 
  Maximize2, 
  Check, 
  Plus, 
  Layers, 
  Ruler,
  Info
} from 'lucide-react';
import { CURATED_ARTWORKS } from '../data/hospitalityData';
import { CuratedArtwork, SpecItem } from '../types';

interface VirtualVisualizerProps {
  onAddToSpecSheet: (specItem: SpecItem) => void;
  specItems: SpecItem[];
  activeArtworkId?: string | null;
}

interface RoomPreset {
  id: string;
  name: string;
  roomType: string;
  bgClass: string;
  wallDescription: string;
  lightingOptions: {
    daylight: string;
    warm: string;
    evening: string;
  };
}

export const VirtualVisualizer: React.FC<VirtualVisualizerProps> = ({
  onAddToSpecSheet,
  specItems,
  activeArtworkId
}) => {
  const roomPresets: RoomPreset[] = [
    {
      id: 'suite',
      name: 'Executive King Suite Headboard Wall',
      roomType: 'Guest Room',
      bgClass: 'bg-[#E3DDD4] border-[#D4CCC1]',
      wallDescription: 'Warm White Oak Millwork with Recessed Perimeter Lighting',
      lightingOptions: {
        daylight: 'from-amber-50/20 via-transparent to-black/10',
        warm: 'from-amber-200/25 via-amber-100/10 to-amber-950/20',
        evening: 'from-amber-400/20 via-black/30 to-black/60'
      }
    },
    {
      id: 'lobby',
      name: 'Double-Height Grand Lobby Feature Wall',
      roomType: 'Grand Lobby',
      bgClass: 'bg-[#DCD8CF] border-[#CAC4B8]',
      wallDescription: 'Italian Honed Roman Travertine with Architectural Fluting',
      lightingOptions: {
        daylight: 'from-white/30 via-transparent to-black/15',
        warm: 'from-orange-100/20 via-transparent to-stone-900/30',
        evening: 'from-yellow-200/25 via-black/40 to-stone-950/70'
      }
    },
    {
      id: 'restaurant',
      name: 'Intimate Restaurant Banquette Alcove',
      roomType: 'Dining & Lounge',
      bgClass: 'bg-[#CFC8BE] border-[#BCB4A7]',
      wallDescription: 'Smoked Walnut Boiserie with Brushed Bronze Accents',
      lightingOptions: {
        daylight: 'from-stone-100/20 via-transparent to-stone-900/20',
        warm: 'from-amber-300/30 via-amber-900/10 to-stone-950/40',
        evening: 'from-amber-500/25 via-stone-950/50 to-stone-950/80'
      }
    },
    {
      id: 'spa',
      name: 'Spa Thermal Sanctuary Corridor',
      roomType: 'Wellness Sanctuary',
      bgClass: 'bg-[#DDD9D1] border-[#CDC8BF]',
      wallDescription: 'Textured Lime-Plaster Finish with Recessed Baseboard Glow',
      lightingOptions: {
        daylight: 'from-blue-50/20 via-transparent to-stone-800/15',
        warm: 'from-amber-100/20 via-transparent to-stone-800/20',
        evening: 'from-indigo-950/20 via-black/30 to-stone-950/50'
      }
    }
  ];

  const [selectedRoom, setSelectedRoom] = useState<RoomPreset>(roomPresets[0]);
  const [selectedArtwork, setSelectedArtwork] = useState<CuratedArtwork>(CURATED_ARTWORKS[0]);
  const [selectedFrame, setSelectedFrame] = useState<'oak' | 'brass' | 'black' | 'float'>('brass');
  const [lightingMood, setLightingMood] = useState<'daylight' | 'warm' | 'evening'>('warm');
  const [showRuler, setShowRuler] = useState(true);
  const [justAdded, setJustAdded] = useState(false);
  const [artworkFilter, setArtworkFilter] = useState<string>('all');

  useEffect(() => {
    if (activeArtworkId) {
      const match = CURATED_ARTWORKS.find(
        (art) => art.id === activeArtworkId || art.spaceId === activeArtworkId
      );
      if (match) {
        setSelectedArtwork(match);
      }
    }
  }, [activeArtworkId]);

  const frameStyles = {
    oak: {
      border: 'border-8 sm:border-12 border-[#CBB89D]',
      shadow: 'shadow-2xl shadow-stone-900/30',
      label: 'Natural White Oak'
    },
    brass: {
      border: 'border-6 sm:border-10 border-[#C5A059]',
      shadow: 'shadow-2xl shadow-amber-950/35',
      label: 'Brushed Brass'
    },
    black: {
      border: 'border-6 sm:border-10 border-[#1A1A1A]',
      shadow: 'shadow-2xl shadow-black/40',
      label: 'Museum Matte Black'
    },
    float: {
      border: 'border-2 border-[#FAF9F6]/80 p-1 bg-[#1A1A1A]',
      shadow: 'shadow-2xl shadow-black/25',
      label: 'Minimalist Canvas Float'
    }
  };

  const handleAddCurrentSetupToSpec = () => {
    const specItem: SpecItem = {
      spaceId: `visualizer-${selectedArtwork.id}-${Date.now()}`,
      title: `${selectedArtwork.title} (${frameStyles[selectedFrame].label})`,
      propertyName: `Visualizer: ${selectedRoom.name}`,
      image: selectedArtwork.image,
      artMedium: selectedArtwork.medium,
      dimensions: selectedArtwork.dimensions,
      priceEstimate: selectedArtwork.tradePrice,
      quantity: 1,
      roomTag: selectedRoom.roomType,
      notes: `Framing: ${frameStyles[selectedFrame].label} | Lighting tested: ${lightingMood}`,
      addedAt: new Date().toLocaleDateString()
    };
    onAddToSpecSheet(specItem);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2200);
  };

  return (
    <section id="visualizer" className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F2EDE4] border border-[#DDD6CB] text-[11px] font-semibold tracking-wider text-[#3D3730] uppercase">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Interactive Spatial Specifier</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] tracking-tight">
            Preview Art on the Hospitality Wall
          </h2>
          <p className="text-sm sm:text-base text-[#5E574E] leading-relaxed">
            Test scale, framing finishes, and architectural illumination across hotel suites, double-height atriums, dining alcoves, and spa corridors in real time.
          </p>
        </div>

        {/* Visualizer Workbench Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Stage: Wall Simulation Viewport */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            
            {/* The Wall Canvas Container */}
            <div className={`relative w-full h-[380px] sm:h-[500px] lg:h-[540px] ${selectedRoom.bgClass} border overflow-hidden flex items-center justify-center p-6 shadow-inner transition-colors duration-500`}>
              
              {/* Lighting Ambience Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${selectedRoom.lightingOptions[lightingMood]} pointer-events-none transition-all duration-700`}></div>

              {/* Architectural Wall Texture Hint */}
              <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

              {/* Simulated Furniture Baseline (Floor / Headboard hint) */}
              <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-black/20 to-transparent border-t border-black/10 flex items-center justify-between px-6 text-[10px] text-[#4A453E] uppercase tracking-wider font-semibold">
                <span>{selectedRoom.wallDescription}</span>
                <span>Ceiling Height: 10' 6"</span>
              </div>

              {/* Dimension Scale Guides */}
              {showRuler && (
                <div className="absolute top-4 inset-x-8 flex items-center justify-between text-[11px] text-[#554E46] border-b border-dashed border-[#8C827A]/60 pb-1">
                  <span>◀ Wall Center 12' 0" Span ▶</span>
                  <span className="font-medium bg-white/70 px-2 py-0.5 rounded text-[10px]">
                    Artwork Scale: {selectedArtwork.dimensions}
                  </span>
                </div>
              )}

              {/* The Framed Artwork on the Wall */}
              <div 
                className={`relative z-10 transition-all duration-300 max-w-[80%] max-h-[75%] ${frameStyles[selectedFrame].border} ${frameStyles[selectedFrame].shadow}`}
              >
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[260px] sm:max-h-[360px] object-contain transition-all"
                />

                {/* Subtle Artwork Spotlighting glow */}
                {lightingMood === 'evening' && (
                  <div className="absolute -top-10 inset-x-0 h-24 bg-gradient-to-b from-amber-200/30 to-transparent pointer-events-none blur-md"></div>
                )}
              </div>

              {/* In-Situ Details Badge */}
              <div className="absolute bottom-16 right-4 sm:right-6 bg-[#111111]/90 backdrop-blur-md text-[#FAF9F6] p-3 border border-[#3A3530] text-xs max-w-xs shadow-lg">
                <div className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold">
                  Curated Artwork
                </div>
                <div className="font-serif text-sm font-medium text-white">
                  {selectedArtwork.title}
                </div>
                <div className="text-[11px] text-[#CCC5BC]">
                  {selectedArtwork.artist} • {selectedArtwork.dimensions}
                </div>
                <div className="flex items-center justify-between pt-1.5 mt-1.5 border-t border-[#333333] text-[11px]">
                  <span className="text-[#A39990]">Trade: {selectedArtwork.tradePrice}</span>
                  <span className="text-[#E0DBD5]">{frameStyles[selectedFrame].label}</span>
                </div>
              </div>
            </div>

            {/* Quick Viewport Controls Bar */}
            <div className="bg-white p-3.5 border border-[#DDD6CB] shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
              {/* Lighting Toggles */}
              <div className="flex items-center space-x-2">
                <span className="text-[#7A7268] font-medium mr-1">Illumination:</span>
                <button
                  onClick={() => setLightingMood('daylight')}
                  className={`px-2.5 py-1 text-xs flex items-center space-x-1 border transition-colors cursor-pointer ${
                    lightingMood === 'daylight' ? 'bg-[#111111] text-white border-[#111111]' : 'bg-[#FAF9F6] text-[#4A453E] border-[#DDD6CB]'
                  }`}
                >
                  <Sun className="w-3 h-3 text-amber-500" />
                  <span>Daylight</span>
                </button>
                <button
                  onClick={() => setLightingMood('warm')}
                  className={`px-2.5 py-1 text-xs flex items-center space-x-1 border transition-colors cursor-pointer ${
                    lightingMood === 'warm' ? 'bg-[#111111] text-white border-[#111111]' : 'bg-[#FAF9F6] text-[#4A453E] border-[#DDD6CB]'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>Golden Hour</span>
                </button>
                <button
                  onClick={() => setLightingMood('evening')}
                  className={`px-2.5 py-1 text-xs flex items-center space-x-1 border transition-colors cursor-pointer ${
                    lightingMood === 'evening' ? 'bg-[#111111] text-white border-[#111111]' : 'bg-[#FAF9F6] text-[#4A453E] border-[#DDD6CB]'
                  }`}
                >
                  <Moon className="w-3 h-3 text-indigo-400" />
                  <span>Evening Mood</span>
                </button>
              </div>

              {/* Scale / Ruler Toggle */}
              <button
                onClick={() => setShowRuler(!showRuler)}
                className={`px-2.5 py-1 border text-xs flex items-center space-x-1 cursor-pointer ${
                  showRuler ? 'bg-[#EAE4DA] border-[#8C827A] text-[#111111] font-semibold' : 'border-[#DDD6CB] text-[#7A7268]'
                }`}
              >
                <Ruler className="w-3 h-3" />
                <span>Scale Guides</span>
              </button>

              {/* Add Setup to Spec */}
              <button
                onClick={handleAddCurrentSetupToSpec}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5 transition-all cursor-pointer ${
                  justAdded 
                    ? 'bg-emerald-900 text-white' 
                    : 'bg-[#111111] hover:bg-[#2C2723] text-white'
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added to Spec!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Save This Setup to Spec</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Control Column: Presets, Artwork Swatches & Frames */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Step 1: Hospitality Room Archetype */}
            <div className="bg-white p-5 border border-[#DDD6CB] space-y-3">
              <div className="flex items-center justify-between text-xs border-b border-[#EFECE6] pb-2">
                <span className="font-semibold text-[#111111] uppercase tracking-wider">
                  1. Room Archetype
                </span>
                <span className="text-[#8C827A] text-[11px]">{selectedRoom.roomType}</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {roomPresets.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room)}
                    className={`w-full text-left p-2.5 text-xs border transition-all cursor-pointer flex items-center justify-between ${
                      selectedRoom.id === room.id
                        ? 'border-[#111111] bg-[#F4F1EA] font-semibold text-[#111111]'
                        : 'border-[#E2DDD5] hover:bg-[#FAF9F6] text-[#554E46]'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-[#1A1A1A]">{room.name}</div>
                      <div className="text-[11px] text-[#7A7268]">{room.wallDescription}</div>
                    </div>
                    {selectedRoom.id === room.id && (
                      <span className="w-2 h-2 rounded-full bg-[#111111] shrink-0 ml-2"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Frame Material Finish */}
            <div className="bg-white p-5 border border-[#DDD6CB] space-y-3">
              <div className="text-xs font-semibold text-[#111111] uppercase tracking-wider border-b border-[#EFECE6] pb-2">
                2. Frame Material & Moulding
              </div>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(frameStyles) as Array<keyof typeof frameStyles>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedFrame(key)}
                    className={`p-2.5 text-xs border text-left transition-all cursor-pointer ${
                      selectedFrame === key
                        ? 'border-[#111111] bg-[#F4F1EA] font-semibold text-[#111111]'
                        : 'border-[#E2DDD5] text-[#554E46] hover:bg-[#FAF9F6]'
                    }`}
                  >
                    <div className="text-[11px] font-medium">{frameStyles[key].label}</div>
                    <div className="text-[10px] text-[#8C827A] mt-0.5">Hospitality Cleat</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Curated Artwork Select */}
            <div className="bg-white p-5 border border-[#DDD6CB] space-y-3.5">
              <div className="flex items-center justify-between text-xs border-b border-[#EFECE6] pb-2">
                <span className="font-semibold text-[#111111] uppercase tracking-wider">
                  3. Curated Artwork
                </span>
                <span className="text-[11px] text-[#8C827A] font-medium">{CURATED_ARTWORKS.length} Curated Pieces</span>
              </div>

              {/* Artwork Category Filters */}
              <div className="flex flex-wrap gap-1 pb-1">
                {[
                  { id: 'all', label: 'All (14)' },
                  { id: 'suites', label: 'Suites' },
                  { id: 'lobbies', label: 'Lobbies' },
                  { id: 'dining', label: 'Dining' },
                  { id: 'wellness', label: 'Wellness & Spa' },
                  { id: 'other', label: 'Corridor & Outdoor' }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setArtworkFilter(filter.id)}
                    className={`text-[10px] px-2 py-0.5 border transition-all cursor-pointer ${
                      artworkFilter === filter.id
                        ? 'bg-[#111111] text-white border-[#111111] font-medium'
                        : 'bg-[#FAF9F6] text-[#6E665D] border-[#E2DDD5] hover:border-[#111111]'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              
              {/* 14 Curated Artworks Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[290px] overflow-y-auto pr-1">
                {CURATED_ARTWORKS.filter((art) => {
                  if (artworkFilter === 'all') return true;
                  if (artworkFilter === 'suites') return art.suggestedRoom.toLowerCase().includes('suite') || art.suggestedRoom.toLowerCase().includes('penthouse');
                  if (artworkFilter === 'lobbies') return art.suggestedRoom.toLowerCase().includes('lobby') || art.suggestedRoom.toLowerCase().includes('atrium');
                  if (artworkFilter === 'dining') return art.suggestedRoom.toLowerCase().includes('dining') || art.suggestedRoom.toLowerCase().includes('bar') || art.suggestedRoom.toLowerCase().includes('lounge');
                  if (artworkFilter === 'wellness') return art.suggestedRoom.toLowerCase().includes('spa') || art.suggestedRoom.toLowerCase().includes('wellness') || art.suggestedRoom.toLowerCase().includes('treatment');
                  if (artworkFilter === 'other') return art.suggestedRoom.toLowerCase().includes('corridor') || art.suggestedRoom.toLowerCase().includes('elevator') || art.suggestedRoom.toLowerCase().includes('lanai') || art.suggestedRoom.toLowerCase().includes('pool');
                  return true;
                }).map((art) => (
                  <button
                    key={art.id}
                    onClick={() => setSelectedArtwork(art)}
                    className={`group relative aspect-square border overflow-hidden transition-all cursor-pointer text-left ${
                      selectedArtwork.id === art.id
                        ? 'border-[#111111] ring-2 ring-[#111111] shadow-xs'
                        : 'border-[#DCD6CC] opacity-80 hover:opacity-100 hover:border-[#8C827A]'
                    }`}
                    title={`${art.title} by ${art.artist} (${art.tradePrice})`}
                  >
                    <img
                      src={art.image}
                      alt={art.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-[#111111]/90 text-white text-[9px] px-1.5 py-1 truncate">
                      <div className="font-medium truncate">{art.title}</div>
                      <div className="text-[8px] text-[#C8C2B8] truncate">{art.artist}</div>
                    </div>
                    {selectedArtwork.id === art.id && (
                      <div className="absolute top-1 right-1 bg-[#111111] text-[#D4AF37] p-0.5 rounded-full shadow-xs">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Selected Curated Artwork Details Box */}
              <div className="text-[11px] text-[#554E46] bg-[#FAF9F6] p-3 border border-[#E5DFD5] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xs font-semibold text-[#111111] truncate max-w-[180px]">
                    {selectedArtwork.title}
                  </span>
                  <span className="font-semibold text-[#111111]">{selectedArtwork.tradePrice} Trade</span>
                </div>
                <div className="text-[10px] text-[#7A7268] flex items-center justify-between">
                  <span>{selectedArtwork.artist} ({selectedArtwork.artistLocation})</span>
                  <span className="line-through text-[#A39990]">{selectedArtwork.retailPrice} Retail</span>
                </div>
                <div className="text-[10px] text-[#6E665D] border-t border-[#EFECE6] pt-1">
                  <strong>Recommended Room:</strong> {selectedArtwork.suggestedRoom}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
