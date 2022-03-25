import { useContext } from 'react'

import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'
import Card from '../../UI/Card'



const MealItem = (props) =>{
    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name:props.name,
            amount:amount,
            price:props.price

        })
    }



    return <li className={styles.meal}>

        

        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div>
            <div className={styles.price}>{price}</div>
            <MealItemForm onAddToCart 
            ={addToCartHandler}/>

        </div>
        
        
        
        



    </li>

}

export default MealItem