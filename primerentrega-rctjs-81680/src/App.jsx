import './App.css'

import ItemListContainer from "./components/ItemListContainer";

import NavBar from "./components/NavBar";

import Cards from './components/Cards';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    
    <BrowserRouter>
      <NavBar />

         <ItemListContainer bienvenida= 'Bienvenidos a su nuevo hobbie'/>

         <Cards />

    </BrowserRouter>
   )

  }

export default App