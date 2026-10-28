import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Download, 
  FileSpreadsheet, 
  Share2, 
  ArrowRight, 
  Check, 
  Building2, 
  Copy,
  Plus,
  Minus,
  Sparkles
} from 'lucide-react';
import { SpecItem } from '../types';
import { BRAND_NAME, BRAND_EMAIL } from '../data/hospitalityData';

interface SpecSheetDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  specItems: SpecItem[];
  onUpdateQuantity: (spaceId: string, delta: number) => void;
  onRemoveItem: (spaceId: string) => void;
  onClearAll: () => void;
  onSubmitSpecSheet: () => void;
}

export const SpecSheetDrawer: React.FC<SpecSheetDrawerProps> = ({
  isOpen,
  onClose,
  specItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
  onSubmitSpecSheet
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalItemsCount = specItems.reduce((acc, item) => acc + item.quantity, 0);

  // Generate CSV data for download
  const handleDownloadCSV = () => {
    if (specItems.length === 0) return;

    const headers = ['Line Item', 'Artwork Title', 'Property / Space Allocation', 'Medium & Substrate', 'Dimensions', 'Trade Price Est', 'Quantity', 'Room Tag', 'Curatorial Notes'];
    const rows = specItems.map((item, index) => [
      `"${index + 1}"`,
      `"${item.title.replace(/"/g, '""')}"`,
      `"${item.propertyName.replace(/"/g, '""')}"`,
      `"${item.artMedium.replace(/"/g, '""')}"`,
      `"${item.dimensions.replace(/"/g, '""')}"`,
      `"${item.priceEstimate}"`,
      item.quantity,
      `"${item.roomTag}"`,
      `"${(item.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Atelier_Vivant_Fine_Art_Spec_Sheet_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopySummary = () => {
    if (specItems.length === 0) return;

    const summaryText = [
      `${BRAND_NAME} | FINE ART & PORTRAITURE SPEC SHEET`,
      `Generated: ${new Date().toLocaleDateString()}`,
      `Total Line Items: ${specItems.length} | Total Units: ${totalItemsCount}`,
      `----------------------------------------------------`,
      ...specItems.map((item, idx) => 
        `${idx + 1}. ${item.title}\n   Space / Room: ${item.propertyName} (${item.roomTag})\n   Dimensions: ${item.dimensions}\n   Medium: ${item.artMedium}\n   Est. Trade Price: ${item.priceEstimate}\n   Quantity: ${item.quantity} units\n   Notes: ${item.notes || 'Standard archival specification'}\n`
      ),
      `----------------------------------------------------`,
      `For formal quoting or sample finishes: ${BRAND_EMAIL}`
    ].join('\n');

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md sm:max-w-lg bg-[#FAF9F6] border-l border-[#DDD6CB] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#E5DFD5] flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <FileSpreadsheet className="w-5 h-5 text-[#8C827A]" />
              <div>
                <h3 className="font-serif text-xl font-medium text-[#111111]">
                  Project Spec Sheet
                </h3>
                <span className="text-xs text-[#7A7268]">
                  {specItems.length} unique selections ({totalItemsCount} total units)
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#5C564E] hover:text-[#111111] hover:bg-[#F2EDE4] rounded-sm transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body: Line Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {specItems.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <FileSpreadsheet className="w-12 h-12 text-[#C4BFB4] mx-auto stroke-1" />
                <div className="space-y-1">
                  <h4 className="font-serif text-lg text-[#111111]">
                    Your Spec Sheet is Empty
                  </h4>
                  <p className="text-xs text-[#7A7268] max-w-xs mx-auto">
                    Browse fine art portraiture and spatial suites or configure a bespoke portrait commission in our interactive studio.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Explore Portrait Portfolio
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#7A7268] pb-2 border-b border-[#EFECE6]">
                  <span>Artwork & Room Specification</span>
                  <button
                    onClick={onClearAll}
                    className="text-red-700 hover:underline text-[11px] cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {specItems.map((item) => (
                  <div 
                    key={item.spaceId}
                    className="bg-white p-4 border border-[#DDD6CB] space-y-3 shadow-2xs"
                  >
                    <div className="flex space-x-3">
                      <div className="w-16 h-16 shrink-0 bg-[#EAE4DA] overflow-hidden border border-[#D5CEC4]">
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0 space-y-0.5">
                        <div className="text-[10px] font-semibold text-[#8C827A] uppercase tracking-wider truncate">
                          {item.propertyName}
                        </div>
                        <h5 className="font-serif text-base font-medium text-[#111111] leading-tight truncate">
                          {item.title}
                        </h5>
                        <div className="text-xs text-[#5E574E] truncate">
                          {item.dimensions} • {item.artMedium}
                        </div>
                        <div className="text-xs font-semibold text-[#111111]">
                          Est: {item.priceEstimate}
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.spaceId)}
                        className="text-[#8C827A] hover:text-red-700 p-1 self-start cursor-pointer"
                        title="Remove from spec"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Room tag & Quantity Bar */}
                    <div className="pt-2 border-t border-[#F2EDE4] flex items-center justify-between text-xs">
                      <span className="text-[11px] bg-[#FAF9F6] px-2 py-0.5 border border-[#E2DDD5] text-[#554E46]">
                        {item.roomTag}
                      </span>

                      <div className="flex items-center space-x-2">
                        <span className="text-[11px] text-[#7A7268]">Units:</span>
                        <div className="flex items-center border border-[#DDD6CB]">
                          <button
                            onClick={() => onUpdateQuantity(item.spaceId, -1)}
                            className="p-1 hover:bg-[#F2EDE4] text-[#111111] cursor-pointer"
                            title="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 py-0.5 text-xs font-semibold text-[#111111]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.spaceId, 1)}
                            className="p-1 hover:bg-[#F2EDE4] text-[#111111] cursor-pointer"
                            title="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer: Export Tools & Submit Quote Button */}
          {specItems.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E5DFD5] space-y-3">
              {/* Export Utilities */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleDownloadCSV}
                  className="py-2 px-3 border border-[#DDD6CB] hover:bg-[#FAF9F6] text-[#111111] text-xs font-medium flex items-center justify-center space-x-1.5 cursor-pointer"
                  title="Download CSV for Excel or FF&E Schedules"
                >
                  <Download className="w-3.5 h-3.5 text-[#8C827A]" />
                  <span>Export CSV</span>
                </button>

                <button
                  onClick={handleCopySummary}
                  className="py-2 px-3 border border-[#DDD6CB] hover:bg-[#FAF9F6] text-[#111111] text-xs font-medium flex items-center justify-center space-x-1.5 cursor-pointer"
                  title="Copy formatted text to paste into emails or presentations"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-emerald-800">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8C827A]" />
                      <span>Copy Summary</span>
                    </>
                  )}
                </button>
              </div>

              {/* Primary Action Button */}
              <button
                onClick={() => {
                  onClose();
                  onSubmitSpecSheet();
                }}
                className="w-full py-3.5 bg-[#111111] hover:bg-[#2C2723] text-white text-xs font-semibold uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <span>Submit Spec Sheet for Advisor Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-[#8C827A]">
                Our atelier curators will prepare a binding quote and material swatches within 48 hours.
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
