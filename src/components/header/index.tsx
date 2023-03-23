import { Link } from "react-router-dom";
import { Container } from "./styles";
import { BiMenu as MenuIcon } from "react-icons/bi";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";

export const Header = () => {
  return (
    <Container>
      <Link to="/">HQ Shop</Link>
      <nav>
        <button>
          <CartIcon className="cart-icon" />
        </button>
        <button>
          <MenuIcon className="menu-icon" />
        </button>
        <ul></ul>
      </nav>
    </Container>
  );
};
