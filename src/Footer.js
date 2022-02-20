import React from "react";
import styles from './styles/footer.module.scss';
const Footer = () => {
    return(
        <footer className={`d-flex flex-column justify-content-center align-items-center ${styles.footer}`}>
            <div>TyP Houses Playa Grande ::::::: 50 North Cafe del Pubelo ::::::: <a href="https://wa.me/50688208269" className={`link-info`} target="_blank">(506) 8820 8269</a> ::::::: <a href="mailto:casatortupollo@gmail.com" className={`link-info`} target="_blank">casatortupollo@gmail.com</a></div>
            <div>© Copyright 2022  All right reserved</div>
        </footer>
      );
};
export default Footer;