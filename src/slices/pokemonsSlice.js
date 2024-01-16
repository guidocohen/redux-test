import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons } from "../api";

const initialState = {
  pokemons: [],
  loading: true,
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "pokemons/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    try {
      const pokemonsRes = await getPokemons();
      const pokemonsDetailed = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonsDetailed));
    } catch (error) {
      dispatch(setError(true));
      console.error("Error fetching pokemons:", error);
    }
  }
);

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
      state.loading = false;
    },
    setFavorite: (state, action) => {
      const { pokemonId } = action.payload;
      state.pokemons = state.pokemons.map((pokemon) =>
        pokemon.id === pokemonId
          ? { ...pokemon, isFavorite: !pokemon.isFavorite }
          : pokemon
      );
    },
    setError: (state, action) => {
      state.error = true;
    },
  },
});

export const { setFavorite, setPokemons, setError } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
