import { ReactNode, createContext, useMemo, useState, useEffect } from "react";
import { ContextValues, ICart } from "../types/cart";

interface ICartProvider {
  children: ReactNode;
}

const initial: ContextValues = {
  cart: [],
  setValueCart: () => {},
  updateQuantity: () => {},
  deleteItem: () => {},
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

  const setValueCart = (comic: ICart) => {
    const comicsWithoutRepeats = cart.filter((item) => item.id === comic.id);

    if (comicsWithoutRepeats.length >= 1) comicsWithoutRepeats[0].quantity += 1;
    if (comicsWithoutRepeats.length == 0) setCart((prev) => [...prev, comic]);

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateQuantity = (comicId: number, newQuantity: number) => {
    const newUpdatedCart = cart.map((comic) => {
      if (comic.id === comicId) return { ...comic, quantity: newQuantity };
      return comic;
    });
    setCart(newUpdatedCart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const deleteItem = (comicId: number) => {
    const newCart = cart.filter((item) => item.id != comicId);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const cartProviderValue = useMemo(
    () => ({
      cart,
      setValueCart,
      updateQuantity,
      deleteItem,
    }),
    [cart, setCart, updateQuantity, deleteItem]
  );

  return (
    <CartContext.Provider value={cartProviderValue}>
      {children}
    </CartContext.Provider>
  );
};
