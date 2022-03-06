import { useEffect,useState} from "react";

import styles from "./AvailableMeals.module.css";
import Card from '../UI/Card'

import MealItem from "./MeaIitem/MealItem";



// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = (props) => {

  const [meals,setMeals] = useState([])
  const [loading,setLoading] = useState(true)
  const [httpError,setHttpError] = useState()

  useEffect(() =>{
    const fetchMeals = async () => {
     const response =  await fetch('https://meals-90adc-default-rtdb.firebaseio.com/meals.json')


    //  console.log(response);
     
    if(!response.ok){
      throw new Error('something went wrong')}

     const responseData = await response.json()
    //  console.log(responseData);



      

      const loadedMeals = []

      for(const key in responseData){

        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })

      }


      

      
      setMeals(loadedMeals)
      setLoading(false)


    }

     fetchMeals().catch(error =>{
       setLoading(false)
       setHttpError(error.message)
     })

   
    




  },[])

  if(loading){
    return (
      <section className={styles.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if(httpError){
    return(
      <section className={styles.mealserror}>
        <p>{httpError}</p>
      </section>
    )
  }

 

  






  const mealsList = meals.map((meal) =>
   <MealItem
   id={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}/>);

  return (
    <section className={styles.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
