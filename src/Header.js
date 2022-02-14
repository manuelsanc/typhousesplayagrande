import React from "react";
import title from './img/title.png';
import styles from './styles/header.module.scss';
import iconWifi from './img/icon-wifi.png';
import iconBeach from './img/icon-beach.png';
import iconParking from './img/icon-parking.png';
import iconPets from './img/icon-pets.png';
import iconMarkets from './img/icon-market.png';
import bookNow from './img/booknow.png';
import logoAirbnb from './img/logo-airbnb.png';
import logoBooking from './img/logo-booking.png';
import logoFacebook from './img/logo-facebook.png';

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.title} />
            <div className={styles.break} />
            <div className={styles.services}>
                <div className={styles.service}><img src={iconWifi} alt="WiFi"/></div>
                <div className={styles.service}><img src={iconBeach} alt="Beach"/></div>
                <div className={styles.service}><img src={iconParking} alt="Parking"/></div>
                <div className={styles.service}><img src={iconPets} alt="Pets"/></div>
                <div className={styles.service}><img src={iconMarkets} alt="Super Markets"/></div>
            </div>
            <div className={styles.bookNowBar}>
                <div className={styles.bookNow}><img src={bookNow} alt="Book Now!"/></div>
                <div className={styles.logoBar}>
                    <div className={styles.logo}><a href="http://airbnb.com/h/tortugoypolloplayagrandeguanacaste" target="_blank"><img src={logoAirbnb} alt="AirBnB"/></a></div>
                    <div className={styles.logo}><a href="http://www.booking.com/Share-4fhVLM" target="_blank"><img src={logoBooking} alt="Booking.com"/></a></div>
                    <div className={styles.logo}><a href="https://www.facebook.com/profile.php?id=100078244413511" target="_blank"><img src={logoFacebook} alt="Facebook"/></a></div>
                </div>
            </div>
        </header>
      );
};
export default Header;