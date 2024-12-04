import { useState } from "react";
import Products from "./Product";
import "./App.css";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [productData, setProductData] = useState(Products);

  return (
    <>
      <div className="h-[100dvh] flex justify-center items-center bg-gray-800">
        <ProductDetails productData={productData} />
      </div>
    </>
  );
}

export default App;
