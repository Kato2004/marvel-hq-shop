import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

interface IComicCard {
  comic: {
    id: number;
    title: string;
    thumbnail: string;
    prices: {
      type: string;
      price: number;
    }[];
  };
}

export const ComicCard = ({ comic }: IComicCard) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`comic/${comic.id}`)}>
      <img src={comic.thumbnail} alt={`Imagem da hq ${comic.title}`} />
      <div>
        <h6 className="title">{comic.title}</h6>
        {comic.prices[0].price != 0 && (
          <span className="price">US$ {comic.prices[0].price}</span>
        )}
      </div>
    </Container>
  );
};
