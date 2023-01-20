import axios from 'axios';
import { useEffect, useState } from 'react';

function PokemonList({pokemon}) { 

    return (
        <div>
            {pokemon.map((p) => ( 
                <div key={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</div>
            ))}
        </div>
    )


}

export default PokemonList;