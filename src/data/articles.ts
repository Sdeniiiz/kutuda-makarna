export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  readTime: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
  tags: string[];
  relatedProducts: string[];
}

export const articles: Article[] = [
  {
    slug: 'al-dente-nedir',
    title: 'Al Dente Makarna Nedir? Kusursuz Pişirme ve Kıvam Rehberi',
    metaTitle: 'Al Dente Makarna Nedir? | Kıvam ve Pişirme Sırları | Kutuda Makarna',
    metaDescription: 'Al dente nedir, makarna neden al dente pişirilmeli? İtalyan şeflerin dişe gelen makarna sırrı ve sindirime faydaları bu kapsamlı rehberde.',
    readTime: '4 dk okuma',
    date: '2026-03-15',
    author: 'Kutuda Makarna Şef Ekibi',
    category: 'Makarna Kültürü',
    excerpt: 'İtalyancada "dişe gelen" anlamına gelen al dente, makarnanın aşırı haşlanıp hamurlaşmasını önleyen ve sosla birleştiğinde lezzeti zirveye taşıyan gastronomi kuralıdır.',
    tags: ['al dente', 'makarna pişirme', 'taze makarna', 'makarna teknikleri'],
    relatedProducts: ['kremali-mantarli-makarna', 'bolonez-makarna', 'acili-arrabbiata-makarna'],
    content: `
      <h2>Al Dente Tam Olarak Ne Anlama Gelir?</h2>
      <p>İtalyanca kökenli bir gastronomi terimi olan <strong>"Al Dente"</strong>, kelime anlamıyla <em>"dişe gelen"</em> veya <em>"dişe dokunur"</em> anlamına gelir. Makarnanın tamamen yumuşayıp hamur kıvamına gelmeden, merkezinde mikroskobik beyaz bir nokta kalacak şekilde diri haşlanmasını ifade eder.</p>

      <h2>Neden Al Dente Pişirmeliyiz?</h2>
      <p>Pek çok insan makarnanın tamamen yumuşacık olması gerektiğini düşünür. Ancak profesyonel mutfaklarda makarnanın al dente kalması şu üç kritik sebebe dayanır:</p>
      <ul>
        <li><strong>Sos ile Bağ Kurma:</strong> Al dente pişmiş taze makarna, tavada sosla buluşturulduğunda sosun lezzetli suyunu ve yağını içine çeker. Fazla pişmiş bir makarna ise dışarıya fazla nişasta bırakıp lapa haline gelir.</li>
        <li><strong>Düşük Glisemik İndeks:</strong> Al dente pişirilen durum buğdayı makarnasında nişasta molekülleri daha yavaş parçalanır. Bu da kan şekerinin ani yükselmesini önler ve daha uzun süre tokluk hissi sağlar.</li>
        <li><strong>Kutuda Formunu Koruma:</strong> Kutuda Makarna felsefesinde ürün sıcak kutusunda taşınırken buharıyla demlenmeye devam eder. Başlangıçta al dente pişmeyen bir makarna, kutu açıldığında formunu kaybedebilir. Kutuda Makarna ustalığı işte tam bu hassas zamanlamada yatar.</li>
      </ul>

      <h2>Evde Al Dente Pişirirken Nelere Dikkat Edilmeli?</h2>
      <ol>
        <li><strong>Bol Su, Bol Tuz:</strong> Her 100 gram makarna için en az 1 litre su ve deniz tuzu kullanın. Su deniz suyu kadar tuzlu olmalıdır.</li>
        <li><strong>Asla Yağ Dökmeyin:</strong> Haşlama suyuna sıvı yağ dökmek yapılan en büyük hatadır. Yağ makarnanın yüzeyini kaplar ve sosun tutunmasını engeller.</li>
        <li><strong>Paket Süresinden 2 Dakika Erken Alın:</strong> Makarnanızı doğrudan sosa aktarıp son 1-2 dakikayı sos tavasında pişirerek sosla bütünleştirin.</li>
      </ol>
    `
  },
  {
    slug: 'makarna-cesitleri',
    title: 'Makarna Çeşitleri ve İdeal Sos Eşleşmeleri Rehberi',
    metaTitle: 'Makarna Çeşitleri ve Doğru Sos Eşleşmeleri | Kutuda Makarna',
    metaDescription: 'Penne, Fusilli, Tagliatelle ve Casarecce hangi soslarla uyumludur? Makarnanın şekline göre doğru sos seçimi rehberi.',
    readTime: '5 dk okuma',
    date: '2026-03-10',
    author: 'Kutuda Makarna Şef Ekibi',
    category: 'Gastronomi Rehberi',
    excerpt: 'Her makarna şekli tesadüfen tasarlanmamıştır. Çizgiler, kıvrımlar ve boru yapılar sosu hapsetmek için birer mühendislik harikasıdır.',
    tags: ['makarna çeşitleri', 'penne rigate', 'fusilli', 'makarna sosları'],
    relatedProducts: ['pesto-makarna', 'dort-peynirli-makarna', 'kremali-tavuklu-makarna'],
    content: `
      <h2>Makarna Şekillerinin Gizli Mühendisliği</h2>
      <p>İtalya'da 300'den fazla kayıtlı makarna şekli bulunmaktadır. Peki neden bu kadar çok çeşit var? Çünkü her sosun yoğunluğu, kıvamı ve tutunma karakteri farklı bir geometri gerektirir.</p>

      <h2>1. Penne Rigate (Çizgili Kalem Makarna)</h2>
      <p>Üzerindeki ince çizgiler (rigate) ve içi boş silindirik yapısı sayesinde akışkan ve yoğun sosları hem dış yüzeyinde hem de içinde hapseder. <strong>Kremalı Mantarlı</strong> ve <strong>Acılı Arrabbiata</strong> gibi kıvamlı soslar için kusursuz tercihtir.</p>

      <h2>2. Fusilli Bucati (Burgu Makarna)</h2>
      <p>Burgu makarnalar, kıymalı ve taneli sosların spiral kıvrımlara sıkışması için biçilmiş kaftandır. Geleneksel <strong>Bolonez</strong> sosunun küçük et parçaları ve domates taneleri fusilli kıvrımlarına tutunarak her lokmada eşit lezzet dağılımı sağlar.</p>

      <h2>3. Casarecce (Kıvrımlı Akdeniz Klasiği)</h2>
      <p>Sicilya kökenli casarecce, içe doğru kıvrılan parşömen kağıdını andırır. Bu kıvrım, taze ezilmiş <strong>Fesleğenli Pesto</strong> sosunun pürüzsüz yağını ve çam fıstığı dokusunu içine hapsetmek için dünyanın en iyi eşleşmesidir.</p>

      <h2>4. Uzun Makarnalar (Tagliatelle & Fettuccine)</h2>
      <p>Geniş şerit formundaki taze yumurtalı makarnalar, tereyağlı ve trüflü gurme emülsiyonları yüzeyine sararak çatalda akıcı ve ipeksi bir doku oluşturur.</p>
    `
  },
  {
    slug: 'makarna-soslari',
    title: 'Gerçek İtalyan Makarna Sosları: Kremalıdan Domatesliye Lezzet Sırları',
    metaTitle: 'Gerçek İtalyan Makarna Sosları & Hazırlanışı | Kutuda Makarna',
    metaDescription: 'Krema sosunun incelikleri, ağır ateşte demlenen domates sosları ve taze pesto sırları. Gerçek makarna sosları nasıl yapılır?',
    readTime: '6 dk okuma',
    date: '2026-03-01',
    author: 'Kutuda Makarna Mutfak Araştırmaları',
    category: 'Mutfak Sırları',
    excerpt: 'İyi bir makarnayı efsanevi kılan şey sosun makarnaya sadece eşlik etmesi değil, onunla kimyasal olarak emülsifiye olmasıdır.',
    tags: ['makarna sosları', 'krema sosu', 'bolonez sos', 'pesto sos'],
    relatedProducts: ['kremali-mantarli-makarna', 'bolonez-makarna', 'truflu-mantar-spesiyal'],
    content: `
      <h2>Mantar ve Kremanın Dengesi</h2>
      <p>Kremalı makarnada yapılan en yaygın hata, hazır yemek kremasını makarnanın üzerine çiğ dökmektir. Oysa gerçek bir mantar kreması sosunda önce mantarlar yüksek tavada karamelize edilir (Maillard reaksiyonu), ardından sarımsak ve taze krema eklenerek kısık ateşte üçte bir oranında çektirilir.</p>

      <h2>Domates Sosunda Asit ve Şeker Dengesi</h2>
      <p>Hakiki bir İtalyan domates sosu acelesi olmayan bir ritüeldir. San Marzano tipi etli domatesler kullanıldığında ekstra şeker eklemeye gerek kalmaz; kısık ateşte ağır ağır pişen domates kendi doğal tatlılığını ortaya çıkarır.</p>

      <h2>Emülsiyon: Makarna Suyu Mucizesi</h2>
      <p>İtalyan şeflerin en büyük sırrı haşlama suyudur (Acqua di Cottura). Makarnadan suya geçen nişasta, tavadaki tereyağı veya zeytinyağı ile birleştiğinde doğal bir bağlayıcı görevi görür. Kutuda Makarna mutfağında soslarımızı bağlarken bu geleneksel emülsiyon tekniğini kullanırız.</p>
    `
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
