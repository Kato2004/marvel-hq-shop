import { CartContext } from "../../core/contexts/cart";
import { Container, CartCard, ComicActions, ConfirmPurchase } from "./styles";
import { useContext, useState, useEffect } from "react";

export const Cart = () => {
  const { cart, updateQuantity, deleteItem } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);

  const q = () => {
    let total = 0;
    cart.forEach((value) => (total += value.quantity * value.price));

    setSubtotal(Number(total.toFixed(2)));
  };

  useEffect(() => {
    q();
  }, [cart]);

  return (
    <Container>
      <div className="cart-container">
        <h2>Carrinho</h2>
        {cart.map((comic) => {
          return (
            <CartCard key={comic.id}>
              <div className="img-container">
                <img
                  src={comic.thumbnail}
                  alt={`Imagem da hq ${comic.title}`}
                />
              </div>
              <div className="comic-info">
                <h4>{comic.title}</h4>
                <div className="cart-price">
                  <span>US$</span>
                  <span>{comic.price}</span>
                </div>
                <ComicActions>
                  <div>
                    <button
                      onClick={() =>
                        comic.quantity > 1
                          ? updateQuantity(comic.id, comic.quantity - 1)
                          : deleteItem(comic.id)
                      }
                    >
                      -
                    </button>
                    <span>{comic.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(comic.id, comic.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="delete-button"
                    onClick={() => deleteItem(comic.id)}
                  >
                    Excluir
                  </button>
                </ComicActions>
              </div>
            </CartCard>
          );
        })}
      </div>
      <ConfirmPurchase>
        <h2>Subtotal: US$ {subtotal}</h2>
        <button>Fechar compra</button>
      </ConfirmPurchase>
    </Container>
  );
};
