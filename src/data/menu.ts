export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  category: 'kremali' | 'domatesli' | 'spesiyal' | 'yan-urun';
  categoryName: string;
  price: number;
  shortDescription: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  portionGrams: number;
  calories: number;
  prepTimeMinutes: number;
  spicyLevel: 0 | 1 | 2 | 3;
  isVegetarian: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  badge?: string;
  image: string;
  sauceDetails: string;
  pastaType: string;
  pairingRecommendation: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'km-01',
    slug: 'kremali-mantarli-makarna',
    name: 'Kremalı Mantarlı Makarna',
    category: 'kremali',
    categoryName: 'Kremalı Klasikler',
    price: 189,
    shortDescription: 'Taze kültür ve istiridye mantarı, yoğun taze krema, sarımsak, ince karabiber ve rendelenmiş parmesan.',
    description: 'Yüksek ateşte tereyağı ve sızma zeytinyağı ile sotelenen taze istiridye ve kültür mantarları, ipeksi İtalyan kremasıyla buluşuyor. Al dente kıvamındaki taze penne makarnamızın her kıvrımına işleyen bu sos, kutunun sıcaklığıyla lezzetini son çatala kadar koruyor.',
    ingredients: ['Taze durum buğdayı makarnası', 'Taze istiridye ve kültür mantarı', 'Yüksek yağlı süt kreması', 'Rendelenmiş Grana Padano/Parmesan', 'Sarımsak', 'Taze çekilmiş karabiber', 'Sızma zeytinyağı'],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri (Laktoz)'],
    portionGrams: 380,
    calories: 620,
    prepTimeMinutes: 4,
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: true,
    badge: 'En Çok Tercih Edilen',
    image: '/images/kremali-mantarli.webp',
    sauceDetails: 'Ağır ateşte çektirilen taze krema ve mantar suyu emülsiyonu.',
    pastaType: 'Penne Rigate (Taze Hamur)',
    pairingRecommendation: 'Ev Yapımı Taze Nane-Limonata ile mükemmel uyum sağlar.'
  },
  {
    id: 'km-02',
    slug: 'bolonez-makarna',
    name: 'Geleneksel Bolonez Makarna',
    category: 'domatesli',
    categoryName: 'Domatesli & Etli',
    price: 199,
    shortDescription: '4 saat ağır ateşte pişen dana kıyma, San Marzano domates püresi, kök sebzeler ve taze fesleğen.',
    description: 'Bologna usulü hazırlanan ağır ateşte pişmiş dana kıyması; kereviz sapı, havuç ve soğanla harmanlanıp aromatik San Marzano domates sosuyla saatlerce demlenir. Kutuya döküldüğünde yoğun kıyma sosu her çatalda doyurucu bir gurme deneyim sunar.',
    ingredients: ['Taze fettuccine/fusilli makarna', 'Dana döş kıyma (%100 yerli)', 'San Marzano domates sosu', 'Kök sebzeler (Havuç, Kereviz, Soğan)', 'Taze fesleğen ve biberiye', 'Sızma zeytinyağı', 'Parmesan rendesi'],
    allergens: ['Gluten (Buğday)', 'Kereviz', 'Süt ve Süt Ürünleri (Parmesan)'],
    portionGrams: 420,
    calories: 680,
    prepTimeMinutes: 3,
    spicyLevel: 0,
    isVegetarian: false,
    isPopular: true,
    badge: 'Usta İmzası',
    image: '/images/bolonez.webp',
    sauceDetails: '4 saat kısık ateşte demlenen zengin etli ragù sosu.',
    pastaType: 'Fusilli Bucati (Taze Hamur)',
    pairingRecommendation: 'Klasik soğuk şeftalili buzlu çay veya maden suyu ile önerilir.'
  },
  {
    id: 'km-03',
    slug: 'acili-arrabbiata-makarna',
    name: 'Acılı Arrabbiata',
    category: 'domatesli',
    categoryName: 'Domatesli & Etli',
    price: 169,
    shortDescription: 'Acı İtalyan chili biberi, bol sarımsak, sızma zeytinyağı, domates püresi ve taze maydanoz.',
    description: 'İtalyancada "öfkeli" anlamına gelen Arrabbiata, ateşli lezzet sevenlerin vazgeçilmezi. Zeytinyağında hafifçe sotelenen sarımsak ve kurutulmuş acı biberlerin aroması taze domatesle birleşir. Damakta bıraktığı tatlı-acı sıcaklık kutunun buharıyla harika bir uyum yakalar.',
    ingredients: ['Taze penne makarna', 'Olgun tarla domatesi püresi', 'Kurutulmuş chili acı biber', 'Kavrulmuş sarımsak', 'Sızma zeytinyağı', 'Taze maydanoz'],
    allergens: ['Gluten (Buğday)'],
    portionGrams: 370,
    calories: 490,
    prepTimeMinutes: 3,
    spicyLevel: 3,
    isVegetarian: true,
    isPopular: false,
    badge: 'Ateşli Lezzet 🔥',
    image: '/images/arrabbiata.webp',
    sauceDetails: 'Acı biber infüzyonlu zeytinyağlı zengin domates sosu.',
    pastaType: 'Penne Rigate (Taze Hamur)',
    pairingRecommendation: 'Acıyı dengelemek için yanında soğuk taze ayran veya limonata.'
  },
  {
    id: 'km-04',
    slug: 'pesto-makarna',
    name: 'Taze Fesleğenli Pesto',
    category: 'spesiyal',
    categoryName: 'Gurme & Yeşillik',
    price: 189,
    shortDescription: 'Körpe fesleğen yaprakları, çam fıstığı, sarımsak, sızma zeytinyağı ve bol parmesan peyniri.',
    description: 'Günlük olarak taş havanda ezilerek hazırlanan taze fesleğen yaprakları, kavrulmuş çam fıstığı ve hakiki parmesan peyniriyle bir araya geliyor. Asla pişirilmeyen, taze makarnanın sıcağıyla eriyen bu canlı yeşil sos, Akdeniz esintisini kutunuza dolduruyor.',
    ingredients: ['Taze casarecce makarna', 'Taze fesleğen yaprakları', 'Kavrulmuş çam fıstığı', 'Grana Padano peyniri', 'Sarımsak', 'Soğuk sıkım sızma zeytinyağı'],
    allergens: ['Gluten (Buğday)', 'Sert Kabuklu Yemişler (Çam Fıstığı)', 'Süt Ürünleri'],
    portionGrams: 360,
    calories: 590,
    prepTimeMinutes: 3,
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: true,
    badge: 'Akdeniz Tazeliği',
    image: '/images/pesto.webp',
    sauceDetails: 'Isıl işlem görmemiş, taş değirmen usulü taze fesleğen pesto.',
    pastaType: 'Casarecce (Taze Hamur)',
    pairingRecommendation: 'Taze Tiramisu Kutusu ile hafif bir gurme menü.'
  },
  {
    id: 'km-05',
    slug: 'dort-peynirli-makarna',
    name: 'Dört Peynirli (Quattro Formaggi)',
    category: 'kremali',
    categoryName: 'Kremalı Klasikler',
    price: 199,
    shortDescription: 'Gorgonzola esintisi, eritilmiş kaşar, gravyer dokunuşu ve zengin parmesan sosu.',
    description: 'Peynir tutkunları için özel olarak formüle edilmiş 4 farklı peynirin eritilmesiyle elde edilen kremamsı ve yoğun bir başyapıt. Her çatalda uzayan peynir dokusu ve damağı saran aromatik tat profili, kutunun izolasyonu sayesinde son ana kadar akışkan kalır.',
    ingredients: ['Taze tortiglioni makarna', 'Parmigiano Reggiano', 'Aromatik mavi peynir dokunuşu', 'Eritme taze peynir', 'Krema', 'Taze çekilmiş beyaz biber'],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri (Yüksek Laktoz)'],
    portionGrams: 400,
    calories: 740,
    prepTimeMinutes: 4,
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: false,
    badge: 'Peynir Şöleni 🧀',
    image: '/images/dort-peynirli.webp',
    sauceDetails: '4 farklı peynirin kısık ateşte eritildiği yoğun kadife kıvam.',
    pastaType: 'Tortiglioni (Taze Hamur)',
    pairingRecommendation: 'Şekersiz buzlu çay veya maden suyu ile ferahlatıcı tüketim.'
  },
  {
    id: 'km-06',
    slug: 'kremali-tavuklu-makarna',
    name: 'Kremalı Tavuklu & Mantarlı',
    category: 'kremali',
    categoryName: 'Kremalı Klasikler',
    price: 199,
    shortDescription: 'Jülyen marine tavuk göğsü, taze kültür mantarları, sarımsaklı krema sos ve taze kekik.',
    description: 'Protein dolu, doyurucu ve karşı konulmaz! Zeytinyağı ve taze kekikle marine edilmiş yumuşacık tavuk göğsü dilimleri, tavada nar gibi kızartıldıktan sonra mantar ve krema ile harmanlanır. Aktif spor yapanlar ve yüksek enerjili bir öğün arayanların 1 numarası.',
    ingredients: ['Taze penne makarna', 'Marine tavuk göğsü eti', 'Taze mantar', 'Süt kreması', 'Taze kekik ve karabiber', 'Sarımsak', 'Parmesan'],
    allergens: ['Gluten (Buğday)', 'Süt ve Süt Ürünleri'],
    portionGrams: 430,
    calories: 710,
    prepTimeMinutes: 4,
    spicyLevel: 0,
    isVegetarian: false,
    isPopular: true,
    badge: 'Protein Deposu',
    image: '/images/kremali-tavuklu.webp',
    sauceDetails: 'Tavuk suyu ve krema özütünden oluşan aromatik sıcak sos.',
    pastaType: 'Penne Rigate (Taze Hamur)',
    pairingRecommendation: 'Ekstra jalapeno biber takviyesi ile hafif acılı deneyim.'
  },
  {
    id: 'km-07',
    slug: 'truflu-mantar-spesiyal',
    name: 'Trüflü Gurme Mantar',
    category: 'spesiyal',
    categoryName: 'Gurme & Spesiyaller',
    price: 229,
    shortDescription: 'Siyah trüf yağı infüzyonu, yabani orman mantarları, kremamsı parmesan velouté.',
    description: 'Sıradan makarnanın çok ötesinde lüks bir sokak lezzeti. Doğal siyah trüf aromasıyla zenginleştirilmiş velouté sosu, özenle seçilen mantar çeşitleriyle birleşir. Kutuyu açtığınız anda etrafı saran o eşsiz trüf kokusu unutulmaz bir deneyim vadediyor.',
    ingredients: ['Taze tagliatelle makarna', 'Siyah trüf mantarı yağı', 'Kültür ve porçini mantarı', 'Krema', 'Tereyağı', 'Parmigiano Reggiano'],
    allergens: ['Gluten (Buğday)', 'Süt Ürünleri'],
    portionGrams: 390,
    calories: 650,
    prepTimeMinutes: 4,
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: false,
    badge: 'Şefin Spesiyali ✨',
    image: '/images/truflu.webp',
    sauceDetails: 'Trüf esansı ve porçini mantarı suyuyla çektirilen kadifemsi sos.',
    pastaType: 'Tagliatelle (Taze Hamur)',
    pairingRecommendation: 'Özel gün kutlamalarında veya gurme damak zevki için.'
  },
  {
    id: 'km-08',
    slug: 'tiramisu-kutusu',
    name: 'İtalyan Tiramisu Kutusu',
    category: 'yan-urun',
    categoryName: 'Tatlılar & İçecekler',
    price: 99,
    shortDescription: 'Hakiki mascarpone kreması, espressoya batırılmış kedi dili bisküvileri ve saf kakao.',
    description: 'Makarna keyfini taçlandıran tatlı kapanış. Kutuda makarna konseptine özel kompakt kutusunda hazırlanan, günlük taze İtalyan mascarpone peyniri ve taze demlenmiş espresso aromalı otantik tiramisu.',
    ingredients: ['Mascarpone peyniri', 'Savoiardi kedi dili bisküvi', 'Espresso kahve', 'Kakao tozu', 'Pastörize yumurta ve şeker'],
    allergens: ['Gluten (Buğday)', 'Yumurta', 'Süt ve Süt Ürünleri'],
    portionGrams: 160,
    calories: 340,
    prepTimeMinutes: 1,
    spicyLevel: 0,
    isVegetarian: true,
    badge: 'Tatlı Kapanış',
    image: '/images/tiramisu.webp',
    sauceDetails: 'Mascarpone kreması ve kakao tozu.',
    pastaType: 'Tatlı',
    pairingRecommendation: 'Yemek sonrası sıcak bir kahve ile mükemmel tamamlayıcı.'
  },
  {
    id: 'km-09',
    slug: 'ev-yapimi-limonata',
    name: 'Taze Nane & Ev Yapımı Limonata',
    category: 'yan-urun',
    categoryName: 'Tatlılar & İçecekler',
    price: 59,
    shortDescription: 'Taze sıkılmış limon suyu, ezilmiş nane yaprakları ve pancar şekeriyle ferahlatıcı lezzet.',
    description: 'Makarnanın zengin kreması ve soslarını dengeleyen, sıfır katkı maddeli, taze limon kabuklarıyla ovularak demlenmiş soğuk ev yapımı limonata.',
    ingredients: ['Taze limon suyu ve kabuğu', 'Taze nane', 'Pancar şekeri', 'Filtrelenmiş su', 'Buz'],
    allergens: [],
    portionGrams: 330,
    calories: 120,
    prepTimeMinutes: 1,
    spicyLevel: 0,
    isVegetarian: true,
    badge: '100% Doğal 🍋',
    image: '/images/limonata.webp',
    sauceDetails: 'Soğuk taze içecek.',
    pastaType: 'İçecek',
    pairingRecommendation: 'Tüm kremalı ve acılı makarnaların yanına önerilir.'
  }
];

export function getMenuItemBySlug(slug: string): MenuItem | undefined {
  return menuItems.find(item => item.slug === slug);
}

export function getMenuItemsByCategory(category: string): MenuItem[] {
  if (category === 'tumu' || !category) return menuItems;
  return menuItems.filter(item => item.category === category);
}

export function getRelatedMenuItems(currentSlug: string, count: number = 3): MenuItem[] {
  return menuItems.filter(item => item.slug !== currentSlug && item.category !== 'yan-urun').slice(0, count);
}
