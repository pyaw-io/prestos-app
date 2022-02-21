import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${styles.card}  ${!props.ClassName ? "" : props.ClassName}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
