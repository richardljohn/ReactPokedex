import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

function PokemonList() { 

    const [pokemon, setPokemon] = useState([])
    const [selectedPokemon, setSelctedPokemon] = useState()
    const [currPage, setCurrPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const [prevPage, setPrevPage] = useState()
    const [nextPage, setNextPage] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        let cancel
        axios.get(currPage, {
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then((res) => {
                setLoading(false)
                setNextPage(res.data.next)
                //console.log(nextPage)
                setPrevPage(res.data.previous)
                //console.log(prevPage)
                setPokemon(res.data.results.map((p) => p.name))
        })
    
        return () => cancel()
          
      }, [currPage])

    function goToNextPage(){ 
    setCurrPage(nextPage)
    }

    function goToPrevPage() { 
    setCurrPage(prevPage)
    }

    function getPokemonByName(name){ 
        setSelctedPokemon(name)
    }

    return (
        <>
            <div>
                {pokemon.map((p) => ( 
                    <p key={p}><button class="pokemon-btn btn-primary" onClick={() => getPokemonByName(p.name)}>{p.charAt(0).toUpperCase() + p.slice(1)}</button></p>
                ))}
            </div>
            <Pagination goToNextPage={nextPage ? goToNextPage : null} goToPrevPage={prevPage ? goToPrevPage : null}/>
        </>
    )
}

export default PokemonList;