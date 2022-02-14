import React from "react";
import iconEmail from './img/icon-email.png';
import iconWhatsapp from './img/icon-whatsapp.png';
import styles from './styles/footer.module.scss';
const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div><img src={iconEmail} alt="casatortupollo@gmail.com"/> casatortupollo@gmail.com</div>
            <div><img src={iconWhatsapp} alt="+506 8820 8269"/> +506 8820 8269</div>
        </footer>
      );
};
export default Footer;