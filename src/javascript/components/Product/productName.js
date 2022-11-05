class ProductName {
    constructor(name){
        this.name = name;
    }

    render(){
        const productName = document.createElement("strong");
        productName.innerText = this.name;
        return productName;
    }
    // 클래스형 컴포넌트에서는 render()메서드가 꼭 있어야 한다.. 
    //props 조회 ..?
}

export default ProductName;
