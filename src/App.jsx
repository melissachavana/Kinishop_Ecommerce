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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/login" element={<Login />} />
      <Route path="/micuenta" element={<MiCuenta />} />
      <Route path="/ordenes" element={<Ordenes />} />
      <Route path="/itemdetail/:id" element={<ItemDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  let usuario = "Melissa";

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <CounterContainer stock={5} />
      <CounterContainer stock={12} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
