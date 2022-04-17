import React from 'react';
import QuickFilters from './QuickFilter';
import SortFilter from './SortFilter';
import './HorizontalRow.css';
function HorizontalFilterRow() {
    let horizontolSortFilter = require('../../fakedata/hsortfilter.json');
    let filters = require('../../fakedata/quickfilter.json');
    return (<div className='row-base' style={{ display: "-webkit-flex" }}>
            <section className='horizontal-filters-base'>
                <div>
                    <SortFilter selected='Recommended' filterProps={[...horizontolSortFilter]}/>
                    <QuickFilters filters={filters}/>
                </div>
            </section>
        </div>);
}
export default HorizontalFilterRow;
