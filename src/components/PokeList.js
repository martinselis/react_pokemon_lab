import React from "react";
import PokemonDetails from "./PokemonDetails.js";

const PokeList = (props) => {
  if (!props.pokemons) return null;
  console.log(props.pokemons)
  return(
    <div>
      <div>
        <select onChange={props.getPokemonDetails}>
          {props.pokemons.map(pokemon => {
            return <option key={pokemon.name} value={pokemon.url}>{pokemon.name}</option>
          })}
        </select>
      </div>
      <div>
        <PokemonDetails pokemonSelected={props.pokemonSelected}/>
      </div>
    </div>
  )
}

export default PokeList;
