export interface ICart {
  id: number;
  price: number;
  thumbnail: string;
  title: string;
  quantity: number;
  isRare: boolean;
}

export interface ContextValues {
  cart: ICart[];
  setCart: React.Dispatch<React.SetStateAction<ICart[]>>;
  addComicToCart: (comic: ICart) => void;
  updateQuantityComics: (comicId: number, newQuantity: number) => void;
  deleteComic: (comicId: number) => void;
}
