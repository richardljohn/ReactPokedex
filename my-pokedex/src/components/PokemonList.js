import axios from 'axios';
import { useEffect, useState } from 'react';

function PokemonList({pokemon}) { 

    function getPokemonByName(name){ 
        return ""
    }

    return (
        <div>
            {pokemon.map((p) => ( 
                <p key={p}><button class="pokemon-btn btn-primary" onClick={() => getPokemonByName(p.name)}>{p.charAt(0).toUpperCase() + p.slice(1)}</button></p>
                //<div key={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</div>
            ))}
        </div>
    )


}

export default PokemonList;