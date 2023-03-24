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
        <h4>{comicCart.title}</h4>
        <div className="cart-price">
          <span>US$</span>
          <span>{comicCart.price}</span>
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
