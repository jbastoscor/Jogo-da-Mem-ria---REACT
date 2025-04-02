import React from "react";
import "./App.css";



const Card = ({ emoji, isFlipped, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {isFlipped ? <span className="emoji">{emoji}</span> : "?"}
    </div>
  );
};

export default Card;