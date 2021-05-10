import React, { useContext, useState } from "react";
import { ProductsContext } from "../Products/ProductsContext";
import { SearchFilter } from "../Products/SearchFilter";
import { ClientesForm } from "./ClientesForm";
import { ShowClients } from "./ShowClients";

export const ClientesScreen = () => {
  const { clientes } = useContext(ProductsContext);
  const [currentId, setCurrentId] = useState("");
  const [searchWord, setSearchWord] = useState("");

  return (
    <>
      <div className="row mx-auto py-3">
        <div className="col-12 col-lg-4">
          <ClientesForm {...{ currentId, setCurrentId, clientes }} />
        </div>
        <div className="col mt-3">
          <SearchFilter {...{ setSearchWord }} />
          <ShowClients {...{ setCurrentId, clientes, searchWord }} />
        </div>
      </div>
    </>
  );
};
