import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { ContextValues, ICart } from "../types/cart";

interface ICartProvider {
  children: ReactNode;
}

const defaultCartContextValues: ContextValues = {
  cart: [],
  setCart: () => {},
  addComicToCart: () => {},
  updateQuantityComics: () => {},
  deleteComic: () => {},
};

export const CartContext = createContext<ContextValues>(
  defaultCartContextValues
);

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
    if (cart[0] && cart[0].id) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addComicToCart = (comic: ICart) => {
    const comicsWithoutRepeats = cart.filter((item) => item.id === comic.id);

    if (comicsWithoutRepeats.length >= 1) {
      comicsWithoutRepeats[0].quantity += 1;
      setCart((prev) => [...prev]);
    }
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
      setCart,
      addComicToCart,
      updateQuantityComics,
      deleteComic,
    }),
    [cart, setCart, addComicToCart, updateQuantityComics, deleteComic]
  );

  return (
    <CartContext.Provider value={cartProviderValue}>
      {children}
    </CartContext.Provider>
  );
};
