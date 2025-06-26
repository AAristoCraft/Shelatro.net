import React from 'react';
import { Card as CardType } from '../types';
import { Card } from './Card';

// Компонент руки игрока
export const PlayerHand: React.FC<{ cards: CardType[] }> = ({ cards }) => {
  return (
    <div>
      <h2 className="text-lg font-bold">Ваши карты</h2>
      <div className="flex flex-wrap">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
