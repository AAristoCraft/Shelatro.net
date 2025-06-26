import React from 'react';
import { Card as CardType } from '../types';

// Компонент отображает одну карту
export const Card: React.FC<{ card: CardType }> = ({ card }) => {
  return (
    <div className="border p-2 m-1">
      <h3 className="font-bold">{card.name}</h3>
      <p className="text-sm">Категория: {card.category}</p>
      <p className="text-sm">Редкость: {card.rarity}</p>
      <p className="text-sm">Стоимость: {card.price}</p>
      <p className="text-xs">{card.description}</p>
    </div>
  );
};
