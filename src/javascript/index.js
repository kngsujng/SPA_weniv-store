import App from "./app.js"; 
//클래스 App이 선언되어 있는 app.js 불러온다. 

const config = {
    el: "#root"
};

new App(config).setup();
// App 클래스의 setup 메소드 (#root에 요소를 집어넣을 수 있게 한다.)를 불러온다. 