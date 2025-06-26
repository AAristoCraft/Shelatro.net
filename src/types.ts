// Основные типы игры
// Тип категории карт
export type Category =
  | 'SH' // Бункер
  | 'AP' // Апокалипсис
  | 'GE' // Пол
  | 'AG' // Возраст
  | 'HE' // Здоровье
  | 'PH' // Фобия
  | 'PR' // Профессия
  | 'MI' // Дополнительная информация
  | 'HO' // Хобби
  | 'FO' // Форма
  | 'CH' // Характер
  | 'BA' // Рюкзак
  | 'LI' // Крупный инвентарь
  | 'SA'; // Способности

// Редкость карты
export type Rarity = 'common' | 'rare' | 'epic' | 'legendary' | 'relic';

// Тип описания карты
export interface Card {
  id: string; // уникальный идентификатор
  name: string; // название карты
  description: string; // описание эффекта
  category: Category; // категория
  rarity: Rarity; // редкость
  price: number; // стоимость в магазине
  // модификаторы для подсчета очков
  points?: number; // базовые очки, которые дает карта
  multiplierFor?: string; // id карты, с которой карта взаимодействует
  multiplier?: number; // коэффициент умножения очков, если есть карта выше
  negative?: boolean; // является ли карта отрицательной
}

// Тип игрока
export interface Player {
  id: string; // уникальный id игрока
  name: string; // имя
  hand: Card[]; // карты на руках
  money: number; // валюта
}
