import './App.css';
import { useState } from "react"
import axios from "axios";

function App() {
    const [pokemonName, setPokemonName] = useState("")
    const [pokemon, setPokemon] = useState({
        name: "",
        species: "",
        img: "", 
        stats: "",
        type: "",
    })
    const searchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
            setPokemon({ name: pokemonName,
                 species: response.data.species.name,
                  img: response.data.sprites.front_default, 
                  stats: response.data.stats.map((stat) => stat.base_stat),
                  type: response.data.types[0].type.name,
        })
        })
    }

    return (
        <div className='App'>
            <div className='TittleSection'>
                <h1>Pokemon Stats</h1>
                <input type="text" onChange={(event) => { setPokemonName(event.target.value) }}></input>
                <button onClick={searchPokemon}>Search Pokemon</button>
            </div>
            <div className='pokemonCard'>
                 
            </div>
        </div>)
}

export default App;
