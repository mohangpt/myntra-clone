import "./css/VerticalFilter.css";
import '../VerticalFilters/css/VerticalFilterContainer.css';
import React from "react";
import VerticalFilters from "./VerticalFilters";
let filterData = require('../../fakedata/VerticleFilter.json')

function VerticalFitlerContainer() {
  return (
      <section>
        <div className="condition-render-verticalFilters condition-render-boundary-top" style={{top: "0px", bottom: "auto"}}>
          <div className="vertical-filters-filters header-container">
            <span className="header-title">FILTERS</span>
          </div>
          <VerticalFilters className="condition-render-verticalFilters condition-render-boundary-top"/>
        </div>
      </section>
    
  );
}

export default VerticalFitlerContainer;
