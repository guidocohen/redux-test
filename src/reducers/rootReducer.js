import { combineReducers } from "redux";
import pokemonsReducer from "../slices/pokemonsSlice";

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});

export default rootReducer;
