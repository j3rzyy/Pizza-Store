import React, { useState } from 'react';
import './style.css';
import Pizza from '../models/Pizza';

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const initState = {
  title: '',
  price: '',
  img: '',
};

const AddPizzaForm: React.FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewPizza({ ...newPizza, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newPizza;
    if (title && price && img) {
      addPizza({
        title,
        img,
        price: Number(price),
        id: Date.now(),
      });
      setNewPizza(initState);
    } else {
      console.log('дополните данные');
    }
    // console.log('handle change >>> ', e.target);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='title'
        type='text'
        placeholder='Название'
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name='price'
        type='text'
        placeholder='Стоимость'
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name='img'
        type='text'
        placeholder='Изображение'
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type='submit'>+ добавить в меню</button>
    </form>
  );
};

export default AddPizzaForm;
