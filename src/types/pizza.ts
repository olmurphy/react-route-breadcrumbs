export interface ToppingI {
  readonly id: string;
  name: string;
}

export interface PizzaI {
  readonly id: string;
  name: string;
  toppings: ToppingI[];
}
