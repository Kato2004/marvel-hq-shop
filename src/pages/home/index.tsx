import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft as ArrowLeft,
  AiOutlineArrowRight as ArrowRight,
} from "react-icons/ai";

import { ComicCard } from "../../components/comic-card/index";
import { Loading } from "../../components/loading";
import { fetchDataAsync } from "../../core/services/get-data";
import { Container, MovieGrid, SwitchPageContainer } from "./styles";
import { IComics } from "../../core/types/comic";
import { IApiResponse } from "../../core/types/api-response";

export const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<IApiResponse<
    IComics[]
  > | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setApiResponse(null);

    fetchDataAsync<IApiResponse<IComics[]>>(`comics?offset=${pageNumber}&`)
      .then((data) => setApiResponse(data))
      .finally(() => setIsLoading(false));
  }, [pageNumber]);

  return (
    <Container>
      {isLoading && <Loading />}
      {!isLoading && !apiResponse && "ERRO"}
      {!isLoading && apiResponse && (
        <>
          <SwitchPageContainer>
            <button onClick={() => setPageNumber((prev) => prev - 20)}>
              <ArrowLeft />
            </button>
            <span>{pageNumber / 20 + 1}</span>
            <button onClick={() => setPageNumber((prev) => prev + 20)}>
              <ArrowRight />
            </button>
          </SwitchPageContainer>
          <MovieGrid>
            {apiResponse &&
              apiResponse.data.results.map((value) => (
                <ComicCard
                  key={value.id}
                  comic={{
                    id: value.id,
                    prices: value.prices,
                    thumbnail: `${value.thumbnail.path}.${value.thumbnail.extension}`,
                    title: value.title,
                  }}
                />
              ))}
          </MovieGrid>
        </>
      )}
    </Container>
  );
};
