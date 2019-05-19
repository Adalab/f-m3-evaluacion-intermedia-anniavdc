import React from "react";
import Pokemon from "./Pokemon";
import "../PokeList.css";

class PokeList extends React.Component {
  render() {
    const { pokeData } = this.props;

    return (
      <ul className="poke__list">
        {pokeData.map(item => (
          <li className="poke__item" key={item.id}>
            <Pokemon 
            src={item.url} 
            title={item.name} 
            type={item.types} />
          </li>
        ))}
      </ul>
    );
  }
}


export default PokeList;
