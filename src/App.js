import React from "react";
import "./App.css";
import ProductsContainer from "./components/ProductsContainer";
import ResultPagination from "./components/ResultPagination";
import SortFilter from "./components/HorizontalFilters/SortFilter";
import VerticalFitlerContainer from "./components/VerticalFilters/VerticalFitlerContainer";
import HorizontalFilterRow from "./components/HorizontalFilters/HorizontalFilterRow";
import Title from "./components/Title/Title";
import BreadCrumbs from "./components/BreadCrubms/BreadCrumbs";
import DesktopContainer from "./components/Header/DesktopContainer";

let data = require("./fakedata/data.json");
let sortFilterInput = require("./fakedata/SortFilter.json");
let verticalFilters = require("./fakedata/VerticleFilter.json");

function App() {
  return (
    <>
      <DesktopContainer />
      <BreadCrumbs />
      <Title />
      <div className="row-base" style={{ display: "-webkit-flex" }}>
        <div
          className="search-leftContainer column-base"
          style={{ WebkitBoxFlex: 1, flex: "1 1 0%" }}
        >
          <VerticalFitlerContainer />
        </div>
        <div
          className="search-rightContainer column-base"
          style={{ WebkitBoxFlex: 1, flex: "1 1 0%" }}
        >
          <div id="desktopSearchResults">
            <HorizontalFilterRow />
            <ProductsContainer products={[...data]} />
          </div>
          <ResultPagination activePage={2} totalPages={1387} />
        </div>
      </div>
    </>
  );
}
export default App;
