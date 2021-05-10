import React, { useEffect, useState } from "react";
import { AiOutlineNumber } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";

import validator from "validator";
import { addClient, editClientById } from "../../functions/CrudClientes";
import { getElementById } from "../../helpers/getElementById";
import useForm from "../../hooks/useForm";

export const ClientesForm = ({
  currentId = "",
  setCurrentId,
  clientes = [],
}) => {
  const [error, setError] = useState("");
  const [formValues, handleInputChange, reset] = useForm({
    nombre: "",
    identificacion: "",
    celular: "",
  });

  const { nombre, identificacion, celular } = formValues;

  const validatorForm = () => {
    if (validator.isEmpty(nombre)) {
      setError("Nombre invalido");
      return false;
    } else if (!validator.isNumeric(identificacion)) {
      setError("identificacion no valida");
      return false;
    } else if (!validator.isNumeric(celular)) {
      setError("Numero de Celular invalido");
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
        editClientById(currentId, formValues);
        setCurrentId("");
      } else {
        addClient(formValues);
      }
      reset();
    } else {
    }
  };

  useEffect(() => {
    if (currentId === "") return;
    reset(getElementById(currentId, clientes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId, clientes]);

  return (
    <>
      <form className="card card-body" onSubmit={onSubmit}>
        <h4 className="text-center pb-2">Crear Cliente</h4>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <FaRocket />
          </div>
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre del Cliente"
            value={nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <AiOutlineNumber className="">view_module</AiOutlineNumber>
          </div>
          <input
            type="number"
            className="form-control"
            placeholder="Numero de Cedula"
            name="identificacion"
            value={identificacion}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <AiOutlineNumber className="">view_module</AiOutlineNumber>
          </div>
          <input
            type="number"
            className="form-control"
            placeholder="Celular"
            name="celular"
            value={celular}
            onChange={handleInputChange}
          />
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
