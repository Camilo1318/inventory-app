import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { deleteProductById } from "../../functions/CrudProducts";
// import { db } from "../Firebase"; //import Firestore of Firebase

const ShowItems = ({ products = [], setCurrentId, searchWord = "" }) => {
  const [filteredProducts, setFilteredCountries] = useState([]);

  const deleteProduct = async (id) => {
    await deleteProductById(id);
  };

  const editProduct = (id) => {
    setCurrentId(id);
  };

  useEffect(() => {
    setFilteredCountries(
      products.filter((product) =>
        product.nombre.toLowerCase().includes(searchWord.toLowerCase())
      )
    );
  }, [searchWord, products, setFilteredCountries]);

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="text-center my-auto">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Herramienta</th>
              <th scope="col">Categoria</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(
              ({ id, nombre, cantidad, categoria }, index) => (
                <tr className="table-default text-center my-auto" key={index}>
                  <td> {index + 1}</td>
                  <td> {nombre}</td>
                  <td>{categoria} </td>
                  <td>{cantidad}</td>
                  <td>
                    <div className="text-center">
                      <FiEdit3
                        className="text-center"
                        role="button"
                        style={{ fontSize: "15px" }}
                        onClick={() => editProduct(id)}
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
                        onClick={() => deleteProduct(id)}
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
        {filteredProducts.length === 0 && (
          <div className="alert alert-secondary">
            <strong>No se encontraron resultados a tu bsuqueda</strong>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowItems;
