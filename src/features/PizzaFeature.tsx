import React, { useEffect, useState } from "react";
import Pizza from "../models/Pizza";
import { useParams } from "react-router-dom";

const PizzaFeature = () => {
  const [pizza, setPizza] = useState<Pizza | null>(null);

  const { id } = useParams();

  console.log("id >>> ", id);

  useEffect(() => {
    const pizzasState = localStorage.getItem("pizzasState");
    if (pizzasState && id) {
      const pizzasList = JSON.parse(pizzasState);
      const searchId = parseInt(id);

      const currentPizza = pizzasList.find((p: Pizza) => p.id === searchId);
      setPizza(currentPizza);
    }
  }, []);

  return (
    <>
      <span className="heading">Ваша пицца</span>
      <div className="pizza pizza-page">
        <img src={`/images/${pizza?.img}`} alt={pizza?.title} />
        <h2>{pizza?.title}</h2>
        <span>{pizza?.price} $</span>
        <p>Лучшая в городе!</p>
      </div>
    </>
  );
};

export default PizzaFeature;
