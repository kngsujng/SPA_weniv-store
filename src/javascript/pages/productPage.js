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
        this.mainElement.innerHTML = `
            <h1 class="ir">상품목록 페이지</h1>
            <ul class="product-list"></ul>
        `
        const productList = this.mainElement.querySelector(".product-list");
        this.product.forEach(item => {
            const productDetailLink = document.createElement("a");
            productDetailLink.innerHTML = `
                <li class="product-item">
                    <div class="product-img"> 
                        <img src="http://test.api.weniv.co.kr/${item.thumbnailImg}" alt="상품이미지">
                    </div> 
                    <strong class="product-name">${item.productName}</strong>
                    <div>
                        <strong class="price m-price">${item.price}<span>원</span></strong>
                    </div>
                </li>
            `
            productList.appendChild(productDetailLink);
        })
        console.log(this.mainElement);
    }

    render(){

    }





}