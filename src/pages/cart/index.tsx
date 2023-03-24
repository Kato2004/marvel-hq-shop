import { memo, useContext, useEffect, useState } from "react";

import { CartCard } from "../../components/cart-card";
import { CartContext } from "../../core/contexts/cart";
import { PageContainer } from "../../styles/container";
import { CardContainer, ConfirmPurchase } from "./styles";

export const Cart = () => {
  const { cart, updateQuantityComics, deleteComic } = useContext(CartContext);
  const [totalValueComics, setTotalValueComics] = useState(0);

  useEffect(() => {
    const calculateTotalComics = () => {
      let total = 0;
      if (cart.length > 0) {
        cart.forEach((price) => (total += price.quantity * price.price));
      }

      setTotalValueComics(Number(total.toFixed(2)));
    };
    calculateTotalComics();
  }, [cart]);

  const MemoizedCartCard = memo(CartCard);

  return (
    <PageContainer>
      {totalValueComics != 0 ? (
        <>
          <CardContainer className="cart-container">
            <h2>Carrinho</h2>
            {cart.map((comic) => {
              return (
                <MemoizedCartCard
                  comicCart={comic}
                  updateQuantityComics={updateQuantityComics}
                  deleteComic={deleteComic}
                  key={comic.id}
                />
              );
            })}
          </CardContainer>
          <ConfirmPurchase>
            <h2>Subtotal: US$ {totalValueComics}</h2>
            <button>Fechar compra</button>
          </ConfirmPurchase>
        </>
      ) : (
        <h2>Carrinho vazio!</h2>
      )}
    </PageContainer>
  );
};
