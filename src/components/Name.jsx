import React from "react";
import Products from "../Product";

const Name = () => {
  return (
    <div>
      <p>
        Name: <span className="text-gray-600">{Products.name}</span>
      </p>
    </div>
  );
};

export default Name;
