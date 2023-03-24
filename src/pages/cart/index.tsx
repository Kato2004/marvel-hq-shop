import { CartCard } from "../../components/cart-card";
import { CartContext } from "../../core/contexts/cart";
import { Container, ConfirmPurchase } from "./styles";
import { useContext, useState, useEffect } from "react";

export const Cart = () => {
  const { cart, updateQuantity, deleteItem } = useContext(CartContext);
  const [totalValueComics, setTotalValueComics] = useState(0);

  useEffect(() => {
    const q = () => {
      let total = 0;
      cart.forEach((value) => (total += value.quantity * value.price));

      setTotalValueComics(Number(total.toFixed(2)));
    };
    q();
  }, [cart]);

  return (
    <Container>
      <div className="cart-container">
        <h2>Carrinho</h2>
        {cart.map((comic) => {
          return (
            <CartCard
              comicCart={comic}
              updateQuantityComics={updateQuantity}
              deleteComic={deleteItem}
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
