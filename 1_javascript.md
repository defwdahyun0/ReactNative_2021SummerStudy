# javascipt 기초 문법

## 1. 변수

- let,var 중 하나 사용
- 일괄적으로 let 사용

```js
let num = 20;
console.log(num);
```

- 사칙연산

```js
let a = 1
let b = 2
let c = a+b

console.log(c)
console.log(a*b)
```

```js
// 문자

let first = "gunhee"
let last = 'kim'

console.log(first + last)

console.log(first + " " + last)

console.log(first + a) // 숫자를 문자로 바꾼 뒤 수행
```

- 변수명

```js
let firstName //camel case
let first_name // snake case

// 하나를 정해서 일괄적으로 사용하자.
```

- const로 변수 선언

```js
const num2 = 1000 //const 변수는 값이 변동되지 않는다.
```

## 2. 리스트(배열) & 딕셔너리(객체)

- 리스트 : 여러 데이터를 쌓아 놓는다.

```js
let a_list = [1,2,3,4,'gunhee',6,7,'kim']
console.log(a_list[4]) // 'gunhee'

// list 뒤에 값 추가
a_list.push('hi')

a_list.length // 8
```

- dict

```js
let a_dict = {"name":"gunhee","age":20} //key:value
console.log(a_dict["name"])

a_dict["height"] = 200 // 없는 key -> 값 추가

console.log(a_dict) // {"name":"gunhee","age":20, "height":200}
```

- list+dict

```js
let names = [{"name":"gunhee","age":20},{"name":"gunhee2","age":30}]

// 삽입
names.push({"name":"gunhee3","age":40})

// 조회
names[1]["age"]

// json 데이터 구조에서 사용된다.
```

## 3. 자바스크립트 기본 제공 함수

```js
let a = 20
let b = 7 
console.log(a%b) // 나머지

let myname = "kimgunhee"
console.log(myname.toUpperCase()) // 대문자 변환

let email = "gunheekim@gmail.com"
console.log(email.split('@')) //문자열 자르기 //["gunheekim","gmail.com"]
console.log(email.split('@')[1]) // gmail.com
console.log(email.split('@')[1].split('.')[1] // com

let txt = "서울시-마포구-망원동"
let names = txt.split('-') // ["서울시","마포구","망원동"]
console.log(names.join('>")) // 배열 합치기 //서울시>마포구>망원동
// concat으로 배열끼리 합치는 것도 가능하다.
```

## 4. 함수

```js
function funcName(){
	console.log("함수")
}
funcName()

function funcNum(num1,num2){
	console.log(num1+num2)
}
funcName(10,20)

function minus(num1,num2){
  return num1-num2
}
let result = minus(100,10)
console.log(result)

let a = function(){
	console.log("리터럴 함수 방식")
}
a()
```

## 5. 조건문

```js
function is_adult(age){
	if(age>20){
		console.log("성인")
	} else if (age > 10) {
		console.log("청소년")
	} else {
		console.log("어린이")
	}
}
is_adult(30)
```

```js
// AND 조건은 이렇게
function is_adult(age, sex){
	if(age > 20 && sex == '여'){
		alert('성인 여성')
	} else if (age > 20 && sex == '남') {
		alert('성인 남성')
	} else {
		alert('청소년이에요')
	}
}

// 참고: OR 조건은 이렇게
function is_adult(age, sex){
	if (age > 65 || age < 10) {
		alert('탑승하실 수 없습니다')
	} else if(age > 20 && sex == '여'){
		alert('성인 여성')
	} else if (age > 20 && sex == '남') {
		alert('성인 남성')
	} else {
		alert('청소년이에요')
	}
}

is_adult(25,'남')
```

## 6. 반복문

```js
for(let i=0; i<10; i++){
	console.log(i)
}

let people = ['철수','영희','민수']
for(let i=0; i < people.length; i++){
	console.log(people[i])
}
```

```js
let scores = [
  {'name':'철수', 'score':90},
  {'name':'영희', 'score':85},
  {'name':'민수', 'score':70},
  {'name':'형준', 'score':50},
  {'name':'기남', 'score':68},
  {'name':'동희', 'score':30},
]

for (let i = 0 ; i < scores.length ; i++) {
	console.log(scores[i]);
}

for (let i = 0 ; i < scores.length ; i++) {
	if(scores[i]['score'] < 70){ // 점수가 70점 미만인 사람들
		console.log(scores['name']); // 이름 출력
	}
}
```

## 7. Javascript 기초 연습

