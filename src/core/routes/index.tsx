import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "../../components/header";
import { Home } from "../../pages/home";
import { ComicPage } from "../../pages/comic";
import { Cart } from "../../pages/cart";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic/:id/:rare?" element={<ComicPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
