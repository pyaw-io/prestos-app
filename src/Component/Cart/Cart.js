import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

import CartItem from "./CartItem";
import Checkout from "./Checkout";
import styles from "./Cart.module.css";
 



const Cart = (props) => {
  const [confirmCheckout, setConfirmCheckout] = useState(false);
 
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem({ id });
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItem = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  

  const orderConfirmHandler = () => {
    setConfirmCheckout(true);
  };

  const modalActions = (
    <div className={styles.actions}>
      <button onClick={props.onHideCart} className={styles["button--alt"]}>
        Close
      </button>

      {hasItems && (
        <button type='button' onClick={orderConfirmHandler} className={styles.button}>
          Order
        </button>
      )}
    </div>
  );

  const submitOrderHandler = (userdata) => {
    console.log(userdata);

  }

  

  return (
    <Modal onClose={props.onHideCart}>
      {cartItem}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {confirmCheckout && hasItems && <Checkout onConfirm ={submitOrderHandler} onCancel={props.onHideCart}/>}

      {!confirmCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
