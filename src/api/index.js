import axios from "axios";

export const getPokemons = async () => {
  try {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    return data.results;
  } catch (error) {
    console.error("There was an error: ", error);
    throw error;
  }
};

export const getPokemonDetails = async (pokemon) => {
  try {
    const response = await axios.get(pokemon.url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for ${pokemon.name}:`, error);
    throw error;
  }
};
