import React from "react";

export const CounterPresentacional = ({ sumar, restar, contador, onAdd }) => {
  return (
    <div className="bg-white p-4 w-64 h-35 rounded-lg translate-y-2">
      <div className="section-center container flex-wrap">
        <button
          onClick={restar}
          className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-2 w-5 rounded"
        >
          -
        </button>
        <h4>{contador}</h4>

        <button
          onClick={sumar}
          className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-2 w-5 rounded"
        >
          +
        </button>
      </div>

      <div className="section-center container flex-wrap">
        <button
          onClick={() => onAdd(contador)}
          className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-2  rounded"
        >
          Agregar a carrito
        </button>
      </div>
    </div>
  );
};
