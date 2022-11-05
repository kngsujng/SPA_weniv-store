class ProductItem {
    constructor(item){
        this.item = item;
    }
    render(){
        const productItem = document.createElement("li");

        const productCard = document.createElement("a");
        productCard.setAttribute("href", `/detail/${this.item.id}`);

        const productImageContainer = document.createElement("div");

        const productImage = document.createElement("img");
        productImage.setAttribute("src", `http://test.api.weniv.co.kr/${this.item.thumbnailImg}` ); 
        productImage.setAttribute("alt", `상품이미지` ); 
        productImageContainer.appendChild(productImage); 

        const productName = document.createElement("strong");
        productName.innerText = this.item.name;

        const productPriceContainer = document.createElement("div");

        const productPrice = document.createElement("strong");
        productPrice.innerText = this.item.price;

        const priceType = document.createElement("span");
        priceType.innteText = "원";

        productPrice.appendChild(priceType);
        productPriceContainer.appendChild(productPrice);

        productCard.appendChild(productImageContainer);
        productCard.appendChild(productName);
        productCard.appendChild(productPriceContainer);
        
        productItem.appendChild(productCard);


        // productItem.innerHTML = `
        // <a href="/detail/${this.item.id}" class="product-item">
        //     <div class="product-img"> 
        //         <img src="http://test.api.weniv.co.kr/${this.item.thumbnailImg}" alt="상품이미지">
        //     </div> 
        //     <strong class="product-name">${this.item.productName}</strong>
        //     <div>
        //         <strong class="price m-price">${this.item.price}<span>원</span></strong>
        //     </div>
        // </a>
        // `;  
        return productItem 
    }
}

export default ProductItem 