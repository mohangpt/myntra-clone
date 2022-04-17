import React from 'react';
function ProductImageContainer({ imageURL }) {
    return (<div className="product-imageSliderContainer">
            <div className="product-sliderContainer" style={{ display: "block" }}>
                <div style={{ background: "rgb(255, 242, 223)" }}>
                    <div style={{ height: "280px"} ,{width: "100%" }}>
                        <picture className="img-responsive" style={{ width: "100%", height: "100%", display: "block" }}>
                            <img src={imageURL} className="img-responsive" alt="HRX by Hrithik Roshan Men Yellow Printed Cotton Pure Cotton T-shirt" title="HRX by Hrithik Roshan Men Yellow Printed Cotton Pure Cotton T-shirt" style={{ width: "100%", display: "block" }}/>

                        </picture>
                    </div>
                </div>
            </div>
        </div>);
}
export default ProductImageContainer;
