import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemindex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingItemindex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemindex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
  

    const existingItemindex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingItemindex];

    let updatedItems;


    const updatedTotalAmount =
    state.totalAmount - existingCartItem.price 

    if (existingCartItem.amount === 1) {
      updatedItems = [...state.items];

      updatedItems =  updatedItems.filter((item) => item.id !== existingCartItem.id);
  
      
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      }

      updatedItems = [...state.items];



      updatedItems[existingItemindex] = updatedItem
    }

    return  {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (item) => {
    dispatchCartAction({
      type: "REMOVE",
      id: item.id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
