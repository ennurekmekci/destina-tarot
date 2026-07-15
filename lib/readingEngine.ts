import type { TarotCard } from "@/data/tarotCards";
import { cardNarratives } from "@/data/cardNarratives";
import { combinationMeanings } from "@/data/combinationMeanings";
import { getPairRelationship } from "@/lib/pairInterpreter";

export type ReadingType = "general" | "love" | "career";

export type DrawnCard = {
  position: string;
  card: TarotCard;
};

type ReadingPeriod = "past" | "present" | "future";

type ReadingContext = {
  topic: string;
  intent: string;
  emotionalTone: string;
};

type ReadingSection = {
  headline: string;
  detail: string;
};



type PairInterpretation = {
  title: string;
  detail: string;
  advice: string;
};

export type SixCardReading = {
  pastSummary: ReadingSection;
  presentSummary: ReadingSection;
  futureSummary: ReadingSection;
  flowSummary: ReadingSection;
  advice: ReadingSection;
  fullSummary: string;
};

const periodLabels: Record<ReadingPeriod, string> = {
  past: "Geçmiş Zaman",
  present: "Şimdiki Zaman",
  future: "Gelecek Zaman",
};

const periodEmojis: Record<ReadingPeriod, string> = {
  past: "🔎",
  present: "✨",
  future: "🌙",
};

function normalizeText(text: string) {
  return text.trim().toLocaleLowerCase("tr-TR");
}

function includesAny(text: string, keywords: string[]) {
  return keywords.some((keyword) => text.includes(keyword));
}

function getCombinationKey(firstCard: TarotCard, secondCard: TarotCard) {
  return [firstCard.id, secondCard.id].sort((a, b) => a - b).join("-");
}

function getCombinationMeaning(
  firstCard: TarotCard,
  secondCard: TarotCard,
  readingType: ReadingType,
) {
  const key = getCombinationKey(firstCard, secondCard);
  const combination = combinationMeanings[key];

  if (!combination) {
    return null;
  }

  return {
    title: combination.title,
    meaning: combination[readingType],
    advice: combination.advice,
  };
}

function getCardNarrative(card: TarotCard) {
  const narrative = cardNarratives[card.id];

  if (narrative) {
    return narrative;
  }

  const mainKeyword = card.keywords[0] || "ana tema";

  return {
    generalRole: `${card.turkishName} kartının "${mainKeyword}" temasını`,
    loveRole: `${card.turkishName} kartının ilişkilerde "${mainKeyword}" temasını`,
    careerRole: `${card.turkishName} kartının kariyer ve hedeflerde "${mainKeyword}" temasını`,
    pressure: "bu temayı dengesiz yaşamak",
    strength: mainKeyword,
  };
}

export function analyzeQuestion(
  question: string,
  readingType: ReadingType,
): ReadingContext {
  const normalizedQuestion = normalizeText(question);

  if (
    readingType === "love" ||
    includesAny(normalizedQuestion, [
      "aşk",
      "sevgi",
      "ilişki",
      "sevgili",
      "eski sevgili",
      "hoşlan",
      "barış",
      "döner mi",
      "beni seviyor",
    ])
  ) {
    return {
      topic: "aşk ve ilişkiler",
      intent: "duygusal netlik arayışı",
      emotionalTone: "kalpte belirsizlik ve cevap arama isteği",
    };
  }

  if (
    readingType === "career" ||
    includesAny(normalizedQuestion, [
      "iş",
      "kariyer",
      "staj",
      "okul",
      "sınav",
      "ders",
      "para",
      "başvuru",
      "mülakat",
      "proje",
      "çalışma",
    ])
  ) {
    return {
      topic: "kariyer, okul ve hedefler",
      intent: "geleceğe dair yön bulma isteği",
      emotionalTone: "başarma isteğiyle birlikte biraz belirsizlik",
    };
  }

  if (
    includesAny(normalizedQuestion, [
      "kendim",
      "ruh",
      "yorgun",
      "mutsuz",
      "kararsız",
      "ne yapmalıyım",
      "hayatım",
      "değişim",
      "toparlan",
    ])
  ) {
    return {
      topic: "kişisel yolculuk",
      intent: "içsel anlam ve yön arayışı",
      emotionalTone: "iç dünyada netleşme ihtiyacı",
    };
  }

  return {
    topic: "genel yaşam enerjisi",
    intent: "durumu daha iyi anlama isteği",
    emotionalTone: "merak ve netleşme arzusu",
  };
}

