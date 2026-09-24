export interface Branch {
  id: string;
  slug: string;
  name: string;
  district: string;
  city: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  workingHours: {
    weekdays: string;
    weekend: string;
    note?: string;
  };
  features: {
    takeaway: boolean;
    dineIn: boolean;
    delivery: boolean;
    wifi: boolean;
    contactlessPayment: boolean;
    outdoorSeating: boolean;
  };
  image: string;
  highlights: string[];
  directionsGuide: string;
  nearbySpots: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const branches: Branch[] = [
  {
    id: 'sube-atakum',
    slug: 'atakum',
    name: 'Atakum Şubesi',
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
    features: {
      takeaway: true,
      dineIn: true,
      delivery: true,
      wifi: true,
      contactlessPayment: true,
      outdoorSeating: true
    },
    image: '/images/kutuda-makarna-sube-konsepti.jpg',
    highlights: [
      'Deniz kenarında yürüyüş yaparken sıcak kutu lezzeti',
      'Açık hava ahşap teras oturma alanı',
      '3 dakikada hızlı teslimat (Gel-Al)',
      'Marina tramvay durağına 3 dakika yürüme mesafesinde'
    ],
    directionsGuide: 'Atakum Sahil Yolu üzerinde Marina kavşağından hemen sonra sol kanda yer almaktadır. Tramvayla gelecek misafirlerimiz Türk-İş veya Deniz Evleri durağında inip sahile doğru 4 dakika yürüyerek şubemize kolayca ulaşabilirler. Araç ile gelenler için sahil otopark cebi mevcuttur.',
    nearbySpots: [
      'Atakum Marina',
      'Atakum Sahil Yürüyüş Parkuru',
      'CityMall AVM (Araçla 5 dk)',
      'Ondokuz Mayıs Üniversitesi Kurupelit Kampüsü (Araçla 10 dk)'
    ],
    faqs: [
      {
        question: 'Atakum şubesinde masada oturup yiyebilir miyiz?',
        answer: 'Evet! Atakum şubemizde hem açık hava ısıtmalı teras alanı hem de şık iç bistro bar alanımız bulunmaktadır. Dilerseniz kutunuzu alıp sahil çimlerinde veya yürüyüş yaparken de tüketebilirsiniz.'
      },
      {
        question: 'Atakum şubesinde paket servis (kurye) var mı?',
        answer: 'Evet, Yemeksepeti, Trendyol Yemek ve GetirYemek üzerinden Atakum genelinde Körfez\'den Yeşilyurt\'a kadar hızlı sıcak kurye teslimatımız mevcuttur.'
      },
      {
        question: 'Gece kaça kadar açıksınız?',
        answer: 'Hafta içi 00:00, cuma ve cumartesi geceleri ise 01:00\'e kadar sıcacık taze makarna servisimiz devam etmektedir.'
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
    features: {
      takeaway: true,
      dineIn: true,
      delivery: true,
      wifi: true,
      contactlessPayment: true,
      outdoorSeating: true
    },
    image: '/images/kutuda-makarna-sube-konsepti.jpg',
    highlights: [
      'Samsun\'un kalbi Çiftlik Caddesi\'nde merkezi konum',
      'Hızlı gel-al servisi ile beklemeden teslimat',
      'Modern kiosk & oturma konsepti',
      'Öğrencilere ve çalışanlara özel avantajlı menüler'
    ],
    directionsGuide: 'İlkadım Çiftlik (İstiklal) Caddesi üzerinde, Öğretmenevi ile Uğur Mumcu Parkı arasında merkezi noktadadır. Cumhuriyet Meydanı tramvay durağından yürüyerek yalnızca 6 dakikada ulaşabilirsiniz.',
    nearbySpots: [
      'Cumhuriyet Meydanı & Tramvay Durağı',
      'Gazi Müzesi',
      'Bulvar AVM',
      'Samsun Büyükşehir Belediyesi Sanat Merkezi'
    ],
    faqs: [
      {
        question: 'Öğle saatlerinde yoğunlukta ne kadar sürede hazır olur?',
        answer: 'Özel hızlı haşlama ve tavada taze sos bağlama sistemimiz sayesinde siparişiniz en yoğun saatlerde bile ortalama 3-4 dakika içerisinde sıcacık kutusunda teslim edilir.'
      },
      {
        question: 'Telefonla arayıp hazır olunca gelip alabilir miyim?',
        answer: 'Kesinlikle! 0 (362) 500 01 02 numaramızı arayarak önceden siparişinizi verebilir, dükkana geldiğinizde hiç sıra beklemeden kutunuzu teslim alabilirsiniz.'
      }
    ]
  },
  {
    id: 'sube-tekkekoy',
    slug: 'tekkekoy',
    name: 'Tekkeköy Şubesi',
    district: 'Tekkeköy',
    city: 'Samsun',
    address: '19 Mayıs Sanayi Sitesi Girişi, Şabanoğlu Mahallesi Atatürk Bulvarı No: 45/C, Tekkeköy / Samsun',
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
    features: {
      takeaway: true,
      dineIn: true,
      delivery: true,
      wifi: true,
      contactlessPayment: true,
      outdoorSeating: false
    },
    image: '/images/kutuda-makarna-sube-konsepti.jpg',
    highlights: [
      'Geniş araç otoparkı ve hızlı arabaya teslim seçeneği',
      'Ofisler ve sanayi personeli için doyurucu porsiyonlar',
      'Toplu kutu siparişlerinde özel sıcak termal taşıma',
      'Tekkeköy tramvay hattı sanayi durağı yakınında'
    ],
    directionsGuide: 'Atatürk Bulvarı üzerinde, Tekkeköy Fuar ve Kongre Merkezi istikametinde sanayi kavşağı girişindedir. Araçla gelenler için dükkan önünde ücretsiz geniş otopark mevcuttur.',
    nearbySpots: [
      'TÜYAP Samsun Fuar ve Kongre Merkezi',
      'Tekkeköy Yaşardoğu Spor Salonu',
      'Samsun Yeni 19 Mayıs Stadyumu',
      'Organize Sanayi Bölgesi'
    ],
    faqs: [
      {
        question: 'İş yerleri için toplu sipariş alıyor musunuz?',
        answer: 'Evet, şirket toplantıları, vardiya yemekleri ve etkinlikler için 10 ile 150 kutu arası toplu siparişlerinizi özel ısı korumalı termal kutularla tam saatinde adresinize ulaştırıyoruz.'
      },
      {
        question: 'Arabamdan inmeden sipariş alabilir miyim?',
        answer: 'Tekkeköy şubemizde araç park alanımıza yanaşıp telefonla bildirdiğinizde personelimiz kutunuzu doğrudan aracınıza getirebilmektedir.'
      }
    ]
  }
];

export function getBranchBySlug(slug: string): Branch | undefined {
  return branches.find(b => b.slug === slug);
}
