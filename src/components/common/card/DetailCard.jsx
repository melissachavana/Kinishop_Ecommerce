import React from "react";
import { CounterContainer } from "../counter/CounterContainer";

export const DetailCard = ({ item }) => {
  return (
    <div className="bg-white cursor-pointer shadow-md p-4 w-64 h-64 rounded-lg">
      <figure className="relative mb-4">
        <span className="absolute top-2 right-2 bg-yellow-500 text-black text-lg px-2 py-1 rounded">
          ${item.price}
        </span>
        <img
          className="w-full h-40 object-cover rounded-lg"
          src={item.img}
          alt=""
        />
      </figure>
      <div className="flex justify-between items-center"></div>
    </div>
  );
};