function getPairInterpretation(
  firstCard: TarotCard,
  secondCard: TarotCard,
  readingType: ReadingType,
): PairInterpretation {
  const combination = getCombinationMeaning(firstCard, secondCard, readingType);

  if (combination) {
    return {
      title: combination.title,
      detail: combination.meaning,
      advice: combination.advice,
    };
  }

  const relationship = getPairRelationship(firstCard, secondCard);
  const firstNarrative = getCardNarrative(firstCard);
  const secondNarrative = getCardNarrative(secondCard);

  const firstRole =
    readingType === "love"
      ? firstNarrative.loveRole
      : readingType === "career"
        ? firstNarrative.careerRole
        : firstNarrative.generalRole;

  const secondRole =
    readingType === "love"
      ? secondNarrative.loveRole
      : readingType === "career"
        ? secondNarrative.careerRole
        : secondNarrative.generalRole;

  return {
    title: relationship.title,
    detail: `${firstCard.turkishName} ${firstRole} öne çıkarırken, ${secondCard.turkishName} ${secondRole} gündeme getiriyor. ${relationship.detail}`,
    advice: relationship.advice,
  };
}

function formatHeadlineTitle(title: string) {
  return title.charAt(0).toLocaleUpperCase("tr-TR") + title.slice(1);
}

function generatePairSummary({
  period,
  firstCard,
  secondCard,
  readingType,
  context,
}: {
  period: ReadingPeriod;
  firstCard: TarotCard;
  secondCard: TarotCard;
  readingType: ReadingType;
  context: ReadingContext;
}): ReadingSection {
  const periodLabel = periodLabels[period];
  const periodEmoji = periodEmojis[period];
  const pair = getPairInterpretation(firstCard, secondCard, readingType);

  if (period === "past") {
    return {
      headline: `${periodEmoji} ${formatHeadlineTitle(pair.title)}`,
      detail: `${periodLabel} tarafında ${firstCard.turkishName} ve ${secondCard.turkishName}, ${context.topic} alanında "${pair.title}" temasını anlatıyor. ${pair.detail}`,
    };
  }

  if (period === "present") {
    return {
      headline: `${periodEmoji} ${formatHeadlineTitle(pair.title)}`,
      detail: `${periodLabel} tarafında ${firstCard.turkishName} ve ${secondCard.turkishName}, bu dönemin merkezindeki "${pair.title}" enerjisini öne çıkarıyor. ${pair.detail}`,
    };
  }

  return {
    headline: `${periodEmoji} ${formatHeadlineTitle(pair.title)}`,
    detail: `${periodLabel} tarafında ${firstCard.turkishName} ve ${secondCard.turkishName}, sürecin "${pair.title}" yönüne akabileceğini gösteriyor. ${pair.detail}`,
  };
}

function generateFlowSummary({
  pastCards,
  presentCards,
  futureCards,
  readingType,
  context,
}: {
  pastCards: TarotCard[];
  presentCards: TarotCard[];
  futureCards: TarotCard[];
  readingType: ReadingType;
  context: ReadingContext;
}): ReadingSection {
  const pastPair = getPairInterpretation(
    pastCards[0],
    pastCards[1],
    readingType,
  );
  const presentPair = getPairInterpretation(
    presentCards[0],
    presentCards[1],
    readingType,
  );
  const futurePair = getPairInterpretation(
    futureCards[0],
    futureCards[1],
    readingType,
  );

  return {
    headline: `✨ ${formatHeadlineTitle(pastPair.title)} → ${formatHeadlineTitle(
      presentPair.title,
    )} → ${formatHeadlineTitle(futurePair.title)}`,
    detail: `Bu açılım ${context.topic} alanında tek bir cevaptan çok, üç aşamalı bir süreci anlatıyor. Geçmiş zaman "${pastPair.title}" temasını taşırken, şimdiki zaman "${presentPair.title}" noktasına gelmiş görünüyor. Gelecek zaman ise "${futurePair.title}" yönünü öne çıkarıyor. Bu yüzden kartların genel mesajı, sürecin nereden gelip hangi yöne evrilebileceğini okumakla ilgili.`,
  };
}

