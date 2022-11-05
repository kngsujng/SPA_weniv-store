import { ProductPage, ProductDetail } from "./components/pages/index.js"
//~index.js에 ProductPage.js, ProductDetail.js 파일이 연결되어있다.
import {Router} from "./utils/index.js";

export default class App{
    constructor(props){
        this.props = props;
    }
    // config가 constructor에 들어간다?

    setup(){
        const {el} = this.props;  //구조분해할당 ?

        // router의 이름으로 여러 가지 url을 미리 선언해놓고 
        // 사용자가 접속한 url에 따른 로딩되는 페이지 설정 
        const router = new Router({
            "/" : ProductPage,
            "/detail" : ProductDetail
        })
        router.init(el); 
    }
}