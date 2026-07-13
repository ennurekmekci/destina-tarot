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
    keywords: ["yeni başlangıç", "cesaret", "özgürlük"],
    generalMeaning:
      "Deli kartı, hayatında yeni bir başlangıç enerjisinin güçlendiğini gösterir. Bu dönem kesin sonuçları bilmeden adım atmayı, biraz cesaret göstermeyi ve kendine yeni bir yol açmayı anlatır.",
    loveMeaning:
      "Aşk konusunda Deli kartı, kalpte daha özgür ve spontane bir enerji olduğunu söyler. Yeni bir tanışma, ilişkiye taze bir bakış veya duygularda risk alma isteği öne çıkabilir.",
    careerMeaning:
      "Kariyerde Deli kartı, yeni bir proje, eğitim, iş fikri veya yön değişikliği anlamına gelebilir. Henüz her şey net olmasa da ilk adımı atmak önemli görünüyor.",
  },
  {
    id: 2,
    name: "The Magician",
    turkishName: "Büyücü",
    keywords: ["irade", "beceri", "yaratıcılık"],
    generalMeaning:
      "Büyücü kartı, elindeki imkanları doğru kullandığında istediğin sonucu şekillendirebileceğini anlatır. Bu kart, niyetini netleştirip harekete geçme zamanını gösterir.",
    loveMeaning:
      "Aşkta Büyücü, iletişimin ve çekimin güçlendiğini gösterir. Duygularını doğru ifade edersen karşı tarafta güçlü bir etki bırakabilirsin.",
    careerMeaning:
      "Kariyerde Büyücü, yeteneklerini görünür kılma ve fırsatları değerlendirme zamanıdır. Özellikle üretmek, sunmak, konuşmak veya yeni bir beceriyi kullanmak öne çıkar.",
  },
  {
    id: 3,
    name: "The High Priestess",
    turkishName: "Baş Rahibe",
    keywords: ["sezgi", "sır", "iç ses"],
    generalMeaning:
      "Baş Rahibe kartı, dışarıdan görünenin ötesinde bir şeyler olduğunu anlatır. Bu dönemde acele karar vermek yerine sezgilerini dinlemek ve olayların perde arkasını anlamak önemlidir.",
    loveMeaning:
      "Aşkta Baş Rahibe, gizli duygular, söylenmemiş sözler veya belirsiz bir enerji gösterebilir. Kalbinin ne dediğini anlamadan hızlı hareket etmemelisin.",
    careerMeaning:
      "Kariyerde Baş Rahibe, araştırma, gözlem ve içgörü gerektiren bir dönemi anlatır. Her bilgi açıkta olmayabilir; dikkatli analiz etmek faydalı olur.",
  },
  {
    id: 4,
    name: "The Empress",
    turkishName: "İmparatoriçe",
    keywords: ["bereket", "şefkat", "gelişim"],
    generalMeaning:
      "İmparatoriçe kartı, büyüme, üretkenlik ve bereket enerjisini temsil eder. Hayatında emek verdiğin bir şeyin gelişmeye başladığını ve daha verimli bir döneme girdiğini gösterir.",
    loveMeaning:
      "Aşkta İmparatoriçe, sevgi, ilgi ve duygusal sıcaklık getirir. İlişkide besleyici bir bağ, romantizm veya daha fazla yakınlık öne çıkabilir.",
    careerMeaning:
      "Kariyerde İmparatoriçe, yaratıcı fikirlerin ve emek verilen işlerin karşılık bulabileceğini gösterir. Üretmek, tasarlamak ve büyütmek için destekleyici bir karttır.",
  },
  {
    id: 5,
    name: "The Emperor",
    turkishName: "İmparator",
    keywords: ["düzen", "kontrol", "otorite"],
    generalMeaning:
      "İmparator kartı, hayatında düzen kurma ve kontrolü ele alma ihtiyacını gösterir. Dağınık olan şeyleri toparlamak, plan yapmak ve sağlam kararlar almak önemlidir.",
    loveMeaning:
      "Aşkta İmparator, ciddi, koruyucu ama bazen mesafeli bir enerjiyi anlatır. İlişkide güven, netlik ve sınırlar önemli hale gelebilir.",
    careerMeaning:
      "Kariyerde İmparator, disiplin, liderlik ve sorumluluk alma zamanıdır. Planlı ilerlersen daha sağlam ve kalıcı sonuçlar elde edebilirsin.",
  },
  {
    id: 6,
    name: "The Hierophant",
    turkishName: "Aziz",
    keywords: ["gelenek", "öğreti", "rehberlik"],
    generalMeaning:
      "Aziz kartı, bilgi, rehberlik ve geleneksel yolları temsil eder. Bu dönemde birinden tavsiye almak, eğitim görmek veya daha sistemli ilerlemek faydalı olabilir.",
    loveMeaning:
      "Aşkta Aziz, ilişkinin daha ciddi, düzenli veya geleneksel bir zemine oturabileceğini gösterir. Güven ve ortak değerler ön plana çıkar.",
    careerMeaning:
      "Kariyerde Aziz, eğitim, danışmanlık, kurallar ve kurumsal yapı ile ilgilidir. Bir uzman desteği almak veya disiplinli öğrenmek başarı getirebilir.",
  },
  {
    id: 7,
    name: "The Lovers",
    turkishName: "Âşıklar",
    keywords: ["seçim", "uyum", "bağ"],
    generalMeaning:
      "Âşıklar kartı, önemli bir seçim ve içsel uyum temasını anlatır. Kalbinle aklın arasında denge kurman gereken bir dönemden geçiyor olabilirsin.",
    loveMeaning:
      "Aşkta Âşıklar, güçlü çekim, ruhsal uyum ve karşılıklı duyguları temsil eder. Ancak bu kart aynı zamanda net bir seçim yapma gerekliliğini de gösterebilir.",
    careerMeaning:
      "Kariyerde Âşıklar, iki seçenek arasında kalmayı veya değerlerine uygun bir yol seçmeyi anlatır. Sana gerçekten iyi gelen yönü seçmen önemlidir.",
  },
  {
    id: 8,
    name: "The Chariot",
    turkishName: "Savaş Arabası",
    keywords: ["ilerleme", "kararlılık", "zafer"],
    generalMeaning:
      "Savaş Arabası kartı, kararlılıkla ilerlersen engelleri aşabileceğini gösterir. Kontrolü eline almak ve hedefe odaklanmak bu dönemin ana mesajıdır.",
    loveMeaning:
      "Aşkta Savaş Arabası, ilişkiyi bir yöne taşımak veya duygusal konuda net ilerlemek isteğini gösterir. Kararsızlık yerine açık bir yön belirlemek gerekebilir.",
    careerMeaning:
      "Kariyerde Savaş Arabası, hırs, mücadele ve başarı potansiyelini anlatır. Dağılmadan hedefe yürürsen güçlü bir sonuç alabilirsin.",
  },
  {
    id: 9,
    name: "Strength",
    turkishName: "Güç",
    keywords: ["sabır", "iç güç", "cesaret"],
    generalMeaning:
      "Güç kartı, zorlukları sertlikle değil sabır ve iç dengeyle aşacağını gösterir. Kendine güvenmen ve duygularını yönetmen gereken bir dönemdesin.",
    loveMeaning:
      "Aşkta Güç, sabır, anlayış ve duygusal olgunluk gerektiren bir bağa işaret eder. İlişkide yumuşak ama güçlü kalmak önemlidir.",
    careerMeaning:
      "Kariyerde Güç, baskı altında sakin kalmayı ve yeteneklerine güvenmeyi anlatır. Zor bir işi sabırla yöneterek başarı sağlayabilirsin.",
  },
  {
    id: 10,
    name: "The Hermit",
    turkishName: "Ermiş",
    keywords: ["içe dönüş", "bilgelik", "yalnızlık"],
    generalMeaning:
      "Ermiş kartı, cevapları dışarıda değil kendi içinde araman gerektiğini anlatır. Bu dönem biraz geri çekilip düşünmek, olgunlaşmak ve yönünü anlamak için uygundur.",
    loveMeaning:
      "Aşkta Ermiş, mesafe, düşünme süreci veya duyguları içten içe sorgulama anlamına gelebilir. Acele etmeden ne istediğini anlaman gerekebilir.",
    careerMeaning:
      "Kariyerde Ermiş, araştırma, uzmanlaşma ve kendi yolunu bulma enerjisi taşır. Kalabalıktan uzaklaşıp odaklanmak sana iyi gelir.",
  },
  {
    id: 11,
    name: "Wheel of Fortune",
    turkishName: "Kader Çarkı",
    keywords: ["değişim", "döngü", "şans"],
    generalMeaning:
      "Kader Çarkı kartı, hayatında döngülerin değiştiğini ve yeni bir sürecin başladığını gösterir. Kontrol edemediğin gelişmeler seni farklı bir yöne taşıyabilir.",
    loveMeaning:
      "Aşkta Kader Çarkı, beklenmedik gelişmeler, karşılaşmalar veya ilişkinin yön değiştirmesi anlamına gelebilir. Duygusal alanda sürpriz bir hareketlilik olabilir.",
    careerMeaning:
      "Kariyerde Kader Çarkı, fırsatların değişebileceğini ve yeni kapıların açılabileceğini anlatır. Esnek kalmak ve zamanı iyi değerlendirmek önemlidir.",
  },
  {
    id: 12,
    name: "Justice",
    turkishName: "Adalet",
    keywords: ["denge", "karar", "hak ediş"],
    generalMeaning:
      "Adalet kartı, verdiğin kararların sonuçlarıyla yüzleşme ve denge kurma zamanını gösterir. Dürüstlük, netlik ve objektif olmak bu kartın ana mesajıdır.",
    loveMeaning:
      "Aşkta Adalet, ilişkinin adil, dengeli ve açık olması gerektiğini anlatır. Belirsizlik varsa konuşmalar netleşebilir.",
    careerMeaning:
      "Kariyerde Adalet, resmi işler, değerlendirmeler, sözleşmeler veya hak edilen sonuçlarla ilgilidir. Emeklerinin karşılığını almak gündeme gelebilir.",
  },
  {
    id: 13,
    name: "The Hanged Man",
    turkishName: "Asılan Adam",
    keywords: ["bekleme", "teslimiyet", "bakış açısı"],
    generalMeaning:
      "Asılan Adam kartı, şu an ilerlemekten çok durup farklı bir açıdan bakman gerektiğini gösterir. Bazen beklemek, acele etmekten daha doğru sonuç verir.",
    loveMeaning:
      "Aşkta Asılan Adam, askıda kalan bir durum, bekleyiş veya fedakarlık temasını gösterebilir. Duygusal konuda bakış açını değiştirmen gerekebilir.",
    careerMeaning:
      "Kariyerde Asılan Adam, gecikmeler veya bekleme süreçleri anlamına gelebilir. Bu süreçte strateji değiştirmek ve durumu yeniden değerlendirmek faydalıdır.",
  },
  {
    id: 14,
    name: "Death",
    turkishName: "Ölüm",
    keywords: ["dönüşüm", "bitiş", "yenilenme"],
    generalMeaning:
      "Ölüm kartı fiziksel bir ölümü değil, güçlü bir dönüşümü temsil eder. Eski bir dönem kapanırken yenisine yer açman gerektiğini gösterir.",
    loveMeaning:
      "Aşkta Ölüm, eski ilişki kalıplarının bitmesi veya duygusal bir dönüşüm anlamına gelir. Bir şey aynı şekilde devam etmeyebilir; değişim kaçınılmazdır.",
    careerMeaning:
      "Kariyerde Ölüm, eski bir yolun kapanıp yeni bir yönün açılmasını gösterebilir. Bırakılması gereken bir alışkanlık, iş biçimi veya hedef olabilir.",
  },
  {
    id: 15,
    name: "Temperance",
    turkishName: "Denge",
    keywords: ["uyum", "sabır", "denge"],
    generalMeaning:
      "Denge kartı, aşırılıklardan uzak durup orta yolu bulman gerektiğini anlatır. Sabır, uyum ve sakin ilerleme bu dönemde sana iyi gelir.",
    loveMeaning:
      "Aşkta Denge, ilişkinin yavaş yavaş iyileşmesi, uyumlanması veya daha sağlıklı bir zemine oturması anlamına gelir. Acele etmek yerine denge kurmak önemlidir.",
    careerMeaning:
      "Kariyerde Denge, iş yükünü, hedeflerini ve enerjini doğru ayarlaman gerektiğini gösterir. İstikrarlı ilerleme hızlı ama dağınık ilerlemeden daha faydalıdır.",
  },
  {
    id: 16,
    name: "The Devil",
    turkishName: "Şeytan",
    keywords: ["bağımlılık", "takıntı", "gölge"],
    generalMeaning:
      "Şeytan kartı, seni kısıtlayan alışkanlıkları, korkuları veya takıntıları fark etmen gerektiğini anlatır. Özgürleşmek için önce neye bağlı kaldığını görmelisin.",
    loveMeaning:
      "Aşkta Şeytan, yoğun çekim, kıskançlık, bağımlı bağlar veya sağlıksız döngüler anlamına gelebilir. Tutku güçlü olabilir ama dengeyi kaybetmemek gerekir.",
    careerMeaning:
      "Kariyerde Şeytan, fazla hırs, stres, bağımlılık yaratan çalışma düzeni veya seni mutsuz eden bir bağa işaret edebilir. Kontrolü geri almak önemlidir.",
  },
  {
    id: 17,
    name: "The Tower",
    turkishName: "Kule",
    keywords: ["ani değişim", "yıkım", "uyanış"],
    generalMeaning:
      "Kule kartı, sağlam olmayan bir yapının sarsıldığını gösterir. İlk anda zorlayıcı görünse de bu kart, gerçeği görüp daha sağlam bir temel kurma fırsatı getirir.",
    loveMeaning:
      "Aşkta Kule, ani farkındalıklar, beklenmedik konuşmalar veya ilişkinin gerçek yüzünü görme anlamına gelebilir. Saklanan şeyler açığa çıkabilir.",
    careerMeaning:
      "Kariyerde Kule, planlarda ani değişim veya beklenmedik bir kırılma gösterebilir. Eski düzen bozulsa da bu seni daha doğru bir yola yönlendirebilir.",
  },
  {
    id: 18,
    name: "The Star",
    turkishName: "Yıldız",
    keywords: ["umut", "şifa", "ilham"],
    generalMeaning:
      "Yıldız kartı, zor bir dönemden sonra umut ve iyileşme enerjisinin geldiğini gösterir. İçinde yeniden inanma, hayal kurma ve toparlanma gücü var.",
    loveMeaning:
      "Aşkta Yıldız, duygusal iyileşme, umut ve daha saf bir bağ kurma isteğini anlatır. Kalpte yeniden güven oluşabilir.",
    careerMeaning:
      "Kariyerde Yıldız, ilham, görünürlük ve uzun vadeli umut veren hedeflerle ilgilidir. Yaratıcı işler ve hayal edilen projeler için güzel bir karttır.",
  },
  {
    id: 19,
    name: "The Moon",
    turkishName: "Ay",
    keywords: ["belirsizlik", "sezgi", "yanılsama"],
    generalMeaning:
      "Ay kartı, her şeyin net görünmediği bir dönemden geçtiğini anlatır. Korkular, sezgiler ve belirsizlikler iç içe olabilir; acele karar vermemek önemlidir.",
    loveMeaning:
      "Aşkta Ay, karışık duygular, belirsizlik veya yanlış anlaşılmalar gösterebilir. Kalbini dinlerken gerçeklerden kopmamaya dikkat etmelisin.",
    careerMeaning:
      "Kariyerde Ay, netleşmeyen planlar veya belirsiz bilgiler anlamına gelebilir. Her şeyi doğrulamadan büyük kararlar almamak faydalıdır.",
  },
  {
    id: 20,
    name: "The Sun",
    turkishName: "Güneş",
    keywords: ["başarı", "neşe", "açıklık"],
    generalMeaning:
      "Güneş kartı, açıklık, mutluluk ve başarı enerjisini temsil eder. Hayatında daha görünür, daha rahat ve daha pozitif bir dönem başlayabilir.",
    loveMeaning:
      "Aşkta Güneş, sıcaklık, açıklık ve mutlu gelişmeler getirir. Duygular daha net ifade edilebilir ve ilişki daha canlı bir hale gelebilir.",
    careerMeaning:
      "Kariyerde Güneş, başarı, görünürlük ve olumlu sonuçlar anlamına gelir. Emeklerin fark edilebilir ve özgüvenin artabilir.",
  },
  {
    id: 21,
    name: "Judgement",
    turkishName: "Mahkeme",
    keywords: ["uyanış", "hesaplaşma", "yeniden doğuş"],
    generalMeaning:
      "Mahkeme kartı, geçmişle yüzleşme ve yeni bir farkındalıkla ilerleme zamanını gösterir. Bu kart, hayatında önemli bir değerlendirme ve uyanış sürecini anlatır.",
    loveMeaning:
      "Aşkta Mahkeme, geçmişten gelen bir konunun yeniden gündeme gelmesi veya ilişkide ciddi bir farkındalık yaşanması anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Mahkeme, geçmiş emeklerin değerlendirilmesi, önemli bir karar veya yeni bir çağrı hissiyle ilgilidir. Ne yapmak istediğini daha net görebilirsin.",
  },
  {
    id: 22,
    name: "The World",
    turkishName: "Dünya",
    keywords: ["tamamlanma", "başarı", "bütünlük"],
    generalMeaning:
      "Dünya kartı, bir döngünün tamamlandığını ve daha olgun bir aşamaya geçtiğini gösterir. Emek verilen bir konuda sonuç alma ve bütünlük hissi öne çıkar.",
    loveMeaning:
      "Aşkta Dünya, ilişkinin olgunlaşması, tamamlanma hissi veya duygusal olarak daha bütün bir noktaya gelme anlamına gelir. Güzel bir kapanış ya da yeni seviye olabilir.",
    careerMeaning:
      "Kariyerde Dünya, başarı, tamamlanan projeler ve daha büyük hedeflere geçiş anlamına gelir. Bir süreci başarıyla bitirip yeni bir aşamaya hazırlanabilirsin.",
  },
];