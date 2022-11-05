import {ProductImage, ProductPrice, ProductName} from "../Product/index.js";


class ProductItem {
    constructor(item){
        this.item = item;
    }
    render(){
        const product = document.createElement("a");
        product.setAttribute("href", `/detail/${this.item.id}`);
        product.setAttribute("class"); //

        const productImage = new ProductImage(this.item.thumbnailImg); 
        //class의 constructor에 들어갈 인자 미리 넣어준다. 
        const prodcutName = new ProductName(this.item.productName);
        const productPrice = new ProductPrice(this.item.price);

        product.appendChild(productImage.render());
        product.appendChild(productName.render());
        product.appendChild(productPrice.render());

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
        return product;
    }
}

export default ProductItem 