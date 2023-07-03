import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "../../components/header";
import { Cart } from "../../pages/cart";
import { ComicPage } from "../../pages/comic";
import { Home } from "../../pages/home";
import { PurchaseMade } from "../../pages/purchase-made";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic/:id/:rare?" element={<ComicPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchase-made" element={<PurchaseMade />} />
      </Routes>
    </BrowserRouter>
  );
};