function generateAdvice({
  presentCards,
  futureCards,
  readingType,
}: {
  presentCards: TarotCard[];
  futureCards: TarotCard[];
  readingType: ReadingType;
  context: ReadingContext;
}): ReadingSection {
  const presentPair = getPairInterpretation(
    presentCards[0],
    presentCards[1],
    readingType,
  );

  const futurePair = getPairInterpretation(
    futureCards[0],
    futureCards[1],
    readingType,
  );

  if (readingType === "love") {
    return {
      headline: `🧭 ${formatHeadlineTitle(presentPair.title)} enerjisini, ${futurePair.title} ile dengele.`,
      detail: `Bu açılımda kalbin için ana öneri şu: içinde bulunduğun duyguyu hemen sonuca zorlamadan, gelecek zamanın gösterdiği yöne daha sakin ve bilinçli ilerlemek. ${presentPair.advice} ${futurePair.advice}`,
    };
  }

  if (readingType === "career") {
    return {
      headline: `🧭 ${formatHeadlineTitle(presentPair.title)} noktasından, ${futurePair.title} yönüne ilerle.`,
      detail: `Bu açılım sana sadece beklemeyi değil, şu anki enerjiyi daha düzenli ve görünür bir adıma çevirmeyi öneriyor. ${presentPair.advice} ${futurePair.advice}`,
    };
  }

  return {
    headline: `🧭 ${formatHeadlineTitle(presentPair.title)} ile ${futurePair.title} arasındaki mesajı takip et.`,
    detail: `Bu açılımda asıl öneri, içinde bulunduğun süreci fark edip gelecek zamanın gösterdiği yöne daha bilinçli yaklaşmak. ${presentPair.advice} ${futurePair.advice}`,
  };
}

export function generateSixCardReading({
  question,
  readingType,
  drawnCards,
}: {
  question: string;
  readingType: ReadingType;
  drawnCards: DrawnCard[];
}): SixCardReading {
  const context = analyzeQuestion(question, readingType);

  const pastCards = [drawnCards[0].card, drawnCards[1].card];
  const presentCards = [drawnCards[2].card, drawnCards[3].card];
  const futureCards = [drawnCards[4].card, drawnCards[5].card];

  const pastSummary = generatePairSummary({
    period: "past",
    firstCard: pastCards[0],
    secondCard: pastCards[1],
    readingType,
    context,
  });

  const presentSummary = generatePairSummary({
    period: "present",
    firstCard: presentCards[0],
    secondCard: presentCards[1],
    readingType,
    context,
  });

  const futureSummary = generatePairSummary({
    period: "future",
    firstCard: futureCards[0],
    secondCard: futureCards[1],
    readingType,
    context,
  });

  const flowSummary = generateFlowSummary({
    pastCards,
    presentCards,
    futureCards,
    readingType,
    context,
  });

  const advice = generateAdvice({
    presentCards,
    futureCards,
    readingType,
    context,
  });

  const questionIntro = question.trim()
    ? `Bu açılım "${question.trim()}" niyeti üzerinden yorumlanıyor.`
    : "";

  return {
    pastSummary,
    presentSummary,
    futureSummary,
    flowSummary,
    advice,
    fullSummary: [
      questionIntro,
      pastSummary.headline,
      pastSummary.detail,
      presentSummary.headline,
      presentSummary.detail,
      futureSummary.headline,
      futureSummary.detail,
      flowSummary.headline,
      flowSummary.detail,
      advice.headline,
      advice.detail,
    ]
      .filter(Boolean)
      .join("\n\n"),
  };
}