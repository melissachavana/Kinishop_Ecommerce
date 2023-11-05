import React from "react";
import { useState, useEffect } from "react";
import { CounterPresentacional } from "./CounterPresentacional";

export const CounterContainer = ({ stock, onAdd }) => {
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

  useEffect(() => {
    //petición a servidor, todo lo que no quiero que se repita al actualizar, para buscador en servidor de artículos, además de cargar todos los artículos
  }, []);

  return (
    <CounterPresentacional
      sumar={sumar}
      restar={restar}
      contador={contador}
      onAdd={onAdd}
    />
  );
};
