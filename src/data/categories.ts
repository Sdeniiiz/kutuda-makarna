import type { Category } from '../types/category';

export const categories: Category[] = [
  {
    id: 'makarna',
    name: 'Makarnalar',
    slug: 'makarnalar',
    description: 'Taze el yapımı hamur, zengin İtalyan sosları ve tavadan kutuya sıcacık lezzetler.',
    icon: '🍝',
    displayOrder: 1,
  },
  {
    id: 'icecek',
    name: 'İçecekler',
    slug: 'icecekler',
    description: 'Taze sıkılmış naneli ev yapımı limonata ve serinletici içecekler.',
    icon: '🍋',
    displayOrder: 2,
  },
];
