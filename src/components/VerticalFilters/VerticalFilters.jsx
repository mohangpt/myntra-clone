import React from 'react'
import VerticalFilter from './VerticalFilter';
let filters = require('../../fakedata/VerticleFilter.json');

export default function VerticalFilters() {
    return (
        <>
            { filters.map((filter) => (
                <VerticalFilter {...filter}/>
            ))}
        </>
    )
}
