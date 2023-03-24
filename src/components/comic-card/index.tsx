import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

interface IComicCard {
  comic: {
    id: number;
    title: string;
    thumbnail: string;
  };
}

export const ComicCard = ({ comic }: IComicCard) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`comic/${comic.id}`)}>
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
