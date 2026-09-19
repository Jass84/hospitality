import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpacesGallery } from './components/SpacesGallery';
import { SpaceModal } from './components/SpaceModal';
import { VirtualVisualizer } from './components/VirtualVisualizer';
import { AdvisoryProcess } from './components/AdvisoryProcess';
import { TradeBenefitsCalculator } from './components/TradeBenefitsCalculator';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CuratorTeam } from './components/CuratorTeam';
import { SpecSheetDrawer } from './components/SpecSheetDrawer';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import { HospitalitySpace, SpaceCategory, SpecItem } from './types';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<SpaceCategory>('all');
  const [activeSpaceModal, setActiveSpaceModal] = useState<HospitalitySpace | null>(null);
  const [visualizerArtworkId, setVisualizerArtworkId] = useState<string | null>(null);
  const [specSheetOpen, setSpecSheetOpen] = useState<boolean>(false);
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);
  const [consultationNotes, setConsultationNotes] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Persistent Spec Sheet state via localStorage
  const [specItems, setSpecItems] = useState<SpecItem[]>(() => {
    try {
      const saved = localStorage.getItem('saatchi_hospitality_spec_items');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading saved spec items', e);
    }
    return [
      {
        spaceId: 'space-1',
        title: 'Monumental Ochre & Sand Textured Canvas',
        propertyName: 'The Luminary Grand Hotel',
        image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800&auto=format&fit=crop',
        artMedium: 'Heavy Impasto Plaster & Mineral Pigment on Belgian Linen',
        dimensions: '144" x 96" (12 x 8 ft)',
        priceEstimate: '$18,500 Trade',
        quantity: 1,
        roomTag: 'Grand Arrival Lobby',
        notes: 'Specified for double-height arrival wall with security locking cleats',
        addedAt: new Date().toLocaleDateString()
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('saatchi_hospitality_spec_items', JSON.stringify(specItems));
    } catch (e) {
      console.error('Error saving spec items', e);
    }
  }, [specItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToSpecSheet = (space: HospitalitySpace) => {
    setSpecItems(prev => {
      const existing = prev.find(item => item.spaceId === space.id);
      if (existing) {
        showToast(`Updated quantity for ${space.artworkTitle}`);
        return prev.map(item => 
          item.spaceId === space.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        showToast(`Added ${space.artworkTitle} to Project Spec Sheet`);
        const newItem: SpecItem = {
          spaceId: space.id,
          title: space.artworkTitle,
          propertyName: space.propertyName,
          image: space.image,
          artMedium: space.artMedium,
          dimensions: space.dimensions,
          priceEstimate: space.pricePerUnit.split('(')[0].trim(),
          quantity: 1,
          roomTag: space.roomType,
          notes: `Framing: ${space.framing}`,
          addedAt: new Date().toLocaleDateString()
        };
        return [...prev, newItem];
      }
    });
  };

  const handleAddVisualizerSpecItem = (item: SpecItem) => {
    setSpecItems(prev => [...prev, item]);
    showToast(`Added customized ${item.title} to Project Spec Sheet`);
  };

  const handleUpdateQuantity = (spaceId: string, delta: number) => {
    setSpecItems(prev => {
      return prev.map(item => {
        if (item.spaceId === spaceId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as SpecItem[];
    });
  };

  const handleRemoveItem = (spaceId: string) => {
    setSpecItems(prev => prev.filter(i => i.spaceId !== spaceId));
    showToast('Removed item from Spec Sheet');
  };

  const handleClearAllSpec = () => {
    if (window.confirm('Clear all items from your project spec sheet?')) {
      setSpecItems([]);
      showToast('Spec Sheet cleared');
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePreviewInVisualizer = (space: HospitalitySpace) => {
    setActiveSpaceModal(null);
    setVisualizerArtworkId(space.id);
    handleNavigateSection('visualizer');
    showToast(`Loading visualizer preview for ${space.artworkTitle}`);
  };

  const handleRequestProposalForSpace = (space: HospitalitySpace) => {
    setConsultationNotes(`Interested in artworks similar to "${space.artworkTitle}" installed at ${space.propertyName} (${space.roomType}, ${space.dimensions}).`);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#111111] selection:text-[#FAF9F6]">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111111] text-[#FAF9F6] px-4 py-3 border border-[#3A3530] shadow-xl flex items-center space-x-2.5 text-xs animate-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        specItems={specItems}
        onOpenSpecSheet={() => setSpecSheetOpen(true)}
        onOpenConsultation={() => {
          setConsultationNotes('');
          setConsultationOpen(true);
        }}
        onNavigateSection={handleNavigateSection}
        activeCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Editorial Hero Section */}
        <Hero
          onExploreSpaces={() => handleNavigateSection('spaces')}
          onRequestAdvisory={() => {
            setConsultationNotes('');
            setConsultationOpen(true);
          }}
          onOpenVisualizer={() => handleNavigateSection('visualizer')}
        />

        {/* Hospitality Spaces & Portfolio Gallery */}
        <SpacesGallery
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenSpaceModal={(space) => setActiveSpaceModal(space)}
          onAddToSpecSheet={handleAddToSpecSheet}
          specItems={specItems}
          onPreviewInVisualizer={handlePreviewInVisualizer}
          onRequestAdvisory={() => {
            setConsultationNotes('');
            setConsultationOpen(true);
          }}
        />

        {/* Interactive Virtual Room Visualizer */}
        <VirtualVisualizer
          onAddToSpecSheet={handleAddVisualizerSpecItem}
          specItems={specItems}
          activeArtworkId={visualizerArtworkId}
        />

        {/* 4-Step Advisory Process */}
        <AdvisoryProcess
          onRequestAdvisory={() => {
            setConsultationNotes('');
            setConsultationOpen(true);
          }}
        />

        {/* Trade Benefits & Pricing Volume Calculator */}
        <TradeBenefitsCalculator
          onRequestAdvisory={() => {
            setConsultationNotes('Inquiry generated from Trade Volume Calculator.');
            setConsultationOpen(true);
          }}
        />

        {/* Case Studies */}
        <CaseStudiesSection
          onRequestAdvisory={() => {
            setConsultationNotes('');
            setConsultationOpen(true);
          }}
          onExploreSpaces={() => handleNavigateSection('spaces')}
        />

        {/* Advisory Curators & Team */}
        <CuratorTeam
          onRequestAdvisory={() => {
            setConsultationNotes('');
            setConsultationOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={() => {
          setConsultationNotes('');
          setConsultationOpen(true);
        }}
        onNavigateSection={handleNavigateSection}
      />

      {/* Interactive Space Deep Dive Modal */}
      <SpaceModal
        space={activeSpaceModal}
        onClose={() => setActiveSpaceModal(null)}
        onAddToSpecSheet={handleAddToSpecSheet}
        onOpenVisualizer={handlePreviewInVisualizer}
        onRequestProposal={handleRequestProposalForSpace}
        specItems={specItems}
      />

      {/* Project Spec Sheet Drawer */}
      <SpecSheetDrawer
        isOpen={specSheetOpen}
        onClose={() => setSpecSheetOpen(false)}
        specItems={specItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearAllSpec}
        onSubmitSpecSheet={() => {
          setConsultationNotes(`Attached ${specItems.length} items from Project Spec Sheet.`);
          setConsultationOpen(true);
        }}
      />

      {/* Advisory RFP & Lookbook Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        specItems={specItems}
        preselectedNotes={consultationNotes}
      />
    </div>
  );
}
