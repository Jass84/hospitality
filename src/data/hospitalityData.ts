
// In-Room Portrait Paintings & High-Res Fine Art Assets
import portraitOilGoldImage from '../assets/images/atelier_portrait_oil_gold.jpg';
import portraitPlasterReliefImage from '../assets/images/portrait_relief_plaster.jpg';
import portraitFigurativeImpastoImage from '../assets/images/portrait_figurative_impasto.jpg';
import hospitalityPortraitSuiteImage from '../assets/images/hospitality_portrait_suite.jpg';
import portraitWabiSabiInkImage from '../assets/images/portrait_wabi_sabi_ink.jpg';
import grandPortraitGalleryHallImage from '../assets/images/grand_portrait_gallery_hall.jpg';
import portraitBedheadSuiteImage from '../assets/images/portrait_bedhead_suite.jpg';
import portraitDiningSalonImage from '../assets/images/portrait_dining_salon.jpg';
import portraitPenthouseModernImage from '../assets/images/portrait_penthouse_modern.jpg';
import portraitGalleryCorridorImage from '../assets/images/portrait_gallery_corridor.jpg';
import portraitBotanicalEmeraldImage from '../assets/images/portrait_botanical_emerald.jpg';
import portraitGentlemanVelvetImage from '../assets/images/portrait_gentleman_velvet.jpg';

import { HospitalitySpace, CuratedArtwork } from '../types';

export const BRAND_NAME = 'ATELIER VIVANT';
export const BRAND_TAGLINE = 'Fine Art Portraiture, Paintings & Interior Art Advisory';
export const BRAND_EMAIL = 'concierge@ateliervivant.com';
export const BRAND_PHONE = '+1 (877) 275-8620';

