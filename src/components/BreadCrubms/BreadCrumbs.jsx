import React from "react";
import "./css/BreadCrumbs.css";

export default function BreadCrumbs() {
    let crumbs = require("../../fakedata/breadCrumbs.json")
  return (
    <div className=" row-base" style={{display: "-webkit-flex", marginTop: "70px"}}>
      <div className="breadcrumbs-base" >
        <ul className="breadcrumbs-list" style={{paddingLeft : "0"}}>
          {crumbs.map((crumb) => (
            <li className="breadcrumbs-item">
              <a className="breadcrumbs-crumb" href="/?src=bc" itemprop="url">
                <span itemprop="title">{crumb}</span>
              </a>
            </li>
          ))}
          
            
        </ul>
      </div>
    </div>
  );
}
