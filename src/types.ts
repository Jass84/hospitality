export type SpaceCategory =
  | 'all'
  | 'guest_rooms'
  | 'lobbies'
  | 'restaurants'
  | 'wellness'
  | 'corridors'
  | 'outdoor';

export interface HospitalitySpace {
  id: string;
  title: string;
  propertyName: string;
  location: string;
  category: SpaceCategory;
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
}

export type CuratedArtStyle = 
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
  suggestedRoom: string;
  tradePrice: string;
  retailPrice: string;
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
