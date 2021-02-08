import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pocecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <div>Type: {this.props.type}</div>
        <div>EXP: {this.props.base_experience}</div>
      </div>
    );
  }
}

export default Pocecard;
