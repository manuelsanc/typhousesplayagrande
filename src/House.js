import React from "react";
import styles from './styles/house.module.scss';
import photo1 from './img/housePhoto1.png';
import photo2 from './img/housePhoto2.png';

const House = () => {
    return(
        <div className={`d-flex flex-row justify-content-center mt-3 ${styles.house}`}>
            <a name="house" />
            <div className={`d-flex flex-column justify-content-center text-center p-2 ${styles.houseText}`}>
                <h1 className={`d-flex flex-column justify-content-center text-center p-2`}>WELCOME TO PLAYA GRANDE T&P HOUSES</h1>
                <spam className={`p-3`}>Playa Grande Houses offers a complete private house in the middle of Marino las Baulas National Park. The house is fully equipped with all you need to have a comfortable stay close to the beach. It is located at 1 mile of the beach with restaurants and super markets around.</spam>
                <spam className={`p-3`}>The house consists in two bedrooms, main bedroom with large bed and the other one with two single beds. The kitchen is fully equipped with all what you need to cook your own food. Living room with TV. Also it has a large porsche at the front and washing room at the back.</spam>
                <spam className={`p-3`}>The area is quiet and private parking. Provide high velocity internet connection and pet friendly.</spam>
                <spam className={`p-3`}>No doubt this house will be perfect for your family or group!</spam>
            </div>
            <div className={`d-flex flex-row justify-content-center text-center ${styles.housePhotos}`}>
                <img src={photo1} alt="T&P Houses" />
                <img src={photo2} alt="T&P Houses" />
            </div>
        </div>
      );
};
export default House;