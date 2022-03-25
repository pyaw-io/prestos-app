import {useState} from 'react'
import Meals from './Component/Meals/Meals';
import Cart from './Component/Cart/Cart';
 import CartProvider from './store/cartProvider'


import Header from './Component/Layout/Header'
import Footer from './Component/Layout/Footer';




function App() {
  const [showCart,setShowCart] = useState(false)
  


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
      <Footer/>
    </CartProvider>
  );
}

export default App;
