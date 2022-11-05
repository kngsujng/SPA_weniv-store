class ProductImage {
    constructor(src){
        this.src = src;
    }
    render(){
        const productImageContainer = document.createElement("div");

        const productImage = document.createElement("img");
        productImage.setAttribute("src", `http://test.api.weniv.co.kr/${this.src}` ); 
        productImage.setAttribute("alt", `상품이미지` ); 
        productImageContainer.appendChild(productImage); 

        return productImageContainer;
    }
    // 클래스형 컴포넌트에서는 render()메서드가 꼭 있어야 한다.. 
    //props 조회 ..?
}

export default ProductImage;