export const HOSPITALITY_SPACES: HospitalitySpace[] = [
  // 1. Featured Fine Art Portraiture in Luxury Salon Suite
  {
    id: 'space-portrait-1',
    title: 'Aurelia in Velvet & 24k Gold (Monumental Chiaroscuro Portrait)',
    propertyName: 'The St. Regis Grand Library & Salon',
    location: 'Paris, France',
    category: 'portraits',
    orientation: 'portrait',
    image: hospitalityPortraitSuiteImage,
    artworkImage: portraitOilGoldImage,
    secondaryImages: [portraitOilGoldImage, hospitalityPortraitSuiteImage],
    artworkTitle: 'Aurelia in Velvet & 24k Leaf',
    artistName: 'Camille Dumont',
    artistOrigin: 'Lyon, France',
    artMedium: 'Old Master Chiaroscuro Oil Glaze, 24k Gold Leaf & Mineral Resin on Reinforced Belgian Linen',
    dimensions: '48" x 64" (Portrait Orientation)',
    framing: 'Hand-Carved 24k Gilded Wood Baroque Frame with Museum Anti-Reflective UV99 Glass & Tamper Cleats',
    pricePerUnit: '$14,800 Trade (Retails $19,500)',
    description: 'Commissioned for the heritage reading salon of The St. Regis. The portrait merges classic European chiaroscuro depth with contemporary golden illumination, suspended on fluted dark walnut boiserie with dedicated raking spotlight.',
    curationConcept: 'Infusing contemporary luxury hospitality with timeless character and human emotional depth through museum-tier portraiture.',
    roomType: 'Heritage Salon & Presidential Library',
    tags: ['Fine Art Portraiture', '24k Gold Leaf', 'Museum Chiaroscuro', 'Fluted Oak Wall Spec', 'Portrait Orientation'],
    acousticRated: false,
    fireRated: true,
    customScaleAvailable: true,
    isPortraitFeatured: true
  },
  // 2. The Emerald Bower - Botanical Renaissance Portrait
  {
    id: 'space-portrait-emerald',
    title: 'The Emerald Bower (Botanical Oil Portrait in Hand-Carved Gilt Frame)',
    propertyName: 'The Rosewood Conservatory & Garden Suite',
    location: 'London, UK',
    category: 'portraits',
    orientation: 'portrait',
    image: portraitBotanicalEmeraldImage,
    artworkImage: portraitBotanicalEmeraldImage,
    secondaryImages: [portraitBotanicalEmeraldImage, hospitalityPortraitSuiteImage],
    artworkTitle: 'The Emerald Bower (Lady of the Secret Garden)',
    artistName: 'Camille de Vries',
    artistOrigin: 'Antwerp, Belgium',
    artMedium: 'Old Master Oil Glaze on Linen with 24k Gold Embellished Botanical Vine Motifs',
    dimensions: '42" x 58" (Vertical Portrait)',
    framing: 'Hand-Carved Antique Gilded Rococo Frame with Brass Label Plaque & Security Anchors',
    pricePerUnit: '$13,200 Trade',
    description: 'Created for the luxury garden conservatory suite. Intricate botanical ferns, emerald velvet textures, and gold leaf highlights echo the lush English courtyard greenery visible outside the French windows.',
    curationConcept: 'Biophilic classical portraiture that merges natural botanical tranquility with regal Old World luxury.',
    roomType: 'Conservatory Suite & Garden Salon',
    tags: ['Botanical Portrait', 'Emerald Velvet', 'Hand-Carved Frame', 'Gold Leaf Vines', 'Portrait Mode'],
    acousticRated: false,
    fireRated: true,
    customScaleAvailable: true,
    isPortraitFeatured: true
  },
  // 3. Lord Elias in Velvet - Aristocratic Chiaroscuro Portrait
  {
    id: 'space-portrait-gentleman',
    title: 'Lord Elias in Velvet & Gold (Heritage Aristocratic Masterpiece)',
    propertyName: 'The Ritz-Carlton Executive Cigar & Reading Salon',
    location: 'Geneva, Switzerland',
    category: 'portraits',
    orientation: 'portrait',
    image: portraitGentlemanVelvetImage,
    artworkImage: portraitGentlemanVelvetImage,
    secondaryImages: [portraitGentlemanVelvetImage, portraitDiningSalonImage],
    artworkTitle: 'Portrait of Lord Elias (The Rembrandt Guild Study)',
    artistName: 'Master European Guild in Collaboration with Atelier Vivant',
    artistOrigin: 'Amsterdam & London',
    artMedium: 'Multi-Layered Flemish Oil Glaze, Gilded Chain Detailing & Damask Background on Belgian Canvas',
    dimensions: '48" x 66" (Commanding Vertical)',
    framing: 'Grand Baroque Gilded Gold Museum Frame with Integral Picture Lamp',
    pricePerUnit: '$17,500 Trade',
    description: 'An authoritative, stately portrait commanding the mahogany wood-paneled executive club room. The intense gaze and masterfully glazed black velvet capture the warm fireplace hearth glow.',
    curationConcept: 'Instilling aristocratic prestige, historical depth, and curated gravitas into executive lounges and private meeting chambers.',
    roomType: 'Executive Study, Library & Cigar Room',
    tags: ['Heritage Masterpiece', 'Flemish Oil Glaze', 'Aristocratic Velvet', 'Museum Gilded Gold', 'Portrait Mode'],
    acousticRated: false,
    fireRated: true,
    customScaleAvailable: true,
    isPortraitFeatured: true
  },
  // 4. Portrait Painting Above Bedhead in Luxury Master Suite
  {
    id: 'space-portrait-bedhead',
    title: 'Celestial Serenade (Fine Art Oil Painting Above King Bedhead)',
    propertyName: 'The Ritz-Carlton Presidential Master Suite',
    location: 'Geneva, Switzerland',
    category: 'guest_rooms',
    orientation: 'portrait',
    image: portraitBedheadSuiteImage,
    artworkImage: portraitBedheadSuiteImage,
    secondaryImages: [portraitBedheadSuiteImage, portraitOilGoldImage],
    artworkTitle: 'Celestial Serenade in Azure & Gold',
    artistName: 'Eleanor Vance',
    artistOrigin: 'Vienna, Austria',
    artMedium: 'Fine Art Oil & Pure 24k Gold Leaf Pigments on Hand-Primed Linen',
    dimensions: '40" x 56" (Portrait Canvas)',
    framing: 'Custom Antiqued Gold Leaf Floater Frame with Museum Cleats',
    pricePerUnit: '$9,800 Trade (Hotel Rollout: $7,900 / key)',
    description: 'Positioned as the centerpiece above the channeled linen headboard. The deep lapis lazuli blues and luminous gold highlights capture warm amber bedside light.',
    curationConcept: 'Transforming the guest bedchamber into an intimate private gallery that invokes peaceful grandeur.',
    roomType: 'Presidential Master Suite Headboard',
    tags: ['Bedhead Focal Wall', 'Oil & Gold Leaf', 'Lapis Lazuli', 'Hotel Suite Spec', 'Portrait Mode'],
    acousticRated: true,
    fireRated: true,
    customScaleAvailable: true,
    isPortraitFeatured: true
  },
  // 5. Contemporary Cobalt & Terracotta Penthouse Portrait Painting
  {
    id: 'space-portrait-penthouse',
    title: 'Lady of the City Skyline (Monumental Modern Portrait)',
    propertyName: 'The Edition Sky Penthouse Living Salon',
    location: 'London & New York',
    category: 'guest_rooms',
    orientation: 'portrait',
    image: portraitPenthouseModernImage,
    artworkImage: portraitFigurativeImpastoImage,
    secondaryImages: [portraitFigurativeImpastoImage, portraitPenthouseModernImage],
    artworkTitle: 'Skyline Silhouette in Cobalt & Raw Sienna',
    artistName: 'Marc Levy',
    artistOrigin: 'Berlin, Germany',
    artMedium: 'Heavy Impasto Palette-Knife Oil on Reinforced Belgian Linen',
    dimensions: '60" x 78" (Monumental Vertical Canvas)',
    framing: 'Frameless Floating Gallery Wrap with Recessed Architectural Track Spotlights',
    pricePerUnit: '$16,500 Trade',
    description: 'A striking monumental modern figurative portrait commissioned for the travertine living wall overlooking panoramic city skyline views.',
    curationConcept: 'Commanding contemporary scale that brings soulful warmth and artistic prestige to minimalist architectural spaces.',
    roomType: 'Presidential Duplex Salon & Living Room',
    tags: ['Monumental Portrait', 'Palette Knife Oil', 'Travertine Wall Spec', 'Skyline Penthouse'],
    acousticRated: false,
    fireRated: true,
    customScaleAvailable: true,
    isPortraitFeatured: true
  },
  // 6. Dining Salon Portrait Paintings (Pair of Masters)
  {
    id: 'space-portrait-dining',
    title: 'The Patrician Portraits (Curated Pair of Heritage Oil Paintings)',
    propertyName: 'The Connaught Private Dining Salon',
    location: 'Mayfair, London, UK',
    category: 'restaurants',
    orientation: 'multipanel',
    image: portraitDiningSalonImage,
    artworkImage: portraitDiningSalonImage,
    secondaryImages: [portraitDiningSalonImage, portraitOilGoldImage],
    artworkTitle: 'The Founders Diptych (Pair of 36" x 48" Oil Paintings)',
    artistName: 'Atelier Vivant Master Guild',
    artistOrigin: 'Florence & London',
    artMedium: 'Fine Art Archival Oil on Hand-Primed Linen with Hand-Carved Gilded Mouldings',
    dimensions: 'Pair of 36" x 48" Framed Paintings',
    framing: 'Hand-Carved Gilded Gold Baroque Frames with Integral Brass Picture Lights',
    pricePerUnit: '$13,800 Pair Trade',
    description: 'Commissioned for a Michelin-starred private dining room. Deep walnut wainscoting and emerald velvet banquettes provide the perfect atmospheric setting.',
    curationConcept: 'Storied aristocratic dining atmosphere with dedicated warm brass picture lighting that enriches evening dinners.',
    roomType: 'Private Dining Salon & Wine Room',
    tags: ['Pair of Paintings', 'Heritage Gold Frames', 'Brass Picture Lights', 'Fine Dining Salon'],
    acousticRated: true,
    fireRated: true,
    customScaleAvailable: true,
    isPortraitFeatured: true
  },
  // 7. Corridor Portrait Gallery Wall (Lined with Paintings)
  {
    id: 'space-portrait-corridor',
    title: 'The Promenade Portrait Collection (Curated Multi-Piece Gallery Wall)',
    propertyName: 'Le Bristol Suite Promenade',
    location: 'Paris, France',
    category: 'corridors',
    orientation: 'multipanel',
    image: portraitGalleryCorridorImage,
    artworkImage: portraitGalleryCorridorImage,
    secondaryImages: [portraitGalleryCorridorImage, portraitOilGoldImage],
    artworkTitle: 'Figures of the Belle Époque (Curated Series of 18 Works)',
    artistName: 'European Portraiture Collective',
    artistOrigin: 'Paris, Rome & Vienna',
    artMedium: 'Oil on Canvas, Charcoal on Rag Paper & Gesso Panels',
    dimensions: 'Series of 18 Custom-Framed Portraits (16"x20" to 30"x40")',
    framing: 'Antiqued Gold Leaf Mouldings with 3-Point Hospitality Security Cleats',
    pricePerUnit: '$22,500 Full 18-Piece Collection',
    description: 'Transforms hotel corridors into a gallery walk. Guests enjoy museum-illuminated portrait paintings and studies as they journey to their suites.',
    curationConcept: 'Wayfinding through fine art portraiture that imparts elegance, depth, and character to architectural passageways.',
    roomType: 'Suite Promenade & Private Corridor',
    tags: ['Gallery Wall Walk', 'Multi-Piece Collection', 'Security Cleats', 'Hotel Corridor Spec'],
    acousticRated: false,
    fireRated: true,
    customScaleAvailable: true,
    isPortraitFeatured: true
  },
  // 8. Sculptural Plaster Bas-Relief Portrait Profile
  {
    id: 'space-portrait-2',
    title: 'Profile of Resonance I (Sculptural Gypsum Relief Portrait)',
    propertyName: 'Aman Kyoto Sanctuary Pavilion',
    location: 'Kyoto, Japan',
    category: 'wellness',
    orientation: 'portrait',
    image: portraitPlasterReliefImage,
    artworkImage: portraitPlasterReliefImage,
    secondaryImages: [portraitPlasterReliefImage],
    artworkTitle: 'Profile of Resonance I',
    artistName: 'Mateo Alvarez & Atelier',
    artistOrigin: 'Valencia, Spain',
    artMedium: 'Reinforced Gypsum Plaster & Quartz Dust Sculptural Relief on Heavy Natural Flax Linen Substrate',
    dimensions: '36" x 52" (Vertical Bas-Relief Portrait)',
    framing: 'Recessed Natural White Oak Shadowbox Float Frame with Concealed Dual Cleat Anchors',
    pricePerUnit: '$8,400 Trade',
    description: 'A tactile, three-dimensional bas-relief human profile that catches natural daylight transitions across tatami suites and private spa vestibules.',
    curationConcept: 'Where sculptural monumentality meets organic human silhouette — a serene focal point for restorative architectural spaces.',
    roomType: 'Zen Garden Presidential Suite Foyer',
    tags: ['Bas-Relief Portrait', 'Tactile Gypsum', 'Shadow Play', 'Natural Linen', 'Portrait Orientation'],
    acousticRated: true,
    fireRated: true,
    customScaleAvailable: true,
    isPortraitFeatured: true
  },
  // 9. Japanese Wabi-Sabi Sumi-e & Gold Foil Portrait
  {
    id: 'space-portrait-4',
    title: 'Yūgen No. 4 (Minimalist Sumi-e & Gold Leaf Portrait)',
    propertyName: 'Hoshinoya Retreat & Onsen',
    location: 'Hakone, Japan',
    category: 'portraits',
    orientation: 'portrait',
    image: portraitWabiSabiInkImage,
    artworkImage: portraitWabiSabiInkImage,
    secondaryImages: [portraitWabiSabiInkImage],
    artworkTitle: 'Yūgen No. 4 (The Ethereal Profile)',
    artistName: 'Hanako Soga',
    artistOrigin: 'Nara, Japan',
    artMedium: 'Kyoto Sumi Ink Wash & 24k Gold Foil on Deckled Raw Mulberry Washi Paper',
    dimensions: '30" x 44" (Floating Vertical Portrait)',
    framing: 'Natural Reclaimed Hinoki Cypress Float Frame with Museum Spacer Glass',
    pricePerUnit: '$4,600 Trade (Hotel Suite Rollout: $3,650)',
    description: 'An ethereal portrait in fluid brushwork and shimmering raw gold foil on handmade fibrous paper. Installed across 36 private villa sanctuaries.',
    curationConcept: 'Embodying the Japanese aesthetic of Yūgen through delicate portrait silhouettes.',
    roomType: 'Private Villa Bedchamber & Onsen Dressing Room',
    tags: ['Japanese Sumi-e', 'Gold Foil', 'Handmade Washi', 'Deckled Edge', 'Portrait Orientation'],
    acousticRated: true,
    fireRated: true,
    customScaleAvailable: true,
    isPortraitFeatured: true
  },
  // 10. Grand Heritage Portraiture Gallery Promenade
  {
    id: 'space-portrait-5',
    title: 'The Royal Ancestral Portraiture Promenade (6-Piece Ensemble)',
    propertyName: 'The Balmoral Historic Grand Hotel',
    location: 'Edinburgh, Scotland',
    category: 'lobbies',
    orientation: 'multipanel',
    image: grandPortraitGalleryHallImage,
    artworkImage: grandPortraitGalleryHallImage,
    secondaryImages: [grandPortraitGalleryHallImage, portraitOilGoldImage],
    artworkTitle: 'The Highland Dynasties Collection (Set of 6 Monumental Portraits)',
    artistName: 'Master European Atelier in Collaboration with Atelier Vivant',
    artistOrigin: 'Florence & London',
    artMedium: 'Museum Archival Oil Giclée on Hand-Primed Linen with Hand-Applied Oil Glaze & 22k Gold Gilding',
    dimensions: 'Set of 6 Monumental Works (Each 60" x 84")',
    framing: 'Custom Antiqued Gold Leaf Heritage Frames with Tamper-Resistant 4-Point Steel Cleats',
    pricePerUnit: '$38,500 Full 6-Portrait Installation',
    description: 'A monumental gallery wall installation transforming a 120-foot historic hotel arrival hall into a breathtaking museum-grade portrait promenade.',
    curationConcept: 'Historic majesty meets bespoke hotel storytelling — crafting an unforgettable sense of arrival and cinematic heritage.',
    roomType: 'Grand Arrival Promenade & Ballroom Foyer',
    tags: ['Monumental Gallery Wall', 'Heritage Portraiture', '6-Piece Suite', 'Gilded Gold', 'High Ceiling Spec'],
    acousticRated: false,
    fireRated: true,
    customScaleAvailable: true,
    isPortraitFeatured: true
  },
  // 11. Contemporary Cobalt Impasto Portrait
  {
    id: 'space-portrait-3',
    title: 'Lady of the Boulevard (Contemporary Impasto Figurative Portrait)',
    propertyName: 'The Connaught Penthouse Salon',
    location: 'Mayfair, London, UK',
    category: 'portraits',
    orientation: 'portrait',
    image: portraitFigurativeImpastoImage,
    artworkImage: portraitFigurativeImpastoImage,
    secondaryImages: [portraitFigurativeImpastoImage],
    artworkTitle: 'Lady of the Boulevard',
    artistName: 'Marc Levy',
    artistOrigin: 'Berlin, Germany',
    artMedium: 'Heavy Impasto Palette-Knife Oil & Pure Cobalt Pigment on Belgian Linen',
    dimensions: '44" x 60" (Tall Vertical Portrait)',
    framing: 'Brushed Espresso Hardwood Float Frame with Recessed Brass Shadow Reveal',
    pricePerUnit: '$11,200 Trade',
    description: 'A vibrant, expressive figurative portrait created for the penthouse salon. The dynamic palette knife work in ultramarine blue, warm cognac, and gold leaf energizes the mid-century modern aesthetic.',
    curationConcept: 'Bringing bold, storied personality into executive suites and cocktail lounges through gestural, confident portraiture.',
    roomType: 'Penthouse Salon & Private Club Room',
    tags: ['Contemporary Portrait', 'Impasto Oil', 'Cobalt & Ochre', 'Float Frame', 'Portrait Orientation'],
    acousticRated: false,
    fireRated: true,
    customScaleAvailable: true,
    isPortraitFeatured: true
  }
];

