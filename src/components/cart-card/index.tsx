import { transformPrice } from "../../core/helpers/transform-price";
import { ICart } from "../../core/types/cart";

import { ComicActions, Container } from "./styles";

interface ICartCard {
  comicCart: ICart;
  updateQuantityComics: (comicId: number, newQuantity: number) => void;
  deleteComic: (comicId: number) => void;
}

export const CartCard = ({
  comicCart,
  deleteComic,
  updateQuantityComics,
}: ICartCard) => {
  return (
    <Container key={comicCart.id}>
      <div className="img-container">
        <img
          src={comicCart.thumbnail}
          alt={`Imagem da hq ${comicCart.title}`}
          loading="lazy"
        />
      </div>
      <div className="comic-info">
        <header>
          {comicCart.isRare && <span>Raro</span>}
          <h4>{comicCart.title}</h4>
        </header>
        <div className="cart-price">
          <span>R$</span>
          <span>{transformPrice(comicCart.price)}</span>
        </div>
        <ComicActions>
          <div>
            <button
              onClick={() =>
                comicCart.quantity > 1
                  ? updateQuantityComics(comicCart.id, comicCart.quantity - 1)
                  : deleteComic(comicCart.id)
              }
            >
              -
            </button>
            <span>{comicCart.quantity}</span>
            <button
              onClick={() =>
                updateQuantityComics(comicCart.id, comicCart.quantity + 1)
              }
            >
              +
            </button>
          </div>
          <button
            className="delete-button"
            onClick={() => deleteComic(comicCart.id)}
          >
            Excluir
          </button>
        </ComicActions>
      </div>
    </Container>
  );
};
