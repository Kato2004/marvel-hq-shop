import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft as ArrowLeft,
  AiOutlineArrowRight as ArrowRight,
} from "react-icons/ai";

import { ComicCard } from "../../components/comic-card/index";
import { Loading } from "../../components/loading";
import { fetchDataAsync } from "../../core/helpers/get-data";
import { IApiResponse, IComicData } from "../../core/types/api-response";
import { IComics } from "../../core/types/comic";
import { PageContainer } from "../../styles/container";
import { ComicsArea, SwitchPageContainer, WarningStar } from "./styles";

export const Home = () => {
  const [viewWarning, setViewWarning] = useState(true);
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
          const chance = Math.random();
          if (chance <= 0.1) {
            comic.rare = true;
          } else {
            comic.rare = false;
          }
        });
        console.log(res);
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
          {viewWarning && (
            <WarningStar>
              <p>As HQs marcadas com uma estrela são consideradas RARAS.</p>
              <button
                data-cy="close-warning-star"
                onClick={() => setViewWarning((prev) => !prev)}
              >
                x
              </button>
            </WarningStar>
          )}
          <SwitchPageContainer>
            <button
              data-cy="back-page-btn"
              onClick={() =>
                offset / 20 + 1 != 1 && setOffset((prev) => prev - 20)
              }
            >
              <ArrowLeft />
            </button>
            <span data-cy="show-current-page">{offset / 20 + 1}</span>
            <button
              data-cy="page-forward-btn"
              onClick={() => setOffset((prev) => prev + 20)}
            >
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
                    rare: value.rare,
                  }}
                />
              ))}
          </ComicsArea>
        </>
      )}
    </PageContainer>
  );
};
