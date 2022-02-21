import {useState} from 'react'
import Meals from './Component/Meals/Meals';
import Cart from './Component/Cart/Cart';
 import CartProvider from './store/cartProvider'


import Header from './Component/Layout/Header'



function App() {
  const [showCart,setShowCart] = useState(false)
  // const []

  const showCartHandler = () =>{
    setShowCart(true)
    
  }

  const hideCartHandler = () =>{
    setShowCart(false)
  

  }




  return (
    <CartProvider>
      
      {showCart && <Cart onHideCart ={hideCartHandler} />}
      <Header  onShowCart ={showCartHandler}></Header>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
