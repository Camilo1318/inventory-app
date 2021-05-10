import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = ({ toggledBtn, setToggledBtn }) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button
          class="btn btn-primary"
          id="menu-toggle"
          onClick={() => setToggledBtn(!toggledBtn)}
        >
          Sj-Tools
        </button>
        {/*  <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/Login">
                Singout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
