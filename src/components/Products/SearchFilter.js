import React from "react";

export const SearchFilter = ({ setSearchWord = "" }) => {
  return (
    <div>
      <div className="container-fluid p-2">
        <form className="d-flex flex-wrap justify-content-end align-items-center">
          <div className="pb-3 pb-md-0">
            <input
              className="form-control w-100 ml-2"
              type="search"
              placeholder="Buscar"
              onChange={(e) => setSearchWord(e.target.value)}
              name="search"
            />
          </div>
          {/* <div className="custom-control custom-radio pb-3 pb-md-0">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              className="custom-control-input"
            />
            <label className="custom-control-label" for="customRadio1">
              Nombre
            </label>
          </div>
          <div className="custom-control custom-radio pb-3 pb-md-0">
            <input
              type="radio"
              id="customRadio2"
              name="customRadio"
              className="custom-control-input"
            />
            <label className="custom-control-label" for="customRadio2">
              Categoria
            </label>
          </div>
          <div className="custom-control custom-radio pb-3 pb-md-0">
            <input
              type="radio"
              id="customRadio3"
              name="customRadio"
              className="custom-control-input"
              disabled=""
            />
            <label className="custom-control-label" for="customRadio3">
              Cantidad
            </label>
          </div> */}
        </form>
      </div>
    </div>
  );
};
