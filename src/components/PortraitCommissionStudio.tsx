import React, { useState } from 'react';
import { 
  Sparkles, 
  Ruler, 
  Layers, 
  ShieldCheck, 
  Plus, 
  Check, 
  ArrowRight, 
  Sliders, 
  Palette, 
  Maximize2,
  Clock,
  Flame,
  Volume2
} from 'lucide-react';
import { PORTRAIT_COMMISSION_STYLES, BRAND_NAME } from '../data/hospitalityData';
import { SpecItem } from '../types';

interface PortraitCommissionStudioProps {
  onAddToSpecSheet: (item: SpecItem) => void;
  onRequestProposal: (details: string) => void;
  onOpenVisualizerWithArt?: (artId: string) => void;
}

export const PortraitCommissionStudio: React.FC<PortraitCommissionStudioProps> = ({
  onAddToSpecSheet,
  onRequestProposal,
  onOpenVisualizerWithArt
}) => {
  const [selectedStyleIndex, setSelectedStyleIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<'suite' | 'salon' | 'presidential' | 'monumental'>('salon');
  const [selectedFrame, setSelectedFrame] = useState<'gold' | 'oak' | 'walnut' | 'black'>('gold');
  const [includeSecurityCleats, setIncludeSecurityCleats] = useState(true);
  const [includeAntiReflectiveGlass, setIncludeAntiReflectiveGlass] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [roomTag, setRoomTag] = useState('Presidential Suite');
  const [justAdded, setJustAdded] = useState(false);

  const currentStyle = PORTRAIT_COMMISSION_STYLES[selectedStyleIndex];

  const sizeOptions = {
    suite: { label: 'Intimate Suite (32" x 44")', sqft: 9.8, multiplier: 1.0, description: 'Ideal for guestroom vanity, bedside or alcove' },
    salon: { label: 'Grand Salon (44" x 60")', sqft: 18.3, multiplier: 1.6, description: 'Standard luxury focal wall above sofa or console' },
    presidential: { label: 'Presidential Suite (48" x 68")', sqft: 22.7, multiplier: 2.1, description: 'Hero statement piece for master bedhead or fireplace' },
    monumental: { label: 'Monumental Heritage (60" x 84")', sqft: 35.0, multiplier: 3.2, description: 'Double-height lobby, grand staircase or ballroom' }
  };

  const frameOptions = {
    gold: { name: '24k Hand-Gilded Gold Leaf Moulding', price: 950, previewBg: 'bg-[#C5A059]' },
    oak: { name: 'Natural Fluted White Oak Float Frame', price: 650, previewBg: 'bg-[#CBB89D]' },
    walnut: { name: 'Smoked Walnut Shadowbox Frame', price: 750, previewBg: 'bg-[#4A3B32]' },
    black: { name: 'Museum Matte Black Hardwood Frame', price: 550, previewBg: 'bg-[#1A1A1A]' }
  };

  // Pricing calculation
  const basePricePerSqFt = parseInt(currentStyle.pricePerSqFt.replace(/[^0-9]/g, '')) || 280;
  const area = sizeOptions[selectedSize].sqft;
  const canvasCost = Math.round(basePricePerSqFt * area);
  const framingCost = frameOptions[selectedFrame].price;
  const hardwareCost = (includeSecurityCleats ? 120 : 0) + (includeAntiReflectiveGlass ? 280 : 0);
  const unitTradePrice = canvasCost + framingCost + hardwareCost;
  const totalPrice = unitTradePrice * quantity;
  const estimatedRetail = Math.round(unitTradePrice * 1.38);

  const handleAddCustomToSpec = () => {
    const customItem: SpecItem = {
      spaceId: `custom-portrait-${Date.now()}`,
      title: `Custom ${currentStyle.name} Commission (${sizeOptions[selectedSize].label})`,
      propertyName: `Commission: ${roomTag}`,
      image: currentStyle.sampleImage,
      artMedium: `${currentStyle.name} by ${currentStyle.artistLeader}`,
      dimensions: sizeOptions[selectedSize].label.split('(')[1].replace(')', ''),
      priceEstimate: `$${unitTradePrice.toLocaleString()} Trade / unit`,
      quantity: quantity,
      roomTag: roomTag,
      notes: `Framing: ${frameOptions[selectedFrame].name} | Anti-Theft: ${includeSecurityCleats ? 'Yes' : 'No'} | Lead Time: ${currentStyle.leadTime}`,
      addedAt: new Date().toLocaleDateString()
    };
    onAddToSpecSheet(customItem);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2400);
  };

  const handleCommissionInquiry = () => {
    const details = `Custom Portrait Commission Spec:
• Style: ${currentStyle.name} (Atelier Lead: ${currentStyle.artistLeader})
• Size: ${sizeOptions[selectedSize].label}
• Quantity: ${quantity} units
• Designated Room: ${roomTag}
• Frame: ${frameOptions[selectedFrame].name}
• Security Hardware: ${includeSecurityCleats ? 'Hospitality 3-Point Cleats' : 'Standard'}
• Glass: ${includeAntiReflectiveGlass ? 'Museum Anti-Reflective UV99' : 'Standard'}
• Estimated Unit Trade: $${unitTradePrice.toLocaleString()} (Total: $${totalPrice.toLocaleString()})`;

    onRequestProposal(details);
  };

  return (
    <section id="portrait-studio" className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#111111] text-[#FAF9F6] text-[11px] font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Portrait Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] tracking-tight">
            Commission Bespoke Fine Art Portraiture
          </h2>
          <p className="text-sm sm:text-base text-[#5E574E] leading-relaxed">
            Specify tailored subject portraits, bas-relief plaster profiles, and gold-leaf figurative masterworks for your hotel suites, private dining salons, and executive boardrooms.
          </p>
        </div>

        {/* Studio Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Portrait Canvas Preview Stage */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="relative bg-[#EAE4DA] border border-[#D5CEC4] p-6 sm:p-10 flex flex-col items-center justify-center min-h-[460px] sm:min-h-[520px] shadow-sm overflow-hidden">
              
              {/* Background Wall Texture Simulation */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
              
              {/* Wall Spotlight Accent */}
              <div className="absolute -top-12 inset-x-0 h-40 bg-gradient-to-b from-amber-100/40 via-amber-100/10 to-transparent pointer-events-none blur-xl"></div>

              {/* Dynamic Portrait Display Frame */}
              <div className={`relative transition-all duration-500 shadow-2xl z-10 ${
                selectedFrame === 'gold' ? 'p-3 bg-gradient-to-tr from-[#997733] via-[#E5C158] to-[#997733] border border-[#775522]' :
                selectedFrame === 'oak' ? 'p-3 bg-[#CBB89D] border border-[#B5A287]' :
                selectedFrame === 'walnut' ? 'p-3 bg-[#4A3B32] border border-[#382C24]' :
                'p-3 bg-[#1A1A1A] border border-black'
              } ${
                selectedSize === 'suite' ? 'max-w-[260px]' :
                selectedSize === 'salon' ? 'max-w-[320px]' :
                selectedSize === 'presidential' ? 'max-w-[360px]' :
                'max-w-[400px]'
              }`}>
                <div className="relative overflow-hidden bg-black aspect-3/4">
                  <img
                    src={currentStyle.sampleImage}
                    alt={currentStyle.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Canvas Glaze Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none"></div>
                </div>

                {/* Floating Dimension Label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold text-[#5A5248] bg-white/90 backdrop-blur-xs px-3 py-1 border border-[#DDD6CB] shadow-xs">
                  {sizeOptions[selectedSize].label}
                </div>
              </div>

              {/* Security Cleat & Specification Guarantee Ribbon */}
              <div className="absolute top-4 left-4 flex flex-col gap-1 z-20">
                <span className="bg-[#111111]/85 backdrop-blur-xs text-[#FAF9F6] text-[10px] uppercase tracking-wider px-2.5 py-1 flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                  <span>Museum Grade Archival Spec</span>
                </span>
                {includeSecurityCleats && (
                  <span className="bg-emerald-950/90 text-emerald-200 text-[10px] px-2.5 py-0.5 border border-emerald-800/60">
                    Concealed 3-Point Cleats Included
                  </span>
                )}
              </div>

              {/* Lead Artist Credit Badge */}
              <div className="absolute bottom-4 right-4 bg-[#111111]/90 backdrop-blur-xs text-white text-[11px] p-2.5 border border-[#333333] max-w-xs z-20">
                <div className="text-[9px] text-[#D4AF37] uppercase tracking-wider font-semibold">Atelier Lead</div>
                <div className="font-serif text-xs font-medium">{currentStyle.artistLeader}</div>
                <div className="text-[10px] text-[#BBB0A4]">{currentStyle.leadTime} Commission Window</div>
              </div>
            </div>

            {/* Quick Summary Strip */}
            <div className="bg-white p-4 border border-[#DDD6CB] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-2 text-[#5E574E]">
                <Clock className="w-4 h-4 text-[#8C827A]" />
                <span>Estimated Turnaround: <strong>{currentStyle.leadTime}</strong></span>
              </div>
              <div className="text-xs text-[#7A7268]">
                Ideal for: <span className="font-medium text-[#111111]">{currentStyle.idealSpaces}</span>
              </div>
            </div>
          </div>

          {/* Right: Commission Configurator Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-[#DDD6CB] shadow-sm space-y-6">
            
            {/* Step 1: Select Portrait Aesthetic Style */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#EFECE6] pb-2">
                <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider">
                  1. Artistic Portrait Style & Technique
                </span>
                <span className="text-[11px] text-[#8C827A] font-medium">{PORTRAIT_COMMISSION_STYLES.length} Master Styles</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PORTRAIT_COMMISSION_STYLES.map((style, idx) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyleIndex(idx)}
                    className={`p-3 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedStyleIndex === idx
                        ? 'border-[#111111] bg-[#F7F4EE] shadow-2xs'
                        : 'border-[#E2DDD5] hover:bg-[#FAF9F6] text-[#4A453E]'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold text-[#111111]">{style.name}</div>
                      <div className="text-[11px] text-[#7A7268] mt-1 line-clamp-2">{style.description}</div>
                    </div>
                    <div className="text-[10px] font-semibold text-[#B8860B] mt-2 pt-1 border-t border-[#ECE7DF]">
                      {style.pricePerSqFt}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Dimensions & Proportion */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#EFECE6] pb-2">
                <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider">
                  2. Scale & Spatial Proportion
                </span>
                <span className="text-[11px] text-[#8C827A]">Portrait Orientation (Vertical)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(Object.keys(sizeOptions) as Array<keyof typeof sizeOptions>).map((key) => {
                  const opt = sizeOptions[key];
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedSize(key)}
                      className={`p-2.5 text-left border transition-all cursor-pointer ${
                        selectedSize === key
                          ? 'border-[#111111] bg-[#F7F4EE] font-semibold text-[#111111]'
                          : 'border-[#E2DDD5] text-[#554E46] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      <div className="text-xs">{opt.label}</div>
                      <div className="text-[10px] text-[#7A7268] mt-0.5">{opt.description}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Framing & Security Options */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#EFECE6] pb-2">
                <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider">
                  3. Framing & Security Cleats
                </span>
                <span className="text-[11px] text-[#8C827A]">Hospitality Mounting</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(frameOptions) as Array<keyof typeof frameOptions>).map((fKey) => {
                  const fOpt = frameOptions[fKey];
                  return (
                    <button
                      key={fKey}
                      onClick={() => setSelectedFrame(fKey)}
                      className={`p-2.5 text-left border transition-all cursor-pointer flex items-center space-x-2 ${
                        selectedFrame === fKey
                          ? 'border-[#111111] bg-[#F7F4EE] font-semibold'
                          : 'border-[#E2DDD5] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${fOpt.previewBg} border border-black/20 shrink-0`}></span>
                      <div className="text-[11px] truncate text-[#2C2723]">{fOpt.name.split('(')[0]}</div>
                    </button>
                  );
                })}
              </div>

              {/* Hardware Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                <label className="flex items-center space-x-2 p-2 bg-[#FAF9F6] border border-[#E5DFD5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeSecurityCleats}
                    onChange={(e) => setIncludeSecurityCleats(e.target.checked)}
                    className="accent-[#111111]"
                  />
                  <span className="text-[11px] text-[#3D3730]">Concealed Security Cleats (+ $120)</span>
                </label>

                <label className="flex items-center space-x-2 p-2 bg-[#FAF9F6] border border-[#E5DFD5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeAntiReflectiveGlass}
                    onChange={(e) => setIncludeAntiReflectiveGlass(e.target.checked)}
                    className="accent-[#111111]"
                  />
                  <span className="text-[11px] text-[#3D3730]">Museum Anti-UV Glass (+ $280)</span>
                </label>
              </div>
            </div>

            {/* Step 4: Room Tag & Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-[11px] font-semibold text-[#5A5248] uppercase mb-1">
                  Designated Space / Room Tag
                </label>
                <select
                  value={roomTag}
                  onChange={(e) => setRoomTag(e.target.value)}
                  className="w-full p-2 text-xs bg-[#FAF9F6] border border-[#D5CEC4] focus:outline-none focus:border-[#111111]"
                >
                  <option value="Presidential Suite">Presidential Suite Master</option>
                  <option value="Executive King Suite">Executive King Suite Headboard</option>
                  <option value="Library Salon">Hotel Library Lounge / Salon</option>
                  <option value="Private Dining">Private Dining Room Alcove</option>
                  <option value="Executive Boardroom">Executive Boardroom</option>
                  <option value="Grand Staircase">Grand Staircase Atrium</option>
                  <option value="Corridor Walkway">Suite Promenade Corridor</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#5A5248] uppercase mb-1">
                  Quantity (Multi-Room Rollout)
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 bg-[#FAF9F6] border border-[#D5CEC4] hover:bg-[#EAE4DA] text-xs font-bold"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-center py-2 text-xs bg-white border-y border-[#D5CEC4] focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 bg-[#FAF9F6] border border-[#D5CEC4] hover:bg-[#EAE4DA] text-xs font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Price Matrix Summary */}
            <div className="bg-[#111111] text-[#FAF9F6] p-5 border border-[#333333] space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest block font-semibold">
                    Tiered Trade Pricing
                  </span>
                  <span className="font-serif text-2xl font-medium text-white">
                    ${totalPrice.toLocaleString()} <span className="text-xs font-sans text-[#A8A096]">Trade Total</span>
                  </span>
                </div>
                <div className="text-right text-xs text-[#A8A096]">
                  <div>Unit: <strong>${unitTradePrice.toLocaleString()}</strong></div>
                  <div className="line-through text-[10px] text-[#7A7268]">Retail: ${estimatedRetail.toLocaleString()}</div>
                </div>
              </div>

              <div className="text-[11px] text-[#BBB0A4] border-t border-[#2D2A26] pt-2 flex items-center justify-between">
                <span>Includes Certificate of Authenticity & White-Glove Crating</span>
                <span className="text-[#D4AF37]">Tax-Exempt Trade Tier</span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <button
                  onClick={handleAddCustomToSpec}
                  className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                    justAdded ? 'bg-emerald-800 text-white' : 'bg-white hover:bg-[#F2EDE4] text-[#111111]'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Spec Sheet!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to Spec Sheet</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleCommissionInquiry}
                  className="py-3 px-4 bg-[#2A2622] hover:bg-[#3D3730] border border-[#554E46] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Request Artist Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
