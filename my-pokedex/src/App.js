import './App.css';
import React, {useState, useEffect} from 'react';
import PokemonList from './components/PokemonList';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([])
  const [currPage, setCurrPage] = useState("https://pokeapi.co/api/v2/pokemon")
  const [prevPage, setPrevPage] = useState("")
  const [nextPage, setNextPage] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get("https://pokeapi.co/api/v2/pokemon")
        .then((res) => {
            setLoading(false)
            setNextPage()
            setPokemon(res.data.results.map((p) => p.name))
        })
  }, [])

  function getPokemon(){
        
  }

  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
