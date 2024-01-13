import { useDispatch } from "react-redux";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./PokemonList.css";
import StarButton from "./StarButton";
import { setFavorite } from "../actions";

const PokemonCard = ({ name, image, types = [], id, favorite }) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={concatProperties(types)} />
    </Card>
  );
};

const concatProperties = (types) =>
  types.map((type) => type.type.name).join(", ");

export default PokemonCard;
