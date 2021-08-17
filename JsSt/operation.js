// String concatenation
console.log('제니의'+' 하루');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// numeric(숫자) operators(연산자)
console.log(1 + 1); // 더하기 
console.log(1 - 1); // 빼기 
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(5 % 2); // 나머지
console.log(2 ** 3); // 제곱
// 결과 : 2 0 1 1 1 8

// Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 이게 preIncrement임 하나증가해서 3이 됨.

// 할당하는 연산자
let x = 3;
let y = 6;
x += y; // 생략 가능 x = x+y 
x -= y;
x *= y;
x /= y;

// logical operators
// || (or)
const value1 = false;
const value2 = 4 < 2; // false

console.log(`or: ${value1 || value2 || check()}`);

// check 함수
function check() {
    for(let i=0; i < 10; i++){
        //wasting time
        console.log('ㅇㅅㅇ');
    }
    return true;
}

// Eqaulity
const stringF = '5';
const numberF = 5;

// == 타입을 변경해서 비교를 해 줌.
console.log(stringF == numberF); // true
console.log(stringF != numberF); // false

// === 타입까지 비교
console.log(stringF === numberF); // false
console.log(stringF !== numberF); // true


const kaki1 = {name: 'kaki'};
const kaki2 = {name: 'kaki'};
const kaki3 = kaki1;

console.log(kaki1 == kaki2);
console.log(kaki1 === kaki2);
console.log(kaki1 === kaki3);

// eqaulity - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);