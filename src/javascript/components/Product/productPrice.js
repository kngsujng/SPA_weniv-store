class ProductPrice {
    constructor(price){
        this.price = price;
    }

    render(){
        const productPriceContainer = document.createElement("div");

        const productPrice = document.createElement("strong");
        productPrice.innerText = this.item.price;

        const priceType = document.createElement("span");
        priceType.innteText = "원";

        productPrice.appendChild(priceType);
        productPriceContainer.appendChild(productPrice);
    }
}

export default ProductName;
