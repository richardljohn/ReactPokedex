import axios from 'axios';
import { useEffect, useState } from 'react';

function PokemonList() { 

    const [pokemon, setPokemon] = useState([])

    function getPokemon(){
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(function(res){
            setPokemon(res.data.results)
        })
    }

    return (
        <p>pokemon</p> 
    )


}

export default PokemonList;