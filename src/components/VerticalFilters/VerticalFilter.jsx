import React from 'react'

export default function VerticalFilter({filterName, filterValues, pageCount}) {
    // create small array
    if (!pageCount) pageCount = 7
    let remainingFilters = filterValues.length - pageCount
    filterValues = filterValues.slice(0, pageCount)
    // get remaining count show
    return (
        <div className={"vertical-filters-filters " + filterName + "-container"}>
            <span className="vertical-filters-header">{filterName}</span>
            <ul className="categories-list">
                {
                    filterValues.map((filter)=> (
                        <li>
                            <label className="common-customCheckbox vertical-filters-label">
                                <input type="checkbox" value={filter.name}/>
                                {filter.name}
                                <span className="categories-num">
                                    {filter.count}
                                </span>
                                <div className="common-checkboxIndicator">
                                </div>
                            </label>
                        </li>
                    )
                    )
                }
            </ul>
            { remainingFilters > 0 && <div className="brand-more">+ {remainingFilters} more</div>}
        </div>
    )
}
