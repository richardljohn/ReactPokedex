import './App.css';
import React, {useState, useEffect} from 'react';
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState("")
  const [currPage, setCurrPage] = useState("https://pokeapi.co/api/v2/pokemon")
  const [prevPage, setPrevPage] = useState("")
  const [nextPage, setNextPage] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currPage, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((res) => {
            setLoading(false)
            setNextPage(res.data.next)
            setPrevPage(res.data.previous)
            setPokemon(res.data.results.map((p) => p.name))
    })

    return () => cancel()

      
  }, [currPage])

  function goToNextPage(){ 
    setCurrPage(nextPage)
  }

  function goToPrevPage() { 
    setNextPage(prevPage)
  }


  if(loading) return "Loading...."

  function getPokemon(){
        
  }

  return (
    <>
      <PokemonList pokemon={pokemon}/>
      <Pagination goToNextPage={goToNextPage} goToPrevPage={goToPrevPage}/>
    </>
  );
}

export default App;