export const CURATED_ARTWORKS: CuratedArtwork[] = [
  // 1. Aurelia in Velvet & Gold
  {
    id: 'art-portrait-1',
    spaceId: 'space-portrait-1',
    title: 'Aurelia in Velvet & 24k Gold',
    artist: 'Camille Dumont',
    artistLocation: 'Lyon, France',
    medium: 'Chiaroscuro Oil Glaze, 24k Gold Leaf & Resin on Belgian Linen',
    dimensions: '48" x 64" (Portrait 3:4)',
    image: portraitOilGoldImage,
    style: 'Chiaroscuro & 24k Gold',
    orientation: 'portrait',
    suggestedRoom: 'Presidential Suite, Heritage Salon & Library Lounge',
    tradePrice: '$14,800',
    retailPrice: '$19,500',
    isPortrait: true,
    aspectRatioLabel: 'Portrait (3:4)'
  },
  // 2. The Emerald Bower
  {
    id: 'art-portrait-emerald',
    spaceId: 'space-portrait-emerald',
    title: 'The Emerald Bower (Lady of the Secret Garden)',
    artist: 'Camille de Vries',
    artistLocation: 'Antwerp, Belgium',
    medium: 'Old Master Oil Glaze on Linen with Gold Leaf Vines',
    dimensions: '42" x 58" (Portrait 3:4)',
    image: portraitBotanicalEmeraldImage,
    style: 'Fine Art Portraiture',
    orientation: 'portrait',
    suggestedRoom: 'Garden Suite, Conservatory Salon & Master Bedchamber',
    tradePrice: '$13,200',
    retailPrice: '$17,800',
    isPortrait: true,
    aspectRatioLabel: 'Portrait (3:4)'
  },
  // 3. Lord Elias in Velvet
  {
    id: 'art-portrait-gentleman',
    spaceId: 'space-portrait-gentleman',
    title: 'Lord Elias in Velvet & Gold',
    artist: 'Master European Guild',
    artistLocation: 'Amsterdam & London',
    medium: 'Flemish Multi-Layered Oil Glaze on Belgian Linen',
    dimensions: '48" x 66" (Vertical Masterpiece)',
    image: portraitGentlemanVelvetImage,
    style: 'Chiaroscuro & 24k Gold',
    orientation: 'portrait',
    suggestedRoom: 'Executive Study, Library Hearth & Private Cigar Lounge',
    tradePrice: '$17,500',
    retailPrice: '$23,000',
    isPortrait: true,
    aspectRatioLabel: 'Portrait (3:4)'
  },
  // 4. Master Bedhead Oil Portrait
  {
    id: 'art-portrait-bedhead',
    spaceId: 'space-portrait-bedhead',
    title: 'Celestial Serenade in Azure & Gold',
    artist: 'Eleanor Vance',
    artistLocation: 'Vienna, Austria',
    medium: 'Fine Art Oil & 24k Gold Leaf on Hand-Primed Linen',
    dimensions: '40" x 56" (Portrait Canvas)',
    image: portraitBedheadSuiteImage,
    style: 'Fine Art Portraiture',
    orientation: 'portrait',
    suggestedRoom: 'Presidential Master Suite Headboard Focal Wall',
    tradePrice: '$9,800',
    retailPrice: '$13,200',
    isPortrait: true,
    aspectRatioLabel: 'Portrait (3:4)'
  },
  // 5. Skyline Silhouette in Cobalt & Raw Sienna
  {
    id: 'art-portrait-penthouse',
    spaceId: 'space-portrait-penthouse',
    title: 'Skyline Silhouette in Cobalt & Raw Sienna',
    artist: 'Marc Levy',
    artistLocation: 'Berlin, Germany',
    medium: 'Impasto Palette-Knife Oil on Reinforced Linen',
    dimensions: '60" x 78" (Monumental Vertical)',
    image: portraitPenthouseModernImage,
    style: 'Figurative Impasto',
    orientation: 'portrait',
    suggestedRoom: 'Penthouse Salon, Living Room & Executive Suite',
    tradePrice: '$16,500',
    retailPrice: '$22,000',
    isPortrait: true,
    aspectRatioLabel: 'Monumental (3:4)'
  },
  // 6. The Patrician Heritage Diptych
  {
    id: 'art-portrait-dining',
    spaceId: 'space-portrait-dining',
    title: 'The Patrician Heritage Diptych',
    artist: 'Atelier Vivant Guild',
    artistLocation: 'Florence, Italy',
    medium: 'Fine Art Oil Glaze on Linen with Hand-Carved Gilded Frames',
    dimensions: 'Pair of 36" x 48" Panels',
    image: portraitDiningSalonImage,
    style: 'Fine Art Portraiture',
    orientation: 'multipanel',
    suggestedRoom: 'Private Dining Salon & Cocktail Lounge',
    tradePrice: '$13,800 pair',
    retailPrice: '$18,500 pair',
    isPortrait: true,
    aspectRatioLabel: 'Diptych Pair'
  },
  // 7. Figures of the Belle Époque Series
  {
    id: 'art-portrait-corridor',
    spaceId: 'space-portrait-corridor',
    title: 'Figures of the Belle Époque Series',
    artist: 'European Portraiture Collective',
    artistLocation: 'Paris, France',
    medium: 'Oil on Canvas & Charcoal Drawings in Gilded Frames',
    dimensions: '18-Piece Curated Corridor Suite',
    image: portraitGalleryCorridorImage,
    style: 'Fine Art Portraiture',
    orientation: 'multipanel',
    suggestedRoom: 'Suite Promenade, Hotel Corridors & Staircases',
    tradePrice: '$22,500 suite',
    retailPrice: '$31,000 suite',
    isPortrait: true,
    aspectRatioLabel: 'Multi-Piece Suite'
  },
  // 8. Profile of Resonance I (Plaster Relief Face)
  {
    id: 'art-portrait-2',
    spaceId: 'space-portrait-2',
    title: 'Profile of Resonance I (Plaster Relief)',
    artist: 'Mateo Alvarez & Atelier',
    artistLocation: 'Valencia, Spain',
    medium: 'Gypsum Plaster & Quartz Relief on Natural Flax Linen Substrate',
    dimensions: '36" x 52" (Vertical Profile)',
    image: portraitPlasterReliefImage,
    style: 'Bas-Relief Portrait',
    orientation: 'portrait',
    suggestedRoom: 'Spa Sanctuary Vestibule & Penthouse Living Wall',
    tradePrice: '$8,400',
    retailPrice: '$11,500',
    isPortrait: true,
    aspectRatioLabel: 'Portrait (2:3)'
  },
  // 9. Lady of the Boulevard
  {
    id: 'art-portrait-3',
    spaceId: 'space-portrait-3',
    title: 'Lady of the Boulevard',
    artist: 'Marc Levy',
    artistLocation: 'Berlin, Germany',
    medium: 'Impasto Palette-Knife Oil & Cobalt on Heavy Linen',
    dimensions: '44" x 60" (Tall Vertical)',
    image: portraitFigurativeImpastoImage,
    style: 'Figurative Impasto',
    orientation: 'portrait',
    suggestedRoom: 'Executive Boardroom, Penthouse Salon & Cocktail Bar',
    tradePrice: '$11,200',
    retailPrice: '$15,000',
    isPortrait: true,
    aspectRatioLabel: 'Portrait (3:4)'
  },
  // 10. Yūgen No. 4 (The Ethereal Profile)
  {
    id: 'art-portrait-4',
    spaceId: 'space-portrait-4',
    title: 'Yūgen No. 4 (The Ethereal Profile)',
    artist: 'Hanako Soga',
    artistLocation: 'Nara, Japan',
    medium: 'Kyoto Sumi-e Ink Wash & 24k Gold Foil on Deckled Washi',
    dimensions: '30" x 44" (Floating Vertical)',
    image: portraitWabiSabiInkImage,
    style: 'Wabi-Sabi Figurative',
    orientation: 'portrait',
    suggestedRoom: 'Boutique Guest Suite, Tea Pavilion & Wellness Lounge',
    tradePrice: '$4,600',
    retailPrice: '$6,200',
    isPortrait: true,
    aspectRatioLabel: 'Portrait (3:4)'
  },
  // 11. The Highland Dynasties Promenade
  {
    id: 'art-portrait-5',
    spaceId: 'space-portrait-5',
    title: 'The Ancestral Heritage Ensemble',
    artist: 'European Master Atelier',
    artistLocation: 'Florence & London',
    medium: 'Oil Glaze & 22k Gold Gilding on Hand-Primed Belgian Linen',
    dimensions: '60" x 84" Each (Suite of 6)',
    image: grandPortraitGalleryHallImage,
    style: 'Fine Art Portraiture',
    orientation: 'multipanel',
    suggestedRoom: 'Grand Arrival Corridor, Ballroom Foyer & Historic Lounge',
    tradePrice: '$38,500 set',
    retailPrice: '$52,000 set',
    isPortrait: true,
    aspectRatioLabel: 'Portrait Ensemble'
  }
];

