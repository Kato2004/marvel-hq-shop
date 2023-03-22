import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft as ArrowLeft,
  AiOutlineArrowRight as ArrowRight,
} from "react-icons/ai";

import { Loading } from "../../components/loading";
import { MovieCard } from "../../components/movie-card/index";
import { fetchDataAsync } from "../../core/services/get-data";
import { Container, MovieGrid, SwitchPageContainer } from "./styles";

export const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [api, setApi] = useState<IApiResponse | null>(null);

  useEffect(() => {
    setIsLoading(true);
    console.log("APi value:" + api?.data.results.length);
    setApi(null);
    const res = fetchDataAsync<IApiResponse>(`comics?offset=${pageNumber}`);
    res
      .then((data) => {
        setApi(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
    console.log("APi value:" + api?.data.results.length);
    console.log(pageNumber);
  }, [pageNumber]);

  return (
    <Container>
      <SwitchPageContainer>
        <button onClick={() => setPageNumber((prev) => prev - 20)}>
          <ArrowLeft />
        </button>
        <span>{pageNumber / 20 + 1}</span>
        <button onClick={() => setPageNumber((prev) => prev + 20)}>
          <ArrowRight />
        </button>
      </SwitchPageContainer>
      {isLoading && <Loading />}
      <MovieGrid>
        {api &&
          api.data.results.map((value) => {
            return (
              <MovieCard
                key={value.id}
                comic={{
                  id: value.id,
                  prices: value.prices,
                  thumbnail: `${value.thumbnail.path}.${value.thumbnail.extension}`,
                  title: value.title,
                }}
              />
            );
          })}
      </MovieGrid>
      {!isLoading && !api && "ERRO"}
    </Container>
  );
};
