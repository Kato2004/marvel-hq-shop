import {
  ReactNode,
  createContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import { ContextValues, ICart } from "../types/cart";

interface ICartProvider {
  children: ReactNode;
}

const initial: ContextValues = {
  cart: [],
  setValueCart: () => {},
  updateQuantityComics: () => {},
  deleteComic: () => {},
};

export const CartContext = createContext<ContextValues>(initial);

export const CartProvider = ({ children }: ICartProvider) => {
  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    const storage = localStorage.getItem("cart");
    if (storage) {
      const cartStorage: ICart[] = JSON.parse(storage);
      setCart(cartStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const setValueCart = (comic: ICart) => {
    const comicsWithoutRepeats = cart.filter((item) => item.id === comic.id);

    if (comicsWithoutRepeats.length >= 1) comicsWithoutRepeats[0].quantity += 1;
    if (comicsWithoutRepeats.length == 0) setCart((prev) => [...prev, comic]);
  };

  const updateQuantityComics = useCallback(
    (comicId: number, newQuantity: number) => {
      setCart((prevCart) =>
        prevCart.map((comic) =>
          comic.id === comicId ? { ...comic, quantity: newQuantity } : comic
        )
      );
    },
    [setCart]
  );

  const deleteComic = useCallback(
    (comicId: number) => {
      setCart((prevCart) => prevCart.filter((comic) => comic.id !== comicId));
    },
    [setCart]
  );

  const cartProviderValue = useMemo(
    () => ({
      cart,
      setValueCart,
      updateQuantityComics,
      deleteComic,
    }),
    [cart, setValueCart, updateQuantityComics, deleteComic]
  );

  return (
    <CartContext.Provider value={cartProviderValue}>
      {children}
    </CartContext.Provider>
  );
};
