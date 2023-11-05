import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/ItemList/ItemListContainer";
import { Home } from "./components/pages/home/Home";
import { Footer } from "./components/layout/footer/Footer";
import { Login } from "./components/pages/login/Login";
import { Carrito } from "./components/pages/carrito/Carrito";
import { NotFound } from "./components/pages/notFound/NotFound";
import { Ordenes } from "./components/pages/ordenes/Ordenes";
import { MiCuenta } from "./components/pages/micuenta/MiCuenta";
import { ItemDetail } from "./components/pages/itemDetail/ItemDetail";
import "./App.css";
import { CounterContainer } from "./components/common/counter/CounterContainer";
import { ItemList } from "./components/pages/ItemList/ItemList";
import { useState } from "react";
import { FetchingData } from "./components/pages/fetchingData/FetchingData";
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer";
import { CustomModal } from "./components/common/modal/CustomModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Home />} />

          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
          <Route path="/micuenta" element={<MiCuenta />} />
          <Route path="/ordenes" element={<Ordenes />} />
          <Route path="/itemdetail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
