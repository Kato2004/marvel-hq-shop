import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";
import { BiMenu as MenuIcon } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

import { Container } from "./styles";

export const Header = () => {
  const navigate = useNavigate();
  let a = 0;

  return (
    <Container>
      <Link to="/">HQ Shop</Link>
      <nav>
        <button onClick={() => navigate("/cart")}>
          <CartIcon className="cart-icon" />
          {a > 0 && <span className="cart-quantity">{a}</span>}
        </button>
        <button>
          <MenuIcon className="menu-icon" />
        </button>
        <ul></ul>
      </nav>
    </Container>
  );
};
