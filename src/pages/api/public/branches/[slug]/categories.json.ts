import type { APIRoute } from 'astro';
import { getAllBranches, getBranchBySlug } from '../../../../../services/branchService';
import { categories } from '../../../../../data/categories';
import { getBranchProducts } from '../../../../../services/productService';

export function getStaticPaths() {
  const branches = getAllBranches();
  return branches.map(b => ({
    params: { slug: b.slug }
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;
  if (!slug) {
    return new Response(JSON.stringify({ success: false, error: 'Slug parameter is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const branch = getBranchBySlug(slug);
  if (!branch) {
    return new Response(JSON.stringify({ success: false, error: 'Branch not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const products = getBranchProducts(slug);
  const activeCategoryIds = new Set(products.filter(p => p.isAvailable).map(p => p.category));

  const branchCategories = categories.map(c => ({
    ...c,
    isActiveInBranch: activeCategoryIds.has(c.id as any),
    itemCount: products.filter(p => p.category === c.id && p.isAvailable).length
  }));

  return new Response(JSON.stringify({
    success: true,
    branch: {
      id: branch.id,
      slug: branch.slug,
      name: branch.name
    },
    data: branchCategories
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
