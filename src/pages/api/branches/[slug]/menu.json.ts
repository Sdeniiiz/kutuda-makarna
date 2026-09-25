import type { APIRoute } from 'astro';
import { branches } from '../../../../data/branches';
import { getBranchMenu } from '../../../../services/branchService';

export function getStaticPaths() {
  return branches.map((branch) => ({
    params: { slug: branch.slug },
  }));
}

export const GET: APIRoute = ({ params }) => {
  const slug = params.slug;
  const menu = slug ? getBranchMenu(slug) : [];

  return new Response(JSON.stringify({
    success: true,
    branchSlug: slug,
    totalItems: menu.length,
    data: menu
  }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*'
    }
  });
};
