import React from 'react';
import './ResultPagination.css';
function ResultPagination({ activePage, totalPages }) {
    //create dummy array of size 10
    let arr = [...Array(10)].map((v, i) => i);
    function getClassName(activePage, currentPage) {
        if (activePage === currentPage)
            return "pagination-active";
        return "pagination-number";
    }
    return (<div className="results-showMoreContainer">
            <ul className="pagination-container">
                <li className="pagination-paginationMeta"> Page {activePage + 1} of {totalPages} </li>
                {arr.map((v, i) => (<li className={getClassName(activePage, i)}>
                        <a href="dummy">{i + 1}</a>
                    </li>))}
                <li className="pagination-next">
                    <a rel="next" href="">
                        Next
                        <span className="pagination-arrowRight"></span>
                    </a>
                </li>
            </ul>
        </div>);
}
export default ResultPagination;
