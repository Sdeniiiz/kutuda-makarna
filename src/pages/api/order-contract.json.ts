import type { APIRoute } from 'astro';
import { createOrderContract } from '../../services/branchService';
import type { CheckoutPayload } from '../../types/order';

export const GET: APIRoute = () => {
  // Demonstration sample payload showing contract flow: Cart -> Checkout -> Payment -> Order
  const samplePayload: CheckoutPayload = {
    branchId: 'sube-atakum',
    orderType: 'takeaway_pickup',
    customer: {
      fullName: 'Ahmet Yılmaz',
      phone: '+905551234567',
      email: 'ahmet@example.com'
    },
    pickupTimeEstimated: '15 dk',
    paymentMethod: 'online_credit_card',
    items: [
      {
        id: 'cart_item_1',
        productSlug: 'kremali-mantarli-makarna',
        name: 'Kremalı Mantarlı Makarna',
        pastaType: 'Penne Rigate',
        portionGrams: 380,
        unitPrice: 195,
        quantity: 2,
        modifiers: [
          {
            id: 'mod_parmesan',
            name: 'Ekstra Permesan Peyniri',
            extraPrice: 30
          }
        ],
        totalItemPrice: 450
      }
    ],
    campaignCode: 'OMU15',
    notes: 'Kutuya ekstra çatal ve peçete eklensin lütfen.'
  };

  const sampleContract = createOrderContract(samplePayload);

  return new Response(JSON.stringify({
    success: true,
    architecture: {
      step: 'Aşama 6.5 - Veri & API Mimarisi Kontrolü',
      pipeline: 'Cart -> Checkout -> Payment -> Order',
      inventoryDecoupling: {
        rule: 'Website NEVER modifies or manages physical inventory directly.',
        mechanism: 'Website produces OrderContract bound to branch_id. Central POS / ERP asynchronously depletes raw materials (pasta dough, cream, mushrooms, boxes, forks) via BOM recipe table.'
      }
    },
    sampleCheckoutPayload: samplePayload,
    resultingOrderContract: sampleContract
  }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    }
  });
};
