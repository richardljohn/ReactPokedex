import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
        console.log(selectedPokemon)
    }, []);

    if(!selectedPokemonData) { 
        return ( 
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div>
            <p><img src={selectedPokemonData.sprites.front_default}/></p>
            
        </div>
    )

}

export default Pokemon;