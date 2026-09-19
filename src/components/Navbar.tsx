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
  ChevronDown
} from 'lucide-react';
import { SpecItem } from '../types';

interface NavbarProps {
  specItems: SpecItem[];
  onOpenSpecSheet: () => void;
  onOpenConsultation: () => void;
  onNavigateSection: (sectionId: string) => void;
  activeCategory: string;
  onSelectCategory: (category: any) => void;
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

  const spaceCategories = [
    { id: 'all', label: 'All Hospitality Spaces' },
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
      <div className="bg-[#1A1A1A] text-[#FAF9F6] text-xs py-2 px-4 border-b border-[#2D2D2D] font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center text-[#D4AF37] font-semibold tracking-wider text-[11px] uppercase">
              <Sparkles className="w-3 h-3 mr-1" />
              For The Trade
            </span>
            <span className="hidden sm:inline text-[#A0A0A0]">|</span>
            <span className="text-[#E0E0E0] text-[12px] truncate">
              Complimentary Art Advisory, Custom Commissions & Tiered Volume Pricing for Hoteliers and Designers
            </span>
          </div>
          <div className="flex items-center space-x-5 text-xs text-[#CCCCCC] shrink-0 ml-4">
            <a 
              href="tel:+18772758620" 
              className="hidden md:flex items-center hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 mr-1.5 text-[#D4AF37]" />
              Trade Desk: +1 (877) 275-8620
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
                <span className="font-serif tracking-[0.2em] text-2xl font-bold text-[#111111] uppercase group-hover:opacity-85 transition-opacity">
                  SAATCHI ART
                </span>
                <span className="text-[10px] font-sans tracking-[0.25em] font-semibold text-[#8C827A] uppercase">
                  / TRADE
                </span>
              </div>
              <span className="text-[10px] tracking-[0.3em] text-[#A39990] uppercase font-sans font-medium">
                Hospitality Art Advisory
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-[#4A453E] ml-4">
              {/* Spaces Dropdown Trigger */}
              <div className="relative group">
                <button 
                  onClick={() => onNavigateSection('spaces')}
                  className="flex items-center space-x-1.5 py-2 hover:text-[#111111] transition-colors cursor-pointer"
                >
                  <span>Hospitality Spaces</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#8C827A] group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-64 bg-[#FAF9F6] border border-[#E2DDD5] shadow-xl rounded-none py-2 hidden group-hover:block transition-all z-50">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-[#8C827A] uppercase tracking-wider border-b border-[#EFECE6]">
                    Filter by Hospitality Base
                  </div>
                  {spaceCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onSelectCategory(cat.id);
                        onNavigateSection('spaces');
                      }}
                      className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between ${
                        activeCategory === cat.id 
                          ? 'bg-[#EFECE6] text-[#111111] font-semibold' 
                          : 'text-[#4A453E] hover:bg-[#F4F1EA] hover:text-[#111111]'
                      }`}
                    >
                      <span>{cat.label}</span>
                      {activeCategory === cat.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => onNavigateSection('visualizer')}
                className="py-2 hover:text-[#111111] transition-colors cursor-pointer flex items-center space-x-1"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 mr-1 text-[#8C827A]" />
                <span>Room Visualizer</span>
              </button>

              <button 
                onClick={() => onNavigateSection('process')}
                className="py-2 hover:text-[#111111] transition-colors cursor-pointer"
              >
                Advisory Process
              </button>

              <button 
                onClick={() => onNavigateSection('calculator')}
                className="py-2 hover:text-[#111111] transition-colors cursor-pointer"
              >
                Trade Pricing & Calculator
              </button>

              <button 
                onClick={() => onNavigateSection('curators')}
                className="py-2 hover:text-[#111111] transition-colors cursor-pointer"
              >
                Curators & Team
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
            <div className="py-2 text-xs font-semibold text-[#8C827A] uppercase tracking-wider">
              Explore Hospitality Spaces
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
                  className={`text-left py-1 text-xs ${
                    activeCategory === cat.id ? 'font-bold text-[#111111]' : 'text-[#5C564E]'
                  }`}
                >
                  {cat.label}
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
                Curators & Team
              </button>
            </div>

            <div className="pt-3 border-t border-[#E5E0D8] flex flex-col space-y-2">
              <a 
                href="tel:+18772758620" 
                className="flex items-center text-xs text-[#5C564E]"
              >
                <PhoneCall className="w-3.5 h-3.5 mr-2 text-[#D4AF37]" />
                Direct Trade Desk: +1 (877) 275-8620
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
