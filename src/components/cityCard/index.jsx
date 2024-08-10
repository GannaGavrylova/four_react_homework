import React from "react";
import styles from "./styles.module.css";

function CityCard({ city }) {
  if (!city) return null; //если город не выбран, неотображать ничего
  return (
    <div>
      <div className={styles.cityCardContainer}>
        <h1>{city.name}</h1>
        <img
          src={city.imageUrl}
          alt={city.name}
          style={{
            width: "300px",
            height: "200px",
          }}
        />
        <h2>{city.description}</h2>
        <p>{city.interestingFact}</p>
      </div>
    </div>
  );
}

export default CityCard;

// Создание компонента CityCard: Сосредоточьтесь на создании карточки города, которая будет отображать изображение, описание и интересные факты о выбранном городе.
