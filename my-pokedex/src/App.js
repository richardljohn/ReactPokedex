import './App.css';
import React, {useState, useEffect} from 'react';
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';
import Pokemon from './components/Pokemon';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState()
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

  if(loading){
    return "Loading...."
  } 

  function getPokemonByName(name){
    setSelectedPokemon(name)       
  }

  if(selectedPokemon) { 
    return ( 
      <div>
        <p><Pokemon selectedPokemon={selectedPokemon}/></p>
      </div>
    )
  }

  return (
    <>
      <PokemonList pokemon={pokemon}/>
      <Pagination goToNextPage={nextPage ? goToNextPage : null} goToPrevPage={prevPage ? goToPrevPage : null}/>
    </>
  );
}
export default App;