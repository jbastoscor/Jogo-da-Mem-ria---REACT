import React, { useState} from "react";
import "./App.css";
import Header from "./Header";
import Board from "./Board";
import Button from "./Button";

const App = () => {
  const [reset, setReset] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  const handleRestart = () => {
    setReset(!reset);
    setGameCompleted(false);
  };

  return (
    <div className="container">
      <Header />
      {gameCompleted ? (
        <h2 className="congrats-message">Parabéns, você conseguiu! 🎉</h2>
      ) : (
        <Board key={reset} onGameComplete={() => setGameCompleted(true)} />
      )}
      <Button onClick={handleRestart} />
    </div>
  );
};

export default App;
