import logo from './logo.svg';
import './App.css';
import React, {useState } from 'react';
import PokemonList from './Components/PokemonList';

function App() {
  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