```js
// 합을 구하는 함수
function get_sum(n){
	let sum = 0
	for (let i=0; i<n; i++){
		sum += i
	}
	return sum
}
let result = get_sum(100)
console.log(result)

// 배열에서 특정 원소 갯수 구하기
let fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']

let count = 0
for(let i=0;i<fruit_list.length; i++){
	let fruit = fuit_list[i]
	if(fruit == "딸기"){
		count += 1
	}
}
console.log(count)

// json 타입 받아오기
// 미세먼지(IDEX_MVL)의 값이 40 미만인 구 이름(MSRSTE_NM)과 값을 출력하기
for (let i = 0; i < mise_list.length; i++) {
  let mise = mise_list[i];
  if (mise["IDEX_MVL"] < 40) {
    let gu_name = mise["MSRSTE_NM"];
    let gu_mise = mise["IDEX_MVL"];
    console.log("40보다 작은 구: " + gu_name + ", " + gu_mise);
  }
}

let mise_list = [
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "중구",
    PM10: 22,
    PM25: 14,
    O3: 0.018,
    NO2: 0.015,
    CO: 0.4,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 31,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "종로구",
    PM10: 24,
    PM25: 18,
    O3: 0.013,
    NO2: 0.016,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM25",
  }
];
```

## 9. 앱개발에 자주 쓰이는 Javascript - 1

- 함수 선언

```js
//함수 선언
let a = function() {
  console.log("function");
}
a();
let a = () => {
  console.log("arrow function");
}
a();.
```

- 딕셔너리 키와 값을 빠르게 꺼내기! - 비구조 할당

```js
//객체 
let blog = {
	owner : "noah", //key값에 "" 없어도 key로 인식
	url : "noahlogs.tistory.com",
	getPost() { 
		console.log("ES6 문법 정리"); 
	}
};

//기존 할당 방식
let owner = blog.owner //blog["owner"]
let getPost = blog.getPost()

//비구조 할당 방식
let { owner, getPost } = blog;       
//각각 blog 객체의 owner , getPost() 의 데이터가 할당
//blog의 키 값과 이름이 같아야 해요!
//(예 - owner가 아니라 owner2를 넣어보세요! 아무것도 안 들어온답니다.)

**** 앞으로 리액트 네이티브 앱을 만들며 가장 많이 사용할 방식****

//함수에서 비구조 할당 방식으로 전달된 딕셔너리 값 꺼내기
**let blogFunction = ({owner,url,getPost}) => {
	console.log(owner)
	console.log(url)
	console.log(getPost())
}

blogFunction(blog)**
```

- 줄바꿈을 자유롭게, 리터럴

```js
백틱(``) : (option+₩) 혹은 ₩만
`줄바꿈이
자유롭다`

const id = "myId" ;
const url = `http://noahlog.tistory.com/login/${id}` ;
```

- 딕셔너리를 짧게 만들어보기, 객체 리터럴

```js
[기존 방식]

var name = "스파르타";
var job = "developer";

var user = {
  name: name,
  job: job
}

console.log(user);
//{name: "스파르타", job: "developer"}

[최신 방식]

var name = "스파르타";
var job = "developer";

var user = {
  name,
  job
}

console.log(user);
//{name: "스파르타", job: "developer"}

// k**ey: value** 형태에서 단순히 변수명만 작성해주면 변수명과 동일한 필드가 생성되며, 그 변수값이 대입됩니다.
```

- map - 반복문의 또 다른 방식

```jsx
// map은 리스트의 길이값을 몰라도 되며, for와는 반대로 리스트안에서 몇 번째에 있는 값인지 순서를 알려줍니다.

let numbers = [1,2,3,4,5,6,7];

numbers.map((value,i) => { 
	console.log(value,i) 
})

//1 0
//2 1
//3 2
//4 3
//5 4
//6 5
//7 6
```

- 파일을 모듈화 - module system

```js
//**export**는 자바스크립트의 값, 함수, 딕셔너리(객체) 또는 자바스크립트 파일 자체를 외부로 내보내는 키워드 이고 
//**import**는 반대로 자바스크립트 파일 안으로 가져오는 키워드 입니다

export function times(x) {
  return x * x;
}
import { times } from './util.js';
```

```js
// in util.js
export default function times(x) {
  return x * x;
}
// in app.js
import k from './util.js';
console.log(k(4)); // returns 16
**//**이렇게 export default로 선언한 함수는 해당 파일에서 유일해야 하며, 가져올 땐 이름을 달리해서 가져와서 사용 할 수 있습니다. 
```

- 과제

```js
//특정 과일 세기 in map
let fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']
let count = 0;
fruit_list.map((f)=>{
    if(f == "딸기") count += 1
})
console.log(count)

// 이메일 판별 함수 1 (indexOf)
function checkEmail(email){
	indexOfFirst = email.indexOf('@');
	if(indexOfFirst == -1) console.log('이메일이 아닙니다.')
	else console.log('이메일이 맞습니다.')
}

checkEmail('gunhee21@gmail.com') // 이메일이 맞습니다
checkEmail('gunhee21$gmail.com') // 이메일이 아닙니다.

// 이메일 판별 함수 2 (정규식)
function checkEmail(email){
	var emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;//이메일 정규식
	
	if(!emailRule.test(email)){            
		console.log("이메일이 아닙니다.")
	} else {
		console.log("이메일이 맞습니다.")
	}
}

checkEmail('gunhee21@gmail.com') // 이메일이 맞습니다
checkEmail('gunhee21$gmail.com') // 이메일이 아닙니다.
```