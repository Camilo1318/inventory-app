import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { deleteClientById } from "../../functions/CrudClientes";

export const ShowClients = ({
  setCurrentId,
  clientes = [],
  searchWord = "",
}) => {
  const [filteredClients, setFilteredClients] = useState([]);

  const deleteClient = async (id) => {
    await deleteClientById(id);
  };

  const editClient = (id) => {
    setCurrentId(id);
  };

  useEffect(() => {
    setFilteredClients(
      clientes.filter((client) =>
        client.nombre.toLowerCase().includes(searchWord.toLowerCase())
      )
    );
  }, [searchWord, clientes, setFilteredClients]);

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="text-center my-auto">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Cedula</th>
              <th scope="col">Celular</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map(
              ({ id, nombre, identificacion, celular }, index) => (
                <tr className="table-default text-center my-auto" kye={index}>
                  <td> {index + 1}</td>
                  <td> {nombre}</td>
                  <td>{identificacion} </td>
                  <td>{celular}</td>
                  <td>
                    <div className="text-center">
                      <FiEdit3
                        className="text-center"
                        role="button"
                        style={{ fontSize: "15px" }}
                        onClick={() => editClient(id)}
                      >
                        create
                      </FiEdit3>
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <BsX
                        className="text-danger text-center"
                        role="button"
                        style={{ fontSize: "20px" }}
                        onClick={() => deleteClient(id)}
                      >
                        close
                      </BsX>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        {filteredClients.length === 0 && (
          <div className="alert alert-secondary">
            <strong>No se encontraron resultados a tu bsuqueda</strong>
          </div>
        )}
      </div>
    </>
  );
};
