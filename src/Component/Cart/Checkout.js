import { useRef, useEffect, useState } from "react";
import classes from "./Checkout.module.css";

const validInputValue = (value) => value.trim() !== "";
const validPostalValue = (value) => value.trim().length > 4;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  

  

  const [validName,setValidName] = useState(false)
  const [validStreet,setValidStreet] = useState(false)
  const [validPostal,setValidPostal] = useState(false)
  const [validCity,setValidCity] = useState(false)





  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;

 

    setValidName(validInputValue(enteredName))
    setValidStreet(validInputValue(enteredStreet))
    setValidPostal(validPostalValue(enteredPostal))
    setValidCity(validInputValue(enteredCity))

    const formIsValid =
    validInputValue(enteredName) &&
    validInputValue(enteredStreet) &&
    validPostalValue(enteredPostal) &&
    validInputValue(enteredCity);

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postal: enteredPostal,
      })



   
  };

    

    

    const inputClasses = input => (input? `${classes.control}` : `${classes.control}  ${classes.invalid} `)


  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={inputClasses(validName)}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!validName && <p>Please enter a valid Name</p>}
      </div>
      <div className={inputClasses(validStreet)}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!validStreet && <p>Please enter a valid Street</p>}

      </div>
      <div className={inputClasses(validPostal)}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!validPostal && <p>Please enter a valid Postal Address</p>}

      </div>
      <div className={inputClasses(validCity)}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!validCity && <p>Please enter a valid City</p>}

      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel Order
        </button>

        <button type="submit" className={classes.submit}>
          Confirm Order
        </button>
      </div>
    </form>
  );
};

export default Checkout;
