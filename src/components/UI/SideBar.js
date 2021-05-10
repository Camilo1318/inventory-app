import React from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="bg-primary border-right" id="sidebar-wrapper">
      <div className="list-group list-group-flush">
        <Link
          className="list-group-item list-group-item-action bg-primary text-light"
          to="/inventario"
        >
          Inventario
        </Link>
        <Link
          className="list-group-item list-group-item-action bg-primary text-light"
          to="/clientes"
        >
          Clientes
        </Link>
        <Link
          className="list-group-item list-group-item-action bg-primary text-light"
          to="/ventas"
        >
          Nueva Venta
        </Link>
      </div>
    </div>
  );
};
