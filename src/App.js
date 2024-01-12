import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import PokemonSkeleton from "./components/PokemonSkeleton";
import { getPokemons } from "./api";
import { setPokemons, setError } from "./actions";
import logo from "./statics/logo.svg";
import "./App.css";

function App() {
  const { pokemons, loading } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonsRes = await getPokemons();
        dispatch(setPokemons(pokemonsRes));
      } catch (error) {
        setError(true);
        console.error("Error fetching pokemons:", error);
      }
    };

    fetchPokemons();
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
