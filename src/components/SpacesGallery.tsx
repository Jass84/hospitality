import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  Plus, 
  Check, 
  Eye, 
  MapPin, 
  Sparkles, 
  Volume2, 
  Flame, 
  Maximize2,
  ExternalLink,
  ChevronRight,
  Palette,
  LayoutGrid,
  Columns
} from 'lucide-react';
import { HospitalitySpace, SpaceCategory, SpecItem, ArtOrientation } from '../types';
import { HOSPITALITY_SPACES } from '../data/hospitalityData';

interface SpacesGalleryProps {
  selectedCategory: SpaceCategory;
  onSelectCategory: (category: SpaceCategory) => void;
  onOpenSpaceModal: (space: HospitalitySpace) => void;
  onAddToSpecSheet: (space: HospitalitySpace) => void;
  specItems: SpecItem[];
  onPreviewInVisualizer: (space: HospitalitySpace) => void;
  onRequestAdvisory: () => void;
  onInspectArtwork: (space: HospitalitySpace) => void;
}

export const SpacesGallery: React.FC<SpacesGalleryProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenSpaceModal,
  onAddToSpecSheet,
  specItems,
  onPreviewInVisualizer,
  onRequestAdvisory,
  onInspectArtwork
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyAcoustic, setOnlyAcoustic] = useState(false);
  const [onlyFireRated, setOnlyFireRated] = useState(false);
  const [selectedOrientation, setSelectedOrientation] = useState<ArtOrientation>('all');

  const categories: { id: SpaceCategory; label: string; count: number; icon?: any }[] = useMemo(() => [
    { id: 'all', label: 'All Curated Spaces', count: HOSPITALITY_SPACES.length },
    { id: 'portraits', label: 'Fine Art Portraiture', count: HOSPITALITY_SPACES.filter(s => s.category === 'portraits').length, icon: Palette },
    { id: 'guest_rooms', label: 'Guest Rooms & Suites', count: HOSPITALITY_SPACES.filter(s => s.category === 'guest_rooms').length },
    { id: 'lobbies', label: 'Grand Lobbies & Atriums', count: HOSPITALITY_SPACES.filter(s => s.category === 'lobbies').length },
    { id: 'restaurants', label: 'Restaurants & Lounges', count: HOSPITALITY_SPACES.filter(s => s.category === 'restaurants').length },
    { id: 'wellness', label: 'Wellness & Spas', count: HOSPITALITY_SPACES.filter(s => s.category === 'wellness').length },
    { id: 'corridors', label: 'Corridors & Wayfinding', count: HOSPITALITY_SPACES.filter(s => s.category === 'corridors').length },
    { id: 'outdoor', label: 'Outdoor & Terraces', count: HOSPITALITY_SPACES.filter(s => s.category === 'outdoor').length },
  ], []);

  const filteredSpaces = useMemo(() => {
    return HOSPITALITY_SPACES.filter(space => {
      // Category filter
      if (selectedCategory !== 'all' && space.category !== selectedCategory) {
        return false;
      }
      // Orientation filter
      if (selectedOrientation !== 'all') {
        if (selectedOrientation === 'portrait' && space.orientation !== 'portrait') return false;
        if (selectedOrientation === 'landscape' && space.orientation !== 'landscape') return false;
        if (selectedOrientation === 'multipanel' && space.orientation !== 'multipanel') return false;
      }
      // Technical toggles
      if (onlyAcoustic && !space.acousticRated) {
        return false;
      }
      if (onlyFireRated && !space.fireRated) {
        return false;
      }
      // Text search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = space.title.toLowerCase().includes(query);
        const matchesProperty = space.propertyName.toLowerCase().includes(query);
        const matchesLocation = space.location.toLowerCase().includes(query);
        const matchesArtist = space.artistName.toLowerCase().includes(query);
        const matchesMedium = space.artMedium.toLowerCase().includes(query);
        const matchesTags = space.tags.some(t => t.toLowerCase().includes(query));
        return matchesName || matchesProperty || matchesLocation || matchesArtist || matchesMedium || matchesTags;
      }
      return true;
    });
  }, [selectedCategory, selectedOrientation, onlyAcoustic, onlyFireRated, searchQuery]);

  const isItemInSpec = (spaceId: string) => {
    return specItems.some(item => item.spaceId === spaceId);
  };

  return (
    <section id="spaces" className="bg-[#F8F6F1] py-16 lg:py-24 border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8A8075] uppercase">
            Curated Fine Art & Portrait Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] tracking-tight">
            Art Built for Every Hospitality Space
          </h2>
          <p className="text-sm sm:text-base text-[#5E574E] leading-relaxed">
            Explore bespoke fine art portraits, vertical figurative canvases, double-height public lobby installations, and acoustic dining suites installed across prestigious hotels worldwide.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-3 gap-2 border-b border-[#E2DDD3] scrollbar-none mb-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer font-medium flex items-center space-x-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-[#111111] text-[#FAF9F6] shadow-2xs'
                    : 'bg-white/80 hover:bg-white text-[#524B43] border border-[#DDD6CB]'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5 text-[#D4AF37]" />}
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.id ? 'bg-[#333333] text-[#FAF9F6]' : 'bg-[#EAE4DA] text-[#6E665D]'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Orientation Filter Toolbar */}
        <div className="bg-white p-4 border border-[#DDD6CB] shadow-2xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C827A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by portrait, hotel, artist, linen, plaster..."
              className="w-full pl-9.5 pr-4 py-2 text-xs sm:text-sm bg-[#FAF9F6] border border-[#D5CEC4] focus:outline-none focus:border-[#111111] text-[#1A1A1A] placeholder-[#8F887F]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C827A] hover:text-[#111111]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Orientation Filter Switcher */}
          <div className="flex items-center space-x-1.5 text-xs text-[#554E46] overflow-x-auto pb-1 lg:pb-0">
            <span className="text-[#8C827A] font-semibold text-[11px] uppercase mr-1 whitespace-nowrap">
              Orientation:
            </span>
            {[
              { id: 'all', label: 'All Displays' },
              { id: 'portrait', label: 'Portrait (Vertical)' },
              { id: 'landscape', label: 'Landscape' },
              { id: 'multipanel', label: 'Diptych / Suites' }
            ].map((ori) => (
              <button
                key={ori.id}
                onClick={() => setSelectedOrientation(ori.id as ArtOrientation)}
                className={`px-2.5 py-1.5 whitespace-nowrap border text-xs cursor-pointer transition-colors ${
                  selectedOrientation === ori.id
                    ? 'bg-[#111111] text-white border-[#111111] font-semibold'
                    : 'bg-[#FAF9F6] border-[#D5CEC4] hover:bg-[#F2EDE4]'
                }`}
              >
                {ori.label}
              </button>
            ))}
          </div>

          {/* Technical Filter Toggles */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#423C35]">
            <button
              onClick={() => setOnlyAcoustic(!onlyAcoustic)}
              className={`px-3 py-1.5 border text-xs flex items-center space-x-1.5 transition-colors cursor-pointer ${
                onlyAcoustic 
                  ? 'bg-[#111111] text-white border-[#111111]' 
                  : 'bg-[#FAF9F6] border-[#D5CEC4] hover:bg-[#F2EDE4]'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Acoustic</span>
            </button>

            <button
              onClick={() => setOnlyFireRated(!onlyFireRated)}
              className={`px-3 py-1.5 border text-xs flex items-center space-x-1.5 transition-colors cursor-pointer ${
                onlyFireRated 
                  ? 'bg-[#111111] text-white border-[#111111]' 
                  : 'bg-[#FAF9F6] border-[#D5CEC4] hover:bg-[#F2EDE4]'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Fire-Rated</span>
            </button>

            <div className="text-xs text-[#7A7268] pl-2 border-l border-[#DCD6CC] hidden sm:block">
              Showing <strong className="text-[#111111]">{filteredSpaces.length}</strong> Spaces
            </div>
          </div>
        </div>

        {/* Spaces Gallery Grid */}
        {filteredSpaces.length === 0 ? (
          <div className="bg-white p-12 text-center border border-[#DDD6CB] space-y-4">
            <p className="text-base text-[#524B43]">No hospitality spaces matched your filter criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setOnlyAcoustic(false);
                setOnlyFireRated(false);
                setSelectedOrientation('all');
                onSelectCategory('all');
              }}
              className="px-5 py-2.5 bg-[#111111] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpaces.map((space) => {
              const inSpec = isItemInSpec(space.id);
              const isPortraitDisplay = space.orientation === 'portrait';

              return (
                <div 
                  key={space.id}
                  id={`space-card-${space.id}`}
                  className="group bg-white border border-[#DDD6CB] flex flex-col hover:border-[#111111] hover:shadow-lg transition-all duration-300"
                >
                  {/* Image Container with In-Situ & Portrait Badges */}
                  <div className={`relative overflow-hidden bg-[#EAE4DA] ${
                    isPortraitDisplay ? 'aspect-3/4' : 'aspect-4/3'
                  }`}>
                    <img
                      src={space.image}
                      alt={`${space.title} at ${space.propertyName}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />

                    {/* Room Type Pill */}
                    <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-xs text-[#FAF9F6] text-[11px] font-medium tracking-wide px-2.5 py-1">
                      {space.roomType}
                    </div>

                    {/* Badges on Top Right */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                      {space.isPortraitFeatured && (
                        <span className="bg-[#D4AF37] text-black text-[10px] font-bold px-2 py-0.5 shadow-sm uppercase tracking-wider">
                          Fine Art Portrait
                        </span>
                      )}
                      {space.acousticRated && (
                        <span className="bg-emerald-950/90 text-emerald-200 text-[10px] font-semibold px-2 py-0.5 border border-emerald-800/60 flex items-center space-x-1">
                          <Volume2 className="w-2.5 h-2.5" />
                          <span>Acoustic NRC</span>
                        </span>
                      )}
                      {space.fireRated && (
                        <span className="bg-[#111111]/85 text-[#FAF9F6] text-[10px] px-2 py-0.5 border border-white/20">
                          Class A Fire
                        </span>
                      )}
                    </div>

                    {/* Quick Hover Overlay Actions */}
                    <div className="absolute inset-0 bg-[#111111]/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2.5 p-4">
                      <button
                        onClick={() => onInspectArtwork(space)}
                        className="px-3 py-2 bg-white text-[#111111] text-xs font-semibold tracking-wide flex items-center space-x-1 shadow-md hover:bg-[#F2EDE4] cursor-pointer"
                        title="Inspect High-Res Texture & Dimensions"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Texture</span>
                      </button>

                      <button
                        onClick={() => onPreviewInVisualizer(space)}
                        className="px-3 py-2 bg-[#111111] text-white text-xs font-semibold tracking-wide flex items-center space-x-1 shadow-md hover:bg-[#2C2723] cursor-pointer"
                        title="Preview Artwork on Wall in Visualizer"
                      >
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        <span>Room Visualizer</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content Information */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      {/* Location & Hotel Property */}
                      <div className="flex items-center justify-between text-xs text-[#7A7268]">
                        <span className="font-semibold text-[#111111]">{space.propertyName}</span>
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-0.5 text-[#8C827A]" />
                          {space.location}
                        </span>
                      </div>

                      {/* Artwork Title */}
                      <h3 className="font-serif text-xl font-medium text-[#111111] leading-snug group-hover:text-[#2C2723] transition-colors">
                        {space.artworkTitle}
                      </h3>

                      {/* Artist & Origin */}
                      <div className="text-xs text-[#5E574E]">
                        Artist: <strong className="text-[#1A1A1A]">{space.artistName}</strong> ({space.artistOrigin})
                      </div>

                      {/* Medium & Substrate */}
                      <div className="text-xs text-[#6B645B] line-clamp-2">
                        {space.artMedium}
                      </div>

                      {/* Dimensions & Trade Pricing */}
                      <div className="pt-2 border-t border-[#EFECE6] grid grid-cols-2 gap-2 text-[11px] text-[#7A7268]">
                        <div>
                          <span className="text-[#9E968D] block">Dimensions</span>
                          <span className="font-medium text-[#2C2723]">{space.dimensions}</span>
                        </div>
                        <div>
                          <span className="text-[#9E968D] block">Tiered Trade Spec</span>
                          <span className="font-semibold text-[#111111]">{space.pricePerUnit.split('(')[0]}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {space.tags.slice(0, 3).map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="text-[10px] bg-[#F2EDE4] text-[#554E46] px-2 py-0.5 border border-[#E5DFD5]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-3 border-t border-[#EFECE6] flex items-center justify-between gap-2">
                      <button
                        onClick={() => onOpenSpaceModal(space)}
                        className="text-xs font-medium text-[#111111] hover:underline flex items-center space-x-1 cursor-pointer"
                      >
                        <span>Curation Notes</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onAddToSpecSheet(space)}
                        className={`px-3 py-1.5 text-xs font-semibold tracking-wide flex items-center space-x-1.5 transition-all cursor-pointer ${
                          inSpec 
                            ? 'bg-emerald-900 text-white hover:bg-emerald-800' 
                            : 'bg-[#111111] text-white hover:bg-[#2C2723]'
                        }`}
                        title={inSpec ? 'Already in Project Spec Sheet (Click to add another unit)' : 'Add to Spec Sheet'}
                      >
                        {inSpec ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>In Spec ({specItems.find(i => i.spaceId === space.id)?.quantity || 1})</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Spec</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Callout: Custom Hospitality Spec Request */}
        <div className="mt-14 bg-[#111111] text-[#FAF9F6] p-8 sm:p-10 border border-[#2D2D2D] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-[0.2em]">
              Custom Art Packages & Portrait Commissions
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              Have a multi-room hotel or restaurant rollout?
            </h3>
            <p className="text-xs sm:text-sm text-[#CCCCCC] max-w-xl">
              Send us your architectural elevations, FF&E boards, or portrait concept boards. Our atelier advisory team will generate a tailored digital lookbook and fixed-price quote within 5 business days.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onRequestAdvisory}
              className="px-6 py-3 bg-white hover:bg-[#F2EDE4] text-[#111111] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Submit FF&E Specs
            </button>
            <a
              href="tel:+18772758620"
              className="px-5 py-3 border border-[#444444] text-[#FAF9F6] hover:bg-[#222222] text-xs font-medium tracking-wide text-center transition-colors"
            >
              Speak to Atelier Curator
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
