import { ReactNode, createContext, useMemo, useState, useEffect } from "react";

export interface ICart {
  id: number;
  price: number;
  thumbnail: string;
  title: string;
  quantity: number;
}

interface IContextValues {
  cart: ICart[];
  setValueCart: (comic: ICart) => void;
  updateQuantity: (comicId: number, newQuantity: number) => void;
  deleteItem: (comicId: number) => void;
}

interface ICartProvider {
  children: ReactNode;
}

const initial: IContextValues = {
  cart: [],
  setValueCart: () => {},
  updateQuantity: () => {},
  deleteItem: () => {},
};

export const CartContext = createContext<IContextValues>(initial);

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
    const q = cart.filter((item) => {
      return item.id === comic.id;
    });
    if (q.length >= 1) q[0].quantity += 1;
    if (q.length == 0) {
      comic.quantity = 1;
      setCart((prev) => [...prev, comic]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateQuantity = (comicId: number, newQuantity: number) => {
    const newCart = cart.map((comic) => {
      if (comic.id === comicId) {
        return { ...comic, quantity: newQuantity };
      }
      return comic;
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const deleteItem = (comicId: number) => {
    const newCart = cart.filter((item) => {
      return item.id != comicId;
    });
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
