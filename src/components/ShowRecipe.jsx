import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const ShowRecipe = ({}) => {
  const [recipe, setRecipe] = useState({
    name: "",
    shippingCost: 0,
    currency: "",
    ingredients: [
      {
        product: "",
        brand: "",
        items: 0,
        quantity: "",
        price: 0,
      },
    ],
  });

  const obtenerDatos = async () => {
    const url = `https://recipe-rissoto.vercel.app/recipe`;
    const resp = await axios.get(url);

    const data = await resp.data;
    console.log(data);
    setRecipe(data);
    return data;
  };
  const {
    ingredients: [{ product, brand, price, items, quantity }],
  } = recipe;
  useEffect(() => {
    obtenerDatos();
  }, []);
  return (
    <>
      <div className="col-md-4 ms-5" key={`${recipe.id}`}>
        <ul>
          <h4>{recipe.name}</h4> <br />
          <li>{recipe.shippingCost}</li>
          <br />
          <li>
            <input type="checkbox" />
            {recipe.currency}
          </li>
          <li>{product}</li>
          <br />
          <li>{brand}</li>
          <br />
          <li>{quantity}</li>
          <br />
          <li>{items}</li>
          <br />
          <li>{price}</li>
          <br />
          <br />
        </ul>
      </div>
    </>
  );
};

export default ShowRecipe;
