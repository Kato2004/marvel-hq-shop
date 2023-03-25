import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

interface IComicCard {
  comic: {
    id: number;
    title: string;
    thumbnail: string;
    rare: boolean;
  };
}

export const ComicCard = ({ comic }: IComicCard) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(`comic/${comic.id}${comic.rare ? "/rare" : ""}`)}
    >
      <img
        src={comic.thumbnail}
        alt={`Imagem da hq ${comic.title}`}
        loading="lazy"
      />
      <div>
        <h6 className="title">{comic.title}</h6>
        {comic.rare && "cijaksfdoak"}
      </div>
    </Container>
  );
};
