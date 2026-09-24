import type { APIRoute } from 'astro';
import { branches } from '../../data/branches';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({
    success: true,
    total: branches.length,
    city: 'Samsun',
    updatedAt: new Date().toISOString(),
    data: branches
  }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      'Access-Control-Allow-Origin': '*'
    }
  });
};
