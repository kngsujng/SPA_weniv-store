import { ProductCard } from "../components/Product/index.js";

class ProductPage {
    constructor(){
        this.mainElement = document.createElement("main");
        this.product = {};
    }

    //전체 상품 정보 가져오기 
    async getProductData(){
        const response = await fetch("http://test.api.weniv.co.kr/mall");
        const data = await response.json();

        this.product = await data;
    }

    //상품 리스트 세팅하기 
    async setProductList(){
        await this.getProductData();  //여기서 this는 뭐지 ?
        console.log(this.product);

        this.mainElement.classList.add("product");
        
        const productPageHeader = document.createElement("h1");
        productPageHeader.innertText = "상품목록 페이지";
        this.mainElement.appendChild(productPageHeader);

        const productList = document.createElement("ul");
        
        // this.mainElement.innerHTML = `
        //     <h1 class="ir">상품목록 페이지</h1>
        //     <ul class="product-list"></ul>
        // `
        // const productList = this.mainElement.querySelector(".product-list");

        this.product.forEach(item => {
            const productItem = document.createElement("li");
            const productCard = new ProductCard(item);  
            productItem.appendChild(productCard.render());
            productList.appendChild(productItem);
        })
        // components > product > productItem.js로 옮겨갔다 

        this.mainElement.append(productList);
        console.log(this.mainElement);
    }

    render(){

    }





}