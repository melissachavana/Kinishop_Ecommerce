import { Layout } from "../../layout/layout/Layout";

import { ItemListContainer } from "../ItemList/ItemListContainer";
import { useState } from "react";
import { CounterContainer } from "../../common/counter/CounterContainer";
import { Navbar } from "../../layout/navbar/Navbar";
import { Footer } from "../../layout/footer/Footer";

export const Home = () => {
  const [montar, setMontar] = useState(false);
  return (
    <Layout>
      {" "}
      <div className="flex flex-col">
        <div className="my-5">
          {" "}
          {/* Add margin to create space */}
          <ItemListContainer />
        </div>
      </div>
    </Layout>
  );
};
