import React, { useState } from 'react';
import { 
  Calculator, 
  Percent, 
  CheckCircle, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  DollarSign, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { BRAND_NAME } from '../data/hospitalityData';

interface TradeBenefitsCalculatorProps {
  onRequestAdvisory: () => void;
}

export const TradeBenefitsCalculator: React.FC<TradeBenefitsCalculatorProps> = ({
  onRequestAdvisory
}) => {
  const [keysCount, setKeysCount] = useState<number>(60);
  const [budgetPerKey, setBudgetPerKey] = useState<number>(1400);
  const [includePublicAreas, setIncludePublicAreas] = useState<boolean>(true);

  // Calculations
  const guestRoomTotal = keysCount * budgetPerKey;
  const publicAreaTotal = includePublicAreas ? Math.max(22000, keysCount * 450) : 0;
  const totalRetailBudget = guestRoomTotal + publicAreaTotal;

  // Determine Trade Discount Tier
  let discountPercentage = 15;
  let tierName = 'Atelier Trade Associate';

  if (totalRetailBudget >= 150000) {
    discountPercentage = 30;
    tierName = 'Enterprise Hospitality Rollout Tier';
  } else if (totalRetailBudget >= 75000) {
    discountPercentage = 25;
    tierName = 'Flagship Hotel & Portrait Suite Tier';
  } else if (totalRetailBudget >= 35000) {
    discountPercentage = 20;
    tierName = 'Boutique Property Tier';
  }

  const estimatedSavings = Math.round(totalRetailBudget * (discountPercentage / 100));
  const finalTradePrice = totalRetailBudget - estimatedSavings;
  const estimatedTaxSavings = Math.round(finalTradePrice * 0.0825);

  return (
    <section id="calculator" className="bg-[#F8F6F1] py-16 lg:py-24 border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#ECE7DE] border border-[#DDD6CB] text-[11px] font-semibold tracking-wider text-[#3D3730] uppercase">
            <Percent className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>{BRAND_NAME} For The Trade</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] tracking-tight">
            Hospitality & Portrait Trade Volume Calculator
          </h2>
          <p className="text-sm sm:text-base text-[#5E574E] leading-relaxed">
            Estimate your project savings, trade tier pricing, and complimentary curatorial hours based on room keys and bespoke portrait commission scope.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Inputs Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-[#DDD6CB] shadow-2xs space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="border-b border-[#EFECE6] pb-3">
                <h3 className="font-serif text-2xl font-medium text-[#111111]">
                  Project Parameters
                </h3>
                <p className="text-xs text-[#7A7268] mt-1">
                  Adjust keys and targets to estimate volume trade schedule.
                </p>
              </div>

              {/* Slider 1: Number of Keys */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="font-medium text-[#2C2723]">Number of Guest Rooms / Keys:</span>
                  <span className="font-bold font-serif text-lg text-[#111111]">{keysCount} Keys</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="300"
                  step="5"
                  value={keysCount}
                  onChange={(e) => setKeysCount(Number(e.target.value))}
                  className="w-full h-2 bg-[#E2DDD3] rounded-lg appearance-none cursor-pointer accent-[#111111]"
                />
                <div className="flex justify-between text-[11px] text-[#8C827A]">
                  <span>5 (Boutique)</span>
                  <span>100 (Standard)</span>
                  <span>300+ (Resort)</span>
                </div>
              </div>

              {/* Slider 2: Target Art Budget Per Room */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="font-medium text-[#2C2723]">Target Art Budget Per Room / Key:</span>
                  <span className="font-bold font-serif text-lg text-[#111111]">${budgetPerKey.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="4000"
                  step="100"
                  value={budgetPerKey}
                  onChange={(e) => setBudgetPerKey(Number(e.target.value))}
                  className="w-full h-2 bg-[#E2DDD3] rounded-lg appearance-none cursor-pointer accent-[#111111]"
                />
                <div className="flex justify-between text-[11px] text-[#8C827A]">
                  <span>$400 (Framed Editions)</span>
                  <span>$1,400 (Custom Bedhead Portrait)</span>
                  <span>$4,000 (Original Oil Masterpiece)</span>
                </div>
              </div>

              {/* Checkbox: Public Areas (Lobby, Restaurant, Corridors) */}
              <div className="p-4 bg-[#FAF9F6] border border-[#E5DFD5] flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#111111]">
                    Include Grand Salons, Dining & Corridor Promenade
                  </div>
                  <div className="text-[11px] text-[#7A7268]">
                    Monumental portraiture, private dining paintings, and spa bas-reliefs
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={includePublicAreas}
                  onChange={(e) => setIncludePublicAreas(e.target.checked)}
                  className="w-4 h-4 text-[#111111] accent-[#111111] cursor-pointer"
                />
              </div>
            </div>

            {/* Included Trade Services */}
            <div className="pt-4 border-t border-[#EFECE6] text-xs text-[#524B43] space-y-1.5">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Complimentary Project Art Advisory & Custom Lookbook ($4,500 value)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Turnkey Security Hardware & 3-Point Cleat Packaging</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Dedicated Single Point-of-Contact Atelier Senior Curator</span>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-6 bg-[#111111] text-[#FAF9F6] p-6 sm:p-8 border border-[#2B2723] shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#2D2A26] pb-4">
                <div>
                  <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider block">
                    Your Trade Schedule
                  </span>
                  <div className="font-serif text-2xl font-normal text-white">
                    {tierName}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-serif text-[#D4AF37] font-semibold">
                    {discountPercentage}%
                  </span>
                  <span className="text-[10px] text-[#A09890] block uppercase tracking-wider">
                    Volume Discount
                  </span>
                </div>
              </div>

              {/* Numbers breakdown */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between text-[#CCCCCC]">
                  <span>Estimated Retail Value:</span>
                  <span className="line-through">${totalRetailBudget.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-[#D4AF37] font-semibold">
                  <span>Trade Volume Savings ({discountPercentage}%):</span>
                  <span>- ${estimatedSavings.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-white font-medium pt-2 border-t border-[#2C2926]">
                  <span>Net Project Trade Art Cost:</span>
                  <span className="font-serif text-2xl text-white font-bold">
                    ${finalTradePrice.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-[#8CE8B3] text-xs pt-1">
                  <span>Estimated Resale Tax Exemption (Cert. 01):</span>
                  <span>+ ~${estimatedTaxSavings.toLocaleString()} saved</span>
                </div>
              </div>

              {/* Key Deliverables Pill Box */}
              <div className="bg-[#1C1A17] p-4 border border-[#332F2A] space-y-2 text-xs">
                <div className="text-[11px] font-semibold text-[#CCC5BC] uppercase tracking-wider">
                  Included Trade Entitlements:
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#A39990]">
                  <div>• Custom Portrait Commission Mockups</div>
                  <div>• High-Res 3D In-Situ Renders</div>
                  <div>• Oil & Canvas Swatch Samples</div>
                  <div>• Consolidated Crate Freight</div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-6 mt-6 border-t border-[#292622]">
              <button
                onClick={onRequestAdvisory}
                className="w-full py-3.5 bg-white hover:bg-[#F2EDE4] text-[#111111] text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Request Formal Quote for This Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-[#8C827A] mt-2">
                Quotes are binding for 90 days. Net 30/60 trade terms available upon approval.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
