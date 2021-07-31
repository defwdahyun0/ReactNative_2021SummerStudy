# EXPO 및 JSX 문법

## 1. Expo

javascript만으로 개발을 할 수 있도록 도와주는 도구이다.

기존의 ReactNative CLI와 달리, android와 ios 앱에 대한 코드가 필요하지 않다.

expo 클라이언트 앱을 제공해서, 휴대폰에서 바로 확인할 수 있다.

## 2. 앱 개발 준비 : 리액트 네이티브 & Expo 설치

도구를 가져오기 위한 도구: Node, NPM, yarn

Node로 개발 환경을 구축하고, NPM 혹은 Yarn으로 자바스크랩트 앱 개발 도구를 가져온다.

```s
$ npm install -g yarn
$ npm install -g expo-cli
```

expo 서비스를 가입하면 대시보드에서 관리할 수 있다.

expo 서비스에 가입하고, local 컴퓨터에서 expo에 로그인한다.

```s
$ expo login
```

프로젝트 시작은 다음 명령어로 진행한다. 
```s
$ expo init sparta-honeytip
```

컴퓨터에서의 진행상황을 앱으로 확인하는 것은 네트워크가 동일해야 가능하다.

## 3. JSX 문법

태그(엘리먼트)로 화면을 그린다. (<View></View><Text></Text> 등)

그림을 그리고, 그림 파일을 휴대폰에 그려준다고 생각할 수 있다.

App 함수가 jsx 문법을 반환한다(렌더링한다).

- 1. 모든 태그는 reactnative 라이브러리에서 꺼내서 써야 한다. 
```js
import { StyleSheet, Text, View} from 'react-native';
```
- 2. 닫는 태그와 여는 태그는 한 쌍이고, 구분해야 한다.

태그들은 공식문서에서 찾아서 사용할 수 있다.

- 3. 모든 태그는 감싸는 태그가 있어야 한다.

- 4. jsx는 ()로 감싸야 한다.

```js
return (<View></View>);
```

- 5. 태그 안에서의 주석은 아래와 같이 쓴다.
```jsx
<View>
    {/* */}
</View>
```

- 6. 아래 공식 문서를 참고한다.
- 리액트 네이티브 공식 문서
https://reactnative.dev/docs/view

- Expo 공식 문서
https://docs.expo.io/versions/v38.0.0/react-native/view/

## 3. Tag

1) <View>

2) <Text>

3) <ScrollView>

4) <Button>

5) <TouchableOpacity>
- 누르는 기능

6) <Image>

## 4. Styles
- 자주 사용하는 style 속성

## 5. Flex, 컨텐츠의 위치

## 6. 본격적인 개발, 메인화면

-스타일 공식 문서
https://reactnative.dev/docs/style#docsNav
https://reactnative.dev/docs/layout-props

## 7. 모듈과 반복문
```js
export default function App() {...}
```
페이지를 export해서 다른 페이지에서도 쓸 수 있게끔 한다.

데이터를 저장하고, 데이터를 반복문으로 꺼내오자. map 함수를 이용한다.

## 8. {} 표현식과 조건문

{} 표현식은 JSX 문법 사이사이에서 자바스크립트 문법을 사용하기 위한 방식이다.

삼항연산자
```js
let result = 10 > 2 ? "참" : "거짓"

// let result = 조건 ? 참일 때 : 거짓 일때

let result = 10 == 9 ? true : false  // result <-- false 값 할당  
let result = 10 !== 9 ? true : false // result <-- true 값 할당  
let reuslt = 99 > 10 ? true : false // result <-- true 값 할당  
```