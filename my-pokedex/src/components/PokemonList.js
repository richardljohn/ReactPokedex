import axios from 'axios';
import { useEffect, useState } from 'react';

function PokemonList({pokemon}) { 

    return (
        <div>
            {pokemon.map((p) => ( 
                <div key={p}>{p}</div>
            ))}
        </div>
    )


}

export default PokemonList;