export const HOSPITALITY_CLIENTS = [
  { name: 'The St. Regis', projects: 'Paris, Aspen, Florence, Bal Harbour' },
  { name: 'Four Seasons Hotels & Resorts', projects: '9 Global Properties' },
  { name: 'Aman Resorts', projects: 'Kyoto, Venice, New York' },
  { name: 'Rosewood Hotels & Resorts', projects: 'London, Hong Kong, Paris' },
  { name: 'Le Bristol & Oetker Collection', projects: 'Paris, Cap d’Antibes' },
  { name: 'The Ritz-Carlton', projects: 'Geneva, Kyoto, Lake Tahoe' },
  { name: 'Waldorf Astoria', projects: 'Beverly Hills, Dubai, Rome' },
  { name: 'Soho House & Co', projects: 'Austin, Rome, Berlin, London' },
  { name: 'Bvlgari Hotels', projects: 'Milan, Paris, Tokyo' }
];

export const ADVISORY_STEPS = [
  {
    step: '01',
    title: 'Discovery & Spatial Portrait Narrative',
    description: 'We review your architectural elevations, FF&E specifications, room proportions, lighting schematics, and brand identity to establish a custom curation & portrait commission strategy.',
    deliverable: 'Spatial Art Strategy & Portrait Scale Matrix',
    timeline: 'Within 3 Business Days'
  },
  {
    step: '02',
    title: 'Bespoke Curated Lookbook & Mockups',
    description: 'Your dedicated art advisor crafts a comprehensive digital presentation with realistic in-situ portrait and artwork wall mockups, artist biographies, substrate options, and tiered unit trade pricing.',
    deliverable: 'Custom PDF Spec Book + Material Samples',
    timeline: 'Within 5-7 Business Days'
  },
  {
    step: '03',
    title: 'Direct Atelier Commissions & Fabrication',
    description: 'We oversee artist portrait commissions, scale customizations, fire-rated canvas substrates, acoustic dampening relievo backings, and museum-grade security hardware.',
    deliverable: 'Artist Studio Milestone Approvals & Certification',
    timeline: '4 - 8 Weeks (Project Dependent)'
  },
  {
    step: '04',
    title: 'White-Glove Delivery & Installation',
    description: 'Consolidated customs-cleared freight, bonded warehousing, and certified local museum art handlers on-site for flawless punch-list completion and certificate handover.',
    deliverable: 'Turnkey Installation & Certified Certificate of Authenticity',
    timeline: 'Coordinated to Your Opening Date'
  }
];

