import React from 'react';
import { Card } from '../types';
import { Card as CardComponent } from './Card';

// Тип пропсов магазина
interface ShopProps {
  offer: Card[]; // карты, доступные в магазине
  onBuy: (card: Card) => void; // обработчик покупки
  money: number; // баланс игрока
}

// Компонент магазина
export const Shop: React.FC<ShopProps> = ({ offer, onBuy, money }) => {
  return (
    <div>
      <h2 className="text-lg font-bold">Магазин (баланс: {money})</h2>
      <div className="flex flex-wrap">
        {offer.map((card) => (
          <div key={card.id}>
            <CardComponent card={card} />
            <button
              className="bg-blue-500 text-white px-2 py-1 m-1"
              disabled={money < card.price}
              onClick={() => onBuy(card)}
            >
              Купить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
