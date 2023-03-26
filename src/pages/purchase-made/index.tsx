import { useContext, useEffect } from "react";
import { CartContext } from "../../core/contexts/cart";

export const PurchaseMade = () => {
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    setCart([]);
  }, []);
  return <h1>Compra efetuada com sucesso</h1>;
};
