export interface Campaign {
  id: string;
  title: string;
  description: string;
  badge?: string;
  discountPercent?: number;
  promoCode?: string;
  validUntil?: string;
  isOnlineExclusive?: boolean;
  applicableBranches?: string[]; // Branch IDs or slugs. If empty or contains '*', applies everywhere.
  itemsIncluded?: string[]; // Product slugs included
}
