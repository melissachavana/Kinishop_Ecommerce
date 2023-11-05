import React from "react";
import { ProductCard } from "../../common/card/ProductCard";

export const ItemList = ({ items }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
      {items.map((item) => {
        return (
          <div key={item.id} className="w-64 p-4">
            <ProductCard item={item} />
          </div>
        );
      })}
    </section>
  );
};
