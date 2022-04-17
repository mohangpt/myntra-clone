import React from 'react';
function ProductMetaInfo({ price, strikePrice, discount, name, brand }) {
    return (<div className="product-productMetaInfo">
            <h3 className="product-brand">{brand}</h3>
            <h4 className="product-product">{name}</h4>

            <div className="product-price"><span>
                <span className="product-discountedPrice">
                    {price}
                </span><span className="product-strike">
                    {strikePrice}
                </span></span>
                <span className="product-discountPercentage">{discount}</span>
            </div>
        </div>);
}
export default ProductMetaInfo;
