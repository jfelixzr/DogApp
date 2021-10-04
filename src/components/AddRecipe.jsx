import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recipeNew, Listar } from "../actions/recipeAction";
import { useForm } from "../hooks/useForm";

const AddRecipe = () => {
  const { active } = useSelector((state) => state.recipe);

  const activeId = useRef(active.id);

  useEffect(() => {
    if (active.id !== activeId.current) {
      reset(active);
    }
    activeId.current = active.id;
  }, [active]);

  const [formValue, handleInputChange, reset] = useForm(active);
  const {
    name,
    shippingCost,

    currency,
    ingredients: [{ product, brand, items, quantity, price }],
  } = formValue;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(recipeNew(formValue));
  };

  useEffect(() => {
    dispatch(Listar());
  }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit} className="card card-body border-primary">
        <div className="form-group input-group ">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              
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
           
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            name="currency"
            placeholder="currency"
            className="form-control"
            
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
            
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            name="brand"
            placeholder="brand"
            className="form-control"
            
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            name="items"
            placeholder="items"
            className="form-control"
            
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            name="quantity"
            placeholder="quantity"
            className="form-control"
            
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            name="price"
            placeholder="price"
            className="form-control"
            
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-dark mt-3">
          Save
        </button>
      </form>
    </>
  );
};

export default AddRecipe;
