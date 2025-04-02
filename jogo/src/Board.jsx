import React, { useState, useEffect } from "react";
import Card from "./Card"; 

const emojis = ["🍟", "🍕", "❤️", "🤡", "🌺", "🐻"];
const shuffledEmojis = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

const Board = ({ onGameComplete }) => {
  const [cards, setCards] = useState(
    shuffledEmojis.map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      matched: false
    }))
  );
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (id) => {
    if (selectedCards.length === 2) return;

    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isFlipped: true } : card
      )
    );

    setSelectedCards((prev) => [...prev, id]);
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards;
      if (cards[first].emoji === cards[second].emoji) {
        setCards((prev) =>
          prev.map((card) =>
            card.id === first || card.id === second
              ? { ...card, matched: true }
              : card
          )
        );
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === first || card.id === second
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }, 1000);
      }
      setSelectedCards([]);
    }
  }, [selectedCards, cards]);

  useEffect(() => {
    if (cards.every((card) => card.matched)) {
      onGameComplete();
    }
  }, [cards, onGameComplete]);

  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          emoji={card.emoji}
          isFlipped={card.isFlipped || card.matched}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default Board;