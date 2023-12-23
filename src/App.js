import PizzaPrep from "./PizzaPrep";

const pizzas = [
  {
    id: 0,
    name: 'Hawaiian',
    toppings: 'Pineapple and Ham',
    crust: 'thin crust',
  },
  {
    id: 1,
    name: 'Peperoni',
    toppings: 'Peperoni and Cheese',
    crust: 'Pan Pizza',
  },
  {
    id: 2,
    name: 'Meat Lovers',
    toppings: 'Sausage Ham and Bacon',
    crust: 'Hand Tossed',
  },
]

function App() {
  return (
    <div>
      <h1>Pizza Land</h1>
      {pizzas.map(pi => <PizzaPrep pizza={pi} />)}
    </div>
  );
}

export default App;
