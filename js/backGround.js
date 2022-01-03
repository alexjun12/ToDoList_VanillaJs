//배경화면 랜덤전환 스크립트 (사용안함)
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
]; //이미지 배열

const bgImage = document.querySelector("#backGround");

function changeBack() {
    const chosenImage = images[Math.round(Math.random() * images.length)]; //랜덤값 추출 후 배열 인덱스에 넣기
//const bgImage = document.createElement("img"); //HTML에 img생성
    bgImage.background = `img/${chosenImage}`; //img의 src에 이미지 주소 넣어주기
//document.body.appendChild(bgImage); //HTML의 body에 넣어주기
}

//setInterval(changeBack,5000);
