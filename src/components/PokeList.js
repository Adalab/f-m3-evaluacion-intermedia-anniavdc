import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const { pokeData } = this.props;

    return (
      <ul className="poke__list">
        {pokeData.map(item => (
          <Pokemon
            key={item.id}
            src={item.url}
            title={item.name}
            type={item.types}
          />
        ))}
      </ul>
    );
  }
}

export default PokeList;
