import React, { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import { FaRocket } from "react-icons/fa";
import { AiOutlineNumber } from "react-icons/ai";
import { FcTodoList } from "react-icons/fc";
import { addProduct, editProductById } from "../../functions/CrudProducts";
import { getElementById } from "../../helpers/getElementById";

import validator from "validator";

const ProductForm = ({ currentId, setCurrentId, products }) => {
  const [error, setError] = useState("");
  const [formValues, handleInputChange, reset] = useForm({
    nombre: "",
    cantidad: "",
    categoria: "",
  });

  const { nombre, cantidad, categoria } = formValues;

  const validatorForm = () => {
    if (validator.isEmpty(nombre)) {
      setError("Nombre Invalido");
      return false;
    } else if (!validator.isNumeric(cantidad)) {
      setError("Cantidad no Valida");
      return false;
    } else if (validator.isEmpty(categoria)) {
      setError("Debe seleccionar una categoria");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validatorForm()) {
      if (currentId !== "") {
        editProductById(currentId, formValues);
        setCurrentId("");
      } else {
        addProduct(formValues);
      }
      reset();
    } else {
    }
  };

  useEffect(() => {
    if (currentId === "") return;
    reset(getElementById(currentId, products));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId, products]);

  return (
    <>
      <form className="card card-body" onSubmit={onSubmit}>
        <h4 className="text-center pb-2">Agregar Producto</h4>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <FaRocket />
          </div>
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre del producto"
            onChange={handleInputChange}
            value={nombre}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <AiOutlineNumber className="">view_module</AiOutlineNumber>
          </div>
          <input
            type="number"
            className="form-control"
            placeholder="Ingresa Cantidad"
            name="cantidad"
            value={cantidad}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <FcTodoList className="text-primary">list</FcTodoList>
          </div>
          <select
            className="form-control"
            name="categoria"
            onChange={handleInputChange}
            value={categoria}
          >
            <option value="">Categoria</option>
            <option value="Mesas">Mesas</option>
            <option value="Lijas">Lijas</option>
            <option value="Cortavidrios">Cortavidrios</option>
          </select>
        </div>
        {error && (
          <span class="badge badge-pill badge-secondary mb-3">{error}</span>
        )}
        <button type="submit" className="btn btn-outline-dark btn-block">
          {currentId === "" ? "Save" : "Update"}
        </button>
      </form>
    </>
  );
};

export default ProductForm;
