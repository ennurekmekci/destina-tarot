
export type CardNarrative = {
  generalRole: string;
  loveRole: string;
  careerRole: string;
  pressure: string;
  strength: string;
};

export const cardNarratives: Record<number, CardNarrative> = {
  1: {
    generalRole: "yeni bir sayfaya cesaret etmeyi",
    loveRole: "kalpte daha özgür ve risksiz olmayan bir başlangıç isteğini",
    careerRole: "yeni bir başvuru, proje veya yön değişikliği cesaretini",
    pressure: "dağınık heves veya hazırlıksız adım",
    strength: "başlama cesareti",
  },
  2: {
    generalRole: "kişinin elindeki imkanları kullanarak sonucu şekillendirmesini",
    loveRole: "iletişim, çekim ve kendini doğru ifade etme gücünü",
    careerRole: "beceriyi görünür kılma ve fırsatı değerlendirme yeteneğini",
    pressure: "potansiyeli kullanmadan beklemek",
    strength: "irade ve beceri",
  },
  3: {
    generalRole: "sezgilerin ve görünmeyen bilginin önemini",
    loveRole: "söylenmeyen duyguları ve içten içe hissedilenleri",
    careerRole: "arka plandaki bilgileri dikkatle okumayı",
    pressure: "belirsizlikte fazla kalmak",
    strength: "iç ses ve sezgi",
  },
  4: {
    generalRole: "büyüyen, beslenen ve gelişen bir alanı",
    loveRole: "şefkat, ilgi ve güvenli yakınlık ihtiyacını",
    careerRole: "emek verilen bir fikrin büyümesini ve üretkenliği",
    pressure: "konfor alanında fazla kalmak",
    strength: "besleyici gelişim",
  },
  5: {
    generalRole: "düzen kurmayı, sınır çizmeyi ve kontrolü toparlamayı",
    loveRole: "ilişkide güven, netlik ve sağlam zemin arayışını",
    careerRole: "plan, disiplin ve sorumluluk alma ihtiyacını",
    pressure: "fazla kontrol veya katılık",
    strength: "yapı kurma gücü",
  },
  6: {
    generalRole: "rehberlik, öğrenme ve doğru yolu aramayı",
    loveRole: "ilişkide ortak değerler ve ciddiyet ihtiyacını",
    careerRole: "mentor, eğitim, kural ve kurumsal süreçleri",
    pressure: "sadece dış onaya bağlı kalmak",
    strength: "bilgi ve rehberlik",
  },
  7: {
    generalRole: "kalp ile akıl arasında seçim yapmayı",
    loveRole: "çekim, bağ ve duygusal karar noktasını",
    careerRole: "değerlerine uygun yolu seçme ihtiyacını",
    pressure: "kararsızlık",
    strength: "uyumlu seçim",
  },
  8: {
    generalRole: "hedefe doğru ilerlemeyi ve kontrolü ele almayı",
    loveRole: "ilişkiyi ya da duyguyu bir yöne taşıma isteğini",
    careerRole: "başvuru, mücadele ve hedefe odaklı ilerlemeyi",
    pressure: "acele veya fazla zorlama",
    strength: "kararlı hareket",
  },
  9: {
    generalRole: "baskı altında sakin kalıp iç gücü korumayı",
    loveRole: "yoğun duygular içinde olgun ve yumuşak kalabilmeyi",
    careerRole: "stres altında dayanıklılık ve öz güveni",
    pressure: "her şeyi içine atmak",
    strength: "sabırlı güç",
  },
  10: {
    generalRole: "içe dönüp cevapları kendi içinde aramayı",
    loveRole: "duyguları kendi içinde tartma ve mesafe ihtiyacını",
    careerRole: "araştırma, uzmanlaşma ve yön bulma sürecini",
    pressure: "fazla içine kapanmak",
    strength: "bilgelik",
  },
  11: {
    generalRole: "döngünün değişmesini ve şartların yön değiştirmesini",
    loveRole: "ilişkide beklenmedik hareketlenme veya yön değişimini",
    careerRole: "fırsatların değişmesini ve zamanlamanın önemini",
    pressure: "değişime direnmek",
    strength: "esneklik",
  },
  12: {
    generalRole: "adil karar, denge ve netleşme ihtiyacını",
    loveRole: "ilişkide dürüstlük, denge ve açık konuşmayı",
    careerRole: "resmi süreçler, değerlendirme ve hak edişi",
    pressure: "duygusal tepkiyle karar vermek",
    strength: "adalet ve netlik",
  },
  13: {
    generalRole: "beklemeyi, bakış açısını değiştirmeyi ve teslimiyeti",
    loveRole: "askıda kalan duygu veya bekleyen ilişki dinamiğini",
    careerRole: "strateji değiştirme ve acele etmeden düşünme sürecini",
    pressure: "fazla askıda kalmak",
    strength: "farklı açıdan bakmak",
  },
  14: {
    generalRole: "eski bir döngünün kapanıp dönüşüm başlamasını",
    loveRole: "eski ilişki kalıplarının bitip duygunun değişmesini",
    careerRole: "eski planı bırakıp yeni yöne geçmeyi",
    pressure: "bitmiş olana tutunmak",
    strength: "yenilenme",
  },
  15: {
    generalRole: "denge, uyum ve aşırılıklardan uzaklaşmayı",
    loveRole: "ilişkide yavaş iyileşme ve uyum kurmayı",
    careerRole: "sürdürülebilir tempo ve istikrarlı ilerlemeyi",
    pressure: "fazla temkinle yavaşlamak",
    strength: "denge",
  },
  16: {
    generalRole: "kişiyi tutan bağları, korkuları veya takıntıları görünür kılmayı",
    loveRole: "yoğun çekim, bağımlı bağ veya sağlıksız döngüyü",
    careerRole: "stres, baskı, fazla hırs veya tüketen çalışma düzenini",
    pressure: "özgürlüğü kısıtlayan bağ",
    strength: "gölgeyi fark etmek",
  },
  17: {
    generalRole: "ani sarsıntıdan sonra gerçeği görmeyi",
    loveRole: "ilişkide ani yüzleşme veya saklanan şeyin açığa çıkmasını",
    careerRole: "planların sarsılması ve yeni temel kurma ihtiyacını",
    pressure: "güvenli sanılan düzenin bozulması",
    strength: "uyanış",
  },
  18: {
    generalRole: "umut, şifa ve yeniden inanma alanını",
    loveRole: "kalbin yeniden güvenmeye ve iyileşmeye açılmasını",
    careerRole: "ilham veren hedefi ve uzun vadeli umudu",
    pressure: "sadece hayalde kalmak",
    strength: "umut",
  },
  19: {
    generalRole: "belirsizlik, sezgi ve netleşmeyen detayları",
    loveRole: "karışık duygular ve netleşmemiş hisleri",
    careerRole: "eksik bilgi, belirsiz süreç ve dikkatli gözlem ihtiyacını",
    pressure: "korkuyla sezgiyi karıştırmak",
    strength: "gözlem",
  },
  20: {
    generalRole: "açıklık, başarı ve görünür olmayı",
    loveRole: "sıcaklık, açıklık ve mutlu netleşmeyi",
    careerRole: "emeğin görünür olması ve olumlu sonuç potansiyelini",
    pressure: "fazla iyimserlikle detayı kaçırmak",
    strength: "açıklık",
  },
  21: {
    generalRole: "geçmişten ders çıkarıp uyanış yaşamayı",
    loveRole: "geçmiş konunun yeniden değerlendirilmesini",
    careerRole: "geri dönüş, değerlendirme veya karar aşamasını",
    pressure: "aynı döngüyü tekrar etmek",
    strength: "farkındalık",
  },
  22: {
    generalRole: "bir sürecin tamamlanıp daha olgun seviyeye geçmesini",
    loveRole: "ilişkide tamamlanma, olgunlaşma veya yeni seviyeyi",
    careerRole: "sonuç alma, tamamlanan proje ve yeni aşamayı",
    pressure: "tamamlanan yerde kalmak",
    strength: "bütünlük",
  },
};