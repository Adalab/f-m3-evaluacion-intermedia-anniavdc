import React from "react";
import {pokemon}  from './services/ReasonsService';
import PokeList from "./components/PokeList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="page__title">Pokemons List</h1>
        <PokeList pokeData={pokemon} />
      </div>
    );
  }
}

export default App;
