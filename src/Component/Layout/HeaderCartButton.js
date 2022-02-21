import { useContext, useEffect, useState } from "react/";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItem = items.reduce((prevNumber, curItem) => {
    return prevNumber + curItem.amount;
  }, 0);

  const btnStyles = `${styles.button} ${btnIsHighLighted ? styles.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    setBtnIsHighLighted(true);

   const timer = setTimeout(() => {
        setBtnIsHighLighted(false);

    },300)
    return () => {
        clearTimeout(timer)
    }



  }, [items]);

  return (
    <button onClick={props.onClick} className={btnStyles}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
