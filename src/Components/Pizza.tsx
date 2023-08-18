import { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import { PizzaI, ToppingI } from "../types/pizza";

const toppings: ToppingI[] = [
  { id: "1", name: "Cheese" },
  { id: "2", name: "Pepperoni" },
  { id: "3", name: "Ham" },
  { id: "4", name: "Pineapple" }
];

const pizza: PizzaI[] = [
  { id: "1", name: "Pepperoni", toppings: [toppings[0], toppings[1]] },
  { id: "2", name: "Cheese", toppings: [toppings[0]] },
  { id: "3", name: "Ham and Pineapple", toppings: [...toppings.slice(2)] }
];

export function Pizza(): ReactElement {
    return (
    <div>
      <h1>
        Pizzas
      </h1>
      <ul>
        {pizza.map(pizza => (
          <li key={pizza.id}>
            <Link to={`/pizza/${pizza.id}`}>{pizza.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function EditPizza(): ReactElement {
  const params = useParams();
  
  return (
    <div>

      <h1>Edit Pizza: {pizza.find(({ id }) => id === params.pizzaId)?.name}</h1>
      <Link className="pd-left" to={`/pizza/${params.pizzaId}/toppings`}>
        View Toppings
      </Link>
    </div>
  )
}

export function Toppings(): ReactElement {
  const params = useParams();
  
  return (
    <div>
      <h1>
        Toppings for {pizza.find(({ id }) => id === params.pizzaId)?.name}
      </h1>
      <ul>
        {pizza
          .find(({id}) => id === params.pizzaId)
          ?.toppings.map(({id, name}) => (
            <li key={id}>{name}</li>
          ))}
      </ul>
    </div>
  )
}