/**
 * Kutuda Makarna - Franchise-Ready Domain Architecture
 * 
 * Domain-driven separation of branch data to support:
 * - Multi-branch franchise expansion
 * - Central Admin Panel / Headless CMS integration
 * - POS & Inventory system integration
 * - Branch-specific pricing, availability & campaigns
 */

export type BranchStatus = 'active' | 'coming_soon' | 'temporarily_closed' | 'inactive';

export interface BranchEntity {
  id: string;
  slug: string;
  name: string;
  branchCode: string; // e.g. SAMSUN-ATK-01
  status: BranchStatus;
}

export interface BranchInformation {
  tagline: string;
  conceptType: 'Express Kiosk' | 'Bistro & Kiosk' | 'Drive-Thru & Kiosk';
  description: string;
}

export interface BranchBranding {
  logoUrl?: string;
  heroImage: {
    desktop: string;
    mobile?: string;
    alt: string;
  };
}

export interface BranchHeroConfig {
  headline: string;
  subline: string;
  badgeText: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
}

export interface BranchContact {
  phone: string;
  phoneDisplay: string;
  whatsapp?: string;
  email?: string;
  supportHoursNote?: string;
}

export interface BranchHours {
  weekdays: string;
  weekend: string;
  is24Hours?: boolean;
  note?: string;
}

export interface BranchLocation {
  address: string;
  district: string;
  city: string;
  postalCode?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  directionsGuide: string;
  nearbySpots: string[];
  parkingInfo?: string;
}

export interface BranchSocialMedia {
  instagram?: string;
  tiktok?: string;
  facebook?: string;
  googleMyBusinessUrl?: string;
}

export interface BranchPricing {
  currency: 'TRY';
  /**
   * Product ID -> Price Override in TL.
   * If a product is not listed here, default catalog price from menuItems is used.
   */
  priceOverrides: Record<string, number>;
}

export interface BranchAvailability {
  /** All product slugs available in this branch */
  availableProductSlugs: string[];
  /** Temporarily out of stock slugs (e.g. today's fresh truffle sold out) */
  outOfStockSlugs: string[];
}

export interface BranchCampaign {
  id: string;
  title: string;
  description: string;
  badge?: string;
  discountPercent?: number;
  validUntil?: string;
  isOnlineExclusive?: boolean;
}

export interface BranchOrderSettings {
  onlineOrderingEnabled: boolean;
  pickupEnabled: boolean;
  deliveryEnabled: boolean;
  estimatedPickupMinutes: number;
  estimatedDeliveryMinutes: number;
  minDeliveryAmount?: number;
  deliveryFee?: number;
  externalDeliveryPartners?: {
    yemeksepetiUrl?: string;
    getirUrl?: string;
    trendyolUrl?: string;
  };
}

export interface BranchSeoConfig {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  keywords: string[];
}

export interface BranchThemeConfig {
  primaryAccent?: string;
  announcementBanner?: {
    text: string;
    link?: string;
    isActive: boolean;
  };
}

export interface BranchFaq {
  question: string;
  answer: string;
}

/**
 * Composite Branch Aggregate Model
 * Kept modular so each sub-object can be populated/updated via separate microservice or API endpoints.
 */
export interface BranchAggregate {
  entity: BranchEntity;
  info: BranchInformation;
  branding: BranchBranding;
  hero: BranchHeroConfig;
  contact: BranchContact;
  hours: BranchHours;
  location: BranchLocation;
  social: BranchSocialMedia;
  pricing: BranchPricing;
  availability: BranchAvailability;
  campaigns: BranchCampaign[];
  orderSettings: BranchOrderSettings;
  seo: BranchSeoConfig;
  theme: BranchThemeConfig;
  faqs: BranchFaq[];

  // Convenience flat accessors for backward-compatibility with existing templates
  id: string;
  slug: string;
  name: string;
  district: string;
  city: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  googleMapsUrl: string;
  coordinates: { lat: number; lng: number };
  workingHours: { weekdays: string; weekend: string; note?: string };
  image: string;
  highlights: string[];
  directionsGuide: string;
  nearbySpots: string[];
}
