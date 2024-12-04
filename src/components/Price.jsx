import React from "react";
import Products from "../Product";

const Price = () => {
  return (
    <div>
      <p>
        Price: <span className="text-gray-600">{Products.price}</span>
      </p>
    </div>
  );
};

export default Price;
