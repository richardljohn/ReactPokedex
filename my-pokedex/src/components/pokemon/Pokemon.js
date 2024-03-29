import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./pokemon.css"

function Pokemon( {selectedPokemon} ){
    
    const [selectedPokemonData, setSelectedPokemonData] = useState()

    const getPokemon = async(name) => { 
        const details = await getPokemonData(name)
        setSelectedPokemonData(details.data)
    }

    const getPokemonData = async(name) => { 
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return res
    }

    useEffect(() => { 
        getPokemon(selectedPokemon)
    }, []);

    if(!selectedPokemonData) { 
        return ( 
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div class="card" style="width: 18rem;">
            <img class="pokemon-picture" src={selectedPokemonData.sprites.front_default}/>
            <img class="pokemon-picture" src={selectedPokemonData.sprites.back_default}/>
            <div class="card-body">
                <p class="card-text">
                    This is {selectedPokemonData.sprites.front_default}
                </p>
            </div>
        </div>
    )
}

export default Pokemon;