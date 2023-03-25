import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../core/contexts/cart";

export const Header = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const [totalValueComics, setTotalValueComics] = useState(0);

  useEffect(() => {
    const q = () => {
      let total = 0;
      cart.forEach((value) => {
        console.log(value.quantity);
        total += value.quantity;
      });
      setTotalValueComics(total);
    };
    q();
  }, [cart]);

  return (
    <Container>
      <Link to="/">HQ Shop</Link>
      <nav>
        <button onClick={() => navigate("/cart")}>
          <CartIcon className="cart-icon" />
          {totalValueComics > 0 && (
            <span className="cart-quantity">{totalValueComics}</span>
          )}
        </button>
      </nav>
    </Container>
  );
};
