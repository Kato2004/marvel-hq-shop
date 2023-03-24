import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";
import { useParams } from "react-router-dom";

import { Loading } from "../../components/loading";
import { CartContext } from "../../core/contexts/cart";
import { fetchDataAsync } from "../../core/services/get-data";
import { IApiResponse, IComicData } from "../../core/types/api-response";
import { IComics } from "../../core/types/comic";
import { PageContainer } from "../../styles/container";
import {
  Authors,
  Description,
  Details,
  Header,
  Images,
  ImgContainer,
  ShoppingArea,
} from "./styles";

export const ComicPage = () => {
  const { id: paramId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [comicData, setComicData] = useState<IComicData<IComics[]> | null>(
    null
  );

  const { cart, addComicToCart } = useContext(CartContext);

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
        });
        setComicData(dataCopy);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const addCart = (
    id: number,
    price: number,
    thumbnail: string,
    title: string
  ) => {
    console.log(cart);
    addComicToCart({ id, price, thumbnail, title, quantity: 1 });
  };

  return (
    <PageContainer>
      {isLoading && <Loading />}
      {comicData &&
        comicData.results.map((value) => {
          return (
            <div key={value.id}>
              <div className="top">
                <ImgContainer>
                  <img
                    src={`${value.thumbnail.path}.${value.thumbnail.extension}`}
                    alt={`Capa da hq ${value.title}`}
                    loading="lazy"
                  />
                </ImgContainer>
                <Header>
                  <span>{value.format}</span>
                  <h1>{value.title}</h1>
                </Header>
                <ShoppingArea>
                  <div className="top">
                    <span>US$ {value.prices[0].price}</span>
                  </div>
                  <div className="bottom">
                    <button className="buy">Comprar</button>
                    <button
                      onClick={() =>
                        addCart(
                          value.id,
                          value.prices[0].price,
                          `${value.thumbnail.path}.${value.thumbnail.extension}`,
                          value.title
                        )
                      }
                      className="add-cart"
                    >
                      <CartIcon />
                    </button>
                  </div>
                </ShoppingArea>
              </div>
              <Details>
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
              </Details>
              {value.creators.returned != 0 && (
                <Authors>
                  <h2>Autores</h2>
                  <ul>
                    {value.creators.items.map((authorsName) => {
                      return <li key={authorsName.name}>{authorsName.name}</li>;
                    })}
                  </ul>
                </Authors>
              )}
              {value.description && (
                <Description>
                  <h2>Descrição</h2>
                  <p>{value.description}</p>
                </Description>
              )}
              {value.images.length > 0 && (
                <Images>
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
                </Images>
              )}
            </div>
          );
        })}
    </PageContainer>
  );
};
