import { useRef,useState} from 'react'

import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm =(props) =>{

    const [validAmount,setvalidAmount]=useState(true)

    const amountInputRef = useRef()
    const submitHandler = (e) => {
        e.preventDefault()

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 ){
            setvalidAmount(false)

        }

        props.onAddToCart(enteredAmountNumber)



    }

    return <form className={styles.form} onSubmit={submitHandler}>
        <button>+</button>
        <Input ref={amountInputRef}  input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        
        {!validAmount && <p>Please enter valid amount </p>}
    </form>

}

export default MealItemForm