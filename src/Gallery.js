import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './styles/header.module.scss';
import photo1 from './img/photo1.png';
import photo2 from './img/photo2.png';
import photo3 from './img/photo3.png';
import photo4 from './img/photo4.png';
import photo5 from './img/photo5.png';
import photo6 from './img/photo6.png';
import photo7 from './img/photo7.png';
import photo8 from './img/photo8.png';
import photo9 from './img/photo9.png';
import photo10 from './img/photo10.png';
import photo11 from './img/photo11.png';
import photo12 from './img/photo12.png';

const Gallery = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      return(
        <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className={styles.Gallery}
        >
        <div><img src={photo1} alt="Photo Gallery 1"/></div>
        <div><img src={photo2} alt="Photo Gallery 2"/></div>
        <div><img src={photo3} alt="Photo Gallery 3"/></div>
        <div><img src={photo4} alt="Photo Gallery 4"/></div>
        <div><img src={photo5} alt="Photo Gallery 5"/></div>
        <div><img src={photo6} alt="Photo Gallery 6"/></div>
        <div><img src={photo7} alt="Photo Gallery 7"/></div>
        <div><img src={photo8} alt="Photo Gallery 8"/></div>
        <div><img src={photo9} alt="Photo Gallery 9"/></div>
        <div><img src={photo10} alt="Photo Gallery 10"/></div>
        <div><img src={photo11} alt="Photo Gallery 11"/></div>
        <div><img src={photo12} alt="Photo Gallery 12"/></div>
        </Carousel>

      );
};
export default Gallery;