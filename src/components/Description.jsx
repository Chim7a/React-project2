import React from "react";
import Products from "../Product";

const Description = (props) => {
  return (
    <div>
      <p>
        Description:{" "}
        <span className="text-gray-600">{Products.description}</span>
      </p>
    </div>
  );
};

export default Description;
