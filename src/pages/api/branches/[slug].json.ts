import type { APIRoute } from 'astro';
import { branches, getBranchBySlug } from '../../../data/branches';

export function getStaticPaths() {
  return branches.map((branch) => ({
    params: { slug: branch.slug },
  }));
}

export const GET: APIRoute = ({ params }) => {
  const slug = params.slug;
  const branch = slug ? getBranchBySlug(slug) : undefined;

  if (!branch) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Branch not found'
    }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
  }

  return new Response(JSON.stringify({
    success: true,
    data: branch,
    meta: {
      engine: 'Kutuda Makarna Single Website Engine v1.0',
      branchCode: branch.entity.branchCode,
      status: branch.entity.status
    }
  }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*'
    }
  });
};
