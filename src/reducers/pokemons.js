import { SET_ERROR, SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: true,
  error: false,
};
export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