export const ADVISORY_TEAM = [
  {
    name: 'Rebecca Wilson',
    role: 'Chief Curator & VP, Art Advisory',
    bio: 'Over 18 years shaping institutional and luxury hospitality collections worldwide. Oversees bespoke portrait programs, museum curation, and master commissions for premier hotel suites.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop',
    focus: 'Fine Art Portraiture, Flagship Suites & Atriums'
  },
  {
    name: 'Laurent Vaneva',
    role: 'Master Atelier Director & Portrait Curator',
    bio: 'Specialist in classical chiaroscuro oil techniques, contemporary figurative portraiture commissions, and bas-relief wall sculpture for luxury resorts and private heritage residences.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop',
    focus: 'Bespoke Portrait Commissions & Figurative Art'
  },
  {
    name: 'Tara LaManna',
    role: 'Senior Hospitality & Suite Art Advisor',
    bio: 'Background in luxury interior architecture and hotel procurement. Specializes in guest room multi-key rollouts, custom diptych framing, and boutique lifestyle hotel narratives.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop',
    focus: 'Guestroom Rollouts & Boutique Brands'
  },
  {
    name: 'Connie Kim',
    role: 'Hospitality Art Advisor, APAC & Americas',
    bio: 'Expertise in cross-cultural curation, biophilic wellness spaces, sumi-e wash portraiture, and regional artisan sourcing across Asia, Europe, and the Americas.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop',
    focus: 'Resorts, Spas & Wellness Sanctuaries'
  }
];

