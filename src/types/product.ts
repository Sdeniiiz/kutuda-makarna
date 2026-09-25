export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'makarna' | 'baslangic' | 'salata' | 'tatli' | 'icecek' | 'kampanya' | string;
  categoryName: string;
  price: number;
  basePrice?: number;
  shortDescription: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  portionGrams: number;
  calories: number;
  prepTimeMinutes: number;
  spicyLevel: 0 | 1 | 2 | 3;
  isVegetarian: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  badge?: string;
  image: string;
  sauceDetails: string;
  pastaType: string;
  pairingRecommendation: string;
  status?: 'active' | 'archived' | 'draft';
}

/**
 * Resolved Product with Branch-specific data
 */
export interface BranchProduct extends Product {
  branchPrice: number;
  isAvailable: boolean;
  isOutOfStockToday: boolean;
  branchBadge?: string;
}
