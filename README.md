# Destina Tarot

Destina Tarot, Next.js ve TypeScript ile geliştirilmiş sembolik tarot açılım uygulamasıdır.  
Kullanıcı niyetini yazar, açılım türünü seçer ve 6 kartlık tarot açılımı üzerinden geçmiş zaman, şimdiki zaman ve gelecek zaman akışında yorum alır.

Bu proje, kural tabanlı bir yorum motoru kullanır. Kartlar yalnızca tek tek değil, ikili dönem ilişkileriyle birlikte değerlendirilir.

## Özellikler

- 78 kartlık tam tarot destesi
- Genel, Aşk ve Kariyer açılım türleri
- 6 kartlık açılım sistemi
- Geçmiş zaman, şimdiki zaman ve gelecek zaman yorumları
- Kart çiftlerini birlikte değerlendiren kural tabanlı yorum motoru
- Genel akış ve tavsiye bölümü
- Açılım geçmişini tarayıcıda saklama
- Modern ve mistik arayüz tasarımı

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
  history/

components/
  FeatureCard.tsx
  HistoryItemCard.tsx
  PageShell.tsx
  ReadingTypeButton.tsx
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
```

## Not

Bu uygulama eğlence ve sembolik yorum amaçlı geliştirilmiştir.  
Profesyonel psikolojik, hukuki, finansal veya tıbbi tavsiye yerine geçmez.

## Geliştirici

Bu proje, kişisel gelişim ve frontend pratiği amacıyla geliştirilmiştir.


https://destina-tarot.vercel.app/
