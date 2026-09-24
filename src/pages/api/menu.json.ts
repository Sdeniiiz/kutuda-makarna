import type { APIRoute } from 'astro';
import { menuItems } from '../../data/menu';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({
    success: true,
    total: menuItems.length,
    updatedAt: new Date().toISOString(),
    data: menuItems
  }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      'Access-Control-Allow-Origin': '*'
    }
  });
};
