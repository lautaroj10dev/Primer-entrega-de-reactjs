import './App.css'
import ItemListContainer from './components/ItemListContainer';

//import BotonMultiuso from "./examples/BotonMultiuso";

import NavBar from "./components/NavBar";

function App() {
  //const saludar = () => {
    //alert("Hola, bienvenido/a al curso de ReactJS de Coderhouse");
  //}
    //const despedir = () => {
    //alert("Adios, estas salaiendo del curso. Nos vemos en la proxima clase");
  //}

  return (
    <>
      <NavBar />
      <ItemListContainer bienvenida= 'Bienvenidos a su nuevo hobbie'/>
      {/*<BotonMultiuso onClickFunction={saludar}/>*/}
      {/*<BotonMultiuso onClickFunction={despedir}/>*/}
   </>
  )
}

export default App