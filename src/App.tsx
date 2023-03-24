import { CartProvider } from "./core/contexts/cart";
import { AllRoutes } from "./core/routes";
import { GlobalStyle } from "./styles/global-styles";

function App() {
  return (
    <>
      <CartProvider>
        <GlobalStyle />
        <AllRoutes />
      </CartProvider>
    </>
  );
}

export default App;
