export type CardEnergy = "positive" | "neutral" | "challenging";

export type CardMovement =
  | "active"
  | "passive"
  | "reflective"
  | "transformative"
  | "healing"
  | "balancing"
  | "completing";

export type CardThemeGroup =
  | "beginning"
  | "power"
  | "intuition"
  | "growth"
  | "structure"
  | "guidance"
  | "choice"
  | "progress"
  | "strength"
  | "wisdom"
  | "change"
  | "justice"
  | "waiting"
  | "ending"
  | "balance"
  | "attachment"
  | "disruption"
  | "hope"
  | "uncertainty"
  | "success"
  | "awakening"
  | "completion";

export type CardIntelligence = {
  energy: CardEnergy;
  movement: CardMovement;
  themeGroup: CardThemeGroup;
  coreMessage: string;
  shadowMessage: string;
  adviceMessage: string;
};

export const cardIntelligence: Record<number, CardIntelligence> = {
  1: {
    energy: "positive",
    movement: "active",
    themeGroup: "beginning",
    coreMessage: "Yeni bir başlangıç ve cesur adım enerjisi taşır.",
    shadowMessage:
      "Düşünmeden hareket etmek veya yeterince hazırlık yapmadan yola çıkmak risk oluşturabilir.",
    adviceMessage:
      "Her şeyi tamamen bilmesen bile küçük ve cesur bir başlangıç yap.",
  },
  2: {
    energy: "positive",
    movement: "active",
    themeGroup: "power",
    coreMessage: "Kişisel yetenekleri kullanma ve sonucu şekillendirme gücü verir.",
    shadowMessage:
      "Potansiyelini kullanmamak veya sadece düşüncede kalmak enerjiyi zayıflatabilir.",
    adviceMessage:
      "Elindeki imkanları fark et ve kendini daha görünür şekilde ortaya koy.",
  },
  3: {
    energy: "neutral",
    movement: "reflective",
    themeGroup: "intuition",
    coreMessage: "Sezgi, iç ses ve görünmeyen bilgileri temsil eder.",
    shadowMessage:
      "Belirsizlik içinde fazla beklemek veya sezgiyi korkuyla karıştırmak zorlayabilir.",
    adviceMessage:
      "Acele karar verme; önce hissettiğini gözlemle ve eksik bilgileri tamamla.",
  },
  4: {
    energy: "positive",
    movement: "healing",
    themeGroup: "growth",
    coreMessage: "Bereket, gelişim ve besleyici bir büyüme enerjisi taşır.",
    shadowMessage:
      "Fazla korumacı olmak veya konfor alanında kalmak gelişimi yavaşlatabilir.",
    adviceMessage:
      "Emek verdiğin şeyi sabırla büyüt; gelişim için alan aç.",
  },
  5: {
    energy: "neutral",
    movement: "active",
    themeGroup: "structure",
    coreMessage: "Düzen, otorite ve sağlam yapı kurma ihtiyacını anlatır.",
    shadowMessage:
      "Fazla kontrolcü olmak veya esnekliği kaybetmek süreci zorlaştırabilir.",
    adviceMessage:
      "Plan yap, sınır koy ve daha sağlam bir düzen kur.",
  },
  6: {
    energy: "neutral",
    movement: "reflective",
    themeGroup: "guidance",
    coreMessage: "Rehberlik, öğrenme, gelenek ve doğru yol arayışını anlatır.",
    shadowMessage:
      "Sadece dış onaya bağlı kalmak kendi iç sesini bastırabilir.",
    adviceMessage:
      "Bilgi al, danış, ama son kararı kendi değerlerinle değerlendir.",
  },
  7: {
    energy: "positive",
    movement: "active",
    themeGroup: "choice",
    coreMessage: "Seçim, bağ kurma ve içsel uyum temasını taşır.",
    shadowMessage:
      "Kararsızlık veya sadece duyguyla hareket etmek dengeyi bozabilir.",
    adviceMessage:
      "Kalbinle aklını aynı noktada buluşturan seçeneğe yönel.",
  },
  8: {
    energy: "positive",
    movement: "active",
    themeGroup: "progress",
    coreMessage: "İlerleme, kararlılık ve hedefe odaklanma enerjisi verir.",
    shadowMessage:
      "Kontrolü fazla zorlamak veya aceleci davranmak süreci gerebilir.",
    adviceMessage:
      "Dağılmadan ilerle; hedefini netleştir ve adımlarını takip et.",
  },
  9: {
    energy: "positive",
    movement: "balancing",
    themeGroup: "strength",
    coreMessage: "Sabır, iç güç ve duygusal olgunluk anlatır.",
    shadowMessage:
      "Gücünü bastırmak ya da her şeyi içine atmak yorucu olabilir.",
    adviceMessage:
      "Sakin kal, kendine güven ve gücünü yumuşak ama kararlı kullan.",
  },
  10: {
    energy: "neutral",
    movement: "reflective",
    themeGroup: "wisdom",
    coreMessage: "İçe dönüş, bilgelik ve yalnız kalıp düşünme ihtiyacını anlatır.",
    shadowMessage:
      "Fazla içine kapanmak dış dünyadan gelen fırsatları kaçırmana neden olabilir.",
    adviceMessage:
      "Biraz geri çekil, düşün, ama tamamen kopmadan yönünü belirle.",
  },
  11: {
    energy: "neutral",
    movement: "transformative",
    themeGroup: "change",
    coreMessage: "Döngü değişimi, şans ve beklenmedik yön değişimini anlatır.",
    shadowMessage:
      "Değişime direnmek fırsatı görmeni zorlaştırabilir.",
    adviceMessage:
      "Esnek kal; değişen şartların sana ne öğrettiğini fark et.",
  },
  12: {
    energy: "neutral",
    movement: "balancing",
    themeGroup: "justice",
    coreMessage: "Adalet, net karar ve hak ediş temasını taşır.",
    shadowMessage:
      "Duygusal tepkiyle karar vermek objektifliği bozabilir.",
    adviceMessage:
      "Dürüst, net ve dengeli bir karar vermeye çalış.",
  },
  13: {
    energy: "neutral",
    movement: "passive",
    themeGroup: "waiting",
    coreMessage: "Bekleme, teslimiyet ve bakış açısı değiştirme sürecini anlatır.",
    shadowMessage:
      "Gereğinden fazla askıda kalmak ilerlemeyi geciktirebilir.",
    adviceMessage:
      "Durumu zorlamak yerine farklı açıdan görmeye çalış.",
  },
  14: {
    energy: "challenging",
    movement: "transformative",
    themeGroup: "ending",
    coreMessage: "Bitiş, dönüşüm ve eskiyi bırakma enerjisi taşır.",
    shadowMessage:
      "Biten şeye tutunmak yeni döneme geçişi zorlaştırabilir.",
    adviceMessage:
      "Kapanması gereken döngüyü fark et ve yenisine alan aç.",
  },
  15: {
    energy: "positive",
    movement: "balancing",
    themeGroup: "balance",
    coreMessage: "Uyum, sabır ve orta yolu bulma enerjisi verir.",
    shadowMessage:
      "Aşırı temkinli olmak bazen hareketi yavaşlatabilir.",
    adviceMessage:
      "Acele etmeden, dengeli ve sürdürülebilir ilerle.",
  },
  16: {
    energy: "challenging",
    movement: "transformative",
    themeGroup: "attachment",
    coreMessage: "Bağımlılık, takıntı veya seni kısıtlayan bağları görünür kılar.",
    shadowMessage:
      "Seni yoran şeye bağlı kalmak özgürleşmeni geciktirebilir.",
    adviceMessage:
      "Neye fazla tutunduğunu fark et ve kontrolü geri almaya çalış.",
  },
  17: {
    energy: "challenging",
    movement: "transformative",
    themeGroup: "disruption",
    coreMessage: "Ani değişim, yıkılan yapı ve güçlü farkındalık getirir.",
    shadowMessage:
      "Sarsıntıyı sadece kayıp gibi görmek, içindeki yenilenme fırsatını gizleyebilir.",
    adviceMessage:
      "Yıkılan şeyin yerine daha sağlam ne kurabileceğini düşün.",
  },
  18: {
    energy: "positive",
    movement: "healing",
    themeGroup: "hope",
    coreMessage: "Umut, şifa ve yeniden inanma enerjisi taşır.",
    shadowMessage:
      "Sadece hayal kurup adım atmamak süreci pasifleştirebilir.",
    adviceMessage:
      "Umudunu koru ama onu küçük ve gerçek adımlarla destekle.",
  },
  19: {
    energy: "neutral",
    movement: "reflective",
    themeGroup: "uncertainty",
    coreMessage: "Belirsizlik, sezgi ve görünmeyen detayları anlatır.",
    shadowMessage:
      "Korkularla sezgileri karıştırmak yanlış kararlar doğurabilir.",
    adviceMessage:
      "Netleşmeyen konularda acele etme; bilgi topla ve gözlem yap.",
  },
  20: {
    energy: "positive",
    movement: "active",
    themeGroup: "success",
    coreMessage: "Açıklık, neşe, başarı ve görünür olma enerjisi taşır.",
    shadowMessage:
      "Fazla iyimserlikle detayları ihmal etmek küçük sorunlar yaratabilir.",
    adviceMessage:
      "Kendini ve emeğini görünür kıl; olumlu enerjiyi değerlendir.",
  },
  21: {
    energy: "neutral",
    movement: "transformative",
    themeGroup: "awakening",
    coreMessage: "Uyanış, değerlendirme ve önemli farkındalık sürecini anlatır.",
    shadowMessage:
      "Geçmişten gelen dersi görmezden gelmek aynı döngüyü tekrar ettirebilir.",
    adviceMessage:
      "Geçmişten gelen işareti değerlendir ve daha bilinçli karar ver.",
  },
  22: {
    energy: "positive",
    movement: "completing",
    themeGroup: "completion",
    coreMessage: "Tamamlanma, bütünlük ve başarıyla sonuç alma enerjisi taşır.",
    shadowMessage:
      "Bir döngü tamamlandığı halde eski aşamada kalmaya çalışmak gelişimi yavaşlatabilir.",
    adviceMessage:
      "Tamamlanan süreci kabul et ve bir sonraki seviyeye hazırlan.",
  },
};