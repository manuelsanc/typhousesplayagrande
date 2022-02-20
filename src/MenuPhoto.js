import React from "react";
import styles from './styles/menuPhoto.module.scss';

const MenuPhoto = () => {
    return(
        <div className={`d-flex justify-content-center mt-3 ${styles.menuPhoto}`}>
            <a href="#house" className={`bg-image d-flex flex-column justify-content-center align-items-center align-text-bottom mr-3 ${styles.menuPhotoHouse}`}>
                <h1>THE HOUSE</h1>
            </a>
            <a href="#gallery" className={`bg-image d-flex flex-column justify-content-center align-items-center align-text-bottom mr-3 ${styles.menuPhotoGallery}`}>
                <h1>GALLERY</h1>
            </a>
            <a href="#booking" className={`bg-image d-flex flex-column justify-content-center align-items-center align-text-bottom mr-3 ${styles.menuPhotoAvailability}`}>
                <h1>AVAILABILITY</h1>
            </a>
            <a href="#map" className={`bg-image d-flex flex-column justify-content-center align-items-center align-text-bottom ${styles.menuPhotoMap}`}>
                <h1>MAP</h1>
            </a>
        </div>
      );
};
export default MenuPhoto;