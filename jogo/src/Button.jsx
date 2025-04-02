import React from "react";

const Button = ({ onClick }) => {
  return (
    <button className="restart-btn" onClick={onClick}>
      CONTINUAR
    </button>
  );
};

export default Button;