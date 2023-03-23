import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "../../components/header";
import { Home } from "../../pages/home";
import { ComicPage } from "../../pages/comic";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic/:id" element={<ComicPage />} />
      </Routes>
    </BrowserRouter>
  );
};
