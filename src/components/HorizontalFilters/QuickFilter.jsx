import React from 'react';
import './QuickFilter.css';
function QuickFilters({ filters }) {
    return (<div className='atsa-base'>
            <ul className="atsa-filters">
                {filters.map(filter => <QuickFilter quickFilterName={filter}/>)}
            </ul>
        </div>);
}
function QuickFilter({ quickFilterName }) {
    return (<div>
            <li>
                <label>
                    <input type="radio" value={quickFilterName}/>
                    <h4 className="atsa-title">{quickFilterName}</h4>
                    <span className="atsa-downArrow sprites-arrowDownBold myntraweb-sprite" style={{backgroundPosition : " -2679px -89px"}}></span>
                </label>
            </li>
        </div>);
}
export default QuickFilters;
