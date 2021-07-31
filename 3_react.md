# React

## 1. React 기초 지식

### 1) 컴포넌트(Component) : 정해진 엘리먼트들(요소)을 사용하여 만든 화면의 일부분

컴포넌트는 즉, 화면의 모든 부분이다.
그리고 컴포넌트란 App.js의 큰 App 함수처럼, 코드 전체를 감싸고 있는 함수를 뜻하기도 한다.

### 2) 속성(Props) : 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하는 방식  == 그냥 데이터 전달!

속성은 쉽게 생각해서 컴포넌트에 데이터를 전달한다는 것이다.
그 전달 모습은 kye와 value의 형태이다.

Text 태그의 numberOfLines 속성, Image 태그의 resizeMode 속성이 그 예시이다.

속성에는 규칙이 있다.

1. 컴포넌트에 속성(데이터)을 부여해줘서 전달할땐, 키와 벨류(`content={content}`) 형태로 전달해줘야 할 것

2. 컴포넌트를 반복문 돌릴땐, 컴포넌트마다 고유하다는 것을 표현하기 위해, map에서 나오는 인덱스(i)를 `key = {i}`  속성 전달 형태로 꼭 넣을것! 입니다.

코드를 보면 딕셔너리에서 키값을 바로 취해서 변수로써 함수안에서 즉시 사용할 수 있는 방식인 비구조 할당 방식을 사용하기도 한다.
이 방식으로 넘겨준 키값을 {키,키,키} 비구조 할당 방식으로 바로 꺼내서 사용하면 된다.
즉, MainPage.js에서 넘겨준 속성은 실제 받게되는 컴포넌트에서 정말 딕셔너리 데이터를 받았다! 라고 생각하면 된다.


### 3) 상태(state, useState) : 컴포넌트에서 데이터를 유지하고 관리하기 위한 유일한 방법 == 그냥 사용할 데이터!
리액트는 특이한 점이 있습니다.

화면은 데이터에 따라 변경되는데, **상태(state)**로 관리되는 데이터가 변경되면 화면이 바뀝니다.

```js
UI = componenet(state)
```
사용자 화면(UI)는 컴포넌트(component)에 어떤 데이터(state)가 주입되고 변경되냐에 따라 변화된다.


### 4) useEffect : 화면에 컴포넌트가 그려지면 처음 실행해야 하는 함수들을 모아두는 곳

```js
useEffect(()=>{

	...화면이 그려진 다음 가장 먼저 실행되야 할 코드 작성 공간

},[])
```

useEffect 함수로 화면이 그려진다음 실행시키고 싶은 함수를 작성한다면 가장먼저 실행이 됩니다. 

보통 useEffect는 데이터를 준비할 때 사용합니다
데이터를 준비한다는 것은, 데이터를 서버로부터 혹은 어디선가로부터 받은 후 상태(state)에 반영한다는 것을 뜻한다.

1) 화면이 그려진다
2) useEffect가 데이터를 준비한다
3) 상태 데이터가 업데이트 되었으니 화면이 다시 그려진다

화면이 그려진 다음, 서버에게 필요한 데이터를 요청하여 받은 후,  화면을 다시그릴때 주로 사용된다.

만약 리스트에 데이터가 없다면 오류가 생기는데, 의미없는 값이라도 넣거나 로딩화면 구현하는 방법으로 해결할 수 있다.

이러한 함수는 로그인 여부를 체크할 때와 같은 상황에 사용이 가능하다.


## 2. 앱기능

Expo SDK. 일명 Expo에서 제공해주는 앱 기능 도구들을 개발할 때 아래 링크에서 확인할 수 있다.
[링크](https://docs.expo.dev/versions/v38.0.0/)

[상태바 기능](https://docs.expo.dev/versions/latest/sdk/status-bar/)
```js
expo install expo-status-bar
```

## 3. Navigator

네비게이터는 앱에서 여러분들이 만든 컴포넌트들을 페이지화 시켜주고, 해당 페이지끼리 이동을 가능하게 해주는 라이브러리입니다.
[네비게이션](https://reactnavigation.org/)

```s
yarn add @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

## 4. Stack Navigation

스택 네비게이션은 페이지가 쌓이는 구조이다. 

페이지는 Stack.Screen 이라 부르며, 책갈피는 Stack.Navigator라 부른다.

```s
yarn add @react-navigation/stack
```


## 5. 앱 기능 - 페이지 내용 공유하기
```js
import { Share } from "react-native";
```

## 6. 앱 기능 - 외부 링크 클릭하기
```s
expo install from 'expo-linking'
```
```js
import * as Linking from 'expo-linking';
```