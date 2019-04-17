import React, {Component} from "react";
import PokeList from "../components/PokeList.js";

class PokeContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        pokemons: null,
        pokemonSelected: null
      }
      // this.getPokemonDetails = this.getPokemonDetails.bind(this)
    }

    componentWillMount() {
      fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=50')
        .then(res => res.json())
        .then(res => {
          const sortedResults = res.results.sort((a, b) => {
            return (a.name > b.name) ? 1 : -1
          })
          this.setState({pokemons: sortedResults})
        })
        // .then(res => this.setState({pokemons: res.results}))
    }

    getPokemonDetails = (event) => {
      fetch(event.target.value)
        .then(res => res.json())
        .then(res => this.setState({pokemonSelected: res}))
    }

    render() {
      return (
        <div>
          <h1>Pokemon</h1>
          <PokeList
          pokemons={this.state.pokemons}
          getPokemonDetails={this.getPokemonDetails}
          pokemonSelected={this.state.pokemonSelected} />
        </div>
      );
    }
}

export default PokeContainer;
