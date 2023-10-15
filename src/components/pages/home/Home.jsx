import { Layout } from "../../layout/layout/Layout";
import { Card } from "../../common/card/Card";
import { ItemListContainer } from "../ItemList/ItemListContainer";

export const Home = () => {
  return (
    <Layout>
      <ItemListContainer />
      <div>
        <Card />
      </div>
    </Layout>
  );
};
