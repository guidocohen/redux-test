import { useDispatch } from "react-redux";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./PokemonList.css";
import StarButton from "./StarButton";
import { setFavorite } from "../slices/pokemonsSlice";

const PokemonCard = ({ name, image, types = [], id, isFavorite }) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={isFavorite} onClick={handleOnFavorite} />}
    >
      <Meta description={concatProperties(types)} />
    </Card>
  );
};

const concatProperties = (types) =>
  types.map((type) => type.type.name).join(", ");

export default PokemonCard;
