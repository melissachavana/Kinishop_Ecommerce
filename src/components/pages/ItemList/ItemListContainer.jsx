import { products } from "../../../../productsMock";
import { Layout } from "../../layout/layout/Layout";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName ? "estoy filtrando" : "estoy en home");

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
      //    reject("algo salió mal");
    });

    //const tarea2 = fetch("api"); //solicitud a servidor

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return <ItemList items={items} />;
};
