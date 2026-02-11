import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer titulo='Bienvenidos a su nuevo hobbie' />} />
        <Route path="/categoria/Bebidas" element={<ItemListContainer titulo='Bebidas' />} />
        <Route path="/categoria/Desayunos" element={<ItemListContainer titulo='Desayunos' />} />
        <Route path="/categoria/Almuerzos" element={<ItemListContainer titulo='Almuerzos' />} />
        <Route path="/categoria/Meriendas" element={<ItemListContainer titulo='Meriendas' />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;