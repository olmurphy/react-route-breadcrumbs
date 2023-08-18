import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Breadcrumbs, EditPizza, Pizza, Toppings } from './Components';
import Home from './Components/Home';


export default function App() {
  return (
    <>
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/pizza/:pizzaId" element={<EditPizza />} />
        <Route path="/pizza/:pizzaId/toppings" element={<Toppings />} />
      </Routes>
    </>
  )
}
