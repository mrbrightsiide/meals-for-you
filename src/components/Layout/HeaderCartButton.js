import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
// 왜 카드프로바이더 말고 카드컨텍스트 자체를 가져오는거지? -> 카드컨텍스트가 업데이트되면 이 컴포넌트도 자동으로 업데이트되게하기위함
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
