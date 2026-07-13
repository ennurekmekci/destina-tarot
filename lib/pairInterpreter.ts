import type { TarotCard } from "@/data/tarotCards";
import { cardIntelligence } from "@/lib/cardIntelligence";

type PairRelationship = {
  title: string;
  detail: string;
  advice: string;
};

function getCardIntelligence(card: TarotCard) {
  return cardIntelligence[card.id];
}

export function getPairRelationship(firstCard: TarotCard, secondCard: TarotCard) {
  const firstInfo = getCardIntelligence(firstCard);
  const secondInfo = getCardIntelligence(secondCard);

  const themeGroups = [firstInfo.themeGroup, secondInfo.themeGroup];
  const movements = [firstInfo.movement, secondInfo.movement];
  const energies = [firstInfo.energy, secondInfo.energy];

  const hasTheme = (theme: string) => themeGroups.includes(theme as never);
  const hasMovement = (movement: string) => movements.includes(movement as never);
  const hasEnergy = (energy: string) => energies.includes(energy as never);

  const hasActive = hasMovement("active");
  const hasPassive = hasMovement("passive");
  const hasReflective = hasMovement("reflective");
  const hasTransformative = hasMovement("transformative");
  const hasHealing = hasMovement("healing");
  const hasBalancing = hasMovement("balancing");
  const hasCompleting = hasMovement("completing");
  const hasChallenging = hasEnergy("challenging");

  if (hasTheme("strength") && hasTheme("progress")) {
    return {
      title: "baskı altında kararlı ilerleme",
      detail:
        "Bu ikili, zorluk karşısında sadece sabretmeyi değil, o sabrı bir yöne çevirmeyi anlatır. İç güç hareketle birleştiğinde kişi dağılmadan ilerleyebilir.",
      advice:
        "Gücünü sadece dayanmak için değil, doğru yöne ilerlemek için kullan.",
    };
  }

  if (hasTheme("change") && hasTheme("justice")) {
    return {
      title: "değişen şartlarda adil netleşme",
      detail:
        "Bu ikili, değişen bir durumun rastgele değil, daha adil ve bilinçli bir kararla netleşmesi gerektiğini gösterir.",
      advice:
        "Şartlar değişiyorsa eski bakışta kalma; yeni durumu adil ve net değerlendir.",
    };
  }

  if (hasTheme("choice") && hasTheme("balance")) {
    return {
      title: "seçimde denge kurma",
      detail:
        "Bu ikili, bir kararın sadece istekle değil, iç denge ve uzun vadeli uyumla verilmesi gerektiğini anlatır.",
      advice:
        "Seçimini aceleye getirme; sana hem doğru hem de dengeli gelen yolu gör.",
    };
  }

  if (hasTheme("choice") && hasTheme("awakening")) {
    return {
      title: "farkındalıkla seçim yapma",
      detail:
        "Bu ikili, eski bir konunun yeniden fark edilip kalbin ya da zihnin daha bilinçli bir seçim noktasına geldiğini anlatır.",
      advice:
        "Sadece ne hissettiğine değil, bu farkındalığın sana ne öğrettiğine de bak.",
    };
  }

  if (hasTheme("choice") && hasTheme("uncertainty")) {
    return {
      title: "belirsizlik içinde karar arayışı",
      detail:
        "Bu ikili, karar vermek istenen bir konuda bazı şeylerin hâlâ tam netleşmediğini gösterir. Önce eksik bilgi tamamlanmalıdır.",
      advice:
        "Net olmayan yerde kesin karar verme; önce gördüğünle hissettiğini ayır.",
    };
  }

  if (hasTheme("attachment") && hasTheme("strength")) {
    return {
      title: "zorlayan bağ karşısında iç güç",
      detail:
        "Bu ikili, kişiyi çeken ama aynı zamanda zorlayan bir durum karşısında olgunluk, sınır ve öz kontrol gerektiğini anlatır.",
      advice:
        "Seni zorlayan bağın seni yönetmesine izin verme; sınırını sakin ama net çiz.",
    };
  }

  if (hasTheme("attachment") && hasTheme("progress")) {
    return {
      title: "bağlı kalmadan ilerleme",
      detail:
        "Bu ikili, kişiyi tutan bir korku, alışkanlık ya da bağ varken bile hareket etme ihtiyacını gösterir. İlerlemek için önce neyin tuttuğu görülmelidir.",
      advice:
        "Seni geride tutan şeyi fark etmeden ilerlemeye çalışma; önce bağı gör, sonra yönünü seç.",
    };
  }

  if (hasTheme("attachment") && hasHealing) {
    return {
      title: "yoran bağdan iyileşmeye geçiş",
      detail:
        "Bu ikili, kişiyi tüketen bir döngünün fark edilip daha umutlu ve onarıcı bir alana geçilebileceğini gösterir.",
      advice:
        "Seni yoran şeye neden tutunduğunu fark et; iyileşme oradan başlar.",
    };
  }

  if (hasTheme("ending") && hasTheme("progress")) {
    return {
      title: "kapanışı ilerlemeye dönüştürme",
      detail:
        "Bu ikili, biten veya eski haliyle devam edemeyen bir sürecin kişiyi durdurmak yerine yeni bir yöne ittiğini anlatır.",
      advice:
        "Kapanan kapının önünde kalma; bu bitişin seni hangi yöne ittiğini gör.",
    };
  }

  if (hasTheme("ending") && hasTheme("beginning")) {
    return {
      title: "bitişten yeni başlangıca geçiş",
      detail:
        "Bu ikili, eski bir sayfanın kapanıp yeni bir deneyime yer açtığını gösterir. Burada bitiş kayıp kadar yenilenme de taşır.",
      advice:
        "Biten şeyi tamamen başarısızlık gibi görme; yeni başlangıç için alan açılıyor olabilir.",
    };
  }

  if (hasTheme("ending") && hasHealing) {
    return {
      title: "kapanıştan sonra iyileşme",
      detail:
        "Bu ikili, eski bir döngünün kapanmasının ardından daha yumuşak ve umutlu bir toparlanma sürecine geçilebileceğini anlatır.",
      advice:
        "Bitişi aceleyle doldurmaya çalışma; önce iyileşmeye alan aç.",
    };
  }

  if (hasTheme("disruption") && hasTheme("balance")) {
    return {
      title: "sarsıntıdan sonra denge kurma",
      detail:
        "Bu ikili, ani bir farkındalık veya düzen değişiminden sonra yeniden ölçü, sakinlik ve uyum kurma ihtiyacını anlatır.",
      advice:
        "Sarsılan şeyin ardından hemen tepki verme; önce dengenin nerede bozulduğunu gör.",
    };
  }

  if (hasTheme("disruption") && hasHealing) {
    return {
      title: "kırılmadan sonra toparlanma",
      detail:
        "Bu ikili, ani bir yüzleşme veya bozulmanın ardından umut ve iyileşme alanının açılabileceğini gösterir.",
      advice:
        "Sarsıntıyı son gibi değil, daha sağlam bir temel kurma çağrısı gibi oku.",
    };
  }

  if (hasTheme("uncertainty") && hasTheme("hope")) {
    return {
      title: "belirsizlikten umuda geçiş",
      detail:
        "Bu ikili, her şey net olmasa bile kişinin içinde daha umutlu ve iyileştirici bir yön bulabileceğini anlatır.",
      advice:
        "Belirsizliği büyütmek yerine, sana umut veren küçük işaretleri gerçekçi şekilde takip et.",
    };
  }

  if (hasTheme("structure") && hasTheme("hope")) {
    return {
      title: "umudu plana dönüştürme",
      detail:
        "Bu ikili, hayal edilen veya umut edilen bir şeyin ancak düzen, sorumluluk ve yapı kurarak büyüyebileceğini gösterir.",
      advice:
        "Umut ettiğin şeyi somutlaştır; plan yapmadan sadece beklemek yeterli olmaz.",
    };
  }

  if (hasTheme("structure") && hasTheme("choice")) {
    return {
      title: "seçimi sağlam zemine oturtma",
      detail:
        "Bu ikili, karar verirken sadece duygusal çekime değil, güven, düzen ve uzun vadeli sağlamlığa da bakmak gerektiğini anlatır.",
      advice:
        "Seçimini yaparken sadece ne istediğini değil, neyin sürdürülebilir olduğunu da düşün.",
    };
  }

  if (hasTheme("success") && hasTheme("progress")) {
    return {
      title: "ilerleyerek görünür sonuç alma",
      detail:
        "Bu ikili, hareket ve açıklık birleştiğinde kişinin daha net, görünür ve olumlu bir sonuca yaklaşabileceğini anlatır.",
      advice:
        "Pasif kalma; doğru yönde attığın adımlar görünür sonuç getirebilir.",
    };
  }

  if (hasTheme("success") && hasTheme("power")) {
    return {
      title: "yeteneği görünür başarıya çevirme",
      detail:
        "Bu ikili, kişinin becerisini doğru kullandığında daha açık ve olumlu bir sonuç alabileceğini gösterir.",
      advice:
        "Yapabildiğin şeyi saklama; görünür oldukça fırsatın artar.",
    };
  }

  if (hasTheme("completion") && hasTheme("change")) {
    return {
      title: "değişen döngünün tamamlanması",
      detail:
        "Bu ikili, yön değiştiren bir sürecin artık daha olgun ve tamamlanmış bir noktaya gelebileceğini anlatır.",
      advice:
        "Değişen şeyleri eski haliyle tutmaya çalışma; döngünün neyi tamamladığını gör.",
    };
  }

  if (hasTheme("completion") && hasTheme("attachment")) {
    return {
      title: "tamamlanan şeye tutunma",
      detail:
        "Bu ikili, bir sürecin aslında tamamlandığını ama kişinin hâlâ eski bağ, korku veya alışkanlık yüzünden orada kalabileceğini gösterir.",
      advice:
        "Tamamlanan şeyi zihninde yeniden başlatmaya çalışma; bırakman gereken yeri fark et.",
    };
  }

  if (hasReflective && hasActive) {
    return {
      title: "düşündükten sonra harekete geçme",
      detail:
        "Bu ikili, önce içsel netlik arandığını; ardından bu farkındalığın karar ve hareket enerjisine dönüşebileceğini gösterir.",
      advice:
        "Önce ne istediğini dürüstçe gör, sonra bunu küçük ama net bir adımla destekle.",
    };
  }

  if (hasPassive && hasActive) {
    return {
      title: "istek var ama zamanlama bekliyor",
      detail:
        "Bu ikili, bir tarafın ilerlemek istediğini; diğer tarafın ise hâlâ bekleme, düşünme veya farklı açıdan bakma gerektirdiğini anlatır.",
      advice:
        "Sonucu zorlamak yerine doğru zamanlamayı ve bakış açını netleştir.",
    };
  }

  if (hasTransformative && hasActive) {
    return {
      title: "değişimi harekete dönüştürme",
      detail:
        "Bu ikili, değişimin sadece içte kalmadığını; bir karar, yön değişimi veya ilerleme ihtiyacı doğurduğunu anlatır.",
      advice:
        "Değişim geldiyse onu sadece düşüncede bırakma; daha bilinçli bir yöne çevir.",
    };
  }

  if (hasTransformative && hasHealing) {
    return {
      title: "sarsıntıdan sonra iyileşme",
      detail:
        "Bu ikili, eski bir düzenin değişmesinden sonra daha yumuşak, umutlu ve onarıcı bir sürece geçilebileceğini gösterir.",
      advice:
        "Sarsılan şeyi hemen kayıp gibi okuma; orada iyileşme için açılan bir alan olabilir.",
    };
  }

  if (hasChallenging && hasBalancing) {
    return {
      title: "zorlayıcı enerjiyi dengeye alma",
      detail:
        "Bu ikili, baskı, korku veya stres yaratan bir temanın sabır ve ölçüyle daha yönetilebilir hale gelebileceğini anlatır.",
      advice:
        "Aşırı tepki vermeden sınır koy; dengeni korumak bu sürecin anahtarı.",
    };
  }

  if (hasChallenging && hasActive) {
    return {
      title: "baskının içinden yön seçme",
      detail:
        "Bu ikili, kişiyi zorlayan bir durumun aynı zamanda hareket etmeye ve kontrolü geri almaya çağırdığını gösterir.",
      advice:
        "Seni zorlayan şeyi görmezden gelme; onu fark edip daha sağlıklı bir hareket planına çevir.",
    };
  }

  if (hasHealing && hasCompleting) {
    return {
      title: "iyileşerek tamamlanma",
      detail:
        "Bu ikili, bir sürecin daha sakin, umutlu ve olgun bir kapanışa ya da yeni seviyeye yaklaşabileceğini gösterir.",
      advice:
        "Tamamlanmaya yaklaşan şeyi huzurla kabul et; iyileşme sürecini aceleye getirme.",
    };
  }

  if (hasCompleting) {
    return {
      title: "tamamlanmaya yaklaşan süreç",
      detail:
        "Bu ikili, yaşananların bir sonuca, kapanışa veya daha olgun bir aşamaya yaklaşabileceğini anlatır.",
      advice:
        "Süreci yarım bırakma; neyin tamamlandığını ve sıradaki adımın ne olduğunu gör.",
    };
  }

  if (hasHealing) {
    return {
      title: "umutla toparlanma",
      detail:
        "Bu ikili, kalbin ya da zihnin daha umutlu, daha onarıcı ve daha yumuşak bir enerjiye açıldığını gösterir.",
      advice:
        "Umudu sadece beklemek için değil, kendini toparlamak için kullan.",
    };
  }

  if (hasBalancing) {
    return {
      title: "dengeyi bilinçli kurma",
      detail:
        "Bu ikili, hızlı bir sonuçtan çok ölçülü, sakin ve sürdürülebilir bir yol kurmanın daha doğru olduğunu anlatır.",
      advice:
        "Aşırılardan uzak dur; dengeli olanı seç ama bunu pasif bekleme haline getirme.",
    };
  }

  return {
    title: "ortak yönü fark etme",
    detail:
      "Bu ikili, aynı konunun iki farklı tarafını gösterir. Biri sürecin ihtiyacını, diğeri bu ihtiyaca nasıl yaklaşılacağını anlatır.",
    advice:
      "Tek bir karta takılma; iki kartın birlikte anlattığı ortak yönü görmeye çalış.",
  };
}
