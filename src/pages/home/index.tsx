import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft as ArrowLeft,
  AiOutlineArrowRight as ArrowRight,
} from "react-icons/ai";

import { ComicCard } from "../../components/comic-card/index";
import { Loading } from "../../components/loading";
import { fetchDataAsync } from "../../core/services/get-data";
import { IApiResponse, IComicData } from "../../core/types/api-response";
import { IComics } from "../../core/types/comic";
import { PageContainer } from "../../styles/container";
import { ComicsArea, SwitchPageContainer } from "./styles";

export const Home = () => {
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [comicResponse, setComicResponse] = useState<IComicData<
    IComics[]
  > | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setComicResponse(null);

    fetchDataAsync<IApiResponse<IComics[]>>(`comics?offset=${offset}&`)
      .then((res) => {
        res.data.results.forEach((comic) => {
          if (comic.prices[0].price === 0) {
            comic.prices[0].price = Math.random() * 100;
          }
        });
        setComicResponse(res.data);
      })
      .finally(() => setIsLoading(false));
  }, [offset]);

  return (
    <PageContainer>
      {isLoading && <Loading />}
      {!isLoading && !comicResponse && "ERRO"}
      {!isLoading && comicResponse && (
        <>
          <SwitchPageContainer>
            <button
              onClick={() =>
                offset / 20 + 1 != 1 && setOffset((prev) => prev - 20)
              }
            >
              <ArrowLeft />
            </button>
            <span>{offset / 20 + 1}</span>
            <button onClick={() => setOffset((prev) => prev + 20)}>
              <ArrowRight />
            </button>
          </SwitchPageContainer>
          <ComicsArea>
            {comicResponse &&
              comicResponse.results.map((value) => (
                <ComicCard
                  key={value.id}
                  comic={{
                    id: value.id,
                    thumbnail: `${value.thumbnail.path}.${value.thumbnail.extension}`,
                    title: value.title,
                  }}
                />
              ))}
          </ComicsArea>
        </>
      )}
    </PageContainer>
  );
};
