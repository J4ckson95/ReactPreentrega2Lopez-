import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContiner';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenidos"}></ItemListContainer>
      <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log(quantity)}></ItemCount>
    </div>
  );
}

export default App;
