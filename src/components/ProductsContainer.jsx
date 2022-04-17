import React from 'react';
import Product from './Product/Product';
function ProductsContainer(products) {
    return (<div className="search-searchProductsContainer row-base">
            <ul className="results-base">
                {products.products.map(p => <Product {...p}/>)}
            </ul>
        </div>);
}
export default ProductsContainer;
