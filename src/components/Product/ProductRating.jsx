import React from 'react';
import './css/ProductRating.css';
function ProductRating({ ratingCount, rating }) {
    return (<div className="product-ratingsContainer">
            <span>{rating}</span>
            <span className="myntraweb-sprite product-starIcon index-productRatingsExcellentIcon sprites-productRatingsExcellentIcon" style={{backgroundPosition : "-171px -28px"}}>
            </span>
            <div className="product-ratingsCount">
                <div className="product-separator">{ratingCount}</div>
            </div>
        </div>);
}
export default ProductRating;
