import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContiner';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenidos"}></ItemListContainer>
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;
