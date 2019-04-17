import React from "react";

const PokemonDetails = (props) => {
  if (props.pokemonSelected === null) return null;
  console.log(props.pokemonSelected)
  const style = {
    width: '200px',
    height: 'auto'
  }
  return(
    <div className="image" >
      <img src={props.pokemonSelected.sprites.front_shiny} style={style}></img>
    </div>
    )
}

export default PokemonDetails;
