export type CombinationMeaning = {
  title: string;
  general: string;
  love: string;
  career: string;
  advice: string;
};

export const combinationMeanings: Record<string, CombinationMeaning> = {
  "1-2": {
    title: "cesur başlangıcı beceriyle görünür kılma",
    general:
      "Bu ikili, yeni bir yola sadece hevesle değil, beceri ve iradeyle girildiğini anlatır. Başlangıç enerjisi, kişinin elindeki imkanları kullanmasıyla güçlenir.",
    love:
      "Aşkta bu ikili, spontane bir çekimin iletişim ve etki gücüyle büyüyebileceğini gösterir. Duygular yeni olabilir ama doğru ifade edilirse karşı tarafta güçlü bir iz bırakabilir.",
    career:
      "Kariyerde bu ikili, yeni bir başlangıcı yetenekle desteklemeyi anlatır. Başvuru, proje, eğitim veya iş fikri için cesaret kadar kendini doğru sunmak da önemlidir.",
    advice:
      "Yeni bir adım atacaksan bunu sadece hevesle değil, yeteneğini ve imkanlarını görünür kılarak destekle.",
  },
    "5-6": {
    title: "güvenli ve ciddi zemin arayışı",
    general:
      "Bu ikili, kişinin hayatında daha sağlam, düzenli ve güvenilir bir yapı kurma ihtiyacını anlatır. İmparator sınır ve düzeni, Aziz ise değerler ve rehberliği öne çıkarır.",
    love:
      "Aşkta bu ikili, ilişkinin sadece duygusal çekimle değil; güven, netlik, ortak değerler ve ciddiyetle değerlendirilmesi gerektiğini gösterir. Geçmişte daha sağlam bir zemin arama ya da ilişkiyi belli kurallar içinde anlama eğilimi etkili olmuş olabilir.",
    career:
      "Kariyerde bu ikili, disiplinli ilerleme, kuralları bilme, mentor/hoca desteği alma ve hedefleri daha resmi bir zemine oturtma ihtiyacını gösterir.",
    advice:
      "Güven arıyorsan sadece hisse değil, davranışların tutarlılığına ve ortak değerlere de bak.",
  },
    "3-8": {
    title: "sezgiyi yöne dönüştürme",
    general:
      "Bu ikili, içten içe hissedilen bir şeyin artık pasif kalmadan bir yöne taşınması gerektiğini anlatır. Sezgi güçlüdür ama tek başına yeterli değildir; onu bilinçli bir karara dönüştürmek gerekir.",
    love:
      "Aşkta bu ikili, söylenmeyen duyguların ya da içten içe hissedilen çekimin artık bir yön aradığını gösterir. Kalp bir şey hissediyor olabilir; fakat bu his netleşmeden hareket edilirse karışıklık yaratabilir.",
    career:
      "Kariyerde bu ikili, içgörü ve sezgiyi somut bir hedefe yönlendirme ihtiyacını anlatır. Ne istediğini hissediyorsan, bunu planlı bir adıma çevirmek gerekir.",
    advice:
      "İç sesini yok sayma ama sadece hisle de ilerleme; sezgini net bir yöne ve bilinçli bir adıma dönüştür.",
  },
  "6-16": {
    title: "yoğun bağı değerlerle sınama",
    general:
      "Bu ikili, kişiyi güçlü şekilde çeken ama aynı zamanda sorgulatan bir bağın değerler, sınırlar ve doğruluk üzerinden değerlendirilmesi gerektiğini anlatır.",
    love:
      "Aşkta bu ikili, yoğun çekim ya da bırakamama hissinin ilişkiyi gerçekten sağlıklı yapıp yapmadığını sorgulatır. Tutku güçlü olabilir; fakat ortak değerler, güven ve saygı yoksa bu bağ kişiyi yorabilir.",
    career:
      "Kariyerde bu ikili, kişiyi içine çeken ama yorabilen bir düzenin kurallar, etik değerler veya uzun vadeli hedeflerle sınanması gerektiğini anlatır.",
    advice:
      "Seni çeken şeyi sadece yoğunluğu ile değerlendirme; bu bağın değerlerine, sınırlarına ve iç huzuruna uyup uymadığına bak.",
  },
  "4-15": {
    title: "şefkatle denge kurma",
    general:
      "Bu ikili, büyüyen ve beslenen bir alanın sabır, ölçü ve dengeyle daha sağlıklı hale gelebileceğini anlatır. Burada hızlı sonuçtan çok yumuşak ama istikrarlı gelişim önemlidir.",
    love:
      "Aşkta bu ikili, duygusal sıcaklık ile sağlıklı sınırların birlikte kurulması gerektiğini gösterir. Sevgi, ilgi ve yakınlık var olabilir; fakat bunun aceleyle değil, dengeli ve karşılıklı uyumla büyümesi gerekir.",
    career:
      "Kariyerde bu ikili, üretkenliği sürdürülebilir bir düzene oturtmayı anlatır. Emek verilen şey büyüyebilir ama tempo ve denge korunmalıdır.",
    advice:
      "Sevgi ya da emek verdiğin şeyi büyütürken kendini tüketme; yakınlığı ve ilgiyi sağlıklı bir dengeyle taşı.",
  },
  "2-3": {
    title: "sezgiyi iletişime dönüştürme",
    general:
      "Bu ikili, içten içe hissedilen bir şeyin artık daha bilinçli şekilde ifade edilmesi gerektiğini anlatır. Baş Rahibe sezgiyi, Büyücü ise bunu söz, niyet ve eyleme dönüştürme gücünü temsil eder.",
    love:
      "Aşkta bu ikili, söylenmemiş duyguların veya içten içe hissedilen bir çekimin iletişimle görünür hale gelebileceğini gösterir. Burada acele etmek değil, doğru zamanda doğru cümleyi kurmak önemlidir.",
    career:
      "Kariyerde bu ikili, içgörü, fikir ve sezgiyi somut bir sunuma, başvuruya, projeye veya üretime dönüştürmeyi anlatır.",
    advice:
      "İçinde hissettiğin şeyi tamamen saklama; netleştiğinde bunu sakin, doğru ve etkili bir şekilde ifade et.",
  },
    "4-16": {
    title: "tüketen düzenden üretkenliğe geçiş",
    general:
      "Bu ikili, kişiyi yoran bir bağ, alışkanlık veya baskının fark edilip daha besleyici ve geliştirici bir alana dönüştürülebileceğini anlatır.",
    love:
      "Aşkta bu ikili, yoğun ama yorucu bir bağın daha sağlıklı, şefkatli ve güvenli bir ilişki anlayışına dönüşmesi gerektiğini gösterir.",
    career:
      "Kariyerde bu ikili, seni tüketen çalışma düzeni, stres veya fazla baskının üretkenliğini gölgeleyebileceğini anlatır. Doğru sınır koyarsan bu enerjiyi daha verimli ve geliştirici bir yola çevirebilirsin.",
    advice:
      "Seni tüketen düzeni fark et; üretkenliğini korumak için sınır koy ve enerjini daha doğru yere aktar.",
  },
  "8-18": {
    title: "umudu harekete dönüştürme",
    general:
      "Bu ikili, umut edilen bir şeyin sadece beklenerek değil, kararlı adımlarla gerçek bir yöne taşınabileceğini gösterir.",
    love:
      "Aşkta bu ikili, kalpteki umudun bir konuşma, net adım veya ilişkiyi yönlendirme isteğiyle birleştiğini anlatır.",
    career:
      "Kariyerde bu ikili, hayal edilen hedefi aktif çabayla destekleme zamanını gösterir. İlham ve umut var; fakat sonuç için hareket, takip ve kararlılık gerekir.",
    advice:
      "Umut ettiğin şeyi sadece dilek olarak bırakma; onu küçük ama düzenli adımlarla destekle.",
  },
   "8-9": {
    title: "baskı altında kararlı ilerleme",
    general:
      "Bu ikili, zorlayıcı bir süreçte dağılmadan ilerlemeyi anlatır. Güç içsel dayanıklılığı, Savaş Arabası ise yön seçip hareket etmeyi gösterir; birlikte geldiklerinde kişi baskıya rağmen kontrolü eline alabilir.",
    love:
      "Aşkta bu ikili, yoğun duygulara rağmen ilişkiyi daha net bir yöne taşıma ihtiyacını gösterir. Hisler güçlü olabilir ama asıl mesele aceleyle değil, olgun ve kararlı şekilde ilerlemektir.",
    career:
      "Kariyerde bu ikili, stres veya zorluklara rağmen hedefe odaklanmayı anlatır. Sabırla hareket eden kişi, çabasını daha görünür bir ilerlemeye çevirebilir.",
    advice:
      "Zorlanınca geri çekilmek yerine sakin kal; ama sadece dayanmakla yetinme, yönünü de netleştir.",
  },
  "11-12": {
    title: "değişen şartlarda adil netleşme",
    general:
      "Bu ikili, değişen bir döngünün daha adil, net ve dengeli bir karara bağlanması gerektiğini anlatır. Kader Çarkı şartların değiştiğini; Adalet ise bu değişimin doğru değerlendirilmesi gerektiğini gösterir.",
    love:
      "Aşkta bu ikili, ilişkinin yön değiştiren bir dönemden geçerken dürüstlük ve netlik ihtiyacını öne çıkarır. Duygular kadar adil davranmak ve açık konuşmak da önemlidir.",
    career:
      "Kariyerde bu ikili, değişen fırsatlar, başvuru süreçleri veya değerlendirmeler içinde daha objektif karar verme gereğini anlatır.",
    advice:
      "Şartlar değişiyorsa panikleme; yeni durumu sakin, adil ve net bir gözle değerlendir.",
  },
  "7-15": {
    title: "kalp seçiminde denge kurma",
    general:
      "Bu ikili, kişinin bir seçim yaparken aceleye kaçmadan iç dengesini koruması gerektiğini anlatır. Âşıklar yön seçimini, Denge ise bu seçimin sabır ve uyumla yapılması gerektiğini gösterir.",
    love:
      "Aşkta bu ikili, duygusal çekim ile sağlıklı dengeyi birlikte düşünmek gerektiğini anlatır. Bir bağ varsa, onun sadece hislerle değil uyum, sabır ve karşılıklı dengeyle büyümesi gerekir.",
    career:
      "Kariyerde bu ikili, iki seçenek veya hedef arasında daha dengeli bir karar verme sürecini gösterir. Acele etmek yerine hangi yolun sana daha uyumlu olduğunu görmek önemlidir.",
    advice:
      "Seçim yaparken sadece heyecana değil, uzun vadede sana huzur ve denge veren yola bak.",
  },
  "1-8": {
    title: "cesur adımı kararlı ilerlemeye dönüştürme",
    general:
      "Bu ikili, yeni bir sayfa açma isteğinin harekete ve yön belirlemeye dönüşmesini anlatır. Burada enerji sadece başlamak değil, başladıktan sonra yolu taşımaktır.",
    love:
      "Aşkta bu ikili, spontane bir başlangıç veya taze duygu ile bunu bir yöne taşıma isteğini gösterir. Kalp sadece hissetmekle kalmaz, hareket de ister.",
    career:
      "Kariyerde bu ikili, yeni bir başvuru, proje veya hedef için güçlü bir aksiyon enerjisi verir. İlk adımın ardından düzenli ilerlemek önemlidir.",
    advice:
      "Başlangıç cesaretini kaybetme ama enerjini dağınık kullanma; hedefini seç ve istikrarlı ilerle.",
  },
  "1-10": {
    title: "içe dönüşten sonra yeni başlangıç",
    general:
      "Bu ikili, önce kişinin kendi içine dönüp ne istediğini anlamaya çalıştığını; ardından daha cesur ve özgür bir başlangıca yöneldiğini gösterir.",
    love:
      "Aşkta bu ikili, bir süre içe çekilme ve duyguları tartma döneminden sonra kalbin yeniden daha açık, daha özgür ve daha cesur bir enerjiye dönebileceğini anlatır.",
    career:
      "Kariyerde bu ikili, önce düşünme ve yön arama sürecini; ardından yeni bir başvuru, proje, eğitim veya fırsata cesaretle adım atmayı gösterir.",
    advice:
      "Kendi içine dönüp ne istediğini anladıysan, artık küçük de olsa yeni bir adım atmaktan korkma.",
  },
  "1-13": {
    title: "başlamak istemek ama zamanlamayı beklemek",
    general:
      "Bu ikili, bir tarafın yeni bir sayfa açmak isterken diğer tarafın hâlâ bekleme, gözlemleme veya bakış açısı değiştirme sürecinde olduğunu anlatır.",
    love:
      "Aşkta bu ikili, kalbin yeni bir başlangıç isteyebileceğini ama duygusal zamanlamanın henüz tam olgunlaşmadığını gösterir.",
    career:
      "Kariyerde bu ikili, yeni bir adım isteğiyle bekleme sürecinin çakıştığını anlatır. Başlamak mümkündür ama strateji netleşmelidir.",
    advice:
      "Yeni başlangıcı zorlamadan önce zamanlamayı ve bakış açını netleştir.",
  },
  "2-20": {
    title: "yeteneğin görünür olması",
    general:
      "Bu ikili, kişinin kendi becerisini daha açık ve görünür şekilde ortaya koyabileceğini anlatır.",
    love:
      "Aşkta bu ikili, iletişim ve açıklığın ilişkiye canlılık getirebileceğini gösterir.",
    career:
      "Kariyerde bu ikili, yeteneklerini göstermek, başvuruda kendini iyi ifade etmek ve görünür olmak için çok destekleyicidir.",
    advice:
      "Kendini saklama; bildiğin şeyi, emeğini ve yeteneğini daha net göster.",
  },
  "3-19": {
    title: "belirsizlik içinde güçlü sezgi",
    general:
      "Bu ikili, dışarıdan net görünmeyen bir durumda iç sesin güçlü çalıştığını anlatır. Her şey açık olmayabilir ama sezgisel olarak bir şeyleri hissediyorsun.",
    love:
      "Aşkta bu ikili, söylenmeyen duygular, belirsizlikler ve içten içe hissedilen şeyleri anlatır. Açık konuşma eksik olabilir.",
    career:
      "Kariyerde bu ikili, netleşmeyen bilgiler veya belirsiz süreçler içinde dikkatli gözlem yapman gerektiğini gösterir.",
    advice:
      "Her şeyi hemen kesinleştirmeye çalışma; önce gözlemle, hissettiğini doğrula ve eksik bilgileri tamamla.",
  },
  "4-18": {
    title: "şefkatle iyileşen bağ",
    general:
      "Bu ikili, büyüme ve iyileşme enerjisinin birlikte çalıştığını gösterir. Kişi hem kendini besleyen hem de umut veren bir sürece açılıyor olabilir.",
    love:
      "Aşkta bu ikili çok yumuşak ve destekleyici bir enerji taşır. Sevgi, ilgi, iyileşme ve yeniden güvenme temaları birlikte çalışır.",
    career:
      "Kariyerde bu ikili, yaratıcı gelişim ve umut veren bir hedefin büyütülmesi anlamına gelir.",
    advice:
      "Güven hissini büyüten, seni besleyen ve iyileştiren şeylere alan aç.",
  },
  "5-18": {
    title: "hayali plana dönüştürme",
    general:
      "Bu ikili, umut edilen bir şeyi somut düzene oturtma ihtiyacını anlatır. Hayal kurmak tek başına yetmez; o hayalin büyümesi için yapı, plan ve istikrar gerekir.",
    love:
      "Aşkta bu ikili, güven veren bir yapı ile kalpteki iyileşme isteğinin birleştiğini gösterir.",
    career:
      "Kariyerde bu ikili, umut veren bir hedefin planlı ve disiplinli şekilde büyütülmesi gerektiğini anlatır.",
    advice:
      "Umut ettiğin şeyi sadece düşüncede bırakma; plan yap, somutlaştır ve sürdürülebilir bir düzen kur.",
  },
  "6-12": {
    title: "kurallı ve adil ilerleme",
    general:
      "Bu ikili, doğru yolu bulmak için hem rehberliğe hem de adalet duygusuna ihtiyaç olduğunu gösterir.",
    love:
      "Aşkta bu ikili, ilişkinin değerler, güven ve dürüstlük üzerinden değerlendirilmesi gerektiğini anlatır.",
    career:
      "Kariyerde bu ikili, resmi süreçler, başvuru kuralları, hoca/mentor desteği veya kurumsal değerlendirmeleri gösterebilir.",
    advice:
      "Kuralları, tarihleri ve resmi detayları ihmal etme; doğru rehberlik almak sana avantaj sağlar.",
  },
  "7-12": {
    title: "adil ve net bir seçim",
    general:
      "Bu ikili, kalbin ve mantığın aynı masaya oturması gerektiğini gösterir. Bir seçim yapılacaksa sadece istekle değil, adalet ve netlikle yapılmalıdır.",
    love:
      "Aşkta bu ikili, ilişkinin sadece çekimle değil dürüstlük, açıklık ve karşılıklı adaletle değerlendirilmesi gerektiğini anlatır.",
    career:
      "Kariyerde bu ikili, iki seçenek arasında mantıklı ve adil karar verme sürecini gösterir.",
    advice:
      "Seçimini sadece duygusal tepkiyle değil, uzun vadede doğru olacak şekilde yap.",
  },
  "7-21": {
    title: "kalbin farkındalıkla seçim yapması",
    general:
      "Bu ikili, bir seçimin artık daha bilinçli ve geçmişten ders alarak yapılması gerektiğini anlatır.",
    love:
      "Aşkta bu ikili, eski bir konunun yeniden değerlendirilip kalbin daha bilinçli bir seçim yapmasını gösterir.",
    career:
      "Kariyerde bu ikili, değerlerinle uyumlu bir kararın değerlendirme veya geri dönüş süreciyle bağlantılı olduğunu gösterir.",
    advice:
      "Sadece ne istediğine değil, geçmişin sana ne öğrettiğine de bak.",
  },
  "8-14": {
    title: "kapanışı harekete dönüştürme",
    general:
      "Bu ikili, biten veya eski haliyle devam edemeyen bir sürecin kişiyi pasif bırakmak yerine harekete zorladığını anlatır.",
    love:
      "Aşkta bu ikili, eski bir ilişki kalıbının kapanıp kişinin artık yön seçmek zorunda kaldığını gösterir.",
    career:
      "Kariyerde bu ikili, eski bir planın kapanmasından sonra yeni yöne kararlı şekilde ilerlemeyi anlatır.",
    advice:
      "Biten şeyin arkasında kalma; bu dönüşüm sana yeni bir yön seçtiriyor olabilir.",
  },
  "8-20": {
    title: "net ilerleme ve olumlu sonuç",
    general:
      "Bu ikili, hareket ve açıklık enerjisini birleştirir. Kişi kararlı adım attığında daha görünür, net ve olumlu bir sonuca yaklaşabilir.",
    love:
      "Aşkta bu ikili, ilişkinin ya da duygusal konunun daha açık, canlı ve net bir yöne ilerleyebileceğini gösterir.",
    career:
      "Kariyerde bu ikili, aktif çaba ve görünür başarı potansiyelini anlatır.",
    advice:
      "Net olmak istediğin konuda pasif kalma; doğru yönde kararlı adım at ve iletişimini açık tut.",
  },
  "8-21": {
    title: "çabanın değerlendirilmesi",
    general:
      "Bu ikili, aktif çaba ve kararlılığın sonunda bir değerlendirme, farkındalık veya sonuç alma sürecine girebileceğini gösterir.",
    love:
      "Aşkta bu ikili, net adım atma isteğinin ciddi bir yüzleşme veya karar konuşması getirebileceğini anlatır.",
    career:
      "Kariyerde bu ikili çok güçlüdür. Emek, başvuru, mücadele veya ilerleme isteğinin değerlendirme ya da geri dönüş alma sürecine bağlanabileceğini gösterir.",
    advice:
      "Pasif bekleme; düzenli hareket et, başvurularını takip et ve çabanın görünür olmasını sağla.",
  },
  "9-16": {
    title: "baskıya rağmen kontrolü geri alma",
    general:
      "Bu ikili, insanı zorlayan bir bağ, korku, baskı ya da takıntı karşısında iç gücü korumayı anlatır. Burada mesele teslim olmak değil, seni neyin zorladığını fark edip kontrolü geri almaktır.",
    love:
      "Aşkta bu ikili, yoğun çekim, kıskançlık, takıntı ya da yoran bir bağ karşısında duygusal olgunlukla kalabilmeyi gösterir.",
    career:
      "Kariyerde bu ikili, stres, fazla hırs, baskı veya seni yoran bir düzene rağmen sakin kalıp kontrolü geri alma ihtiyacını anlatır.",
    advice:
      "Seni zorlayan şeyi yok sayma; onu fark et, sınır koy ve gücünü panikle değil sakinlikle kullan.",
  },
  "10-13": {
    title: "içe çekilerek bekleme",
    general:
      "Bu ikili, hemen hareket etmekten çok durup düşünme, bekleme ve bakış açısını değiştirme sürecini anlatır.",
    love:
      "Aşkta bu ikili, birinin içine kapanması, beklemesi veya duygularını kendi içinde tartması anlamına gelebilir.",
    career:
      "Kariyerde bu ikili, acele karar vermek yerine araştırma, gözlem ve strateji değiştirme dönemini gösterir.",
    advice:
      "Şu an zorlamaktan çok anlamaya çalış; bazen durmak da ilerlemenin bir parçasıdır.",
  },
  "11-22": {
    title: "döngünün tamamlanması",
    general:
      "Bu ikili, değişen bir döngünün tamamlanmaya yaklaştığını anlatır. Bir dönem kapanırken kişi daha bütün, daha olgun ve daha net bir noktaya gelebilir.",
    love:
      "Aşkta bu ikili, ilişkinin ya da duygusal bir döngünün olgunlaşma noktasına geldiğini gösterir.",
    career:
      "Kariyerde bu ikili, değişen şartların sonunda bir sürecin tamamlanması veya daha büyük bir hedefe geçiş anlamına gelir.",
    advice:
      "Geçmişte değişen şeyleri artık daha olgun bir gözle değerlendir.",
  },
  "14-18": {
    title: "dönüşümden sonra umut",
    general:
      "Bu ikili, kapanan bir dönemden sonra umut ve iyileşme alanı açıldığını anlatır.",
    love:
      "Aşkta bu ikili, eski bir duygusal döngünün kapanıp kalbin daha sağlıklı bir umuda açılabileceğini gösterir.",
    career:
      "Kariyerde bu ikili, eski bir planı bırakıp daha ilham veren bir hedefe yönelme enerjisini anlatır.",
    advice:
      "Biten şeye tutunmak yerine, bu bitişin sana hangi yeni kapıyı açtığını görmeye çalış.",
  },
  "16-18": {
    title: "bağdan özgürleşip iyileşme",
    general:
      "Bu ikili, kişiyi yoran bir bağın, korkunun veya takıntının fark edilip daha umutlu bir iyileşme alanına geçilebileceğini gösterir.",
    love:
      "Aşkta bu ikili, yoğun ama yoran bir bağdan sonra kalbin yeniden umut ve şifa aradığını anlatır.",
    career:
      "Kariyerde bu ikili, seni sıkıştıran bir düzen, stres veya baskıdan çıkıp daha umutlu bir hedefe yönelme ihtimalini gösterir.",
    advice:
      "Seni tüketen şeye neden bağlı kaldığını fark et; özgürleşme ihtimali sandığından daha yakın olabilir.",
  },
  "16-22": {
    title: "tamamlanan döngüye rağmen bağlı kalma",
    general:
      "Bu ikili, bir döngünün aslında tamamlanmaya yaklaştığını ama kişinin hâlâ eski bir bağa, korkuya veya alışkanlığa tutunuyor olabileceğini anlatır.",
    love:
      "Aşkta bu ikili, kapanması veya olgunlaşması gereken bir duygusal döngüye rağmen hâlâ bağlılık, takıntı ya da bırakamama temasının etkili olduğunu gösterir.",
    career:
      "Kariyerde bu ikili, bir sürecin tamamlandığını ama eski bir düzen, korku veya güvenli alan yüzünden yeni aşamaya geçmenin zorlaştığını anlatır.",
    advice:
      "Tamamlanan bir şeyi zihninde tekrar tekrar taşımak yerine, artık neyi bırakman gerektiğini fark et.",
  },
  "17-18": {
    title: "kırılmadan sonra iyileşme",
    general:
      "Bu ikili, önce sarsıcı bir farkındalık veya düzen değişimi yaşandığını; ardından umut, toparlanma ve yeniden yön bulma enerjisinin geldiğini anlatır.",
    love:
      "Aşk alanında bu ikili, kırgınlık veya ani bir yüzleşmeden sonra kalbin yeniden iyileşmeye çalıştığını gösterir.",
    career:
      "Kariyer alanında bu ikili, planların sarsıldığı bir süreçten sonra yeni bir umut, hedef veya fırsat doğabileceğini anlatır.",
    advice:
      "Sarsılan şeyin ardından hemen umutsuzluğa kapılma; bu ikili sana yeniden yapılanma alanı açıyor.",
  },
  "20-22": {
    title: "başarıyla tamamlanma",
    general:
      "Bu ikili, açıklık, başarı ve tamamlanma enerjisini taşır. Bir sürecin olumlu şekilde sonuçlanması veya daha bütün bir noktaya gelmesi mümkündür.",
    love:
      "Aşkta bu ikili, daha açık, sıcak ve tamamlanmış bir bağ hissini anlatır.",
    career:
      "Kariyerde bu ikili, görünür başarı, sonuç alma ve bir hedefi tamamlayarak yeni seviyeye geçme enerjisini gösterir.",
    advice:
      "Başarı ihtimalini küçümseme; emek verdiğin şeyi görünür kıl ve tamamlamak için son adımları at.",
  },
};