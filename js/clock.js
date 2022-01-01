const clock = document.querySelector("#clock"); //HTML에서 id가 clock인 h2 가져오기

function getClock(){ //시간 가져오는 함수
    const date = new Date(); //Date 사용
    const hours = String(date.getHours()).padStart(2,"0"); //date에서 시간 가져오기(get~함수를 사용하면 number자료형으로 넘어오기 때문에 string으로 형변환 시키고 padStart함수로 자릿수를 맞춰준다)
    const minutes = String(date.getMinutes()).padStart(2,"0"); //date에서 분 가져오기
    const seconds = String(date.getSeconds()).padStart(2,"0"); //date에서 초 가져오기

    clock.innerText = `${hours}:${minutes}:${seconds}`; //문자열 합치기
}

getClock(); //함수 처음 한번 실행(바로 보여주기)
setInterval(getClock, 1000); //1초마다 갱신시키면서 시간 보여주기
