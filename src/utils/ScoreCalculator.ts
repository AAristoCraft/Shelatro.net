import { Card } from '../types';

// Подсчет очков игрока на основе карт
export function calculateScore(cards: Card[]): number {
  let score = 0;

  // перебираем карты и суммируем очки
  cards.forEach((card) => {
    score += card.points || 0;
  });

  // применяем модификаторы "xINT карта Y"
  cards.forEach((card) => {
    if (card.multiplierFor && card.multiplier) {
      const hasTarget = cards.find((c) => c.id === card.multiplierFor);
      if (hasTarget) {
        score *= card.multiplier;
      }
    }
  });

  return score;
}
