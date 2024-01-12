import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Col, Row } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import PokemonSkeleton from "./components/PokemonSkeleton";
import { getPokemons } from "./api";
import {
  setPokemons as setPokemonsAction,
  setError as setErrorAction,
} from "./actions";
import logo from "./statics/logo.svg";
import "./App.css";

function App({ setError, loading, pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonsRes = await getPokemons();
        setPokemons(pokemonsRes);
      } catch (error) {
        setError(true);
        console.error("Error fetching pokemons:", error);
      }
    };

    fetchPokemons();
  }, [setPokemons, setError]);

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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value)),
  setError: (value) => dispatch(setErrorAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
