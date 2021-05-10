import React, { useContext, useState } from "react"; // UseState and useEffect new Hooks
import ProductForm from "./ProductForm";
import ShowItems from "../Products/ShowItems";

import { SearchFilter } from "../Products/SearchFilter";

import { ProductsContext } from "./ProductsContext";

export const ProductsScreen = () => {
  const { products } = useContext(ProductsContext);
  const [currentId, setCurrentId] = useState("");
  const [searchWord, setSearchWord] = useState("");

  return (
    <>
      <div className="row mx-auto py-3">
        <div className="col-12 col-lg-4">
          <ProductForm {...{ currentId, setCurrentId, products }} />
        </div>
        <div className="col mt-3">
          <SearchFilter {...{ setSearchWord }} />
          <ShowItems {...{ setCurrentId, products, searchWord }} />
        </div>
      </div>
    </>
  );
};
