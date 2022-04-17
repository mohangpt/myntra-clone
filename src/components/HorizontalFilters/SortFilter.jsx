import React from 'react';
import './SortFilter.css';
function SortFilter({ filterProps, selected }) {
    console.log(filterProps);
    return (<div className='horizontal-filters-sortContainer'>
            <div>
                <div className="sort-sortBy"> Sort by : <span>{selected}</span>
                <span className="myntraweb-sprite sort-downArrow sprites-downArrow" style={{backgroundPosition:"-2679px -89px"}}></span>
                    <ul className="sort-list">
                        {filterProps && filterProps.map((v, i) => (<li>
                            <label className="sort-label ">
                                <input type="radio" value={v.value}/>
                                {v.name}
                            </label>
                        </li>))}
                    </ul>
                </div>
            </div>
        </div>);
}
export default SortFilter;
