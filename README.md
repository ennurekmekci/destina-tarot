# Destina Tarot

Destina Tarot, Next.js ve TypeScript ile geliştirilmiş sembolik tarot açılım uygulamasıdır.  
Kullanıcı niyetini yazar, açılım türünü seçer ve 6 kartlık tarot açılımı üzerinden geçmiş zaman, şimdiki zaman ve gelecek zaman akışında yorum alır.

Bu proje, kural tabanlı bir yorum motoru kullanır. Kartlar yalnızca tek tek değil, ikili dönem ilişkileriyle birlikte değerlendirilir.

## Canlı Demo

https://destina-tarot.vercel.app/

## Özellikler

- 78 kartlık tam tarot destesi
- Genel, Aşk ve Kariyer açılım türleri
- 6 kartlık açılım sistemi
- Geçmiş zaman, şimdiki zaman ve gelecek zaman yorumları
- Kart çiftlerini birlikte değerlendiren kural tabanlı yorum motoru
- Genel akış ve tavsiye bölümü
- Açılım sonucunu ayrı sayfada görüntüleme
- Açılım geçmişini tarayıcıda saklama
- Kart Rehberi sayfası ile 78 tarot kartını arama ve inceleme
- Tarot kartı görselleriyle desteklenen açılım ve kart rehberi ekranları
- Modern ve mistik arayüz tasarımı
- Vercel Analytics ile temel ziyaret istatistikleri takibi

## Açılım Yapısı

Destina Tarot, 6 kartlık bir açılım kullanır:

- 2 kart: Geçmiş Zaman
- 2 kart: Şimdiki Zaman
- 2 kart: Gelecek Zaman

Her dönem kendi içinde yorumlanır ve ardından kartların genel akışı kullanıcıya özetlenir.

## Kullanılan Teknolojiler

- Next.js
- React
- TypeScript
- Tailwind CSS
- LocalStorage
- Vercel
- Vercel Analytics

## Kurulum

Projeyi bilgisayarına indirdikten sonra bağımlılıkları yükle:

```bash
npm install
```

Geliştirme sunucusunu başlat:

```bash
npm run dev
```

Tarayıcıda şu adresi aç:

```bash
http://localhost:3000
```

## Proje Yapısı

```text
app/
  page.tsx
  tarot/
  reading/
  history/
  cards/

components/
  FeatureCard.tsx
  HistoryItemCard.tsx
  PageShell.tsx
  ReadingTypeButton.tsx
  TarotCardImage.tsx
  TarotInfoCard.tsx
  TarotResultCard.tsx

data/
  tarotCards.ts
  cardNarratives.ts
  combinationMeanings.ts

lib/
  readingEngine.ts
  pairInterpreter.ts
  cardIntelligence.ts

public/
  cards/
```

## Görsel Kaynağı

Bu projede kullanılan tarot kartı görselleri, Wikimedia Commons üzerinde kamu malı olarak sunulan Rider–Waite–Smith tarot destesi görselleri temel alınarak edinilmiştir.

## Not

Bu uygulama eğlence ve sembolik yorum amaçlı geliştirilmiştir.  
Profesyonel psikolojik, hukuki, finansal veya tıbbi tavsiye yerine geçmez.

## Geliştirici

Bu proje, kişisel gelişim ve frontend pratiği amacıyla geliştirilmiştir.

