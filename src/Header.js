import React from "react";
import styles from './styles/header.module.scss';
import logo from './img/logo.png';

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={`d-flex justify-content-center mt-5 ${styles.mainMenu}`}>
                <div className={`p-2 pt-5 pl-3`}><a href="#house">THE HOUSE</a></div>
                <div className={`p-2 pt-5 ml-5`}><a href="#gallery">GALLERY</a></div>
                <div className={`ml-5 mr-5`}><img src={logo} alt="T&P Houses Playa Grande"/></div>
                <div className={`p-2 pt-5 ml-3`}><a href="#booking">CHECK AVAILABILITY</a></div>
                <div className={`p-2 pt-5 ml-5`}><a href="#map">MAP</a></div>
            </div>
            <div className={`d-flex flex-column justify-content-center align-items-center ${styles.mainPhoto}`}>
                <h1 className={`pt-5`}>RELAX AND ENJOY</h1>
                <h2 className={`pt-5`}>IN A PRIVATE HOUSE AT PLAYA GRANDE</h2>
            </div>
        </header>
      );
};
export default Header;