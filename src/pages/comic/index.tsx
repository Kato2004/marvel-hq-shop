import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

import { Loading } from "../../components";
import { CartContext } from "../../core/contexts";
import { transformPrice, fetchDataAsync } from "../../core/helpers";
import { IApiResponse, IComicData, IComics } from "../../core/types";
import { PageContainer } from "../../styles/container";
import { AddedCartWarning, Bottom, ShoppingArea, Top } from "./styles";

export const ComicPage = () => {
  const { id: paramId, rare: paramIsRare } = useParams();
  const [showAddedCartNotice, setShowAddedCartNotice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comicData, setComicData] = useState<IComicData<IComics[]> | null>(
    null
  );
  const navigate = useNavigate();

  const { addComicToCart } = useContext(CartContext);

  useEffect(() => {
    setIsLoading(true);
    setComicData(null);
    fetchDataAsync<IApiResponse<IComics[]>>(`comics/${paramId}?`)
      .then((res) => {
        const dataCopy = JSON.parse(JSON.stringify(res.data));
        dataCopy.results.forEach((comic: IComics) => {
          if (comic.prices[0].price === 0) {
            comic.prices[0].price = Number((Math.random() * 10).toFixed(2));
          }
          comic.rare = paramIsRare ? true : false;
        });
        setComicData(dataCopy);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const addCart = (
    id: number,
    price: number,
    thumbnail: string,
    title: string,
    isRare: boolean
  ) => {
    addComicToCart({ id, price, thumbnail, title, quantity: 1, isRare });
    setShowAddedCartNotice(true);
    setTimeout(() => setShowAddedCartNotice(false), 4000);
  };

  return (
    <PageContainer>
      {isLoading && <Loading />}
      <AddedCartWarning show={showAddedCartNotice}>
        <p>Item adicionado ao carrinho</p>
        <button onClick={() => setShowAddedCartNotice((prev) => !prev)}>
          x
        </button>
      </AddedCartWarning>
      {comicData &&
        comicData.results.map((value) => {
          return (
            <section className="comic-page" key={value.id}>
              <Top className="top">
                <div className="img-container">
                  <img
                    src={`${value.thumbnail.path}.${value.thumbnail.extension}`}
                    alt={`Capa da hq ${value.title}`}
                    loading="lazy"
                  />
                </div>
                <header>
                  <span>{value.format}</span>
                  <h1>{value.title}</h1>
                </header>
                <ShoppingArea>
                  <div className="price">
                    {paramIsRare && <span className="is-rare">Raro</span>}
                    <span className="price">
                      R$ {transformPrice(value.prices[0].price)}
                    </span>
                  </div>
                  <div className="purchase-shares">
                    <button
                      data-cy="btn-confirm-purchase"
                      onClick={() => navigate("/purchase-made")}
                      className="buy"
                    >
                      Comprar
                    </button>
                    <button
                      data-cy="btn-add-cart"
                      onClick={() =>
                        addCart(
                          value.id,
                          value.prices[0].price,
                          `${value.thumbnail.path}.${value.thumbnail.extension}`,
                          value.title,
                          value.rare
                        )
                      }
                      className="add-cart"
                    >
                      <CartIcon />
                    </button>
                  </div>
                </ShoppingArea>
              </Top>
              <Bottom>
                <div className="details">
                  <h2>Detalhes</h2>
                  <ul>
                    {value.pageCount > 0 && (
                      <li>Número de páginas: {value.pageCount}</li>
                    )}
                    {value.isbn && <li>ISBN: {value.isbn}</li>}
                    {value.issn && <li>ISSN: {value.issn}</li>}
                    {value.issn && <li>ISSN: {value.issn}</li>}
                    {value.upc && <li>ISSN: {value.upc}</li>}
                  </ul>
                </div>
                {value.creators.returned != 0 && (
                  <div className="authors">
                    <h2>Autores</h2>
                    <ul>
                      {value.creators.items.map((authorsName) => {
                        return (
                          <li key={authorsName.name}>{authorsName.name}</li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {value.description && (
                  <div className="description">
                    <h2>Descrição</h2>
                    <p>{value.description}</p>
                  </div>
                )}
                {value.images.length > 0 && (
                  <div className="images">
                    <h2>Imagens</h2>
                    <div className="imgs-row">
                      {value.images.map((imgs) => {
                        return (
                          <img
                            src={`${imgs.path}.${imgs.extension}`}
                            alt="Imagens sobre a comic"
                            key={imgs.path}
                            loading="lazy"
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </Bottom>
            </section>
          );
        })}
    </PageContainer>
  );
};
