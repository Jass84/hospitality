export type SpaceCategory =
  | 'all'
  | 'portraits'
  | 'guest_rooms'
  | 'lobbies'
  | 'restaurants'
  | 'wellness'
  | 'corridors'
  | 'outdoor';

export type ArtOrientation = 'all' | 'portrait' | 'landscape' | 'multipanel';

export interface HospitalitySpace {
  id: string;
  title: string;
  propertyName: string;
  location: string;
  category: SpaceCategory;
  orientation?: 'portrait' | 'landscape' | 'multipanel' | 'square';
  image: string;
  artworkImage?: string;
  secondaryImages?: string[];
  artworkTitle: string;
  artistName: string;
  artistOrigin: string;
  artMedium: string;
  dimensions: string;
  framing: string;
  pricePerUnit: string;
  description: string;
  curationConcept: string;
  roomType: string;
  tags: string[];
  acousticRated?: boolean;
  fireRated?: boolean;
  customScaleAvailable?: boolean;
  isPortraitFeatured?: boolean;
}

export type CuratedArtStyle = 
  | 'Fine Art Portraiture'
  | 'Bas-Relief Portrait'
  | 'Figurative Impasto'
  | 'Chiaroscuro & 24k Gold'
  | 'Wabi-Sabi Figurative'
  | 'Abstract Minimal' 
  | 'Textured Earth' 
  | 'Architectural Monolith' 
  | 'Organic Botanical' 
  | 'Coastal Cyanotype' 
  | 'Geometric Sculptural'
  | 'Artisan Textile'
  | 'Kinetic Sculpture'
  | 'Acoustic Relievo'
  | 'Bas-Relief'
  | 'Japanese Modernism';

export interface CuratedArtwork {
  id: string;
  spaceId?: string;
  title: string;
  artist: string;
  artistLocation: string;
  medium: string;
  dimensions: string;
  image: string;
  style: CuratedArtStyle;
  orientation?: 'portrait' | 'landscape' | 'multipanel' | 'square';
  suggestedRoom: string;
  tradePrice: string;
  retailPrice: string;
  isPortrait?: boolean;
  aspectRatioLabel?: string;
}

export interface SpecItem {
  spaceId: string;
  title: string;
  propertyName: string;
  image: string;
  artMedium: string;
  dimensions: string;
  priceEstimate: string;
  quantity: number;
  roomTag: string;
  notes?: string;
  addedAt: string;
}

export interface AdvisoryInquiry {
  fullName: string;
  email: string;
  phone: string;
  companyOrFirm: string;
  professionalRole: string;
  propertyType: string;
  propertyName: string;
  location: string;
  numberOfKeys: string;
  estimatedBudget: string;
  targetCompletion: string;
  servicesNeeded: string[];
  projectNotes: string;
}
