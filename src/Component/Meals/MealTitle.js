import styles from "./MealTitle.module.css";

const MealTitle = (props) => {
  return (
    <h1 className={styles.heading} >
      {props.children}
    </h1>
  );
};

export default MealTitle;