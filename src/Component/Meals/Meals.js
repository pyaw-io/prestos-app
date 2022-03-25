import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import MealTitle from "./MealTitle";


const Meals = () =>{
    return <Fragment>
        <MealsSummary/>
        <MealTitle>Main Meals</MealTitle>
        <MealTitle>BIRYANI</MealTitle>
        <AvailableMeals/>
        <MealTitle>TANDOORI</MealTitle>
        <AvailableMeals/>
        <MealTitle>SUNDRIES</MealTitle>
        <AvailableMeals/>
    </Fragment>

}

export default Meals