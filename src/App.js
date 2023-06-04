
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting={'Almacen de Bebidas'} />
    
    </div>
  );
}

export default App;
