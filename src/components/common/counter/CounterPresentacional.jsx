import React from "react";

export const CounterPresentacional = ({ sumar, restar, contador }) => {
  return (
    <div>
      <button onClick={sumar}>sumar</button>

      <h4>{contador}</h4>

      <button onClick={restar}>restar</button>
    </div>
  );
};
