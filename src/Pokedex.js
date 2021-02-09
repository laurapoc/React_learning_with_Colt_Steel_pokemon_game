import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    const pokeList = this.props.pokemon.map((p) => (
      <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
    ));
    return (
      <div className="Pokedex">
        {title}
        <h4>Total experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">{pokeList}</div>

        {/* {this.props.pokemons.map((p) => (
          <Pocecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))} */}
      </div>
    );
  }
}

export default Pokedex;
