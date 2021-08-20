'use strict';
//Function
//hi를 불러오는 함수를 만들어 보겠습니다.
function printHi(){
    console.log('Hi');
}
printHi(); // 이렇게 하면 Hi만 나오기 때문에 쓸모가 없음..
// 그래서 파라미터를 받아서 찍어줘야 한다.

function log(message){
    console.log(message);
}
//자바스크립트에서는 타입이 없기 때문에 명확하지가 않다.. string인지.. num인지
log('hihi');
log(1234);


// Parameters 매개변수
// 오브젝트는 레퍼런스로 전달 됨.
function changeName(obj){
    obj.name = 'coder';
}
const kaki = { name: 'kaki'};
changeName(kaki);
console.log(kaki);


// Default paramters
function showMessage(message, from){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// Rest parameters
function printAll(...hmmm){
    for(let i=0; i<hmmm.length; i++){
        console.log(hmmm[i]);
    }
}
printAll('dream','coding','fighting');

// return
function sum(a,b){
    return a+b;
}
const result = sum(1,2); // 3
console.log(`sum: ${sum(1,2)}`);

// 익명 함수 anonymous function
const print = function(){
    console.log('print');
};
print();

// Callback function
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log('yes!');
}

// named function
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

// Arrow function
// always anonymous 항상 이름이 없음.
const simplePrint = function(){
    console.log('simplePrint!');
};

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
