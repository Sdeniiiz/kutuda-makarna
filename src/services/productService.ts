import { menuItems } from '../data/menu';
import { getBranchBySlug } from './branchService';
import type { Product, BranchProduct } from '../types/product';

/**
 * Product Service - Headless & Multi-Branch Ready
 * Resolves central products and applies branch-specific price overrides & availability.
 */

export function getAllProducts(): Product[] {
  return menuItems;
}

export function getProductBySlug(slug: string): Product | undefined {
  return menuItems.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === 'tumu') return menuItems;
  return menuItems.filter(p => p.category === category);
}

/**
 * Resolves the menu for a specific branch:
 * 1. Checks priceOverrides for the branch (e.g. Atakum vs İlkadım vs Tekkeköy)
 * 2. Checks availableProductSlugs
 * 3. Checks outOfStockSlugs
 */
export function getBranchProducts(branchSlugOrId: string): BranchProduct[] {
  const branch = getBranchBySlug(branchSlugOrId);

  return menuItems.map(item => {
    let branchPrice = item.price;
    let isAvailable = true;
    let isOutOfStockToday = false;

    if (branch) {
      // 1. Branch-specific price override
      if (branch.pricing?.priceOverrides && branch.pricing.priceOverrides[item.slug] !== undefined) {
        branchPrice = branch.pricing.priceOverrides[item.slug];
      }

      // 2. Branch availability filter
      if (branch.availability?.availableProductSlugs && branch.availability.availableProductSlugs.length > 0) {
        if (!branch.availability.availableProductSlugs.includes(item.slug)) {
          isAvailable = false;
        }
      }

      // 3. Out of stock check
      if (branch.availability?.outOfStockSlugs && branch.availability.outOfStockSlugs.includes(item.slug)) {
        isOutOfStockToday = true;
      }
    }

    return {
      ...item,
      basePrice: item.price,
      price: branchPrice,
      branchPrice,
      isAvailable,
      isOutOfStockToday,
      branchBadge: branch?.pricing?.priceOverrides && branch.pricing.priceOverrides[item.slug] !== undefined
        ? 'Şube Özel Fiyatı'
        : item.badge
    };
  });
}
