import type { Campaign } from '../types/campaign';

export const campaigns: Campaign[] = [
  {
    id: 'cmp-atakum-ikili',
    title: '2 Makarna + 2 İçecek Sahil Paketi',
    description: 'Atakum sahil yürüyüşünde dilediğin 2 kutu makarna ve 2 serinletici içecek avantajlı fiyata!',
    badge: '🌊 SAHİL MENÜSÜ',
    discountPercent: 20,
    validUntil: '2026-12-31',
    applicableBranches: ['atakum', 'sube-atakum'],
    itemsIncluded: ['kremali-mantarli-makarna', 'bolonez-makarna', 'ev-yapimi-limonata'],
  },
  {
    id: 'cmp-atakum-ogrenci',
    title: 'OMÜ Öğrenci Menüsü',
    description: 'Öğrenci kimliğini gösteren üniversitelilere tüm kutu makarnalarda anında %15 indirim!',
    badge: '🎓 ÖĞRENCİ İNDİRİMİ',
    discountPercent: 15,
    validUntil: '2026-12-31',
    applicableBranches: ['atakum', 'sube-atakum'],
  },
  {
    id: 'cmp-ilkadim-ciftlik',
    title: 'Çiftlik Caddesi Öğrenci & Ofis Menüsü',
    description: 'İlkadım şubemizde öğle ve akşam saatlerinde kutu makarna yanında ev yapımı limonata hediye!',
    badge: '💼 ÖĞRENCİ & OFİS',
    discountPercent: 18,
    validUntil: '2026-12-31',
    applicableBranches: ['ilkadim', 'sube-ilkadim'],
  },
  {
    id: 'cmp-tekkekoy-gece',
    title: 'Tekkeköy Gece & Vardiya Menüsü',
    description: 'Sanayi bölgesi ve geç saat çalışanları için 21:00 sonrası sıcak kutu makarnalarda özel avantaj.',
    badge: '🌙 GECE MENÜSÜ',
    discountPercent: 15,
    validUntil: '2026-12-31',
    applicableBranches: ['tekkekoy', 'sube-tekkekoy'],
  },
];
