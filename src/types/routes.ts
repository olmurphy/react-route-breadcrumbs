export interface RoutesI {
  path: string;
  breadcrumb: string;
}

export const routes: RoutesI[] = [
  { path: "/pizza", breadcrumb: "Pizzas" },
  { path: "/pizza/:pizzaId", breadcrumb: "Edit Pizza" },
  { path: "/pizza/:pizzaId/toppings", breadcrumb: "Pizza Toppings" },
];
