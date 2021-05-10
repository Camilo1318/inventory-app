import React, { useContext, useState } from "react";
import { BsTools } from "react-icons/bs";
import { ProductsContext } from "../Products/ProductsContext";
import { SalesForm } from "./SalesForm";

export const SalesScreen = () => {
  const { products } = useContext(ProductsContext);
  const [productsSold, setProductsSold] = useState([{}]);

  return (
    <>
      {/* Cabecera de la Factura */}
      <div className="mx-5">
        <span class="badge rounded-pill bg-secondary d-block my-2"></span>
        <div className="d-flex justify-content-between border align-items-center my-2">
          <div className="col-2">
            <h1 className="ml-2 text-success">
              <BsTools />
            </h1>
          </div>
          <div className="col-2 pt-2">
            <p>Nit: 12341234</p>
            <p className="">Factura # : 001</p>
          </div>
        </div>
        <span class="badge rounded-pill bg-secondary d-block my-2"></span>
        {/* Datos del Cliente */}
        <div class="card">
          <div className="card-header d-flex justify-content-between ">
            <div>Factura</div>
            <div>Mayo 10 2021 Duitama</div>
          </div>
          <div class="card-body p-0">
            <form>
              <div className="row justify-content-center align-items-center ">
                <label htmlFor="cliente" className="pt-2">
                  Cliente:
                </label>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control-plaintext border-bottom"
                    id="cliente"
                  />
                </div>
                <label htmlFor="cliente" className="pt-2">
                  Cedula:
                </label>
                <div className="col-3">
                  <input
                    type="text"
                    readonly
                    className="form-control-plaintext border-bottom"
                    value=""
                  />
                </div>
              </div>
              <div className="row justify-content-center py-2">
                <label htmlFor="cliente" className="pt-2">
                  Celular:
                </label>
                <div className="col-2">
                  <input
                    type="text"
                    readonly
                    className="form-control-plaintext border-bottom"
                    value=""
                  />
                </div>
                <label htmlFor="cliente" className="pt-2">
                  Correo:
                </label>
                <div className="col-3">
                  <input
                    type="text"
                    readonly
                    className="form-control-plaintext border-bottom"
                    value=""
                  />
                </div>
                <label htmlFor="cliente" className="pt-2">
                  Direccion:
                </label>
                <div className="col-3">
                  <input
                    type="text"
                    readonly
                    className="form-control-plaintext border-bottom"
                    value=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Tabla de los Productos */}

        <div className="card-body">
          <table class="table table-striped">
            <thead>
              <tr className="text-center">
                <th scope="col">Cantidad</th>
                <th scope="col">Concepto</th>
                <th scope="col">Precio</th>
                <th scope="col">Total</th>
              </tr>
            </thead>

            <tbody className="text-center">
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <form action="submit">
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <input
                      type="text"
                      readonly
                      className="form-control-plaintext border-bottom"
                      value=""
                    />
                  </td>
                  <td>Thornton</td>
                  <td>@twitter</td>
                </tr>
              </form>
            </tbody>
          </table>
        </div>
        {/* Precios y Añadir Productos */}
        <span class="badge rounded-pill bg-secondary d-block my-2"></span>
        <div className="d-flex justify-content-between">
          <div className="">
            <button className="btn btn-outline-primary inline-block">
              Agregar Producto
            </button>
            <button className="btn btn-outline-success inline-block ml-2">
              Terminar Orden
            </button>
          </div>
          <div className="p-2">
            <p>
              <strong>Subtotal : $ 120.000</strong>
            </p>
            <p>
              <strong>Impuestos : $ 32.000 </strong>
            </p>
            <p>
              <strong>Total : $ 152.000</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
