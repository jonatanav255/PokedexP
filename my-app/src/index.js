import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [wildPokemon, setWildPokemon] = useState({});

  useEffect(() => {
    encounterWildPokemon();
  }, [pokedex]);
  const encounterWildPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/151").then(response => {
      console.log(response.data);
      setWildPokemon(response.data);
    });
  };

  return <div className="app-wrapper">Hello world</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
