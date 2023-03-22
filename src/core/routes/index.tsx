import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "../../components/header";
import { Home } from "../../pages/home";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
