import React from "react";
import styles from './styles/gallery.module.scss';
import photo01 from './img/gallery01.png';
import photo02 from './img/gallery02.png';
import photo03 from './img/gallery03.png';
import photo04 from './img/gallery04.png';
import photo05 from './img/gallery05.png';
import photo06 from './img/gallery06.png';
import photo07 from './img/gallery07.png';
import photo08 from './img/gallery08.png';
import photo09 from './img/gallery09.png';
import photo10 from './img/gallery10.png';

const Gallery = () => {
    return(
        <div className={`d-flex flex-row justify-content-center mt-3 flex-wrap`}>
            <a name="gallery" />
            <div className={`p-1`}><img src={photo01} alt="T&P Houses" /></div>
            <div className={`p-1`}><img src={photo02} alt="T&P Houses" /></div>
            <div className={`p-1`}><img src={photo03} alt="T&P Houses" /></div>
            <div className={`p-1`}><img src={photo04} alt="T&P Houses" /></div>
            <div className={`p-1`}><img src={photo05} alt="T&P Houses" /></div>
            <div className={`p-1`}><img src={photo06} alt="T&P Houses" /></div>
            <div className={`p-1`}><img src={photo07} alt="T&P Houses" /></div>
            <div className={`p-1`}><img src={photo08} alt="T&P Houses" /></div>
            <div className={`p-1`}><img src={photo09} alt="T&P Houses" /></div>
            <div className={`p-1`}><img src={photo10} alt="T&P Houses" /></div>
        </div>
      );
};
export default Gallery;