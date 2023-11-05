import React from "react";
import { Layout } from "../../layout/layout/Layout";
import { CounterContainer } from "../../common/counter/CounterContainer";
import { DetailCard } from "../../common/card/DetailCard";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <Layout>
      <h1 className="font-bold">{productSelected.title}</h1>
      <div className="w-1/2 mx-auto text-center">
        <h2>{productSelected.description}</h2>
      </div>
      <DetailCard item={productSelected} />
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </Layout>
  );
};
