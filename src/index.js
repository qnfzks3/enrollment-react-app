import React from "react";
import ReactDOM from "react-dom";
//App 컴퍼넌트 가져오기import 선언문
import App from './App.js';        //이렇게 가져오기 구문으로 지정하여 내보냈던 걸 가져올 수 있다.

// ReactDOM 라이브러리의 RENDER함수를 이용해서 의해 index.html의 태그들 중 id 가 app인 요소에 
// 해당 컴퍼넌트를 표시함
// render (컴퍼넌트 , 표시 위치)
ReactDOM.render(
    <React.StrictMode>
        <h1>Just React</h1>
    </React.StrictMode>,
    document.querySelector('#app')
);

//App 이라는 컴퍼넌트를 #root에 표시 
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.querySelector('#root')    //index.html에서 가져온 root
);