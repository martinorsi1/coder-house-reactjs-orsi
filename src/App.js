import './App.css'
import Navbar from './components/navbar/Navbar';
import { ItemLitsContainer } from './components/itemListContainer/ItemListContainer';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ItemLitsContainer greeting='Bienvenidos a ZapasAn!'></ItemLitsContainer>
    </div>
  );
}

export default App;


// import './App.css'
// import Navbar from './components/navbar/Navbar';
// import { ItemLitsContainer } from './components/itemListContainer/ItemListContainer';
// function App() {
//   const saludo='La mejor Tienda online de Zapatillas del Uruguay!!!'
//   return (
//     <div>
//       <Navbar></Navbar>
//       <ItemLitsContainer greeting='Bienvenidos a ZapasAn!' saludo={saludo}></ItemLitsContainer>
//     </div>
//   );
// }

// export default App;