const todoForm = document.getElementById("todo_form"); //HTML에서 id가 todo_form인 폼 가져오기
const todoInput = document.querySelector("#todo_form input"); //todo_form안에서 input가져오기
const todoList = document.getElementById("todo_list"); //HTML에서 id가 todo_list인 ul가져오기

const TODOS_KEY = "todos"; //localstorage에 저장될 키 값
const fontDesign = "textFontAColor";

let toDos = []; //할일들이 저장될 리스트

function saveToDos(){ //로컬 저장소에 저장함수
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //todos라는 키로 리스트의 아이템들을 string화 시켜 로컬저장소에 저장
}

function deleteTodo(event){ //할일 삭제 함수
    const li = event.target.parentElement; //눌린버튼 객체의 부모(HTML의 li)를 가져옴
    li.remove(); //HTML상에서 삭제
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // arr.filter(function) -> function의 반환값이 true인 인덱스들만 반환시켜줌 => 삭제할 id의 아이템을 제외하고 모두 뽑아서 다시 리스트에 저장
    saveToDos(); //저장
}

function paintTodo(newTodo){ //화면상에 할일 그려주는 함수
    const li = document.createElement("li"); //HTML에 li추가
    li.classList.add(fontDesign);
    li.classList.add("todosPosition");
    li.id = newTodo.id; //리스트의 각 아이템의 id를 li의 id에 저장
    const span = document.createElement("span"); //HTML에 span 추가
    span.innerText = newTodo.text; //span의 텍스트를 리스트 내 각 아이템의 text 값으로 저장
    const button = document.createElement("button"); //HTML에 button 추가
    button.classList.add(fontDesign);
    button.innerText = "X"; //버튼 모양
    button.style.backgroundColor = "black"; //버튼 배경 설정


    button.addEventListener("click", deleteTodo); //버튼에 클릭이벤트 추가(누르면 deleteTodo 함수 실행)

    li.appendChild(span); //li에 span을 내부 자식으로 추가
    li.appendChild(button); //li에 button을 내부 자식으로 추가
    todoList.appendChild(li); //li를 ul내부 자식으로 추가
}

function handleTodoSubmit(event){ //input에서 submit이벤트 다루는 함수
    event.preventDefault(); //submit(엔터키)시 브라우저 기본동작(새로고침) 막기
    const newTodo = todoInput.value; //사용자 입력값 저장
    todoInput.value = ""; //저장 후 비워주기
    const newTodoObj = { //리스트안에 들어갈 아이템 오브젝트로 생성
        text : newTodo, //text요소 -> 사용자 입력값 받아오기
        id : Date.now(), //id요소 -> Date.now()로 랜덤값 받아오기
    };
    toDos.push(newTodoObj); //toDos리스트에 만들어진 오브젝트 push
    paintTodo(newTodoObj); // 오브젝트를 인자값으로 넘겨서 화면상에 그리기
    saveToDos(); //로컬 저장소에 저장
}

todoInput.style.backgroundColor = "black";
todoForm.addEventListener("submit",handleTodoSubmit); //할일 작성 후 엔터키 누를 때 이벤트 리스너

const savedToDos = localStorage.getItem(TODOS_KEY); //저장소에서 todos 라는 키값을 가진 value 받아오기

if(savedToDos !== null){ //받아온 값이 있으면 -> 저장소에 값이 있으면
    const parsedToDos = JSON.parse(savedToDos); //저장된 값의 문자열화 시키기 이전 값으로 가져온다
    toDos = parsedToDos; //리스트에 기존값 넣기
    parsedToDos.forEach(paintTodo); //각 아이템만큼 painTodo함수를 실행시켜 화면에 그려주기
}