export const PORTRAIT_COMMISSION_STYLES = [
  {
    id: 'chiaroscuro_gold',
    name: 'Classic Chiaroscuro & 24k Gold',
    artistLeader: 'Camille Dumont',
    description: 'Museum-grade deep umber oil glazes with hand-applied 24k gold leaf illumination. Dramatic lighting that evokes classical grandeur.',
    idealSpaces: 'Presidential Suites, Heritage Salons, Private Dining Chambers',
    pricePerSqFt: '$320 / sq ft',
    leadTime: '5-7 Weeks',
    sampleImage: portraitOilGoldImage
  },
  {
    id: 'botanical_emerald',
    name: 'Botanical Renaissance Portrait in Gilt Frame',
    artistLeader: 'Camille de Vries',
    description: 'Intricate emerald botanical leaves and gold leaf vine embellishments around an elegant oil-glazed figure.',
    idealSpaces: 'Garden Conservatories, Luxury Suites, Master Dressing Rooms',
    pricePerSqFt: '$310 / sq ft',
    leadTime: '5-6 Weeks',
    sampleImage: portraitBotanicalEmeraldImage
  },
  {
    id: 'gentleman_velvet',
    name: 'Aristocratic Velvet & Gold Portrait',
    artistLeader: 'Rembrandt Guild Atelier',
    description: 'Stately dark velvet doublet and gold chain detailing with commanding Flemish chiaroscuro depth.',
    idealSpaces: 'Executive Studies, Library Salons, Private Cigar Lounges',
    pricePerSqFt: '$330 / sq ft',
    leadTime: '5-7 Weeks',
    sampleImage: portraitGentlemanVelvetImage
  },
  {
    id: 'bedhead_suite',
    name: 'Master Suite Bedhead Oil Portrait',
    artistLeader: 'Eleanor Vance',
    description: 'Radiant fine art oil portrait painting with rich gold accents tailored for king bedhead focal walls and master dressing rooms.',
    idealSpaces: 'Presidential Bedroom Suites, Luxury Villa Chambers',
    pricePerSqFt: '$290 / sq ft',
    leadTime: '4-6 Weeks',
    sampleImage: portraitBedheadSuiteImage
  },
  {
    id: 'figurative_impasto',
    name: 'Contemporary Cobalt & Ochre Impasto',
    artistLeader: 'Marc Levy',
    description: 'Vibrant, bold palette knife strokes in rich ultramarine and mineral ochre. Expressive, modern, and commanding.',
    idealSpaces: 'Executive Boardrooms, Cocktail Lounges, Penthouse Salons',
    pricePerSqFt: '$280 / sq ft',
    leadTime: '4-6 Weeks',
    sampleImage: portraitPenthouseModernImage
  },
  {
    id: 'plaster_relief',
    name: 'Tactile Bas-Relief Gypsum Portrait',
    artistLeader: 'Mateo Alvarez',
    description: 'Three-dimensional sculptural human profiles in quartz plaster on Belgian linen. Dynamically captures ambient daylight shadows.',
    idealSpaces: 'Spa Sanctuaries, Zen Suites, Minimalist Penthouse Foyers',
    pricePerSqFt: '$260 / sq ft',
    leadTime: '4-6 Weeks',
    sampleImage: portraitPlasterReliefImage
  },
  {
    id: 'wabi_sabi_ink',
    name: 'Wabi-Sabi Sumi-e & Gold Foil on Washi',
    artistLeader: 'Hanako Soga',
    description: 'Fluid minimalist ink wash and ethereal gold leaf on handmade deckled mulberry washi paper. Floating wooden frame mount.',
    idealSpaces: 'Boutique Suites, Onsen Retreats, Meditation Corridors',
    pricePerSqFt: '$210 / sq ft',
    leadTime: '3-5 Weeks',
    sampleImage: portraitWabiSabiInkImage
  }
];
