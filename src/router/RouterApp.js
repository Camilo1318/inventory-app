import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ClientesScreen } from "../components/Clientes/ClientesScreen";
import { NavBar } from "../components/UI/NavBar";
import { ProductsContext } from "../components/Products/ProductsContext";
import { ProductsScreen } from "../components/Products/ProductsScreen";
import { SalesScreen } from "../components/Sales/SalesScreen";

import { db } from "../Firebase"; //import Firestore of Firebase
import { SideBar } from "../components/UI/SideBar";

import "../components/UI/NavBarStyles.css";

export const RouterApp = () => {
  const [products, setProducts] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const queryRef = db
      .collection("DataBase")
      .doc("Duitama")
      .collection("Productos");
    queryRef.onSnapshot((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, [setProducts]);

  useEffect(() => {
    const queryRef = db
      .collection("DataBase")
      .doc("Duitama")
      .collection("Clientes");
    queryRef.onSnapshot((snapshot) => {
      setClientes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, [setClientes]);

  const [toggledBtn, setToggledBtn] = useState(false);
  return (
    <>
      <ProductsContext.Provider value={{ products, clientes, ventas }}>
        <Router>
          <div className={`${toggledBtn ? "toggled" : ""} d-flex`} id="wrapper">
            {/* <!-- Sidebar--> */}
            <SideBar />
            {/*  <!-- Page Content--> */}
            <div id="page-content-wrapper">
              <NavBar {...{ toggledBtn, setToggledBtn }} />

              <div class="container-fluid">
                <Switch>
                  <Route exact path="/ventas" component={SalesScreen} />
                  <Route exact path="/inventario" component={ProductsScreen} />
                  <Route exact path="/clientes" component={ClientesScreen} />
                  <Redirect to="/inventario" />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </ProductsContext.Provider>
    </>
  );
};
