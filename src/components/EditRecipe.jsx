import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edit, Listar } from "../actions/recipeAction";
import { useForm } from "../hooks/useForm";
import ShowRecipe from "./ShowRecipe";

const EditRecipe = () => {
  const { active } = useSelector((state) => state.recipe);

  const [formValue, handleInputChange] = useForm(active);
  const {
    name,
    shippingCost,
    currency,
    ingredients: [{ product, brand, items, quantity, price }],
  } = formValue;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(Edit(formValue));
  };

  useEffect(() => {
    dispatch(Listar());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit} className="card card-body border-primary">
      <div className="form-group input-group ">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            defaultValue={name}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          name="shippingCost"
          placeholder="shippingCost"
          className="form-control"
          defaultValue={shippingCost}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          name="currency"
          placeholder="currency"
          className="form-control"
          defaultValue={currency}
          onChange={handleInputChange}
        />
      </div>
      <h3> Ingredients</h3>
      <div className="form-group mt-3">
        <input
          type="text"
          name="product"
          placeholder="product"
          className="form-control"
          defaultValue={product}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          name="brand"
          placeholder="brand"
          className="form-control"
          defaultValue={brand}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          name="items"
          placeholder="items"
          className="form-control"
          defaultValue={items}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          name="quantity"
          placeholder="quantity"
          className="form-control"
          defaultValue={quantity}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          name="price"
          placeholder="price"
          className="form-control"
          defaultValue={price}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-dark mt-3">Editar</button>
      <ShowRecipe />
    </form>
  );
};

export default EditRecipe;
