import React, { useState } from "react";
import { AiOutlineNumber } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import validator from "validator";
import useForm from "../../hooks/useForm";

export const SalesForm = ({ productsSold, setProductsSold, products }) => {
  const [error, setError] = useState("");

  const [formValues, handleInputChange] = useForm({
    producto: "",
    cantidad: "",
    precio: "",
  });

  const { producto, cantidad, precio } = formValues;

  const validatorForm = () => {
    if (validator.isEmpty(producto)) {
      setError("Debe elegir un producto");
      return false;
    } else if (!validator.isNumeric(cantidad)) {
      setError("Cantidad no Valida");
      return false;
    } else if (!validator.isNumeric(precio)) {
      console.log(precio);
      setError("Precio no valido");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validatorForm()) {
      console.log("Formulario Correcto");
      console.log(formValues);
      console.log(setProductsSold(...formValues));
      setProductsSold(...formValues);
    }
  };
  return (
    <>
      <form className="card card-body" onSubmit={onSubmit}>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <FcTodoList className="text-primary">list</FcTodoList>
          </div>
          <select
            className="form-control"
            name="producto"
            onChange={handleInputChange}
          >
            {products.map(({ nombre }, index) => (
              <option key={index} value={nombre}>
                {nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <AiOutlineNumber>view_module</AiOutlineNumber>
          </div>
          <input
            type="number"
            className="form-control"
            placeholder="Ingresa Cantidad"
            name="cantidad"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <FaRocket />
          </div>
          <input
            type="number"
            name="precio"
            className="form-control"
            placeholder="Precio Venta"
            onChange={handleInputChange}
          />
        </div>
        {error && (
          <span class="badge badge-pill badge-secondary mb-3">{error}</span>
        )}
        <button type="submit" className="btn btn-outline-dark btn-block">
          Agregar producto
        </button>
      </form>
    </>
  );
};
