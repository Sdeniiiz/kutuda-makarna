import type { BranchAggregate } from '../types/branch';

export type Branch = BranchAggregate;

export const branches: BranchAggregate[] = [
  // --- SAMSUN BRANCHES (Flagship Active Hubs) ---
  {
    id: 'sube-atakum',
    slug: 'atakum',
    name: 'Atakum Sahil Şubesi',
    district: 'Atakum',
    city: 'Samsun',
    address: 'Cumhuriyet Mahallesi, Adnan Menderes Bulvarı No: 142/A (Sahil Yolu, Marina Karşısı), Atakum / Samsun',
    phone: '+903625000101',
    phoneDisplay: '0 (362) 500 01 01',
    coordinates: {
      lat: 41.3324,
      lng: 36.2718
    },
    googleMapsUrl: 'https://maps.google.com/?q=Atakum+Samsun+Kutuda+Makarna',
    workingHours: {
      weekdays: '11:00 - 00:00',
      weekend: '11:00 - 01:00',
      note: 'Gece acıkanlar için hafta sonu 01:00\'e kadar sıcak servis.'
    },
    image: '/images/kutuda-makarna-sube-konsepti.jpg',
    highlights: [
      'Deniz kenarında yürüyüş yaparken sıcak kutu lezzeti',
      'Açık hava ahşap teras oturma alanı',
      '3 dakikada hızlı teslimat (Gel-Al)',
      'Marina tramvay durağına 3 dakika yürüme mesafesinde'
    ],
    directionsGuide: 'Atakum Sahil Yolu üzerinde Marina kavşağından hemen sonra sol kanda yer almaktadır. Tramvayla gelecek misafirlerimiz Türk-İş veya Deniz Evleri durağında inip sahile doğru 4 dakika yürüyerek şubemize kolayca ulaşabilirler.',
    nearbySpots: [
      'Atakum Marina',
      'Atakum Sahil Yürüyüş Parkuru',
      'CityMall AVM (Araçla 5 dk)',
      'Ondokuz Mayıs Üniversitesi Kurupelit Kampüsü (Araçla 10 dk)'
    ],
    entity: {
      id: 'sube-atakum',
      slug: 'atakum',
      name: 'Atakum Sahil Şubesi',
      branchCode: 'SAMSUN-ATK-01',
      status: 'active'
    },
    info: {
      tagline: 'Sahil Kıyısında Sıcak İtalyan Sokak Lezzeti',
      conceptType: 'Bistro & Kiosk',
      description: 'Atakum sahil şeridinde deniz havası eşliğinde taze al dente makarna ve sıcacık soslar.'
    },
    branding: {
      heroImage: {
        desktop: '/images/kutuda-makarna-sube-konsepti.jpg',
        alt: 'Kutuda Makarna Atakum Sahil Şubesi Görünümü'
      }
    },
    hero: {
      headline: 'ATAKUM SAHİLİNDE SICAK KUTU LEZZETİ.',
      subline: 'Yürüyüş yaparken, marinada dinlenirken ya da eve dönerken; 3 dakikada taze makarna.',
      badgeText: '🌊 SAHİL & MARİNA KONSEPTİ',
      primaryCtaLabel: 'YOL TARİFİ AL',
      primaryCtaUrl: 'https://maps.google.com/?q=Atakum+Samsun+Kutuda+Makarna'
    },
    contact: {
      phone: '+903625000101',
      phoneDisplay: '0 (362) 500 01 01',
      whatsapp: '+905445000101',
      email: 'atakum@kutudamakarna.com',
      supportHoursNote: 'Haftanın her günü 11:00 - 01:00 arası canlı telefon desteği.'
    },
    hours: {
      weekdays: '11:00 - 00:00',
      weekend: '11:00 - 01:00',
      note: 'Gece acıkanlar için hafta sonu 01:00\'e kadar sıcak servis.'
    },
    location: {
      address: 'Cumhuriyet Mahallesi, Adnan Menderes Bulvarı No: 142/A (Sahil Yolu, Marina Karşısı), Atakum / Samsun',
      district: 'Atakum',
      city: 'Samsun',
      coordinates: { lat: 41.3324, lng: 36.2718 },
      googleMapsUrl: 'https://maps.google.com/?q=Atakum+Samsun+Kutuda+Makarna',
      directionsGuide: 'Atakum Sahil Yolu üzerinde Marina kavşağından hemen sonra sol kanda yer almaktadır.',
      nearbySpots: ['Atakum Marina', 'Atakum Sahil Yürüyüş Parkuru'],
      parkingInfo: 'Sahil boyu ücretsiz açık otopark cepleri mevcuttur.'
    },
    social: {
      instagram: 'https://instagram.com/kutudamakarna.atakum',
      googleMyBusinessUrl: 'https://maps.google.com/?q=Atakum+Samsun+Kutuda+Makarna'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: [
        'kremali-mantarli-makarna',
        'bolonez-makarna',
        'acili-arrabbiata-makarna',
        'pesto-makarna',
        'dort-peynirli-makarna',
        'kremali-tavuklu-makarna',
        'truflu-mantar-spesiyal',
        'firinlanmis-sarımsakli-bruschetta',
        'parmesanli-sezar-salata',
        'tiramisu-kutusu',
        'ev-yapimi-limonata',
        'ikili-gurme-kutu-kampanyasi'
      ],
      outOfStockSlugs: []
    },
    campaigns: [
      {
        id: 'cmp-atakum-ikili',
        title: '2 Makarna + 2 İçecek Sahil Paketi',
        description: 'Atakum sahil yürüyüşünde dilediğin 2 kutu makarna ve 2 serinletici içecek avantajlı fiyata!',
        badge: '🌊 SAHİL MENÜSÜ',
        discountPercent: 20
      }
    ],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 8,
      estimatedDeliveryMinutes: 30,
      minDeliveryAmount: 180,
      deliveryFee: 25,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Kutuda Makarna Atakum | Sahil Şubesi Menü, Adres & Sipariş',
      metaDescription: 'Kutuda Makarna Atakum Samsun şubesi: Sahil yolunda al dente taze makarna, hızlı gel-al ve sıcak kurye servisi.',
      canonicalUrl: 'https://kutudamakarna.com/subeler/atakum',
      keywords: ['kutuda makarna atakum', 'atakum makarna', 'atakum paket servis']
    },
    theme: {
      primaryAccent: '#FFB800'
    },
    faqs: [
      {
        question: 'Atakum şubesinde masada oturup yiyebilir miyiz?',
        answer: 'Evet! Atakum şubemizde hem açık hava ısıtmalı teras alanı hem de şık iç bistro bar alanımız bulunmaktadır.'
      }
    ]
  },

  {
    id: 'sube-ilkadim',
    slug: 'ilkadim',
    name: 'İlkadım Şubesi (Çiftlik)',
    district: 'İlkadım',
    city: 'Samsun',
    address: 'İstiklal Caddesi (Çiftlik Caddesi) No: 88/B, İlkadım / Samsun',
    phone: '+903625000102',
    phoneDisplay: '0 (362) 500 01 02',
    coordinates: {
      lat: 41.2867,
      lng: 36.3312
    },
    googleMapsUrl: 'https://maps.google.com/?q=Ilkadim+Ciftlik+Samsun+Kutuda+Makarna',
    workingHours: {
      weekdays: '10:30 - 23:30',
      weekend: '10:30 - 00:00',
      note: 'Çiftlik Caddesi alışveriş saatlerinde kesintisiz hızlı servis.'
    },
    image: '/images/kutuda-makarna-sube-konsepti.jpg',
    highlights: [
      'Samsun\'un kalbi Çiftlik Caddesi\'nde merkezi konum',
      'Hızlı gel-al servisi ile beklemeden teslimat',
      'Modern kiosk & oturma konsepti',
      'Öğrencilere ve çalışanlara özel avantajlı menüler'
    ],
    directionsGuide: 'İlkadım Çiftlik (İstiklal) Caddesi üzerinde, Öğretmenevi ile Uğur Mumcu Parkı arasında merkezi noktadadır.',
    nearbySpots: ['Cumhuriyet Meydanı', 'Gazi Müzesi', 'Bulvar AVM'],
    entity: {
      id: 'sube-ilkadim',
      slug: 'ilkadim',
      name: 'İlkadım Şubesi (Çiftlik)',
      branchCode: 'SAMSUN-ILK-02',
      status: 'active'
    },
    info: {
      tagline: 'Şehrin Kalbinde Hızlı & Sıcak Kutu Keyfi',
      conceptType: 'Express Kiosk',
      description: 'Çiftlik Caddesi alışveriş temposunda sıra beklemeden 3 dakikada kutuda gurme makarna.'
    },
    branding: {
      heroImage: {
        desktop: '/images/kutuda-makarna-sube-konsepti.jpg',
        alt: 'Kutuda Makarna Çiftlik İlkadım Şubesi'
      }
    },
    hero: {
      headline: 'ÇİFTLİK CADDESİ\'NDE BEKLEMEDEN SICAK MAKARNA.',
      subline: 'Öğle arasında ya da alışveriş molasında; taze soslarla 3 dakikada elinde.',
      badgeText: '🛍️ ÇİFTLİK CADDESİ EXPRESS',
      primaryCtaLabel: 'GEL-AL SİPARİŞ VER',
      primaryCtaUrl: 'tel:+903625000102'
    },
    contact: {
      phone: '+903625000102',
      phoneDisplay: '0 (362) 500 01 02',
      whatsapp: '+905445000102',
      email: 'ilkadim@kutudamakarna.com',
      supportHoursNote: 'Haftanın her günü 10:30 - 23:30 arası kesintisiz hizmet.'
    },
    hours: {
      weekdays: '10:30 - 23:30',
      weekend: '10:30 - 00:00',
      note: 'Çiftlik Caddesi alışveriş saatlerinde kesintisiz hızlı servis.'
    },
    location: {
      address: 'İstiklal Caddesi (Çiftlik Caddesi) No: 88/B, İlkadım / Samsun',
      district: 'İlkadım',
      city: 'Samsun',
      coordinates: { lat: 41.2867, lng: 36.3312 },
      googleMapsUrl: 'https://maps.google.com/?q=Ilkadim+Ciftlik+Samsun+Kutuda+Makarna',
      directionsGuide: 'İlkadım Çiftlik (İstiklal) Caddesi üzerinde merkezi noktadadır.',
      nearbySpots: ['Cumhuriyet Meydanı & Tramvay Durağı', 'Bulvar AVM'],
      parkingInfo: 'Cadde yaya yoludur. Araçla gelecekler için Bulvar AVM otoparkı 3 dk mesafededir.'
    },
    social: {
      instagram: 'https://instagram.com/kutudamakarna.ciftlik',
      googleMyBusinessUrl: 'https://maps.google.com/?q=Ilkadim+Ciftlik+Samsun+Kutuda+Makarna'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: [
        'kremali-mantarli-makarna',
        'bolonez-makarna',
        'acili-arrabbiata-makarna',
        'pesto-makarna',
        'dort-peynirli-makarna',
        'kremali-tavuklu-makarna',
        'firinlanmis-sarımsakli-bruschetta',
        'parmesanli-sezar-salata',
        'tiramisu-kutusu',
        'ev-yapimi-limonata'
      ],
      outOfStockSlugs: []
    },
    campaigns: [
      {
        id: 'cmp-ilkadim-ogrenci',
        title: 'Öğrenci Menüsü',
        description: 'İlkadım Çiftlik şubemizde tüm öğrencilere özel indirimli kutu makarna ve ayran menüsü.',
        badge: '🎓 ÖĞRENCİ MENÜSÜ',
        discountPercent: 15
      }
    ],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 5,
      estimatedDeliveryMinutes: 25,
      minDeliveryAmount: 160,
      deliveryFee: 20,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Kutuda Makarna İlkadım Çiftlik | Adres, Menü & Sipariş',
      metaDescription: 'Kutuda Makarna Samsun İlkadım Çiftlik şubesi: Çiftlik Caddesi üzerinde taze sıcak makarna ve paket servis.',
      canonicalUrl: 'https://kutudamakarna.com/subeler/ilkadim',
      keywords: ['kutuda makarna ilkadım', 'çiftlik caddesi makarna']
    },
    theme: {
      primaryAccent: '#FFB800'
    },
    faqs: []
  },

  {
    id: 'sube-tekkekoy',
    slug: 'tekkekoy',
    name: 'Tekkeköy Şubesi',
    district: 'Tekkeköy',
    city: 'Samsun',
    address: '19 Mayıs Sanayi Sitesi Girişi, Atatürk Bulvarı No: 45/C, Tekkeköy / Samsun',
    phone: '+903625000103',
    phoneDisplay: '0 (362) 500 01 03',
    coordinates: {
      lat: 41.2589,
      lng: 36.4276
    },
    googleMapsUrl: 'https://maps.google.com/?q=Tekkekoy+Samsun+Kutuda+Makarna',
    workingHours: {
      weekdays: '10:00 - 22:00',
      weekend: '11:00 - 22:00',
      note: 'Sanayi ve fuar bölgesine kurumsal toplu sipariş & paket servis.'
    },
    image: '/images/kutuda-makarna-sube-konsepti.jpg',
    highlights: [
      'Geniş araç otoparkı ve hızlı arabaya teslim seçeneği',
      'Ofisler ve sanayi personeli için doyurucu porsiyonlar',
      'Toplu kutu siparişlerinde özel sıcak termal taşıma'
    ],
    directionsGuide: 'Atatürk Bulvarı üzerinde, Tekkeköy Fuar Merkezi kavşağı girişindedir.',
    nearbySpots: ['TÜYAP Fuar Merkezi', 'Tekkeköy Yaşardoğu Spor Salonu'],
    entity: {
      id: 'sube-tekkekoy',
      slug: 'tekkekoy',
      name: 'Tekkeköy Şubesi',
      branchCode: 'SAMSUN-TEK-03',
      status: 'active'
    },
    info: {
      tagline: 'Fuar & Sanayi Bölgesinde Hızlı, Doyurucu Kutu',
      conceptType: 'Drive-Thru & Kiosk',
      description: 'Sanayi bölgesi ve fuar ziyaretçileri için pratik arabaya teslim ve kurumsal sipariş.'
    },
    branding: {
      heroImage: {
        desktop: '/images/kutuda-makarna-sube-konsepti.jpg',
        alt: 'Kutuda Makarna Tekkeköy Şubesi'
      }
    },
    hero: {
      headline: 'SANAYİ VE FUAR BÖLGESİNE SICAK TOPLU TESLİMAT.',
      subline: 'Ofislere ve fabrikalara özel termal kutularla zamanında teslim sıcak taze makarna.',
      badgeText: '🏭 KURUMSAL & TOPLU SİPARİŞ',
      primaryCtaLabel: 'TOPLU SİPARİŞ HATTI',
      primaryCtaUrl: 'tel:+903625000103'
    },
    contact: {
      phone: '+903625000103',
      phoneDisplay: '0 (362) 500 01 03',
      whatsapp: '+905445000103',
      email: 'tekkekoy@kutudamakarna.com',
      supportHoursNote: 'Haftanın her günü 10:00 - 22:00 arası açık.'
    },
    hours: {
      weekdays: '10:00 - 22:00',
      weekend: '11:00 - 22:00',
      note: 'Sanayi ve fuar bölgesine kurumsal toplu sipariş & paket servis.'
    },
    location: {
      address: '19 Mayıs Sanayi Sitesi Girişi, Atatürk Bulvarı No: 45/C, Tekkeköy / Samsun',
      district: 'Tekkeköy',
      city: 'Samsun',
      coordinates: { lat: 41.2589, lng: 36.4276 },
      googleMapsUrl: 'https://maps.google.com/?q=Tekkekoy+Samsun+Kutuda+Makarna',
      directionsGuide: 'Atatürk Bulvarı üzerinde sanayi kavşağı girişindedir.',
      nearbySpots: ['TÜYAP Samsun Fuar ve Kongre Merkezi', 'Organize Sanayi Bölgesi'],
      parkingInfo: 'Şube önünde ücretsiz müşteri otoparkı mevcuttur.'
    },
    social: {
      instagram: 'https://instagram.com/kutudamakarna.tekkekoy',
      googleMyBusinessUrl: 'https://maps.google.com/?q=Tekkekoy+Samsun+Kutuda+Makarna'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: [
        'kremali-mantarli-makarna',
        'bolonez-makarna',
        'acili-arrabbiata-makarna',
        'pesto-makarna',
        'dort-peynirli-makarna',
        'kremali-tavuklu-makarna',
        'ev-yapimi-limonata'
      ],
      outOfStockSlugs: []
    },
    campaigns: [],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 7,
      estimatedDeliveryMinutes: 35,
      minDeliveryAmount: 200,
      deliveryFee: 25,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Kutuda Makarna Tekkeköy | Sanayi & Fuar Şubesi Sipariş',
      metaDescription: 'Kutuda Makarna Tekkeköy Samsun şubesi: Hızlı arabaya servis ve toplu paket servis.',
      canonicalUrl: 'https://kutudamakarna.com/subeler/tekkekoy',
      keywords: ['kutuda makarna tekkeköy']
    },
    theme: {
      primaryAccent: '#FFB800'
    },
    faqs: []
  },

  // --- İSTANBUL BRANCHES ---
  {
    id: 'sube-kadikoy',
    slug: 'kadikoy-moda',
    name: 'Kadıköy Moda Şubesi',
    district: 'Kadıköy',
    city: 'İstanbul',
    address: 'Moda Caddesi No: 74/A (Tarihi Moda Çay Bahçesi Yolu Üzeri), Kadıköy / İstanbul',
    phone: '+902165000201',
    phoneDisplay: '0 (216) 500 02 01',
    coordinates: {
      lat: 40.9855,
      lng: 29.0275
    },
    googleMapsUrl: 'https://maps.google.com/?q=Kadikoy+Moda+Kutuda+Makarna',
    workingHours: {
      weekdays: '11:00 - 01:00',
      weekend: '11:00 - 02:00',
      note: 'Moda sahilinde gece yürüyüşü yapanlara 02:00\'ye kadar taze sıcak servis.'
    },
    image: '/images/restoran-atmosfer.jpg',
    highlights: [
      'Moda Caddesi üzerinde genç ve dinamik bistro atmosferi',
      'Sahile kutunu alıp inme imkanı',
      '3 dakikada hızlı teslimat'
    ],
    directionsGuide: 'Kadıköy Boğa heykelinden Moda caddesine doğru 6 dakika yürüdüğünüzde sağ kolda yer alır. Moda tramvayı durağına 50 metre mesafededir.',
    nearbySpots: ['Moda Sahil Parkı', 'Süreyya Operası', 'Tarihi Moda İskelesi'],
    entity: {
      id: 'sube-kadikoy',
      slug: 'kadikoy-moda',
      name: 'Kadıköy Moda Şubesi',
      branchCode: 'IST-KAD-01',
      status: 'active'
    },
    info: {
      tagline: 'Anadolu Yakasının En Popüler Sokak Makarnası',
      conceptType: 'Bistro & Kiosk',
      description: 'Moda\'nın enerjisine uygun taze hamur, yoğun soslar ve genç sosyalleşme noktası.'
    },
    branding: {
      heroImage: {
        desktop: '/images/restoran-atmosfer.jpg',
        alt: 'Kutuda Makarna Kadıköy Moda Şubesi'
      }
    },
    hero: {
      headline: 'MODA CADDESİ\'NDE SICAK İTALYAN RÜZGARI.',
      subline: 'Sahil yürüyüşü öncesi kutunu kap, Moda çimlerinde al dente lezzetin tadını çıkar.',
      badgeText: '🍝 MODA SOKAK LEZZETİ',
      primaryCtaLabel: 'MENÜYÜ İNCELE',
      primaryCtaUrl: '/menu'
    },
    contact: {
      phone: '+902165000201',
      phoneDisplay: '0 (216) 500 02 01',
      whatsapp: '+905445000201',
      email: 'kadikoy@kutudamakarna.com'
    },
    hours: {
      weekdays: '11:00 - 01:00',
      weekend: '11:00 - 02:00',
      note: 'Gece servisimiz mevcuttur.'
    },
    location: {
      address: 'Moda Caddesi No: 74/A, Kadıköy / İstanbul',
      district: 'Kadıköy',
      city: 'İstanbul',
      coordinates: { lat: 40.9855, lng: 29.0275 },
      googleMapsUrl: 'https://maps.google.com/?q=Kadikoy+Moda+Kutuda+Makarna',
      directionsGuide: 'Moda Caddesi üzerinde Süreyya Operası\'nı geçtikten sonra sağ kolda.',
      nearbySpots: ['Moda Sahili', 'Süreyya Operası']
    },
    social: {
      instagram: 'https://instagram.com/kutudamakarna.kadikoy'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: [
        'kremali-mantarli-makarna',
        'bolonez-makarna',
        'acili-arrabbiata-makarna',
        'pesto-makarna',
        'dort-peynirli-makarna',
        'kremali-tavuklu-makarna',
        'truflu-mantar-spesiyal',
        'firinlanmis-sarımsakli-bruschetta',
        'parmesanli-sezar-salata',
        'tiramisu-kutusu',
        'ev-yapimi-limonata',
        'ikili-gurme-kutu-kampanyasi'
      ],
      outOfStockSlugs: []
    },
    campaigns: [],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 8,
      estimatedDeliveryMinutes: 28,
      minDeliveryAmount: 200,
      deliveryFee: 30,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Kutuda Makarna Kadıköy Moda | İstanbul Menü & Sipariş',
      metaDescription: 'Kutuda Makarna Kadıköy Moda şubesi: Taze al dente makarna ve hızlı teslimat.',
      canonicalUrl: 'https://kutudamakarna.com/subeler/kadikoy-moda',
      keywords: ['kutuda makarna kadıköy', 'moda makarna sipariş']
    },
    theme: {
      primaryAccent: '#FFB800'
    },
    faqs: []
  },

  // --- ANKARA BRANCH ---
  {
    id: 'sube-ankara-tunali',
    slug: 'ankara-tunali',
    name: 'Tunalı Hilmi Şubesi',
    district: 'Çankaya',
    city: 'Ankara',
    address: 'Tunalı Hilmi Caddesi No: 102/C, Çankaya / Ankara',
    phone: '+903125000301',
    phoneDisplay: '0 (312) 500 03 01',
    coordinates: {
      lat: 39.9056,
      lng: 32.8601
    },
    googleMapsUrl: 'https://maps.google.com/?q=Tunali+Hilmi+Ankara+Kutuda+Makarna',
    workingHours: {
      weekdays: '11:00 - 00:00',
      weekend: '11:00 - 01:00',
      note: 'Kuğulu Park yakınında sıcak ve hızlı İtalyan lezzeti.'
    },
    image: '/images/restoran-ic-mekan.jpg',
    highlights: [
      'Kuğulu Park\'a 2 dakika yürüme mesafesinde',
      'Öğrencilere ve iş dünyasına özel hızlı servis',
      'Modern şık oturma alanı'
    ],
    directionsGuide: 'Tunalı Hilmi Caddesi üzerinde Kuğulu Park istikametinde sol koldadır.',
    nearbySpots: ['Kuğulu Park', 'Seğmenler Parkı', 'Karum AVM'],
    entity: {
      id: 'sube-ankara-tunali',
      slug: 'ankara-tunali',
      name: 'Tunalı Hilmi Şubesi',
      branchCode: 'ANK-TUN-01',
      status: 'active'
    },
    info: {
      tagline: 'Başkentin Kalbinde Gurme Makarna',
      conceptType: 'Bistro & Kiosk',
      description: 'Tunalı\'nın canlı ritminde 3 dakikada tavadan kutuya sıcacık makarna deneyimi.'
    },
    branding: {
      heroImage: {
        desktop: '/images/restoran-ic-mekan.jpg',
        alt: 'Kutuda Makarna Ankara Tunalı Hilmi Şubesi'
      }
    },
    hero: {
      headline: 'ANKARA TUNALI\'DA SICAK MAKARNA BULUŞMASI.',
      subline: 'Kuğulu Park molalarında ya da mesai çıkışında; lezzet kutuda hazır.',
      badgeText: '🏛️ ANKARA TUNALI BİSTRO',
      primaryCtaLabel: 'YOL TARİFİ AL',
      primaryCtaUrl: 'https://maps.google.com/?q=Tunali+Hilmi+Ankara+Kutuda+Makarna'
    },
    contact: {
      phone: '+903125000301',
      phoneDisplay: '0 (312) 500 03 01',
      whatsapp: '+905445000301',
      email: 'ankara@kutudamakarna.com'
    },
    hours: {
      weekdays: '11:00 - 00:00',
      weekend: '11:00 - 01:00',
      note: 'Haftanın 7 günü açık.'
    },
    location: {
      address: 'Tunalı Hilmi Caddesi No: 102/C, Çankaya / Ankara',
      district: 'Çankaya',
      city: 'Ankara',
      coordinates: { lat: 39.9056, lng: 32.8601 },
      googleMapsUrl: 'https://maps.google.com/?q=Tunali+Hilmi+Ankara+Kutuda+Makarna',
      directionsGuide: 'Tunalı Hilmi Caddesi üzerinde.',
      nearbySpots: ['Kuğulu Park', 'Seğmenler Parkı']
    },
    social: {
      instagram: 'https://instagram.com/kutudamakarna.ankara'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: [
        'kremali-mantarli-makarna',
        'bolonez-makarna',
        'acili-arrabbiata-makarna',
        'pesto-makarna',
        'dort-peynirli-makarna',
        'kremali-tavuklu-makarna',
        'truflu-mantar-spesiyal',
        'firinlanmis-sarımsakli-bruschetta',
        'parmesanli-sezar-salata',
        'tiramisu-kutusu',
        'ev-yapimi-limonata'
      ],
      outOfStockSlugs: []
    },
    campaigns: [],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 8,
      estimatedDeliveryMinutes: 25,
      minDeliveryAmount: 180,
      deliveryFee: 25,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Kutuda Makarna Ankara Tunalı | Çankaya Menü & Sipariş',
      metaDescription: 'Kutuda Makarna Tunalı Hilmi Ankara şubesi: Taze al dente makarna ve hızlı paket servis.',
      canonicalUrl: 'https://kutudamakarna.com/subeler/ankara-tunali',
      keywords: ['kutuda makarna ankara', 'tunalı hilmi makarna']
    },
    theme: {
      primaryAccent: '#FFB800'
    },
    faqs: []
  },

  // --- İZMİR BRANCH ---
  {
    id: 'sube-izmir-alsancak',
    slug: 'izmir-alsancak',
    name: 'İzmir Alsancak Şubesi',
    district: 'Konak',
    city: 'İzmir',
    address: 'Kıbrıs Şehitleri Caddesi No: 58/B, Alsancak / İzmir',
    phone: '+902325000401',
    phoneDisplay: '0 (232) 500 04 01',
    coordinates: {
      lat: 38.4382,
      lng: 27.1423
    },
    googleMapsUrl: 'https://maps.google.com/?q=Kibris+Sehitleri+Alsancak+Kutuda+Makarna',
    workingHours: {
      weekdays: '11:00 - 01:00',
      weekend: '11:00 - 02:00',
      note: 'Kordon boyunda çimlerde makarna keyfi için gel-al servisi.'
    },
    image: '/images/kutuda-makarna-sahil-deneyimi.jpg',
    highlights: [
      'Kordon çimlerine 3 dakika yürüme mesafesinde',
      'Taze fesleğenli pesto ve soğuk el yapımı içecekler',
      'Açık hava canlı sokak enerjisi'
    ],
    directionsGuide: 'Kıbrıs Şehitleri Caddesi üzerinde Gündoğdu Meydanı yönünde ilerlerken sol kolda.',
    nearbySpots: ['Gündoğdu Meydanı', 'Kordon Boyu', 'Alsancak Tren Garı'],
    entity: {
      id: 'sube-izmir-alsancak',
      slug: 'izmir-alsancak',
      name: 'İzmir Alsancak Şubesi',
      branchCode: 'IZM-ALS-01',
      status: 'active'
    },
    info: {
      tagline: 'Kordon Çimlerinde Taze Makarna Keyfi',
      conceptType: 'Bistro & Kiosk',
      description: 'Ege esintisiyle taze fesleğen ve zeytinyağlı enfes kutu makarnalar.'
    },
    branding: {
      heroImage: {
        desktop: '/images/kutuda-makarna-sahil-deneyimi.jpg',
        alt: 'Kutuda Makarna İzmir Alsancak Şubesi'
      }
    },
    hero: {
      headline: 'ALSANCAK KORDON\'DA GURME SOKAK MAKARNASI.',
      subline: 'Kıbrıs Şehitleri Caddesi\'nde kutunu al, Kordon çimlerinde gün batımına karşı lezzeti yaşa.',
      badgeText: '☀️ EGE & KORDON KONSEPTİ',
      primaryCtaLabel: 'GEL-AL SİPARİŞ',
      primaryCtaUrl: 'tel:+902325000401'
    },
    contact: {
      phone: '+902325000401',
      phoneDisplay: '0 (232) 500 04 01',
      whatsapp: '+905445000401',
      email: 'izmir@kutudamakarna.com'
    },
    hours: {
      weekdays: '11:00 - 01:00',
      weekend: '11:00 - 02:00',
      note: 'Hafta sonu 02:00\'ye kadar açık.'
    },
    location: {
      address: 'Kıbrıs Şehitleri Caddesi No: 58/B, Alsancak / İzmir',
      district: 'Konak',
      city: 'İzmir',
      coordinates: { lat: 38.4382, lng: 27.1423 },
      googleMapsUrl: 'https://maps.google.com/?q=Kibris+Sehitleri+Alsancak+Kutuda+Makarna',
      directionsGuide: 'Kıbrıs Şehitleri Caddesi üzerinde.',
      nearbySpots: ['Gündoğdu Meydanı', 'Kordon']
    },
    social: {
      instagram: 'https://instagram.com/kutudamakarna.izmir'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: [
        'kremali-mantarli-makarna',
        'bolonez-makarna',
        'acili-arrabbiata-makarna',
        'pesto-makarna',
        'dort-peynirli-makarna',
        'kremali-tavuklu-makarna',
        'truflu-mantar-spesiyal',
        'firinlanmis-sarımsakli-bruschetta',
        'parmesanli-sezar-salata',
        'tiramisu-kutusu',
        'ev-yapimi-limonata'
      ],
      outOfStockSlugs: []
    },
    campaigns: [],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 7,
      estimatedDeliveryMinutes: 25,
      minDeliveryAmount: 180,
      deliveryFee: 25,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Kutuda Makarna İzmir Alsancak | Kıbrıs Şehitleri Sipariş',
      metaDescription: 'Kutuda Makarna İzmir Alsancak şubesi: Kordon yakınında al dente sıcak kutu makarna.',
      canonicalUrl: 'https://kutudamakarna.com/subeler/izmir-alsancak',
      keywords: ['kutuda makarna izmir', 'alsancak makarna']
    },
    theme: {
      primaryAccent: '#FFB800'
    },
    faqs: []
  },

  // --- BURSA BRANCH ---
  {
    id: 'sube-bursa-fsm',
    slug: 'bursa-nilufer',
    name: 'Bursa Nilüfer (FSM) Şubesi',
    district: 'Nilüfer',
    city: 'Bursa',
    address: 'Fethiye Mahallesi, Fatih Sultan Mehmet Bulvarı No: 82/A, Nilüfer / Bursa',
    phone: '+902245000501',
    phoneDisplay: '0 (224) 500 05 01',
    coordinates: {
      lat: 40.2185,
      lng: 28.9834
    },
    googleMapsUrl: 'https://maps.google.com/?q=FSM+Bulvari+Nilufer+Bursa+Kutuda+Makarna',
    workingHours: {
      weekdays: '11:00 - 23:30',
      weekend: '11:00 - 00:30',
      note: 'FSM Bulvarı\'nda sıcak ve modern restoran deneyimi.'
    },
    image: '/images/kutuda-makarna-vapiano-craft.jpg',
    highlights: [
      'FSM Bulvarı\'nda açık teras ve kapalı salon',
      'Aileler ve arkadaş grupları için geniş masalar',
      '3 dakikada hızlı teslimat'
    ],
    directionsGuide: 'Fatih Sultan Mehmet Bulvarı üzerinde Nilüfer metro istasyonundan 5 dakika yürüyüş mesafesinde.',
    nearbySpots: ['FSM Bulvarı Yürüyüş Yolu', 'Sur Yapı Marka AVM', 'PodyumPark'],
    entity: {
      id: 'sube-bursa-fsm',
      slug: 'bursa-nilufer',
      name: 'Bursa Nilüfer (FSM) Şubesi',
      branchCode: 'BUR-NIL-01',
      status: 'active'
    },
    info: {
      tagline: 'FSM Bulvarı\'nda Taze Makarna ve Modern Atmosfer',
      conceptType: 'Bistro & Kiosk',
      description: 'Nilüfer\'in en seçkin bulvarında zengin peynir ve et soslarıyla taze İtalyan makarnası.'
    },
    branding: {
      heroImage: {
        desktop: '/images/kutuda-makarna-vapiano-craft.jpg',
        alt: 'Kutuda Makarna Bursa Nilüfer FSM Şubesi'
      }
    },
    hero: {
      headline: 'BURSA NİLÜFER FSM BULVARI\'NDA MAKARNA ZAMANI.',
      subline: 'Sevdiklerinle buluş, taze dökülen sosların ve sıcacık kutunun keyfini çıkar.',
      badgeText: '🍃 NİLÜFER BULVAR ŞUBESİ',
      primaryCtaLabel: 'YOL TARİFİ AL',
      primaryCtaUrl: 'https://maps.google.com/?q=FSM+Bulvari+Nilufer+Bursa+Kutuda+Makarna'
    },
    contact: {
      phone: '+902245000501',
      phoneDisplay: '0 (224) 500 05 01',
      whatsapp: '+905445000501',
      email: 'bursa@kutudamakarna.com'
    },
    hours: {
      weekdays: '11:00 - 23:30',
      weekend: '11:00 - 00:30',
      note: 'Haftanın her günü açık.'
    },
    location: {
      address: 'Fethiye Mah. FSM Bulvarı No: 82/A, Nilüfer / Bursa',
      district: 'Nilüfer',
      city: 'Bursa',
      coordinates: { lat: 40.2185, lng: 28.9834 },
      googleMapsUrl: 'https://maps.google.com/?q=FSM+Bulvari+Nilufer+Bursa+Kutuda+Makarna',
      directionsGuide: 'FSM Bulvarı üzerinde.',
      nearbySpots: ['FSM Bulvarı', 'PodyumPark']
    },
    social: {
      instagram: 'https://instagram.com/kutudamakarna.bursa'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: [
        'kremali-mantarli-makarna',
        'bolonez-makarna',
        'acili-arrabbiata-makarna',
        'pesto-makarna',
        'dort-peynirli-makarna',
        'kremali-tavuklu-makarna',
        'truflu-mantar-spesiyal',
        'firinlanmis-sarımsakli-bruschetta',
        'parmesanli-sezar-salata',
        'tiramisu-kutusu',
        'ev-yapimi-limonata'
      ],
      outOfStockSlugs: []
    },
    campaigns: [],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 8,
      estimatedDeliveryMinutes: 30,
      minDeliveryAmount: 180,
      deliveryFee: 25,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Kutuda Makarna Bursa Nilüfer FSM | Adres & Sipariş',
      metaDescription: 'Kutuda Makarna Bursa Nilüfer FSM şubesi: Taze sıcak makarna ve paket servis.',
      canonicalUrl: 'https://kutudamakarna.com/subeler/bursa-nilufer',
      keywords: ['kutuda makarna bursa', 'fsm bulvarı makarna']
    },
    theme: {
      primaryAccent: '#FFB800'
    },
    faqs: []
  },

  // --- ANTALYA BRANCH ---
  {
    id: 'sube-antalya-lara',
    slug: 'antalya-lara',
    name: 'Antalya Lara Şubesi',
    district: 'Muratpaşa',
    city: 'Antalya',
    address: 'Şirinyalı Mahallesi, İsmet Gökşen Caddesi No: 44/B (Falez Parkı Karşısı), Muratpaşa / Antalya',
    phone: '+902425000601',
    phoneDisplay: '0 (242) 500 06 01',
    coordinates: {
      lat: 36.8654,
      lng: 30.7321
    },
    googleMapsUrl: 'https://maps.google.com/?q=Ismet+Goksen+Lara+Antalya+Kutuda+Makarna',
    workingHours: {
      weekdays: '11:00 - 00:00',
      weekend: '11:00 - 01:00',
      note: 'Falezler kıyısında Akdeniz güneşiyle taze makarna keyfi.'
    },
    image: '/images/kutuda-makarna-sahil-deneyimi.jpg',
    highlights: [
      'Falez Parkı karşısında deniz havası',
      'Ferah açık oturma alanı ve ferahlatıcı ev yapımı limonata',
      'Hızlı paket servis ve gel-al'
    ],
    directionsGuide: 'İsmet Gökşen Caddesi üzerinde Falez Parkı girişinin tam karşısındadır.',
    nearbySpots: ['Falez Parkı & Yürüyüş Yolu', 'Terracity AVM (Araçla 4 dk)'],
    entity: {
      id: 'sube-antalya-lara',
      slug: 'antalya-lara',
      name: 'Antalya Lara Şubesi',
      branchCode: 'ANT-LAR-01',
      status: 'active'
    },
    info: {
      tagline: 'Akdeniz Kıyısında Sıcak İtalyan Kutusu',
      conceptType: 'Bistro & Kiosk',
      description: 'Lara falezlerinin hemen yanı başında taze makarna ve serinletici içecekler.'
    },
    branding: {
      heroImage: {
        desktop: '/images/kutuda-makarna-sahil-deneyimi.jpg',
        alt: 'Kutuda Makarna Antalya Lara Şubesi'
      }
    },
    hero: {
      headline: 'ANTALYA LARA\'DA DENİZ KIYISINDA MAKARNA KEYFİ.',
      subline: 'Falez parkında yürürken sıcacık kutunu al, Akdeniz maviliğinde lezzetin tadını çıkar.',
      badgeText: '🌴 AKDENİZ & LARA ŞUBESİ',
      primaryCtaLabel: 'YOL TARİFİ AL',
      primaryCtaUrl: 'https://maps.google.com/?q=Ismet+Goksen+Lara+Antalya+Kutuda+Makarna'
    },
    contact: {
      phone: '+902425000601',
      phoneDisplay: '0 (242) 500 06 01',
      whatsapp: '+905445000601',
      email: 'antalya@kutudamakarna.com'
    },
    hours: {
      weekdays: '11:00 - 00:00',
      weekend: '11:00 - 01:00',
      note: 'Haftanın her günü açık.'
    },
    location: {
      address: 'Şirinyalı Mah. İsmet Gökşen Cad. No: 44/B, Muratpaşa / Antalya',
      district: 'Muratpaşa',
      city: 'Antalya',
      coordinates: { lat: 36.8654, lng: 30.7321 },
      googleMapsUrl: 'https://maps.google.com/?q=Ismet+Goksen+Lara+Antalya+Kutuda+Makarna',
      directionsGuide: 'İsmet Gökşen Caddesi üzerinde Falez Parkı karşısı.',
      nearbySpots: ['Falez Parkı', 'Terracity AVM']
    },
    social: {
      instagram: 'https://instagram.com/kutudamakarna.antalya'
    },
    pricing: {
      currency: 'TRY',
      priceOverrides: {}
    },
    availability: {
      availableProductSlugs: [
        'kremali-mantarli-makarna',
        'bolonez-makarna',
        'acili-arrabbiata-makarna',
        'pesto-makarna',
        'dort-peynirli-makarna',
        'kremali-tavuklu-makarna',
        'truflu-mantar-spesiyal',
        'firinlanmis-sarımsakli-bruschetta',
        'parmesanli-sezar-salata',
        'tiramisu-kutusu',
        'ev-yapimi-limonata'
      ],
      outOfStockSlugs: []
    },
    campaigns: [],
    orderSettings: {
      onlineOrderingEnabled: true,
      pickupEnabled: true,
      deliveryEnabled: true,
      estimatedPickupMinutes: 8,
      estimatedDeliveryMinutes: 28,
      minDeliveryAmount: 180,
      deliveryFee: 25,
      externalDeliveryPartners: {
        yemeksepetiUrl: 'https://www.yemeksepeti.com',
        getirUrl: 'https://getir.com/yemek',
        trendyolUrl: 'https://www.trendyol.com/yemek'
      }
    },
    seo: {
      metaTitle: 'Kutuda Makarna Antalya Lara | Muratpaşa Sipariş',
      metaDescription: 'Kutuda Makarna Antalya Lara şubesi: Falezler karşısında taze sıcak makarna.',
      canonicalUrl: 'https://kutudamakarna.com/subeler/antalya-lara',
      keywords: ['kutuda makarna antalya', 'lara makarna sipariş']
    },
    theme: {
      primaryAccent: '#FFB800'
    },
    faqs: []
  }
];

export function getBranchBySlug(slug: string): BranchAggregate | undefined {
  return branches.find(b => b.slug === slug || b.entity.slug === slug);
}

export function getBranchesByCity(city: string): BranchAggregate[] {
  if (!city || city === 'all' || city === 'tumu') return branches;
  return branches.filter(b => b.city.toLowerCase() === city.toLowerCase() || b.location?.city.toLowerCase() === city.toLowerCase());
}

export function getAllCities(): string[] {
  const cities = new Set<string>();
  branches.forEach(b => cities.add(b.city));
  return Array.from(cities);
}
