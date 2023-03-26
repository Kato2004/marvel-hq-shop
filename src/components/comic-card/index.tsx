import { useNavigate } from "react-router-dom";
import { AiFillStar as StarIcon } from "react-icons/ai";

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
      data-cy="comic-card"
      onClick={() => navigate(`comic/${comic.id}${comic.rare ? "/rare" : ""}`)}
    >
      {comic.rare && (
        <span>
          <StarIcon />
        </span>
      )}
      <img
        src={comic.thumbnail}
        alt={`Imagem da hq ${comic.title}`}
        loading="lazy"
      />
      <div>
        <h6 className="title">{comic.title}</h6>
      </div>
    </Container>
  );
};
