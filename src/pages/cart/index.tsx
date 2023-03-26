import { useContext, useState, useEffect, memo } from "react";

import { CartCard } from "../../components/cart-card";
import { CartContext } from "../../core/contexts/cart";
import {
  AddCoupon,
  CardContainer,
  ConfirmPurchase,
  ErrorOnAddCoupon,
  Subtotal,
} from "./styles";
import { PageContainer } from "../../styles/container";
import { transformPrice } from "../../core/helpers/transform-price";
import { coupons } from "../../example";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cart, updateQuantityComics, deleteComic } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState({
    rare: 0,
    commun: 0,
  });
  const [inputCoupon, setInputCoupon] = useState("");
  const [errorInvalidCoupon, setErrorInvalidCoupon] = useState(false);
  const navigate = useNavigate();

  const MemoizedCartCard = memo(CartCard);

  useEffect(() => {
    const calculateTotalComics = () => {
      let rareSubtotal = 0;
      let communSubtotal = 0;

      cart.forEach((comic) => {
        if (comic.isRare) rareSubtotal += comic.price * comic.quantity;
        else communSubtotal += comic.price * comic.quantity;
      });

      setSubtotal({ commun: communSubtotal, rare: rareSubtotal });
    };
    calculateTotalComics();
  }, [cart]);

  const applyCoupon = (inputCoupon: string) => {
    let fullDiscount = {
      discount: 0,
      rare: false,
    };

    coupons.forEach((coupon) => {
      if (coupon === inputCoupon) {
        if (coupon.slice(0, 2) === "WQ") {
          fullDiscount = {
            discount: Number(coupon.slice(-1)) / 10,
            rare: true,
          };
        } else if (coupon.slice(0, 2) === "TC") {
          fullDiscount = {
            discount: Number(coupon.slice(-1)) / 10,
            rare: false,
          };
        }
      }
    });
    if (fullDiscount.discount != 0) {
      const discount = (value: number) =>
        Number((value * fullDiscount.discount).toFixed(2));

      fullDiscount.rare
        ? setSubtotal((prev) => ({ ...prev, rare: discount(prev.rare) }))
        : setSubtotal((prev) => ({ ...prev, commun: discount(prev.commun) }));
    } else {
      setErrorInvalidCoupon(true);
    }
  };

  return (
    <PageContainer className="cart">
      {cart.length > 0 ? (
        <>
          <CardContainer className="cart-container">
            <h2>Carrinho</h2>
            {cart.map((comic) => {
              return (
                <MemoizedCartCard
                  comicCart={comic}
                  updateQuantityComics={updateQuantityComics}
                  deleteComic={deleteComic}
                  key={comic.id}
                />
              );
            })}
          </CardContainer>
          <AddCoupon>
            <h4>Adicionar cupom</h4>
            <div className="add-cupom">
              <input
                data-cy="input-coupon"
                onChange={(e) => setInputCoupon(e.target.value)}
                type="text"
              />
              <button
                data-cy="btn-add-coupon"
                onClick={() => applyCoupon(inputCoupon)}
              >
                Adicionar
              </button>
              <ErrorOnAddCoupon show={errorInvalidCoupon}>
                <p>Cupom inválido</p>
                <button onClick={() => setErrorInvalidCoupon((prev) => !prev)}>
                  x
                </button>
              </ErrorOnAddCoupon>
            </div>
          </AddCoupon>
          <Subtotal>
            <div className="rare">
              <h5>Subtotal comum</h5>
              <span>
                R$
                {transformPrice(subtotal.commun)}
              </span>
            </div>
            <div className="common">
              <h5>Subtotal raro</h5>
              <span>
                R$
                {transformPrice(subtotal.rare)}
              </span>
            </div>
          </Subtotal>
          <ConfirmPurchase>
            <h2>Total: R${transformPrice(subtotal.commun + subtotal.rare)}</h2>
            <button
              data-cy="btn-finish-purchase"
              onClick={() => navigate("/purchase-made")}
            >
              Fechar compra
            </button>
          </ConfirmPurchase>
        </>
      ) : (
        <h2>Carrinho vazio!</h2>
      )}
    </PageContainer>
  );
};
