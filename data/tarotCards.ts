export type TarotCard = {
  id: number;
  name: string;
  turkishName: string;
  keywords: string[];
  generalMeaning: string;
  loveMeaning: string;
  careerMeaning: string;
};

export const tarotCards: TarotCard[] = [
  {
    id: 1,
    name: "The Fool",
    turkishName: "Deli",
    keywords: ["yeni başlangıç", "cesaret", "özgürlük", "bilinmezlik"],
    generalMeaning:
      "Yeni bir yola çıkma, risk alma ve bilinmeyene güvenme enerjisini anlatır.",
    loveMeaning:
      "Aşkta yeni bir dönem, spontane bir yakınlaşma ya da kalbin daha özgür davranma isteği görülebilir.",
    careerMeaning:
      "Kariyerde yeni bir fırsat, farklı bir alanı deneme ya da cesaret gerektiren bir başlangıç anlamına gelir.",
  },
  {
    id: 2,
    name: "The Magician",
    turkishName: "Büyücü",
    keywords: ["potansiyel", "beceri", "odak", "yaratma"],
    generalMeaning:
      "Elindeki kaynakları doğru kullanarak bir şeyi gerçeğe dönüştürme gücünü temsil eder.",
    loveMeaning:
      "Aşkta çekim, iletişim ve karşı tarafı etkileme enerjisi öne çıkar.",
    careerMeaning:
      "Kariyerde yeteneklerini gösterme, proje başlatma ve inisiyatif alma zamanıdır.",
  },
  {
    id: 3,
    name: "The High Priestess",
    turkishName: "Baş Rahibe",
    keywords: ["sezgi", "sır", "iç ses", "bekleyiş"],
    generalMeaning:
      "Her şeyin hemen görünür olmadığı, sezgilerin ve iç sesin önem kazandığı bir dönemi anlatır.",
    loveMeaning:
      "Aşkta gizli duygular, söylenmemiş şeyler veya karşı tarafı daha iyi gözlemleme ihtiyacı olabilir.",
    careerMeaning:
      "Kariyerde acele karar vermeden bilgi toplamak ve arka plandaki detayları görmek gerekir.",
  },
  {
    id: 4,
    name: "The Empress",
    turkishName: "İmparatoriçe",
    keywords: ["bereket", "şefkat", "güzellik", "üretkenlik"],
    generalMeaning:
      "Büyüme, verimlilik, yaratıcılık ve kendini besleme enerjisini temsil eder.",
    loveMeaning:
      "Aşkta ilgi, değer görme, romantizm ve ilişkinin daha sıcak bir hâle gelmesi anlamına gelir.",
    careerMeaning:
      "Kariyerde üretkenlik, yaratıcı fikirler ve emek verilen işlerin büyümesi görülebilir.",
  },
  {
    id: 5,
    name: "The Lovers",
    turkishName: "Âşıklar",
    keywords: ["seçim", "uyum", "bağ", "ilişki"],
    generalMeaning:
      "Kalp ile akıl arasında seçim yapmayı, uyumu ve önemli bir karar noktasını anlatır.",
    loveMeaning:
      "Aşkta güçlü bir bağ, karşılıklı çekim veya ilişkinin yönünü belirleyecek bir seçim anlamına gelir.",
    careerMeaning:
      "Kariyerde ortaklık, ekip uyumu veya değerlerine uygun bir seçim yapma teması öne çıkar.",
  },
  {
    id: 6,
    name: "The Star",
    turkishName: "Yıldız",
    keywords: ["umut", "şifa", "ilham", "yenilenme"],
    generalMeaning:
      "Zor bir dönemden sonra gelen umut, içsel toparlanma ve yeniden inanma enerjisini temsil eder.",
    loveMeaning:
      "Aşkta iyileşme, umutlanma ve daha sakin bir bağ kurma ihtimali görülebilir.",
    careerMeaning:
      "Kariyerde ilham veren bir hedef, görünür olma ve geleceğe dair umutların güçlenmesi anlamına gelir.",
  },
    {
    id: 7,
    name: "The Moon",
    turkishName: "Ay",
    keywords: ["belirsizlik", "sezgi", "yanılsama", "rüya"],
    generalMeaning:
      "Net olmayan durumları, içsel karmaşayı ve sezgilerin rehberliğini temsil eder.",
    loveMeaning:
      "Aşkta belirsizlik, gizli duygular veya karşı tarafın niyetini tam okuyamama hâli görülebilir.",
    careerMeaning:
      "Kariyerde karar vermeden önce sisli kalan detayları araştırmak ve acele etmemek gerekir.",
  },
  {
    id: 8,
    name: "The Sun",
    turkishName: "Güneş",
    keywords: ["neşe", "başarı", "açıklık", "canlılık"],
    generalMeaning:
      "Aydınlanma, mutluluk, başarı ve bir durumun netleşmesini temsil eder.",
    loveMeaning:
      "Aşkta açıklık, sıcaklık, karşılıklı mutluluk ve ilişkinin daha görünür hâle gelmesi anlamına gelir.",
    careerMeaning:
      "Kariyerde başarı, takdir edilme ve emeklerin görünür olması enerjisini taşır.",
  },
  {
    id: 9,
    name: "Strength",
    turkishName: "Güç",
    keywords: ["sabır", "cesaret", "öz kontrol", "dayanıklılık"],
    generalMeaning:
      "Zorlayıcı durumlar karşısında sakin kalmayı, içsel gücü ve sabrı temsil eder.",
    loveMeaning:
      "Aşkta sabır, yumuşak iletişim ve duyguları dengede tutma ihtiyacı öne çıkabilir.",
    careerMeaning:
      "Kariyerde pes etmeden ilerleme, baskı altında güçlü kalma ve özgüven kazanma anlamına gelir.",
  },
  {
    id: 10,
    name: "The Hermit",
    turkishName: "Ermiş",
    keywords: ["içe dönüş", "bilgelik", "yalnızlık", "arayış"],
    generalMeaning:
      "Kişinin kendi içine dönerek cevap aradığı, sakinleşme ve derin düşünme dönemini anlatır.",
    loveMeaning:
      "Aşkta mesafe, düşünme ihtiyacı veya kişinin kendi duygularını anlamaya çalışması görülebilir.",
    careerMeaning:
      "Kariyerde strateji belirleme, tek başına çalışma ve daha bilinçli karar alma sürecini temsil eder.",
  },
  {
    id: 11,
    name: "Wheel of Fortune",
    turkishName: "Kader Çarkı",
    keywords: ["değişim", "döngü", "şans", "dönüm noktası"],
    generalMeaning:
      "Hayatta değişen koşulları, yeni bir döngünün başlamasını ve beklenmedik gelişmeleri temsil eder.",
    loveMeaning:
      "Aşkta ilişkinin yön değiştirmesi, beklenmedik bir konuşma veya yeni bir dönem görülebilir.",
    careerMeaning:
      "Kariyerde fırsatların değişmesi, yeni kapıların açılması veya planların yön değiştirmesi anlamına gelir.",
  },
  {
    id: 12,
    name: "Justice",
    turkishName: "Adalet",
    keywords: ["denge", "karar", "dürüstlük", "sonuç"],
    generalMeaning:
      "Doğru karar verme, adil olma ve geçmiş seçimlerin sonucuyla yüzleşme temasını anlatır.",
    loveMeaning:
      "Aşkta açık konuşma, dengeli davranma ve ilişkide hakkaniyet arayışı öne çıkabilir.",
    careerMeaning:
      "Kariyerde resmi kararlar, değerlendirmeler, sorumluluklar ve adil sonuçlar anlamına gelir.",
  },
];