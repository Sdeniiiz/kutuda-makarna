import type { APIRoute } from 'astro';
import { getAllBranches } from '../../../services/branchService';

export const GET: APIRoute = async () => {
  const branches = getAllBranches();

  return new Response(JSON.stringify({
    success: true,
    count: branches.length,
    data: branches.map(b => ({
      id: b.id,
      slug: b.slug,
      name: b.name,
      district: b.district,
      city: b.city,
      phone: b.phone,
      phoneDisplay: b.phoneDisplay,
      address: b.address,
      coordinates: b.coordinates,
      workingHours: b.workingHours,
      status: b.entity?.status || 'active',
      endpoints: {
        details: `/api/public/branches/${b.slug}.json`,
        products: `/api/public/branches/${b.slug}/products.json`,
        categories: `/api/public/branches/${b.slug}/categories.json`,
        campaigns: `/api/public/branches/${b.slug}/campaigns.json`,
        settings: `/api/public/branches/${b.slug}/settings.json`
      }
    }))
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
