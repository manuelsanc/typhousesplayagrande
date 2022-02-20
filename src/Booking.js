import React from "react";
import styles from './styles/booking.module.scss';
import logoAirbnb from './img/logo-airbnb.png';
import logoBooking from './img/logo-booking.png';
import logoFacebook from './img/logo-facebook.png';

const Booking = () => {
    return(
        <div className={`d-flex flex-column mt-3 flex-wrap ${styles.booking}`}>
            <a name="booking" />
            <div className={`d-flex flex-row justify-content-left flex-wrap ${styles.logos}`}>
                <div className={`p-5`}><a href="http://airbnb.com/h/tortugoypolloplayagrandeguanacaste" target="_blank"><img src={logoAirbnb} alt="AirBnB" /></a></div>
                <div className={`p-5`}><a href="http://www.booking.com/Share-4fhVLM" target="_blank"><img src={logoBooking} alt="Booking.com" /></a></div>
                <div className={`p-5`}><a href="https://www.facebook.com/profile.php?id=100078244413511" target="_blank"><img src={logoFacebook} alt="Facebook" /></a></div>
            </div>
            <div className={`d-flex flex-column align-items-end w-100 pr-3 ${styles.contact}`}>
                <spam><a href="https://wa.me/50688208269" target="_blank">+506 8820 8269</a></spam>
                <spam><a href="mailto:casatortupollo@gmail.com" target="_blank">casatortupollo@gmail.com</a></spam>
            </div>
        </div>
      );
};
export default Booking;