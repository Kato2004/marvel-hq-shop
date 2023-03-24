import { useContext, useState, useEffect, memo } from "react";

import { CartCard } from "../../components/cart-card";
import { CartContext } from "../../core/contexts/cart";
import { Container, ConfirmPurchase } from "./styles";

export const Cart = () => {
  const { cart, updateQuantityComics, deleteComic } = useContext(CartContext);
  const [totalValueComics, setTotalValueComics] = useState(0);

  useEffect(() => {
    const q = () => {
      let total = 0;
      cart.forEach((value) => (total += value.quantity * value.price));

      setTotalValueComics(Number(total.toFixed(2)));
    };
    q();
  }, [cart]);

  const MemoizedCartCard = memo(CartCard);

  return (
    <Container>
      <div className="cart-container">
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
      </div>
      <ConfirmPurchase>
        <h2>Subtotal: US$ {totalValueComics}</h2>
        <button>Fechar compra</button>
      </ConfirmPurchase>
    </Container>
  );
};
