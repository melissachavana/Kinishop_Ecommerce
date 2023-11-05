import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ item }) => {
  return (
    <div className="bg-white cursor-pointer w-64 h-64 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-yellow-500 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {item.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={item.img}
          alt=""
        />
        <Link to={`/itemDetail/${item.id}`}>
          <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 hover:bg-yellow-500 ">
            +
          </div>
        </Link>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light px-3 py-0.5">{item.title}</span>
        <span className="text-lg font-bold px-3 py-0.5">${item.price}</span>
      </p>
    </div>
  );
};
