import { Fragment } from "react";
import Carousel from "../UI/Swiper";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";



const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
       <div className={styles.title}>
            <h1>Presto's</h1>
              <h3>Food House</h3>
        </div>

        <div className={styles.search}>
          <input type="text" placeholder="Search meals"></input>
          <a href="#"><i className="fa fa-search"></i></a>
        </div>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>    
      <Carousel/>
    </Fragment>
  );
};

export default Header;
