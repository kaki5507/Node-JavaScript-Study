// ES 5 에 추가되었다 , 상단에 정의
// 이것을 사용하면 정의하지 않은 변수를 쓰면 오류가 안났는데, console에 오류가 나오게 해줍니다.
'use strict'

// 2. Variable (변수)
// let (ES6에 추가되었음.)
let globalName = 'kaki';
{
let name = '승현';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);
console.log(globalName);

// var 쓰지마 !
// 값을 할당하기도 전에 console로 찍을수도 있고 값을 할당할 수 있음.. 
// var hoisting
console.log(age);
age = 4;
var age;

// constants
// 값이 안바뀌어서 보안상에도 좋음 해커들이 값을 못바꿈.
// 스레드들이 실행하면서 동시에 값을 변경하는데 변하지 않으니깐 좋음.
// 개발자가 실수하는 것을 방지해줌.
const daysInWeek = 7;
const maxNumber = 5;

// Variable Types
const count = 17; // integer (정수형)
const size = 17.1; // decimal number (소수)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values : 무한대에 수렴, 마이너스 무한대에 수렴 , 문자는 숫자로 못나눔
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt라는 타입 추가되었음
const bigInt = 1234567890123456789012345678901234567890n; // over (-2 53승) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// 거짓(false) : 0 , null , undefined , NaN , ''
// 참(true) : 값
const canRead = true;
const test = 3 < 1;
console.log(`value : ${canRead}, type: ${typeof canRead}`);
console.log(`value : ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value : ${x}, type: ${typeof x}`);

// Dynamic typing : dynamically typed language
let text ='hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text} , type: ${typeof text}`);
text = 1;
console.log(`value: ${text} , type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text} , type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text} , type: ${typeof text}`);
console.log(text.charAt(0));