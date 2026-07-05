export type SymbolMeaning = {
  id: number;
  name: string;
  keywords: string[];
  meaning: string;
  loveMeaning: string;
  careerMeaning: string;
};

export const symbols: SymbolMeaning[] = [
  {
    id: 1,
    name: "Kuş",
    keywords: ["haber", "mesaj", "iletişim", "hareket"],
    meaning:
      "Kuş sembolü genellikle haber, mesaj, beklenen bir gelişme ya da uzaklardan gelecek bir iletişimi temsil eder.",
    loveMeaning:
      "Aşkta kuş sembolü, mesajlaşma, haber alma, konuşma başlatma ya da uzak duran biriyle iletişim ihtimalini anlatabilir.",
    careerMeaning:
      "Kariyerde kuş sembolü, beklenen bir haber, başvuru sonucu, telefon ya da yeni bir fırsatla ilgili iletişimi gösterebilir.",
  },
  {
    id: 2,
    name: "Yol",
    keywords: ["seyahat", "karar", "ilerleme", "yön"],
    meaning:
      "Yol sembolü kişinin önünde açılan bir süreç, karar noktası, hareket veya yeni bir yöne ilerleme temasını anlatır.",
    loveMeaning:
      "Aşkta yol sembolü, ilişkinin yön değiştirmesi, yüz yüze görüşme, mesafe konusu veya bir karar sürecini gösterebilir.",
    careerMeaning:
      "Kariyerde yol sembolü, yeni bir rota, iş değişikliği, eğitim, staj, görüşme veya ilerleme fırsatı anlamına gelebilir.",
  },
  {
    id: 3,
    name: "Kalp",
    keywords: ["duygu", "aşk", "bağ", "yakınlık"],
    meaning:
      "Kalp sembolü duygusal yoğunluğu, sevgi ihtiyacını, bağ kurmayı ve kişinin iç dünyasında öne çıkan hisleri temsil eder.",
    loveMeaning:
      "Aşkta kalp sembolü, romantik ilgi, karşılıklı çekim, duyguların güçlenmesi veya kalpten gelen bir konuşmayı anlatabilir.",
    careerMeaning:
      "Kariyerde kalp sembolü, kişinin severek yaptığı bir işe yönelmesi, yaratıcı motivasyon veya işte duygusal tatmin arayışını gösterebilir.",
  },
  {
    id: 4,
    name: "Anahtar",
    keywords: ["çözüm", "kapı", "fırsat", "erişim"],
    meaning:
      "Anahtar sembolü kapalı kalan bir durumun açılması, çözüm bulunması veya yeni bir kapıya ulaşma temasını anlatır.",
    loveMeaning:
      "Aşkta anahtar sembolü, ilişkinin kilit noktasının anlaşılması, netleşme veya karşı tarafla çözüm getiren bir konuşma anlamına gelebilir.",
    careerMeaning:
      "Kariyerde anahtar sembolü, yeni fırsat, kabul alma, yeteneklerini doğru yerde kullanma veya önemli bir kapının açılması anlamına gelebilir.",
  },
  {
    id: 5,
    name: "Göz",
    keywords: ["farkındalık", "dikkat", "gözlem", "sezgi"],
    meaning:
      "Göz sembolü dikkat edilmesi gereken bir durumu, farkındalık kazanmayı, gözlemlemeyi ve sezgisel uyanıklığı temsil eder.",
    loveMeaning:
      "Aşkta göz sembolü, birinin seni takip etmesi, dikkatini senden yana çevirmesi veya ilişkide gözden kaçan bir detayı fark etmek anlamına gelebilir.",
    careerMeaning:
      "Kariyerde göz sembolü, detaylara dikkat etme, değerlendirilme, izlenme veya daha stratejik davranma gerekliliğini anlatabilir.",
  },
  {
    id: 6,
    name: "Balık",
    keywords: ["kısmet", "para", "bereket", "akış"],
    meaning:
      "Balık sembolü çoğu zaman bereket, kısmet, maddi akış ve beklenmedik güzel gelişmelerle ilişkilendirilir.",
    loveMeaning:
      "Aşkta balık sembolü, ilişkinin daha akışkan ilerlemesi, duygusal yumuşama veya kısmetli bir tanışma ihtimalini gösterebilir.",
    careerMeaning:
      "Kariyerde balık sembolü, para akışı, kazanç, iş fırsatı veya emeklerin maddi karşılık bulması anlamına gelebilir.",
  },
];