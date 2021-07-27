import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <header className="header">
      <h1>Pokedex</h1>
      </header>      
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
