/**
 * Kutuda Makarna - Order, Checkout & Cart Domain Contracts
 * 
 * DESIGN PRINCIPLE (Aşama 6.5 - Data & API Architecture):
 * 1. All shopping sessions, carts, and checkout intents MUST be tied to a specific `branch_id`.
 * 2. Inventory / Stock Decoupling:
 *    - The website NEVER performs direct stock deduction or manages physical raw ingredients.
 *    - The website creates a validated `OrderContract` with `branch_id`, item options, and customer details.
 *    - Upon successful checkout/payment confirmation, the order event is ingested by the Central Management
 *      and Branch POS systems, which asynchronously deplete raw materials (pasta dough, sauce batches,
 *      packaging boxes, forks) via their internal Bill-of-Materials (BOM) engine.
 */

export interface OrderModifier {
  id: string;
  name: string;
  extraPrice: number;
}

export interface CartItem {
  id: string;
  productSlug: string;
  name: string;
  pastaType: string;
  portionGrams: number;
  unitPrice: number;
  quantity: number;
  modifiers: OrderModifier[];
  specialInstructions?: string;
  totalItemPrice: number;
}

export interface Cart {
  branchId: string;
  branchSlug: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discountAmount: number;
  appliedCampaignId?: string;
  total: number;
}

export type OrderType = 'takeaway_pickup' | 'delivery' | 'dine_in';
export type PaymentMethod = 'online_credit_card' | 'pay_at_door_card' | 'pay_at_door_cash';
export type OrderStatus = 'pending_payment' | 'received' | 'in_kitchen' | 'ready_for_pickup' | 'on_courier' | 'delivered' | 'cancelled';

export interface CustomerNAP {
  fullName: string;
  phone: string;
  email?: string;
}

export interface DeliveryAddress {
  addressLine: string;
  buildingNo: string;
  floorNo?: string;
  apartmentNo?: string;
  district: string;
  city: string;
  addressNote?: string;
}

export interface CheckoutPayload {
  branchId: string;
  orderType: OrderType;
  customer: CustomerNAP;
  deliveryAddress?: DeliveryAddress;
  pickupTimeEstimated?: string; // e.g. "15-20 mins"
  paymentMethod: PaymentMethod;
  items: CartItem[];
  campaignCode?: string;
  notes?: string;
}

export interface PaymentSessionIntent {
  checkoutSessionId: string;
  branchId: string;
  amount: number;
  currency: 'TRY';
  orderSummary: {
    itemCount: number;
    orderType: OrderType;
  };
  clientSecret?: string;
  redirectUrl?: string;
}

export interface OrderContract {
  orderId: string;
  orderNumber: string; // e.g. KM-ATK-20260925-042
  branchId: string;
  branchName: string;
  status: OrderStatus;
  orderType: OrderType;
  paymentMethod: PaymentMethod;
  isPaid: boolean;
  customer: CustomerNAP;
  deliveryAddress?: DeliveryAddress;
  items: CartItem[];
  pricing: {
    subtotal: number;
    deliveryFee: number;
    discount: number;
    total: number;
  };
  createdAt: string;
  estimatedReadyAt: string;
}
