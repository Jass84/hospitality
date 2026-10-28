import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortraitCommissionStudio } from './components/PortraitCommissionStudio';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { SpacesGallery } from './components/SpacesGallery';
import { SpaceModal } from './components/SpaceModal';
import { ArtworkLightboxModal } from './components/ArtworkLightboxModal';
import { VirtualVisualizer } from './components/VirtualVisualizer';
import { AdvisoryProcess } from './components/AdvisoryProcess';
import { TradeBenefitsCalculator } from './components/TradeBenefitsCalculator';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CuratorTeam } from './components/CuratorTeam';
import { SpecSheetDrawer } from './components/SpecSheetDrawer';
import { ConsultationModal } from './components/ConsultationModal';
import { AmbientSoundPlayer } from './components/AmbientSoundPlayer';
import { Footer } from './components/Footer';
import { HospitalitySpace, SpaceCategory, SpecItem, CuratedArtwork } from './types';
import portraitOilGoldImage from './assets/images/atelier_portrait_oil_gold.jpg';
import { BRAND_NAME } from './data/hospitalityData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<SpaceCategory>('all');
  const [activeSpaceModal, setActiveSpaceModal] = useState<HospitalitySpace | null>(null);
  const [activeLightboxArtwork, setActiveLightboxArtwork] = useState<HospitalitySpace | CuratedArtwork | null>(null);
  const [visualizerArtworkId, setVisualizerArtworkId] = useState<string | null>(null);
  const [specSheetOpen, setSpecSheetOpen] = useState<boolean>(false);
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);
  const [consultationNotes, setConsultationNotes] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Persistent Spec Sheet state via localStorage
  const [specItems, setSpecItems] = useState<SpecItem[]>(() => {
    try {
      const saved = localStorage.getItem('atelier_vivant_spec_items');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading saved spec items', e);
    }
    return [
      {
        spaceId: 'space-portrait-1',
        title: 'Aurelia in Velvet & 24k Gold (Monumental Chiaroscuro Portrait)',
        propertyName: 'The St. Regis Grand Library & Salon',
        image: portraitOilGoldImage,
        artMedium: 'Old Master Chiaroscuro Oil Glaze, 24k Gold Leaf on Belgian Linen',
        dimensions: '48" x 64"',
        priceEstimate: '$14,800 Trade',
        quantity: 1,
        roomTag: 'Heritage Salon & Presidential Library',
        notes: 'Hand-Carved 24k Gilded Wood Baroque Frame with Security Cleats',
        addedAt: new Date().toLocaleDateString()
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('atelier_vivant_spec_items', JSON.stringify(specItems));
    } catch (e) {
      console.error('Error saving spec items', e);
    }
  }, [specItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToSpecSheet = (itemInput: HospitalitySpace | SpecItem) => {
    if ('artworkTitle' in itemInput) {
      const space = itemInput as HospitalitySpace;
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
            image: space.artworkImage || space.image,
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
    } else {
      const specItem = itemInput as SpecItem;
      setSpecItems(prev => {
        const existing = prev.find(item => item.spaceId === specItem.spaceId);
        if (existing) {
          showToast(`Updated quantity for ${specItem.title}`);
          return prev.map(item => 
            item.spaceId === specItem.spaceId ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          showToast(`Added ${specItem.title} to Project Spec Sheet`);
          return [...prev, specItem];
        }
      });
    }
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
    setActiveLightboxArtwork(null);
    setVisualizerArtworkId(space.id);
    handleNavigateSection('visualizer');
    showToast(`Loaded ${space.artworkTitle} in spatial visualizer`);
  };

  const handleRequestProposalForSpace = (space: HospitalitySpace) => {
    setConsultationNotes(`Inquiry regarding bespoke portrait/artwork "${space.artworkTitle}" for ${space.propertyName} (${space.roomType}, ${space.dimensions}).`);
    setConsultationOpen(true);
  };

  const handleRequestCommissionProposal = (details: string) => {
    setConsultationNotes(details);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#111111] selection:text-[#FAF9F6]">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111111] text-[#FAF9F6] px-4 py-3 border border-[#3A3530] shadow-2xl flex items-center space-x-2.5 text-xs animate-in slide-in-from-bottom-2 duration-200">
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
          onOpenPortraitStudio={() => handleNavigateSection('portrait-studio')}
        />

        {/* Interactive Custom Portrait Commission Studio */}
        <PortraitCommissionStudio
          onAddToSpecSheet={handleAddToSpecSheet}
          onRequestProposal={handleRequestCommissionProposal}
          onOpenVisualizerWithArt={(id) => {
            setVisualizerArtworkId(id);
            handleNavigateSection('visualizer');
          }}
        />

        {/* Interactive Before & After Spatial Transformation Slider */}
        <BeforeAfterSlider
          onRequestAdvisory={() => {
            setConsultationNotes('Inquiry regarding spatial transformation and room curation lookbooks.');
            setConsultationOpen(true);
          }}
          onExplorePortraitStudio={() => handleNavigateSection('portrait-studio')}
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
          onInspectArtwork={(space) => setActiveLightboxArtwork(space)}
        />

        {/* Interactive Virtual Room Visualizer */}
        <VirtualVisualizer
          onAddToSpecSheet={handleAddToSpecSheet}
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

      {/* Ambient Gallery Audio Player */}
      <AmbientSoundPlayer />

      {/* Interactive Space Deep Dive Modal */}
      <SpaceModal
        space={activeSpaceModal}
        onClose={() => setActiveSpaceModal(null)}
        onAddToSpecSheet={handleAddToSpecSheet}
        onOpenVisualizer={handlePreviewInVisualizer}
        onRequestProposal={handleRequestProposalForSpace}
        specItems={specItems}
      />

      {/* Artwork High-Res Lightbox Inspection Modal */}
      <ArtworkLightboxModal
        artwork={activeLightboxArtwork}
        onClose={() => setActiveLightboxArtwork(null)}
        onAddToSpecSheet={handleAddToSpecSheet}
        onRequestConsultation={(notes) => {
          setConsultationNotes(notes);
          setConsultationOpen(true);
        }}
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
