import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";

import {
  Authors,
  Container,
  Description,
  Details,
  Header,
  Images,
  ImgContainer,
  ShoppingArea,
} from "./styles";
import { fetchDataAsync } from "../../core/services/get-data";
import { useEffect, useState } from "react";
import { Loading } from "../../components/loading";

export const ComicPage = () => {
  const { id: paramId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [api, setApi] = useState<IApiResponse<IComics[]> | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setApi(null);
    const res = fetchDataAsync<IApiResponse<IComics[]>>(`comics/${paramId}?`);
    res
      .then((data) => {
        setApi(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      {isLoading && <Loading />}
      {api &&
        api.data.results.map((value) => {
          return (
            <div key={value.id}>
              <div className="top">
                <ImgContainer>
                  <img
                    src={`${value.thumbnail.path}.${value.thumbnail.extension}`}
                    alt=""
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
                    <button className="add-cart">
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
                          alt=""
                          key={imgs.path}
                        />
                      );
                    })}
                  </div>
                </Images>
              )}
            </div>
          );
        })}
    </Container>
  );
};
