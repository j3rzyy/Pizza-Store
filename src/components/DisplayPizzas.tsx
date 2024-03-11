import React from "react";
import Pizza from "../models/Pizza";

interface DispalyPizzasProps {
  pizzasList: Pizza[];
}

const DisplayPizzas: React.FC<DispalyPizzasProps> = ({ pizzasList }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return pizza.title;
      })}
    </div>
  );
};

export default DisplayPizzas;
