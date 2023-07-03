import { useContext, useEffect } from "react";
import { CartContext } from "../../core/contexts";
import { PageContainer } from "../../styles/container";

export const PurchaseMade = () => {
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    setCart([]);
  }, []);
  return (
    <PageContainer>
      <h1>Compra efetuada com sucesso</h1>
    </PageContainer>
  );
};
