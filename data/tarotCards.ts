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
      "Baş Rahibe kartı, cevapların hemen dışarıda görünmeyebileceğini anlatır. İç sesini dinlemek, acele etmeden gözlem yapmak ve sezgilerine güvenmek önemlidir.",
    loveMeaning:
      "Aşkta Baş Rahibe, gizli duygular, söylenmemiş sözler veya belirsiz bir enerji gösterebilir. Kalbinin ne dediğini anlamadan hızlı hareket etmemelisin.",
    careerMeaning:
      "Kariyerde Baş Rahibe, perde arkasında bilgi toplama ve sezgisel karar verme sürecini anlatır. Her şeyi hemen açıklamak yerine gözlem yapmak daha iyi olabilir.",
  },
  {
    id: 4,
    name: "The Empress",
    turkishName: "İmparatoriçe",
    keywords: ["bereket", "şefkat", "gelişim"],
    generalMeaning:
      "İmparatoriçe kartı, büyüme, üretkenlik ve besleyici enerji taşır. Hayatında emek verdiğin bir şey gelişebilir ve daha görünür hale gelebilir.",
    loveMeaning:
      "Aşkta İmparatoriçe, sevgi, ilgi ve duygusal sıcaklık getirir. İlişkide besleyici bir bağ, romantizm veya daha fazla yakınlık öne çıkabilir.",
    careerMeaning:
      "Kariyerde İmparatoriçe, yaratıcı üretim, gelişim ve emek verilen bir işin büyümesini anlatır. Sabırla beslenen bir hedef sonuç verebilir.",
  },
  {
    id: 5,
    name: "The Emperor",
    turkishName: "İmparator",
    keywords: ["düzen", "kontrol", "otorite"],
    generalMeaning:
      "İmparator kartı, düzen kurma, sınır çizme ve kontrolü ele alma ihtiyacını gösterir. Daha sağlam ilerlemek için plan ve disiplin gerekir.",
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
      "Aziz kartı, rehberlik, öğrenme ve değerler üzerinden ilerlemeyi anlatır. Bazen doğru yolu bulmak için deneyimli birinden destek almak gerekir.",
    loveMeaning:
      "Aşkta Aziz, ilişkinin daha ciddi, düzenli veya geleneksel bir zemine oturabileceğini gösterir. Güven ve ortak değerler ön plana çıkar.",
    careerMeaning:
      "Kariyerde Aziz, eğitim, mentor desteği, kurallar ve resmi süreçlerle ilgilidir. Bir hoca, kurum veya rehberlik sana yol gösterebilir.",
  },
  {
    id: 7,
    name: "The Lovers",
    turkishName: "Âşıklar",
    keywords: ["seçim", "uyum", "bağ"],
    generalMeaning:
      "Âşıklar kartı, önemli bir seçim ve uyum arayışını gösterir. Kalbinle mantığın arasında denge kurman gereken bir süreç olabilir.",
    loveMeaning:
      "Aşkta Âşıklar, güçlü çekim, ruhsal uyum ve karşılıklı duyguları temsil eder. Ancak bu kart aynı zamanda net bir seçim yapma gerekliliğini de gösterebilir.",
    careerMeaning:
      "Kariyerde Âşıklar, sana gerçekten uygun olan yolu seçme ihtiyacını anlatır. Değerlerinle uyumlu bir karar vermen önemli olabilir.",
  },
  {
    id: 8,
    name: "The Chariot",
    turkishName: "Savaş Arabası",
    keywords: ["ilerleme", "kararlılık", "zafer"],
    generalMeaning:
      "Savaş Arabası, hedefe doğru kararlı ilerlemeyi anlatır. Dağınık enerjiyi toparlayıp kontrolü eline aldığında yol açılabilir.",
    loveMeaning:
      "Aşkta Savaş Arabası, ilişkiyi bir yöne taşımak veya duygusal konuda net ilerlemek isteğini gösterir. Kararsızlık yerine açık bir yön belirlemek gerekebilir.",
    careerMeaning:
      "Kariyerde Savaş Arabası, başvuru, mücadele, hedef ve ilerleme enerjisidir. Çaba gösterirsen görünür bir hareketlenme olabilir.",
  },
  {
    id: 9,
    name: "Strength",
    turkishName: "Güç",
    keywords: ["sabır", "iç güç", "cesaret"],
    generalMeaning:
      "Güç kartı, baskı altında sakin kalmayı ve içsel dayanıklılığı anlatır. Zorlayıcı bir durumda panikle değil olgunlukla ilerlemek gerekir.",
    loveMeaning:
      "Aşkta Güç, yoğun duygular içinde sabırlı ve şefkatli kalabilmeyi gösterir. İlişkide yumuşak ama net bir duruş önemli olabilir.",
    careerMeaning:
      "Kariyerde Güç, stres altında dayanıklılık ve öz güvenle ilgilidir. Sabırlı kalıp pes etmeden ilerlemek başarıyı destekler.",
  },
  {
    id: 10,
    name: "The Hermit",
    turkishName: "Ermiş",
    keywords: ["içe dönüş", "bilgelik", "yalnızlık"],
    generalMeaning:
      "Ermiş kartı, cevapları dışarıda değil kendi içinde araman gerektiğini anlatır. Bu dönem biraz geri çekilip düşünmek, olgunlaşmak ve yönünü anlamak için uygundur.",
    loveMeaning:
      "Aşkta Ermiş, mesafe, içe çekilme veya duyguları kendi içinde tartma anlamına gelebilir. Kalbin ne istediğini anlamak için zamana ihtiyaç olabilir.",
    careerMeaning:
      "Kariyerde Ermiş, araştırma, uzmanlaşma ve kendi yolunu bulma sürecini anlatır. Acele karar yerine derin düşünmek daha faydalı olabilir.",
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
      "Kariyerde Kader Çarkı, değişen fırsatlar ve zamanlamayla ilgilidir. Beklenmedik bir gelişme seni yeni bir seçeneğe yönlendirebilir.",
  },
  {
    id: 12,
    name: "Justice",
    turkishName: "Adalet",
    keywords: ["denge", "karar", "hak ediş"],
    generalMeaning:
      "Adalet kartı, dürüstlük, denge ve net karar ihtiyacını anlatır. Bir konuda doğru değerlendirme yapmak ve sonuçları objektif görmek gerekir.",
    loveMeaning:
      "Aşkta Adalet, ilişkinin adil, dengeli ve açık olması gerektiğini anlatır. Belirsizlik varsa konuşmalar netleşebilir.",
    careerMeaning:
      "Kariyerde Adalet, resmi süreçler, değerlendirmeler, hak ediş ve kararlarla ilgilidir. Emeklerinin karşılığı objektif şekilde görülebilir.",
  },
  {
    id: 13,
    name: "The Hanged Man",
    turkishName: "Asılan Adam",
    keywords: ["bekleme", "teslimiyet", "bakış açısı"],
    generalMeaning:
      "Asılan Adam, bekleme ve bakış açısını değiştirme dönemini anlatır. Bazen ilerlemek için önce durup farklı yerden bakmak gerekir.",
    loveMeaning:
      "Aşkta Asılan Adam, askıda kalan bir durum, bekleyiş veya fedakarlık temasını gösterebilir. Duygusal konuda bakış açını değiştirmen gerekebilir.",
    careerMeaning:
      "Kariyerde Asılan Adam, acele etmeden strateji değiştirmeyi anlatır. Bekleme süreci boşa değil, yeni bir bakış geliştirmek için olabilir.",
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
      "Kariyerde Ölüm, eski bir planı bırakıp yeni bir yöne geçmeyi anlatır. Bitmiş bir şeye tutunmak yerine dönüşüme izin vermek gerekir.",
  },
  {
    id: 15,
    name: "Temperance",
    turkishName: "Denge",
    keywords: ["uyum", "sabır", "denge"],
    generalMeaning:
      "Denge kartı, aşırılıklardan uzak durmayı ve uyum kurmayı anlatır. Hızlı sonuçtan çok sakin, ölçülü ve sürdürülebilir ilerlemek önemlidir.",
    loveMeaning:
      "Aşkta Denge, ilişkinin yavaş yavaş iyileşmesi, uyumlanması veya daha sağlıklı bir zemine oturması anlamına gelir. Acele etmek yerine denge kurmak önemlidir.",
    careerMeaning:
      "Kariyerde Denge, sürdürülebilir çalışma temposu ve istikrarlı ilerleme demektir. Çok hızlı gitmek yerine ritmini korumalısın.",
  },
  {
    id: 16,
    name: "The Devil",
    turkishName: "Şeytan",
    keywords: ["bağ", "takıntı", "gölge"],
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
      "Kule kartı, ani farkındalıkları ve eski düzenin sarsılmasını anlatır. Başta zor görünse de bu süreç gerçekleri görmeni sağlayabilir.",
    loveMeaning:
      "Aşkta Kule, ani farkındalıklar, beklenmedik konuşmalar veya ilişkinin gerçek yüzünü görme anlamına gelebilir. Saklanan şeyler açığa çıkabilir.",
    careerMeaning:
      "Kariyerde Kule, planların değişmesi, ani kararlar veya eski bir yapının bozulması anlamına gelebilir. Yeni temel kurmak gerekebilir.",
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
    keywords: ["belirsizlik", "sezgi", "korku"],
    generalMeaning:
      "Ay kartı, belirsizlik, sezgi ve netleşmeyen durumları anlatır. Her şey göründüğü gibi olmayabilir; acele karar vermeden gözlem yapmak gerekir.",
    loveMeaning:
      "Aşkta Ay, karışık duygular, belirsizlik veya tam açık olmayan niyetleri gösterebilir. Sezgilerini dinle ama korkularınla karıştırmamaya dikkat et.",
    careerMeaning:
      "Kariyerde Ay, eksik bilgi, belirsiz süreç veya netleşmeyen planlar anlamına gelebilir. Önce detayları öğrenmek gerekir.",
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
      "Kariyerde Güneş, başarı, görünürlük ve olumlu sonuç alma potansiyelini anlatır. Emek verdiğin bir konuda parlayabilirsin.",
  },
  {
    id: 21,
    name: "Judgement",
    turkishName: "Mahkeme",
    keywords: ["uyanış", "hesaplaşma", "yeniden doğuş"],
    generalMeaning:
      "Mahkeme kartı, geçmişten ders çıkarma ve önemli bir farkındalık yaşama zamanını anlatır. Eski bir konu yeniden değerlendirilebilir.",
    loveMeaning:
      "Aşkta Mahkeme, geçmişten gelen bir konunun yeniden gündeme gelmesi veya ilişkide ciddi bir farkındalık yaşanması anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Mahkeme, değerlendirme, geri dönüş, sonuç alma veya önemli bir karar aşamasını gösterir. Emeklerin tekrar gündeme gelebilir.",
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
      "Kariyerde Dünya, tamamlanan proje, başarı ve yeni seviyeye geçiş anlamına gelir. Emeklerinin sonuç verdiğini görebilirsin.",
  },

  {
    id: 23,
    name: "Ace of Wands",
    turkishName: "Değneklerin Ası",
    keywords: ["ilham", "başlangıç", "kıvılcım"],
    generalMeaning:
      "Değneklerin Ası, yeni bir ilham, cesaret ve yaratıcı başlangıç enerjisini anlatır. İçinde harekete geçmek isteyen güçlü bir kıvılcım olabilir.",
    loveMeaning:
      "Aşkta bu kart, çekim, heyecan ve yeni bir enerji anlamına gelir. İlişkide tutku canlanabilir veya yeni bir tanışma kıvılcımı doğabilir.",
    careerMeaning:
      "Kariyerde Değneklerin Ası, yeni proje, girişim veya yaratıcı fikir için güçlü bir başlangıçtır. Harekete geçmek için güzel bir işarettir.",
  },
  {
    id: 24,
    name: "Two of Wands",
    turkishName: "Değneklerin İkilisi",
    keywords: ["plan", "karar", "ufuk"],
    generalMeaning:
      "Değneklerin İkilisi, seçenekleri değerlendirme ve geleceğe dair plan yapma dönemini anlatır. Artık bulunduğun yerden ötesini düşünüyorsun.",
    loveMeaning:
      "Aşkta bu kart, ilişkinin nereye gideceğini düşünme veya iki seçenek arasında kalma enerjisi taşıyabilir. Gelecek planları önem kazanır.",
    careerMeaning:
      "Kariyerde Değneklerin İkilisi, hedef belirleme, seçenekleri tartma ve uzun vadeli plan yapma zamanıdır.",
  },
  {
    id: 25,
    name: "Three of Wands",
    turkishName: "Değneklerin Üçlüsü",
    keywords: ["beklenti", "genişleme", "ilerleme"],
    generalMeaning:
      "Değneklerin Üçlüsü, atılan adımların sonucunu beklemeyi ve ufkun genişlemesini anlatır. Emeklerin daha büyük bir alana açılabilir.",
    loveMeaning:
      "Aşkta bu kart, ilişkinin geleceğini izleme, mesafe veya gelişmeleri bekleme anlamına gelebilir. Sabırla sonuçları görmek gerekir.",
    careerMeaning:
      "Kariyerde Değneklerin Üçlüsü, başvuru, proje veya planların karşılığını bekleme sürecidir. Genişleme potansiyeli vardır.",
  },
  {
    id: 26,
    name: "Four of Wands",
    turkishName: "Değneklerin Dörtlüsü",
    keywords: ["kutlama", "istikrar", "yuva"],
    generalMeaning:
      "Değneklerin Dörtlüsü, huzurlu bir zemin, kutlama ve güvenli bir alanı anlatır. Emek verilen bir konuda güzel bir eşik geçilebilir.",
    loveMeaning:
      "Aşkta bu kart, ilişkiyi sağlamlaştırma, birlikte mutlu bir alan kurma veya kutlanacak güzel gelişmeleri gösterebilir.",
    careerMeaning:
      "Kariyerde Değneklerin Dörtlüsü, başarıyı kutlama, ekip uyumu veya güvenli bir çalışma zemini anlamına gelir.",
  },
  {
    id: 27,
    name: "Five of Wands",
    turkishName: "Değneklerin Beşlisi",
    keywords: ["rekabet", "gerilim", "mücadele"],
    generalMeaning:
      "Değneklerin Beşlisi, fikir ayrılıkları, rekabet ve küçük çatışmaların olduğu bir dönemi anlatır. Enerji dağılabilir ama gelişim de getirebilir.",
    loveMeaning:
      "Aşkta bu kart, tartışma, inatlaşma veya güç çekişmesi gösterebilir. Sorunu büyütmeden konuşmak önemlidir.",
    careerMeaning:
      "Kariyerde Değneklerin Beşlisi, rekabet, yoğun tempo veya ekip içi fikir ayrılıklarını anlatır. Kendini göstermek için sakin kalmalısın.",
  },
  {
    id: 28,
    name: "Six of Wands",
    turkishName: "Değneklerin Altılısı",
    keywords: ["zafer", "takdir", "başarı"],
    generalMeaning:
      "Değneklerin Altılısı, başarı, görünürlük ve takdir edilme enerjisini taşır. Çabanın karşılığını görme ihtimali güçlenir.",
    loveMeaning:
      "Aşkta bu kart, ilişkide gurur duyulan bir gelişme, ilgi görme veya karşı taraftan değer görmek anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Değneklerin Altılısı, başarı, kabul, takdir veya başvurudan olumlu dönüş gibi güzel sonuçları destekler.",
  },
  {
    id: 29,
    name: "Seven of Wands",
    turkishName: "Değneklerin Yedilisi",
    keywords: ["savunma", "direnç", "sınır"],
    generalMeaning:
      "Değneklerin Yedilisi, kendi alanını koruma ve zorluklara karşı direnme ihtiyacını anlatır. Pes etmeden ama sınırlarını bilerek durmalısın.",
    loveMeaning:
      "Aşkta bu kart, ilişkide kendini savunma, sınır koyma veya dış etkilere karşı bağı koruma anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Değneklerin Yedilisi, rekabet karşısında duruşunu korumayı ve emeğini savunmayı gösterir.",
  },
  {
    id: 30,
    name: "Eight of Wands",
    turkishName: "Değneklerin Sekizlisi",
    keywords: ["hız", "haber", "gelişme"],
    generalMeaning:
      "Değneklerin Sekizlisi, hızlı gelişmeler, haberler ve hareketli bir süreci anlatır. Bekleyen bir konu aniden hızlanabilir.",
    loveMeaning:
      "Aşkta bu kart, mesajlaşma, hızlı iletişim veya duygusal konuda beklenmedik bir hareketlenme gösterebilir.",
    careerMeaning:
      "Kariyerde Değneklerin Sekizlisi, hızlı dönüş, haber, görüşme veya sürecin aniden ilerlemesi anlamına gelebilir.",
  },
  {
    id: 31,
    name: "Nine of Wands",
    turkishName: "Değneklerin Dokuzlusu",
    keywords: ["yorgunluk", "direnç", "korunma"],
    generalMeaning:
      "Değneklerin Dokuzlusu, yorulmuş ama hâlâ ayakta duran bir enerjiyi anlatır. Geçmiş deneyimler seni temkinli yapmış olabilir.",
    loveMeaning:
      "Aşkta bu kart, kırgınlıklar yüzünden temkinli olmak veya kalbini koruma ihtiyacı hissetmek anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Değneklerin Dokuzlusu, yoğun emekten sonra yorulma ama pes etmeme enerjisidir. Son bir dayanıklılık gerekebilir.",
  },
  {
    id: 32,
    name: "Ten of Wands",
    turkishName: "Değneklerin Onlusu",
    keywords: ["yük", "sorumluluk", "baskı"],
    generalMeaning:
      "Değneklerin Onlusu, fazla sorumluluk alma ve yük altında kalma halini anlatır. Her şeyi tek başına taşımaya çalışıyor olabilirsin.",
    loveMeaning:
      "Aşkta bu kart, ilişkide yük, sorumluluk veya tek taraflı çaba hissini gösterebilir. Dengeyi yeniden kurmak gerekir.",
    careerMeaning:
      "Kariyerde Değneklerin Onlusu, fazla iş yükü, stres ve tükenmeye yaklaşan tempo anlamına gelir. Sorumlulukları bölmek önemlidir.",
  },
  {
    id: 33,
    name: "Page of Wands",
    turkishName: "Değnek Prensi",
    keywords: ["merak", "haber", "heves"],
    generalMeaning:
      "Değnek Prensi, meraklı, heyecanlı ve keşfetmeye açık bir enerjiyi anlatır. Yeni bir fikir veya haber seni motive edebilir.",
    loveMeaning:
      "Aşkta bu kart, flört, mesaj, merak ve taze heyecan anlamına gelebilir. Duygular daha oyunbaz ve keşif odaklı olabilir.",
    careerMeaning:
      "Kariyerde Değnek Prensi, yeni fikir, eğitim, staj, proje veya heyecan veren bir başlangıç haberini gösterebilir.",
  },
  {
    id: 34,
    name: "Knight of Wands",
    turkishName: "Değnek Şövalyesi",
    keywords: ["ataklık", "tutku", "hareket"],
    generalMeaning:
      "Değnek Şövalyesi, hızlı hareket, cesaret ve tutkulu bir enerji taşır. Ancak acelecilik kontrol edilmelidir.",
    loveMeaning:
      "Aşkta bu kart, yoğun çekim, hızlı gelişen duygular veya tutkulu ama değişken bir enerji anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Değnek Şövalyesi, hızlı aksiyon, girişimcilik ve cesur hamleleri anlatır. Planı unutmadan ilerlemek gerekir.",
  },
  {
    id: 35,
    name: "Queen of Wands",
    turkishName: "Değnek Kraliçesi",
    keywords: ["öz güven", "çekim", "yaratıcılık"],
    generalMeaning:
      "Değnek Kraliçesi, öz güven, çekicilik ve yaratıcı ifade gücünü anlatır. Kendini daha cesur gösterebilirsin.",
    loveMeaning:
      "Aşkta bu kart, çekim, özgüven ve sıcak bir enerji getirir. İlişkide tutku ve kendini değerli hissetme öne çıkabilir.",
    careerMeaning:
      "Kariyerde Değnek Kraliçesi, görünür olma, liderlik, yaratıcılık ve kendine güvenerek ilerleme enerjisidir.",
  },
  {
    id: 36,
    name: "King of Wands",
    turkishName: "Değnek Kralı",
    keywords: ["liderlik", "vizyon", "cesaret"],
    generalMeaning:
      "Değnek Kralı, vizyoner liderlik ve cesur kararları anlatır. Büyük resmi görüp kararlı şekilde ilerlemek gerekir.",
    loveMeaning:
      "Aşkta bu kart, güçlü, karizmatik ve yön veren bir enerji gösterebilir. İlişkide tutku kadar olgun duruş da önemlidir.",
    careerMeaning:
      "Kariyerde Değnek Kralı, liderlik, girişimcilik ve büyük hedeflere cesaretle ilerleme anlamına gelir.",
  },

  {
    id: 37,
    name: "Ace of Cups",
    turkishName: "Kupaların Ası",
    keywords: ["duygu", "başlangıç", "şifa"],
    generalMeaning:
      "Kupaların Ası, duygusal yenilenme, kalbin açılması ve içsel şifa enerjisini anlatır. Yeni bir his veya yumuşama başlayabilir.",
    loveMeaning:
      "Aşkta Kupaların Ası, yeni bir aşk, duygusal başlangıç veya kalpte saf bir sevgi enerjisi anlamına gelir.",
    careerMeaning:
      "Kariyerde bu kart, yaptığın işle duygusal bağ kurma, ilham alma veya seni mutlu eden yeni bir başlangıç anlamına gelebilir.",
  },
  {
    id: 38,
    name: "Two of Cups",
    turkishName: "Kupaların İkilisi",
    keywords: ["uyum", "bağ", "karşılıklılık"],
    generalMeaning:
      "Kupaların İkilisi, karşılıklı anlayış, uyum ve güçlü bir bağ kurma enerjisini anlatır.",
    loveMeaning:
      "Aşkta bu kart çok olumlu bir karttır. Karşılıklı hisler, uyum, buluşma veya ilişkinin güçlenmesi anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kupaların İkilisi, uyumlu ortaklık, destekleyici iş ilişkisi veya doğru insanlarla bağlantı kurmayı gösterir.",
  },
  {
    id: 39,
    name: "Three of Cups",
    turkishName: "Kupaların Üçlüsü",
    keywords: ["kutlama", "arkadaşlık", "destek"],
    generalMeaning:
      "Kupaların Üçlüsü, sosyal destek, kutlama ve paylaşım enerjisini taşır. Çevrenden moral veya güzel haber gelebilir.",
    loveMeaning:
      "Aşkta bu kart, keyifli zamanlar, arkadaş çevresi üzerinden tanışma veya ilişkinin sosyal alanda canlanması anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kupaların Üçlüsü, ekip desteği, kutlama, olumlu haber veya grup çalışmasından fayda görmeyi anlatır.",
  },
  {
    id: 40,
    name: "Four of Cups",
    turkishName: "Kupaların Dörtlüsü",
    keywords: ["sıkılma", "içe kapanma", "fırsat"],
    generalMeaning:
      "Kupaların Dörtlüsü, duygusal durgunluk ve önündeki fırsatı fark etmeme halini anlatır. İçine dönmek iyi olabilir ama tamamen kapanmamak gerekir.",
    loveMeaning:
      "Aşkta bu kart, ilgisizlik, duygusal mesafe veya yeni bir fırsatı görmezden gelme anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kupaların Dörtlüsü, motivasyon düşüklüğü veya gelen fırsatlara isteksiz yaklaşmayı gösterebilir. Bakış açını yenilemek gerekebilir.",
  },
  {
    id: 41,
    name: "Five of Cups",
    turkishName: "Kupaların Beşlisi",
    keywords: ["pişmanlık", "kayıp", "üzüntü"],
    generalMeaning:
      "Kupaların Beşlisi, kayıp, hayal kırıklığı veya geçmişe takılma enerjisini anlatır. Ancak hâlâ ayakta kalan destekleri görmek önemlidir.",
    loveMeaning:
      "Aşkta bu kart, kırgınlık, pişmanlık veya biten bir şeye odaklanmayı gösterebilir. Yeni ihtimalleri görmek için geçmişi biraz bırakmak gerekir.",
    careerMeaning:
      "Kariyerde Kupaların Beşlisi, kaçan fırsatlara üzülme veya moral düşüklüğü anlamına gelebilir. Kalan seçenekleri değerlendirmek önemlidir.",
  },
  {
    id: 42,
    name: "Six of Cups",
    turkishName: "Kupaların Altılısı",
    keywords: ["geçmiş", "anı", "masumiyet"],
    generalMeaning:
      "Kupaların Altılısı, geçmiş, nostalji ve eski bağların etkisini anlatır. Eski bir konu yeniden duygusal olarak gündeme gelebilir.",
    loveMeaning:
      "Aşkta bu kart, eski sevgili, geçmişten gelen duygu veya tanıdık bir bağın yeniden hatırlanması anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kupaların Altılısı, geçmişteki bir fırsat, eski bağlantılar veya daha önce öğrendiğin bir şeyden faydalanmayı gösterebilir.",
  },
  {
    id: 43,
    name: "Seven of Cups",
    turkishName: "Kupaların Yedilisi",
    keywords: ["seçenek", "hayal", "kararsızlık"],
    generalMeaning:
      "Kupaların Yedilisi, çok seçenek, hayal ve kararsızlık enerjisini anlatır. Her ihtimal gerçekçi olmayabilir; netlik gerekir.",
    loveMeaning:
      "Aşkta bu kart, kafanın karışması, birden fazla ihtimal veya hayal edilenle gerçek olanı ayırma ihtiyacını gösterir.",
    careerMeaning:
      "Kariyerde Kupaların Yedilisi, farklı seçenekler arasında kalmayı ve gerçekçi plan yapma ihtiyacını anlatır.",
  },
  {
    id: 44,
    name: "Eight of Cups",
    turkishName: "Kupaların Sekizlisi",
    keywords: ["uzaklaşma", "arayış", "bırakma"],
    generalMeaning:
      "Kupaların Sekizlisi, duygusal olarak tatmin etmeyen bir yerden uzaklaşmayı anlatır. Daha anlamlı olanı arama zamanı olabilir.",
    loveMeaning:
      "Aşkta bu kart, bir bağdan uzaklaşma, duygusal yorgunluk veya artık yetmeyen bir ilişki dinamiğini bırakma anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kupaların Sekizlisi, seni tatmin etmeyen bir hedef veya ortamdan uzaklaşıp daha anlamlı bir yol aramayı gösterir.",
  },
  {
    id: 45,
    name: "Nine of Cups",
    turkishName: "Kupaların Dokuzlusu",
    keywords: ["dilek", "tatmin", "memnuniyet"],
    generalMeaning:
      "Kupaların Dokuzlusu, içsel memnuniyet, dileklerin gerçekleşmesi ve duygusal tatmin enerjisini anlatır.",
    loveMeaning:
      "Aşkta bu kart, mutlu hissetme, değer görme veya kalbinin istediği bir gelişmeye yaklaşma anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kupaların Dokuzlusu, kişisel tatmin, hedefe yaklaşma ve seni mutlu edecek bir sonuç alma ihtimalini gösterir.",
  },
  {
    id: 46,
    name: "Ten of Cups",
    turkishName: "Kupaların Onlusu",
    keywords: ["mutluluk", "aile", "tamamlanma"],
    generalMeaning:
      "Kupaların Onlusu, duygusal tamamlanma, huzur ve birlik hissini anlatır. Kalbinin ait hissettiği bir alan güçlenebilir.",
    loveMeaning:
      "Aşkta bu kart, mutlu ilişki, aile enerjisi, duygusal bütünlük ve uzun vadeli huzur anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kupaların Onlusu, iş ortamında huzur, ekip uyumu ve seni duygusal olarak tatmin eden bir başarı gösterebilir.",
  },
  {
    id: 47,
    name: "Page of Cups",
    turkishName: "Kupa Prensi",
    keywords: ["mesaj", "duygu", "hayal"],
    generalMeaning:
      "Kupa Prensi, duygusal bir haber, yaratıcı ilham veya içten gelen yumuşak bir enerji taşır.",
    loveMeaning:
      "Aşkta bu kart, duygusal mesaj, flört, özür veya tatlı bir yakınlaşma anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kupa Prensi, yaratıcı fikir, ilham veren haber veya duygusal olarak seni motive eden bir başlangıç gösterebilir.",
  },
  {
    id: 48,
    name: "Knight of Cups",
    turkishName: "Kupa Şövalyesi",
    keywords: ["romantizm", "teklif", "idealistlik"],
    generalMeaning:
      "Kupa Şövalyesi, kalpten gelen teklifleri, romantik ve idealist bir yaklaşımı anlatır.",
    loveMeaning:
      "Aşkta bu kart, romantik teklif, duygusal yaklaşım veya birinin hislerini daha açık göstermesi anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kupa Şövalyesi, yaratıcı teklif, ilham veren proje veya duygusal olarak seni çeken bir fırsatı anlatır.",
  },
  {
    id: 49,
    name: "Queen of Cups",
    turkishName: "Kupa Kraliçesi",
    keywords: ["şefkat", "sezgi", "duyarlılık"],
    generalMeaning:
      "Kupa Kraliçesi, sezgisel, şefkatli ve duygusal derinliği olan bir enerjiyi anlatır. Kendine karşı da yumuşak olmalısın.",
    loveMeaning:
      "Aşkta bu kart, derin sevgi, şefkat, empati ve duygusal anlayış anlamına gelir.",
    careerMeaning:
      "Kariyerde Kupa Kraliçesi, insan ilişkileri, empati, yaratıcı işler ve duygusal zekâ ile başarıyı gösterir.",
  },
  {
    id: 50,
    name: "King of Cups",
    turkishName: "Kupa Kralı",
    keywords: ["olgun duygu", "denge", "şefkat"],
    generalMeaning:
      "Kupa Kralı, duyguların olgun ve dengeli şekilde yönetilmesini anlatır. Kalp güçlüdür ama kontrol de vardır.",
    loveMeaning:
      "Aşkta bu kart, olgun sevgi, güven veren duygular ve sakin bir bağlılık anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kupa Kralı, krizlerde sakin kalma, insan yönetimi ve duygusal olgunlukla ilerlemeyi gösterir.",
  },

  {
    id: 51,
    name: "Ace of Swords",
    turkishName: "Kılıçların Ası",
    keywords: ["netlik", "fikir", "gerçek"],
    generalMeaning:
      "Kılıçların Ası, zihinsel netlik, gerçekleri görme ve güçlü bir fikir enerjisini anlatır. Kafa karışıklığı yerini açıklığa bırakabilir.",
    loveMeaning:
      "Aşkta bu kart, açık konuşma, gerçeği söyleme ve duygusal konuda netlik kazanma anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kılıçların Ası, yeni fikir, karar, analiz ve net bir strateji geliştirme zamanıdır.",
  },
  {
    id: 52,
    name: "Two of Swords",
    turkishName: "Kılıçların İkilisi",
    keywords: ["kararsızlık", "blokaj", "seçim"],
    generalMeaning:
      "Kılıçların İkilisi, karar vermekte zorlanmayı ve zihinsel bir blokajı anlatır. Gerçeği görmek için gözlerini kapatmamalısın.",
    loveMeaning:
      "Aşkta bu kart, duygusal bir konuda karar verememe veya konuşulması gereken şeyi erteleme anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kılıçların İkilisi, iki seçenek arasında kalma ve net karar verememe sürecini gösterir.",
  },
  {
    id: 53,
    name: "Three of Swords",
    turkishName: "Kılıçların Üçlüsü",
    keywords: ["kalp kırıklığı", "acı", "gerçek"],
    generalMeaning:
      "Kılıçların Üçlüsü, acı veren bir gerçeği, kırgınlığı veya zihinsel olarak zorlayan bir durumu anlatır. İyileşme için önce kabul gerekir.",
    loveMeaning:
      "Aşkta bu kart, kalp kırıklığı, hayal kırıklığı veya zor bir konuşma anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kılıçların Üçlüsü, moral bozan haber, eleştiri veya beklenmeyen bir hayal kırıklığı gösterebilir.",
  },
  {
    id: 54,
    name: "Four of Swords",
    turkishName: "Kılıçların Dörtlüsü",
    keywords: ["dinlenme", "mola", "iyileşme"],
    generalMeaning:
      "Kılıçların Dörtlüsü, zihinsel dinlenme ve toparlanma ihtiyacını anlatır. Bir süre durmak, düşünmek ve güç toplamak gerekebilir.",
    loveMeaning:
      "Aşkta bu kart, mesafe, sakinleşme veya ilişki konusunda biraz mola verme ihtiyacını gösterebilir.",
    careerMeaning:
      "Kariyerde Kılıçların Dörtlüsü, yoğun tempodan sonra dinlenme, planı gözden geçirme ve zihni toparlama sürecidir.",
  },
  {
    id: 55,
    name: "Five of Swords",
    turkishName: "Kılıçların Beşlisi",
    keywords: ["çatışma", "gurur", "gerilim"],
    generalMeaning:
      "Kılıçların Beşlisi, kazanılsa bile huzur vermeyen bir çatışmayı anlatır. Haklı çıkmak ile gerçekten iyi hissetmek aynı şey olmayabilir.",
    loveMeaning:
      "Aşkta bu kart, kırıcı sözler, ego savaşı veya gereksiz inatlaşma anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kılıçların Beşlisi, rekabet, gerilim veya iletişimde dikkatli olma ihtiyacını gösterir.",
  },
  {
    id: 56,
    name: "Six of Swords",
    turkishName: "Kılıçların Altılısı",
    keywords: ["geçiş", "uzaklaşma", "iyileşme"],
    generalMeaning:
      "Kılıçların Altılısı, zor bir dönemden daha sakin bir yere geçişi anlatır. Tam iyileşme zaman alabilir ama yön daha huzurludur.",
    loveMeaning:
      "Aşkta bu kart, sorunlardan uzaklaşma, ilişkiyi daha sakin bir yere taşıma veya duygusal mesafe anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kılıçların Altılısı, daha iyi bir sürece geçiş, ortam değiştirme veya stresli bir aşamadan uzaklaşma gösterebilir.",
  },
  {
    id: 57,
    name: "Seven of Swords",
    turkishName: "Kılıçların Yedilisi",
    keywords: ["strateji", "gizlilik", "kaçınma"],
    generalMeaning:
      "Kılıçların Yedilisi, strateji, gizlilik veya bir şeyden kaçınma enerjisini anlatır. Her şeyi açık görmek zor olabilir.",
    loveMeaning:
      "Aşkta bu kart, saklanan niyetler, açık olmayan davranışlar veya dürüstlük ihtiyacını gösterebilir.",
    careerMeaning:
      "Kariyerde Kılıçların Yedilisi, stratejik davranma, dikkatli plan yapma veya güvenmediğin durumlarda temkinli olma anlamına gelir.",
  },
  {
    id: 58,
    name: "Eight of Swords",
    turkishName: "Kılıçların Sekizlisi",
    keywords: ["kısıtlanma", "korku", "zihinsel blokaj"],
    generalMeaning:
      "Kılıçların Sekizlisi, kişinin kendini sıkışmış hissetmesini ve zihinsel korkularla sınırlanmasını anlatır. Çıkış yolu var ama önce bakış değişmeli.",
    loveMeaning:
      "Aşkta bu kart, korkular yüzünden hareket edememe veya kendini duygusal olarak sıkışmış hissetme anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kılıçların Sekizlisi, kendine güvenememe, seçenekleri görememe veya korkular yüzünden adım atamama halini gösterir.",
  },
  {
    id: 59,
    name: "Nine of Swords",
    turkishName: "Kılıçların Dokuzlusu",
    keywords: ["kaygı", "uykusuzluk", "pişmanlık"],
    generalMeaning:
      "Kılıçların Dokuzlusu, zihinsel kaygı, fazla düşünme ve içsel baskıyı anlatır. Korkular gerçeklerden daha büyük görünüyor olabilir.",
    loveMeaning:
      "Aşkta bu kart, ilişkiyle ilgili kaygı, pişmanlık veya zihinde büyüyen korkular anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kılıçların Dokuzlusu, sınav, başvuru, iş veya gelecek kaygısının artmasını gösterir. Zihni sakinleştirmek gerekir.",
  },
  {
    id: 60,
    name: "Ten of Swords",
    turkishName: "Kılıçların Onlusu",
    keywords: ["son", "tükeniş", "kapanış"],
    generalMeaning:
      "Kılıçların Onlusu, zor bir sürecin son noktasını ve artık aynı şekilde devam edemeyeceğini anlatır. Bu kapanış acı verse de yeni bir sayfa açar.",
    loveMeaning:
      "Aşkta bu kart, bitiş, ağır kırgınlık veya artık sürdürülemeyen bir döngünün kapanması anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kılıçların Onlusu, tükenmiş bir planı bırakma, zor bir son veya artık yeni stratejiye geçme ihtiyacını gösterir.",
  },
  {
    id: 61,
    name: "Page of Swords",
    turkishName: "Kılıç Prensi",
    keywords: ["merak", "gözlem", "haber"],
    generalMeaning:
      "Kılıç Prensi, merak, araştırma ve dikkatli gözlem enerjisini anlatır. Bilgi toplamak ve doğru soruları sormak önemlidir.",
    loveMeaning:
      "Aşkta bu kart, karşı tarafı gözlemleme, mesajlaşma veya söylenenleri dikkatle değerlendirme anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kılıç Prensi, araştırma, öğrenme, staj, eğitim veya bilgi odaklı bir başlangıcı gösterir.",
  },
  {
    id: 62,
    name: "Knight of Swords",
    turkishName: "Kılıç Şövalyesi",
    keywords: ["hız", "ataklık", "keskin karar"],
    generalMeaning:
      "Kılıç Şövalyesi, hızlı düşünme, ani karar ve güçlü aksiyon enerjisini anlatır. Ancak aceleyle kırıcı olmamak gerekir.",
    loveMeaning:
      "Aşkta bu kart, hızlı konuşmalar, ani mesajlar veya net ama sert bir tavır anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Kılıç Şövalyesi, hızlı karar, yoğun tempo ve hedefe keskin şekilde ilerleme enerjisidir.",
  },
  {
    id: 63,
    name: "Queen of Swords",
    turkishName: "Kılıç Kraliçesi",
    keywords: ["netlik", "sınır", "zeka"],
    generalMeaning:
      "Kılıç Kraliçesi, net düşünme, sınır koyma ve duygularla mantığı ayırabilme gücünü anlatır.",
    loveMeaning:
      "Aşkta bu kart, duygusal konuda netlik, sınır ve açık iletişim ihtiyacını gösterir. Belirsizliğe tahammül azalabilir.",
    careerMeaning:
      "Kariyerde Kılıç Kraliçesi, analiz, strateji, profesyonel duruş ve net karar verme becerisini anlatır.",
  },
  {
    id: 64,
    name: "King of Swords",
    turkishName: "Kılıç Kralı",
    keywords: ["otorite", "mantık", "karar"],
    generalMeaning:
      "Kılıç Kralı, mantıklı karar, objektif bakış ve zihinsel otoriteyi anlatır. Duygular yerine gerçekler üzerinden hareket etmek gerekir.",
    loveMeaning:
      "Aşkta bu kart, mesafeli ama net bir enerji gösterebilir. Duyguların yanında mantıklı konuşmalar da önem kazanır.",
    careerMeaning:
      "Kariyerde Kılıç Kralı, uzmanlık, karar alma, yönetim ve güçlü analiz becerilerini temsil eder.",
  },

  {
    id: 65,
    name: "Ace of Pentacles",
    turkishName: "Tılsımların Ası",
    keywords: ["fırsat", "para", "başlangıç"],
    generalMeaning:
      "Tılsımların Ası, somut bir fırsat, maddi başlangıç veya güvenli bir temel kurma enerjisini anlatır.",
    loveMeaning:
      "Aşkta bu kart, ilişkinin daha somut, güvenli ve gerçekçi bir zemine oturabileceğini gösterir.",
    careerMeaning:
      "Kariyerde Tılsımların Ası çok olumlu bir karttır. Yeni iş, staj, para, teklif veya somut fırsat anlamına gelebilir.",
  },
  {
    id: 66,
    name: "Two of Pentacles",
    turkishName: "Tılsımların İkilisi",
    keywords: ["denge", "çoklu görev", "uyum"],
    generalMeaning:
      "Tılsımların İkilisi, aynı anda birden fazla şeyi dengeleme ihtiyacını anlatır. Esneklik önemlidir.",
    loveMeaning:
      "Aşkta bu kart, ilişki ile diğer sorumluluklar arasında denge kurma ihtiyacını gösterebilir.",
    careerMeaning:
      "Kariyerde Tılsımların İkilisi, okul, iş, staj veya para konularını aynı anda yönetme çabasını anlatır.",
  },
  {
    id: 67,
    name: "Three of Pentacles",
    turkishName: "Tılsımların Üçlüsü",
    keywords: ["iş birliği", "emek", "öğrenme"],
    generalMeaning:
      "Tılsımların Üçlüsü, emek, öğrenme ve başkalarıyla birlikte gelişme enerjisini anlatır.",
    loveMeaning:
      "Aşkta bu kart, ilişkiyi birlikte emek vererek geliştirme ve ortak çaba gösterme ihtiyacını anlatır.",
    careerMeaning:
      "Kariyerde Tılsımların Üçlüsü, ekip çalışması, staj, eğitim, proje ve ustalaşma için çok destekleyici bir karttır.",
  },
  {
    id: 68,
    name: "Four of Pentacles",
    turkishName: "Tılsımların Dörtlüsü",
    keywords: ["kontrol", "tutunma", "güvenlik"],
    generalMeaning:
      "Tılsımların Dörtlüsü, güvenlik ihtiyacı, elde olanı koruma ve fazla tutunma enerjisini anlatır.",
    loveMeaning:
      "Aşkta bu kart, duygusal olarak kendini kapatma, kontrol etme veya güven ihtiyacı nedeniyle fazla tutunma anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Tılsımların Dörtlüsü, para, pozisyon veya güvenli alanı koruma isteğini gösterir. Fazla kontrol gelişimi yavaşlatabilir.",
  },
  {
    id: 69,
    name: "Five of Pentacles",
    turkishName: "Tılsımların Beşlisi",
    keywords: ["eksiklik", "zorluk", "destek ihtiyacı"],
    generalMeaning:
      "Tılsımların Beşlisi, maddi veya duygusal eksiklik hissini ve destek arama ihtiyacını anlatır.",
    loveMeaning:
      "Aşkta bu kart, dışlanmış hissetme, yalnızlık veya ilişkide yeterince destek görmeme duygusunu gösterebilir.",
    careerMeaning:
      "Kariyerde Tılsımların Beşlisi, maddi kaygı, iş bulma stresi veya destek ihtiyacı anlamına gelebilir. Yardım istemekten çekinmemek gerekir.",
  },
  {
    id: 70,
    name: "Six of Pentacles",
    turkishName: "Tılsımların Altılısı",
    keywords: ["yardım", "denge", "paylaşım"],
    generalMeaning:
      "Tılsımların Altılısı, alma-verme dengesi, destek ve paylaşım enerjisini anlatır.",
    loveMeaning:
      "Aşkta bu kart, ilişkide emek, ilgi ve desteğin karşılıklı olması gerektiğini gösterir.",
    careerMeaning:
      "Kariyerde Tılsımların Altılısı, destek görmek, burs, ödeme, yardım veya hakkaniyetli paylaşım anlamına gelebilir.",
  },
  {
    id: 71,
    name: "Seven of Pentacles",
    turkishName: "Tılsımların Yedilisi",
    keywords: ["sabır", "bekleme", "emek"],
    generalMeaning:
      "Tılsımların Yedilisi, emek verilen bir şeyin sonucunu sabırla beklemeyi anlatır. Hemen sonuç çıkmasa da süreç büyüyor olabilir.",
    loveMeaning:
      "Aşkta bu kart, ilişkinin zamana ve sabra ihtiyaç duyduğunu gösterir. Emek veriliyorsa sonuç yavaş yavaş görülebilir.",
    careerMeaning:
      "Kariyerde Tılsımların Yedilisi, başvuru, proje veya çalışmanın sonucunu bekleme dönemidir. Sabır önemlidir.",
  },
  {
    id: 72,
    name: "Eight of Pentacles",
    turkishName: "Tılsımların Sekizlisi",
    keywords: ["çalışma", "ustalık", "emek"],
    generalMeaning:
      "Tılsımların Sekizlisi, düzenli çalışma, pratik ve ustalaşma enerjisini anlatır. Gelişim emekle gelir.",
    loveMeaning:
      "Aşkta bu kart, ilişkiyi emek vererek geliştirme ve sorunları sabırla çözme ihtiyacını gösterir.",
    careerMeaning:
      "Kariyerde Tılsımların Sekizlisi çok güçlüdür. Çalışma, pratik, staj, teknik gelişim ve ustalaşma anlamına gelir.",
  },
  {
    id: 73,
    name: "Nine of Pentacles",
    turkishName: "Tılsımların Dokuzlusu",
    keywords: ["bağımsızlık", "başarı", "öz değer"],
    generalMeaning:
      "Tılsımların Dokuzlusu, bağımsızlık, öz değer ve kendi emeğinle elde edilen başarıyı anlatır.",
    loveMeaning:
      "Aşkta bu kart, kişinin önce kendi değerini bilmesi ve bağımsız duruşunu koruması gerektiğini gösterir.",
    careerMeaning:
      "Kariyerde Tılsımların Dokuzlusu, kendi emeğinle başarı, maddi rahatlama ve özgüven kazanma anlamına gelir.",
  },
  {
    id: 74,
    name: "Ten of Pentacles",
    turkishName: "Tılsımların Onlusu",
    keywords: ["kalıcılık", "aile", "miras"],
    generalMeaning:
      "Tılsımların Onlusu, kalıcı güvenlik, aile, kökler ve uzun vadeli başarı enerjisini anlatır.",
    loveMeaning:
      "Aşkta bu kart, uzun vadeli güven, aile kurma veya ilişkinin kalıcı bir zemine oturması anlamına gelebilir.",
    careerMeaning:
      "Kariyerde Tılsımların Onlusu, kalıcı başarı, kurum, aile desteği, maddi güvence veya uzun vadeli hedefleri anlatır.",
  },
  {
    id: 75,
    name: "Page of Pentacles",
    turkishName: "Tılsım Prensi",
    keywords: ["öğrenme", "fırsat", "başlangıç"],
    generalMeaning:
      "Tılsım Prensi, öğrenmeye açık, somut ve dikkatli bir başlangıç enerjisini anlatır.",
    loveMeaning:
      "Aşkta bu kart, ilişkinin yavaş ama güvenilir şekilde gelişmesini veya yeni tanışmada ciddi niyetleri gösterebilir.",
    careerMeaning:
      "Kariyerde Tılsım Prensi, staj, eğitim, yeni iş fırsatı, başvuru veya öğrenerek gelişme anlamına gelir.",
  },
  {
    id: 76,
    name: "Knight of Pentacles",
    turkishName: "Tılsım Şövalyesi",
    keywords: ["istikrar", "sabır", "sorumluluk"],
    generalMeaning:
      "Tılsım Şövalyesi, yavaş ama güvenilir ilerleme enerjisini anlatır. Sabır, düzen ve sorumluluk başarı getirir.",
    loveMeaning:
      "Aşkta bu kart, yavaş gelişen ama güven veren bir ilişki enerjisini gösterir. Acele yoktur ama niyet ciddidir.",
    careerMeaning:
      "Kariyerde Tılsım Şövalyesi, istikrarlı çalışma, sorumluluk alma ve güvenilir adımlarla ilerlemeyi anlatır.",
  },
  {
    id: 77,
    name: "Queen of Pentacles",
    turkishName: "Tılsım Kraliçesi",
    keywords: ["güven", "bakım", "bolluk"],
    generalMeaning:
      "Tılsım Kraliçesi, güvenli, üretken ve besleyici bir enerjiyi anlatır. Hem kendine hem hayatındaki somut alanlara özen göstermek önemlidir.",
    loveMeaning:
      "Aşkta bu kart, güven, sadakat, ilgi ve ilişkiyi somut olarak besleme enerjisini gösterir.",
    careerMeaning:
      "Kariyerde Tılsım Kraliçesi, üretkenlik, maddi düzen, işini sahiplenme ve güvenilir başarı anlamına gelir.",
  },
  {
    id: 78,
    name: "King of Pentacles",
    turkishName: "Tılsım Kralı",
    keywords: ["başarı", "güvenlik", "maddi güç"],
    generalMeaning:
      "Tılsım Kralı, maddi güvenlik, olgun başarı ve sağlam yapı kurma enerjisini anlatır. Emek somut sonuca dönüşebilir.",
    loveMeaning:
      "Aşkta bu kart, güven veren, ciddi ve kalıcı bir ilişki enerjisini gösterebilir. Duygular somut davranışlarla desteklenir.",
    careerMeaning:
      "Kariyerde Tılsım Kralı, iş başarısı, maddi güvence, uzmanlık ve sağlam bir kariyer zemini anlamına gelir.",
  },
];