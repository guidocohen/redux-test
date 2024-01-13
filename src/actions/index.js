import { getPokemonDetails } from "../api";
import { SET_ERROR, SET_FAVORITE, SET_POKEMONS } from "./types";

export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload,
  };
};

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonDetailed));
  };
