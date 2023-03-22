import { Link } from "react-router-dom";
import { Container } from "./styles";
import { BiMenu as MenuIcon } from "react-icons/bi";

export const Header = () => {
  return (
    <Container>
      <Link to="/">HQ Shop</Link>
      <nav>
        <button>
          <MenuIcon className="menu-icon" />
        </button>
        <ul></ul>
      </nav>
    </Container>
  );
};
