import React, { useState } from "react";
import Pizza from "../models/Pizza";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import EditPizzaForm from "./EditPizzaForm";

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const SinglePizza: React.FC<SinglePizzaProps> = ({
  pizza,
  updatePizza,
  deletePizza,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => setEdit(!edit);

  const handleDeletePizza = () => deletePizza(pizza.id);

  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price}</span>
      <div className="pizza-controls">
        <AiFillEdit onClick={handleToggleEdit} />
        <AiFillDelete onClick={handleDeletePizza} />
      </div>

      {edit ? (
        <EditPizzaForm
          data={pizza}
          updatePizza={updatePizza}
          handleToggleEdit={handleToggleEdit}
        />
      ) : null}
    </div>
  );
};

export default SinglePizza;
