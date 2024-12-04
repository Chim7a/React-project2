import React, { useState } from "react";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { Card } from "antd";
import Products from "../Product";
const { Meta } = Card;

const ProductCard = ({ productData }) => {
  const [username, setUsername] = useState("Chima");
  return (
    <div className="grid ">
      <div>
        <Card
          hoverable
          style={{
            width: 440,
          }}
          cover={<img src={Products.image} />}
        >
          <Meta
            title="Europe Street beat"
            description={
              <div>
                <Name />
                <Price />
                <Description />
              </div>
            }
          />
        </Card>
      </div>
      <div className="flex justify-center">
        <h2 className="p-4 text-2xl text-white">
          {username.length > 0 ? `Hello ${username}` : `Hello there`}
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
