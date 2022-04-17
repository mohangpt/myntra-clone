import React from 'react';
import ProductImageContainer from './ProductImageContainer';
import ProductMetaInfo from './ProductMetaInfo';
import ProductRating from './ProductRating';
function Product(product) {
    return (<li className="product-base">
            <ProductRating {...product}/>
            <ProductImageContainer {...product}/>
            <ProductMetaInfo {...product}/>
        </li>);
}
export default Product;
