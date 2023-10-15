import React from "react";
import { useState } from "react";
import { CounterPresentacional } from "./CounterPresentacional";

export const CounterContainer = ({ stock }) => {
  const [contador, setContador] = useState(1); //solo se agrega de 1 en carrito

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("cantidad máxima");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  return (
    <CounterPresentacional sumar={sumar} restar={restar} contador={contador} />
  );
};
