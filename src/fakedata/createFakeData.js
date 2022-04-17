getProductname = (p) => {
    return p.getElementsByClassName("product-product")[0].textContent
}
getProductrating = (p) => {
    return p.getElementsByClassName("product-ratingsContainer")[0].childNodes[0].textContent
}
getProductratingCount = (p) => {
    return p.getElementsByClassName("product-ratingsContainer")[0].childNodes[2].textContent
}
getProductbrand = (p) => {
    return p.getElementsByClassName("product-brand")[0].textContent 
}
getProductprice = (p) => {
    return p.getElementsByClassName("product-discountedPrice")[0].textContent
}
getProductstrikePrice = (p) => {
    return p.getElementsByClassName("product-strike")[0].textContent
}
getProductdiscount = (p) => {
    return p.getElementsByClassName("product-discountPercentage")[0].textContent
}
getProductimageURL = (p) => {
    return p.getElementsByClassName("img-responsive")[1].src
}

getProducts = function(prod) {
    let products = []
    for (let i = 0; i < prod.length; i++) {
        products[i] = prod[i]
      }
    all = products.map(p => {
        let product = {}
        let map = {
            name : getProductname,
            rating : getProductrating,
            ratingCount : getProductratingCount,
            brand : getProductbrand,
            price : getProductprice,
            strikePrice : getProductstrikePrice,
            discount : getProductdiscount,
            imageURL : getProductimageURL
        }

        for(valueFuntion in map) {
            try {
                product[valueFuntion] = map[valueFuntion](p)
            }
            catch (e) {
                product[valueFuntion] = ''
            }
        }
        return product
    })
    console.log(all)
    return all
}

prods = document.getElementsByClassName("product-base")
all = getProducts(prods)