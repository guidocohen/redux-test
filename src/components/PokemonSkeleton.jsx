import { Skeleton } from "antd";
import React from "react";

const PokemonSkeleton = () => {
  return (
    <div className="PokemonList">
      {[...Array(10)].map((_, index) => (
        <div key={index}>
          <Skeleton.Image
            active
            style={{ width: 350, height: 350, marginBottom: 10 }}
          />
          <Skeleton
            active
            title={false}
            paragraph={{ rows: 1, width: "350px", marginTop: 10 }}
          />
        </div>
      ))}
    </div>
  );
};

export default PokemonSkeleton;
