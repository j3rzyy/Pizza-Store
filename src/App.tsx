import React, { useState } from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizzaForm';
import Pizza from './models/Pizza';
import DisplayPizzas from './components/DisplayPizzas';

const App: React.FC = () => {
  const [pizzasList, setPizzaList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzasList, newPizza]);
  };

  const updatePizza = (newPizza: Pizza) => {
    setPizzaList(pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza)));
  };

  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
    setPizzaList(newPizzasList)
  }

  console.log('pizzasList >>> ', pizzasList)

  return (
    <div className='App'>
      <div className='wrap'>
        {/* <span className='heading'>Наша пиццерия</span> */}
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzasList={pizzasList} updatePizza={updatePizza} deletePizza={deletePizza} />
      </div>
    </div>
  );
};

export default App;
