export interface ICart {
  id: number;
  price: number;
  thumbnail: string;
  title: string;
  quantity: number;
}

export interface ContextValues {
  cart: ICart[];
  setValueCart: (comic: ICart) => void;
  updateQuantityComics: (comicId: number, newQuantity: number) => void;
  deleteComic: (comicId: number) => void;
}
