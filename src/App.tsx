import React, { useState } from 'react';
import { baseCards } from './data/cards';
import { Card, Player } from './types';
import { PlayerHand } from './components/PlayerHand';
import { Shop } from './components/Shop';
import { calculateScore } from './utils/ScoreCalculator';

// Функция генерации стартовой руки игрока
function getStartHand(): Card[] {
  // для MVP просто берем первые несколько карт базового набора
  return baseCards.slice(0, 5);
}

// Функция генерации предложений магазина
function getShopOffer(): Card[] {
  // для MVP возвращаем случайные карты из набора
  return baseCards.slice(5);
}

export const App: React.FC = () => {
  // состояние игрока
  const [player, setPlayer] = useState<Player>({
    id: 'p1',
    name: 'Игрок',
    hand: getStartHand(),
    money: 10,
  });

  // состояние магазина
  const [offer, setOffer] = useState<Card[]>(getShopOffer());

  // покупка карты
  const buyCard = (card: Card) => {
    if (player.money < card.price) return;

    setPlayer({
      ...player,
      money: player.money - card.price,
      hand: [...player.hand, card],
    });
  };

  // подсчет очков
  const score = calculateScore(player.hand);

  // запуск новой игры
  const newGame = () => {
    setPlayer({
      id: 'p1',
      name: 'Игрок',
      hand: getStartHand(),
      money: 10,
    });
    setOffer(getShopOffer());
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Прототип Бункер</h1>
      <button className="bg-green-500 text-white px-2 py-1" onClick={newGame}>
        Новая игра
      </button>
      <PlayerHand cards={player.hand} />
      <Shop offer={offer} onBuy={buyCard} money={player.money} />
      <div className="mt-4">
        <h2 className="text-lg">Очки: {score}</h2>
      </div>
    </div>
  );
};
