import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import PokemonSkeleton from "./components/PokemonSkeleton";
import logo from "./statics/logo.svg";
import "./App.css";
import { fetchPokemonsWithDetails } from "./slices/pokemonsSlice";

function App() {
  const pokemons = useSelector((state) => state.pokemons.pokemons, shallowEqual);
  const loading = useSelector((state) => state.pokemons.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Row justify="center">
        <Col span={8}>
          <img src={logo} alt="Pokedux" />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={8}>
          <Searcher />
        </Col>
      </Row>
      <Row style={{ marginTop: 50 }} justify="center" gutter={20}>
        {loading ? <PokemonSkeleton /> : <PokemonList pokemons={pokemons} />}
      </Row>
    </div>
  );
}

export default App;
