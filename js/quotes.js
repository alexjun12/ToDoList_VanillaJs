const quotes = [
    {
        quote: "I never dreamed about success, I worked for it. ",
        author: "Estee Lauder",
    },
    {
        quote: "Do not try to be original, Just try to be good. ",
        author: "Paul Rand",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great. ",
        author: "John D.Rockefeller",
    },
    {
        quote: "Hold on with your teeth, if you don't have teeth, bite your gums and hold on. ",
        author: "Republc Of Korea Marine Corps",
    },
    {
        quote: "Go alone like a rhinoceros horn. ",
        author: "Buda",
    },
    {
        quote: "Be proud like a mountain, and humble yourself like the lying grass. ",
        author: "Buda",
    },
    {
        quote: "Don't be too stingy, don't be angry or hateful. ",
        author: "Buda",
    },
    {
        quote: "Do not turn your back on justice to satisfy your selfishness, and do not repay your resentment with resentment. ",
        author: "Buda",
    },
    {
        quote: "Don't be afraid to face danger, don't frame others for profit. ",
        author: "Buda",
    },
    {
        quote: "Know how to look at wealth like filth, and manage your anger well. ",
        author: "Buda",
    },
]; //명언 배열

const quoted = document.querySelector("#quote span:first-child"); //HTML에서 quote의 첫번째 span가져오기
const author = document.querySelector("#quote span:last-child"); //HTML에서 quote의 마지막 span가져오기
const todayQuote = quotes[Math.round(Math.random() * quotes.length)]; //배열[반올림(랜덤값 * 배열의 길이)]

quoted.innerText = todayQuote.quote; //배열의 quote값으로 변경
author.innerText = todayQuote.author; //배열의 author값으로 변경

