export interface ToppingI {
    id: string;
    name: string;
}
  
export interface PizzaI { 
    id: string;
    name: string;
    toppings: ToppingI[];
}