'use strict';
//strict 모드는 문법과 런타임 동작을 모두 검사하여, 
//실수를 에러로 변환하고, 변수 사용을 단순화(Simplifying) 시켜줍니다.




//Make navbar transparent when it is on the top : 아래 내용에 대해 이해하기 쉽도록 설명

//const navbar = document.querySelector('#navbar')
//const navbarHeight = navbar.getBoundingClientRect().height;
//navbar를 선언한 다음에 document에 있는 querySelector을 이용해서 엘리먼트 요소를 받아온다. 
//navbar는 id로 되어 있어서 '#navbar'
/*
navbar의 height을 지정하려면 querySelector를 이용한다.
-> 컨트롤 누르고 querySelector을 클릭하면 함수가 정의된 곳으로 갈 수 있다. 
-> element가 리턴된다. 
-> navbar에 querySelector을 이용해서 가져온 navbar 요소의 높이를 변수를 이용해서 할당한다. 

-> navbar에 getBoundingClientRect()을 호출하면 안에 height이 있다.
-> 이 높이를 .height으로 받아온다.
-> 아래에 console.log(`navbarHeight: ${navbarHeight}`);을 적어서 확인하면서 만든다.

*/

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }

    });
    /* 
    window.scrollY가 navbar height보다 크면(스크롤링이 navbarheight이상으로 발생하면)
    navbar에 있는 클래스 리스트에 클레스를 추가해줄건데 
    윈도우 스크롤링이 navbar이상으로 y가 지나가게 되면 진하게 만든다
    스크롤링이 navbar height보다 작으면, 즉 스크롤링이 많이 되지 않으면 navbar dark를 없앤다.
    개발자도구 element에서 스크롤링해서 확인하면 navbar의 class의 변화를 확인할 수 있다.
    */




// () : arrow function. 아무런 인자를 받지 않고 우리가 원하는 블럭을 실행한다.
/* 
window.scrollY
-> scrollY는 윈도우에 있는 프로퍼티. 읽기만 가능.
-> 그래서 픽셀 단위로 얼마나 많이 스크롤이 수직적으로 이루어졌는지를 알려준다. 
-> var y = window.scrollY 
*/


/*
우리는 브라우저에서 실제로 보여지는 width와 height을 받아와야 되니까 
getBoundingClientRect를 이용하면 된다. 
*/