import './App.css'

import ItemListContainer from "./components/ItemListContainer";

import NavBar from "./components/NavBar";

import Cards from './components/Cards';

function App() {

  return (
    <>
      <NavBar />

        <div>

         <ItemListContainer bienvenida= 'Bienvenidos a su nuevo hobbie'/>

         <Cards />
        </div>

    </>
   )

  }

export default App