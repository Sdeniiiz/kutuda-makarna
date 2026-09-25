import type { APIRoute } from 'astro';
import { getAllProducts } from '../../../services/productService';

export const GET: APIRoute = async () => {
  const products = getAllProducts();

  return new Response(JSON.stringify({
    success: true,
    count: products.length,
    data: products
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
