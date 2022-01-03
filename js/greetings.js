const loginForm = document.querySelector("#login_form"); //HTML에서 login_form id를 가진 form 불러오기
const loginInput = document.querySelector("#login_form input"); //HTML에서 login_form 안의 input 불러오기
const greeting = document.querySelector("#greeting"); //HTML에서 greeting id를 가진 h1불러오기
const getToDo = document.getElementById("todo_form");

const HIDDEN_CLASSNAME = "hidden"; //css의 hidden 클래스명 변수에 저장
const USER_NAME_KEY = "userName"; //userName 문자열 저장

function onLoginSubmit(event){ //로그인 했을 때의 기능(event매개변수를 통해 이벤트가 발생했을 때 값을 받아올 수 있음)
    event.preventDefault(); //브라우저의 디폴트 기능인 새로고침을 막기위해 사용
    loginForm.classList.add(HIDDEN_CLASSNAME); //로그인 시 로그인 ui를 숨김
    const userName = loginInput.value; //사용자의 입력을 저장
    localStorage.setItem(USER_NAME_KEY,userName); //로컬 저장소에 사용자 입력사항 저장(key,value)
    paintGreetings(userName); //paintGreetings함수 실행으로 다음 ui제공
}

function paintGreetings(userName){ //로그인 후 처리함수
    greeting.innerText = `${userName}'s ToDoList`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    getToDo.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USER_NAME_KEY); //로컬 저장소에 사용자명이 있는지 확인 후 변수에 저장

if(savedUserName === null){ //로컬 저장소에 사용자명이 없으면
    loginForm.classList.remove(HIDDEN_CLASSNAME); //로그인ui의 hidden을 없앰(로그인ui를 띄움)
    loginForm.addEventListener("submit", onLoginSubmit); //이벤트 리스너 실행(함수 실행)
}
else{ //로컬 저장소에 사용자명이 있으면
    paintGreetings(savedUserName); //로그인 화면은 놔두고 다음 단계 실행
}