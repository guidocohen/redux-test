import { SET_ERROR, SET_POKEMONS } from "./types";

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
