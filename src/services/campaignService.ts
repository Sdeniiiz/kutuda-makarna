import { campaigns } from '../data/campaigns';
import { getBranchBySlug } from './branchService';
import type { Campaign } from '../types/campaign';

/**
 * Campaign Service - Resolves central campaigns and branch-specific promotions.
 */

export function getAllCampaigns(): Campaign[] {
  return campaigns;
}

export function getCampaignById(id: string): Campaign | undefined {
  return campaigns.find(c => c.id === id);
}

/**
 * Returns campaigns valid for a specific branch.
 * Checks branch.campaigns (inline definitions) + central campaigns mapped to this branch.
 */
export function getBranchCampaigns(branchSlugOrId: string): Campaign[] {
  const branch = getBranchBySlug(branchSlugOrId);
  const branchSlug = branch?.slug || branchSlugOrId;
  const branchId = branch?.id || branchSlugOrId;

  // 1. Central campaigns assigned to this branch
  const centralForBranch = campaigns.filter(c => {
    if (!c.applicableBranches || c.applicableBranches.length === 0 || c.applicableBranches.includes('*')) {
      return true;
    }
    return c.applicableBranches.includes(branchSlug) || c.applicableBranches.includes(branchId);
  });

  // 2. Branch aggregate inline campaigns (if defined in branch entity)
  const inlineCampaigns: Campaign[] = (branch?.campaigns || []).map(ic => ({
    id: ic.id,
    title: ic.title,
    description: ic.description,
    badge: ic.badge,
    discountPercent: ic.discountPercent,
    validUntil: ic.validUntil,
    isOnlineExclusive: ic.isOnlineExclusive,
    applicableBranches: [branchSlug]
  }));

  // Deduplicate by ID
  const map = new Map<string, Campaign>();
  for (const c of [...inlineCampaigns, ...centralForBranch]) {
    map.set(c.id, c);
  }

  return Array.from(map.values());
}
