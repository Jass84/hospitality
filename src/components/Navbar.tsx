import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  FileSpreadsheet, 
  Search, 
  PhoneCall, 
  Sparkles, 
  Menu, 
  X,
  Compass,
  SlidersHorizontal,
  ChevronDown,
  Palette,
  Image as ImageIcon
} from 'lucide-react';
import { SpecItem, SpaceCategory } from '../types';
import { BRAND_NAME, BRAND_TAGLINE, BRAND_PHONE } from '../data/hospitalityData';

interface NavbarProps {
  specItems: SpecItem[];
  onOpenSpecSheet: () => void;
  onOpenConsultation: () => void;
  onNavigateSection: (sectionId: string) => void;
  activeCategory: string;
  onSelectCategory: (category: SpaceCategory) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  specItems,
  onOpenSpecSheet,
  onOpenConsultation,
  onNavigateSection,
  activeCategory,
  onSelectCategory
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [spacesDropdownOpen, setSpacesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalUnits = specItems.reduce((acc, item) => acc + item.quantity, 0);

  const spaceCategories: { id: SpaceCategory; label: string; isNew?: boolean }[] = [
    { id: 'all', label: 'All Curated Spaces' },
    { id: 'portraits', label: 'Fine Art Portraiture & Figurative', isNew: true },
    { id: 'guest_rooms', label: 'Guest Rooms & Suites' },
    { id: 'lobbies', label: 'Grand Lobbies & Atriums' },
    { id: 'restaurants', label: 'Restaurants & Cocktail Lounges' },
    { id: 'wellness', label: 'Wellness Sanctuaries & Spas' },
    { id: 'corridors', label: 'Corridors & Wayfinding' },
    { id: 'outdoor', label: 'Outdoor Terraces & Sculptures' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Editorial Announcement Bar */}
      <div className="bg-[#111111] text-[#FAF9F6] text-xs py-2 px-4 border-b border-[#292623] font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center text-[#D4AF37] font-semibold tracking-wider text-[11px] uppercase">
              <Sparkles className="w-3 h-3 mr-1" />
              Fine Art & Portraiture Trade Atelier
            </span>
            <span className="hidden sm:inline text-[#666666]">|</span>
            <span className="text-[#D8D2C9] text-[12px] truncate">
              Bespoke Portrait Commissions, Museum Curation & Tiered Trade Pricing for Luxury Hospitality
            </span>
          </div>
          <div className="flex items-center space-x-5 text-xs text-[#CCCCCC] shrink-0 ml-4">
            <a 
              href={`tel:${BRAND_PHONE.replace(/[^0-9]/g, '')}`} 
              className="hidden md:flex items-center hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 mr-1.5 text-[#D4AF37]" />
              Trade Concierge: {BRAND_PHONE}
            </a>
            <button 
              onClick={onOpenConsultation}
              className="underline decoration-[#D4AF37] underline-offset-4 hover:text-white cursor-pointer font-medium"
            >
              Request 2026 Lookbook
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#E5E0D8] py-3.5' 
          : 'bg-[#FAF9F6] border-b border-[#ECE7DF] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand Lockup */}
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigateSection('hero'); }}
              className="group flex flex-col"
              id="brand-logo"
            >
              <div className="flex items-baseline space-x-2">
                <span className="font-serif tracking-[0.25em] text-2xl font-bold text-[#111111] uppercase group-hover:opacity-85 transition-opacity">
                  {BRAND_NAME}
                </span>
                <span className="text-[10px] font-sans tracking-[0.25em] font-semibold text-[#8C827A] uppercase">
                  / ATELIER
                </span>
              </div>
              <span className="text-[9.5px] tracking-[0.3em] text-[#8C827A] uppercase font-sans font-medium">
                {BRAND_TAGLINE}
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[#4A453E] ml-4">
              
              {/* Portrait Studio Quick Link */}
              <button 
                onClick={() => onNavigateSection('portrait-studio')}
                className="py-2 text-[#111111] hover:text-[#B8860B] transition-colors cursor-pointer flex items-center space-x-1.5 font-semibold"
              >
                <Palette className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Portrait Studio</span>
                <span className="bg-[#111111] text-[#D4AF37] text-[9px] px-1.5 py-0.2 uppercase tracking-wider font-bold">New</span>
              </button>

              {/* Spaces Dropdown Trigger */}
              <div className="relative group">
                <button 
                  onClick={() => onNavigateSection('spaces')}
                  className="flex items-center space-x-1.5 py-2 hover:text-[#111111] transition-colors cursor-pointer"
                >
                  <span>Hospitality Portfolio</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#8C827A] group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-72 bg-[#FAF9F6] border border-[#E2DDD5] shadow-xl py-2 hidden group-hover:block transition-all z-50">
                  <div className="px-3.5 py-1.5 text-[11px] font-semibold text-[#8C827A] uppercase tracking-wider border-b border-[#EFECE6]">
                    Filter by Space & Portraiture
                  </div>
                  {spaceCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onSelectCategory(cat.id);
                        onNavigateSection('spaces');
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center justify-between ${
                        activeCategory === cat.id 
                          ? 'bg-[#EFECE6] text-[#111111] font-semibold' 
                          : 'text-[#4A453E] hover:bg-[#F4F1EA] hover:text-[#111111]'
                      }`}
                    >
                      <span className="flex items-center space-x-2">
                        {cat.id === 'portraits' && <Palette className="w-3 h-3 text-[#B8860B]" />}
                        <span>{cat.label}</span>
                      </span>
                      {cat.isNew && (
                        <span className="text-[9px] bg-[#D4AF37]/20 text-[#8C6B10] px-1.5 py-0.5 rounded font-bold uppercase">
                          Featured
                        </span>
                      )}
                      {activeCategory === cat.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Spatial Visualizer */}
              <button 
                onClick={() => onNavigateSection('visualizer')}
                className="py-2 hover:text-[#111111] transition-colors cursor-pointer flex items-center space-x-1"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 mr-1 text-[#8C827A]" />
                <span>Room Visualizer</span>
              </button>

              {/* Advisory Process */}
              <button 
                onClick={() => onNavigateSection('process')}
                className="py-2 hover:text-[#111111] transition-colors cursor-pointer"
              >
                Advisory Process
              </button>

              {/* Trade Calculator */}
              <button 
                onClick={() => onNavigateSection('calculator')}
                className="py-2 hover:text-[#111111] transition-colors cursor-pointer"
              >
                Trade Pricing & Calculator
              </button>

              {/* Curators */}
              <button 
                onClick={() => onNavigateSection('curators')}
                className="py-2 hover:text-[#111111] transition-colors cursor-pointer"
              >
                Atelier Curators
              </button>
            </div>
          </div>

          {/* Right Action CTA & Spec Sheet Drawer Trigger */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Project Spec Sheet Button */}
            <button
              onClick={onOpenSpecSheet}
              id="open-spec-sheet-btn"
              className="relative flex items-center space-x-2 px-3.5 py-2 rounded-sm border border-[#D5CEC4] bg-white hover:bg-[#F4F1EA] text-[#2C2723] text-xs font-semibold tracking-wide transition-all shadow-2xs cursor-pointer"
              title="View Project Spec Sheet / Saved Pieces"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#8C827A]" />
              <span className="hidden md:inline">Project Spec Sheet</span>
              {specItems.length > 0 && (
                <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[11px] font-bold bg-[#111111] text-[#FAF9F6] rounded-full">
                  {totalUnits}
                </span>
              )}
            </button>

            {/* Primary Request Advisory Button */}
            <button
              onClick={onOpenConsultation}
              id="nav-request-advisory-btn"
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#111111] hover:bg-[#2A2A2A] text-[#FAF9F6] text-xs sm:text-sm font-medium tracking-wider uppercase transition-all shadow-sm cursor-pointer active:scale-98"
            >
              Request Advisory
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4A453E] hover:text-[#111111] hover:bg-[#ECE7DF] rounded transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E5E0D8] bg-[#FAF9F6] px-4 pt-3 pb-6 space-y-3 font-sans shadow-lg">
            
            <button
              onClick={() => {
                onNavigateSection('portrait-studio');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left p-2.5 bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-between"
            >
              <span className="flex items-center space-x-2">
                <Palette className="w-4 h-4 text-[#D4AF37]" />
                <span>Interactive Portrait Studio</span>
              </span>
              <span className="text-[10px] text-[#D4AF37]">Explore</span>
            </button>

            <div className="py-2 text-xs font-semibold text-[#8C827A] uppercase tracking-wider">
              Explore Portfolio & Spaces
            </div>
            <div className="grid grid-cols-1 gap-1.5 pl-2 border-l-2 border-[#D5CEC4]">
              {spaceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    onNavigateSection('spaces');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-1 text-xs flex items-center justify-between ${
                    activeCategory === cat.id ? 'font-bold text-[#111111]' : 'text-[#5C564E]'
                  }`}
                >
                  <span>{cat.label}</span>
                  {cat.isNew && <span className="text-[9px] text-[#B8860B] font-bold uppercase">New</span>}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-[#E5E0D8] space-y-2 text-sm font-medium text-[#2C2723]">
              <button
                onClick={() => {
                  onNavigateSection('visualizer');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-1.5 flex items-center space-x-2"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#8C827A]" />
                <span>Interactive Room Visualizer</span>
              </button>

              <button
                onClick={() => {
                  onNavigateSection('process');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-1.5"
              >
                Advisory Process
              </button>

              <button
                onClick={() => {
                  onNavigateSection('calculator');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-1.5"
              >
                Trade Pricing & Volume Calculator
              </button>

              <button
                onClick={() => {
                  onNavigateSection('curators');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-1.5"
              >
                Atelier Curators
              </button>
            </div>

            <div className="pt-3 border-t border-[#E5E0D8] flex flex-col space-y-2">
              <a 
                href={`tel:${BRAND_PHONE.replace(/[^0-9]/g, '')}`} 
                className="flex items-center text-xs text-[#5C564E]"
              >
                <PhoneCall className="w-3.5 h-3.5 mr-2 text-[#D4AF37]" />
                Trade Concierge: {BRAND_PHONE}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider text-center"
              >
                Request Free Art Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
