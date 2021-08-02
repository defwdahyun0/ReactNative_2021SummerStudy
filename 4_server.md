# Server

## 1. Server

앱에서 서버에 데이터를 요청하거나 데이터를 보내는 대화를 하려면 서버가 정한 규칙에 따라 대화 요청(Request)을 해야한다.
정한 규칙에 따라 요청을 하지 않으면 응답(Response)이 오지 않는다.
서버 쪽에서 정한 규칙을 우린 보통 API(Application Programming Interface)라고 부른다.

API는 서버가 제공하는 도메인, 혹은 서버가 만들어놓은 함수 형태로 제공된다.

서버에서 주는 데이터 형식은 JSON이다.

리액트 네이티브로 앱을 만들면서 서버와 통신(대화)하는 시점은 크게 두 가지이다.

- 1) 앱 화면이 그려진 다음 데이터를 준비 ← `useEffect`

    "앱 화면을 보자마자 실행되야 하는 작업들이 모여 있는 곳"인 `useEffect`에 서버측에서 제공해주는 API를 이용해 필요한 데이터들을 준비한다. 

    ```js
    useEffect(()=>{
      //서버 API 사용
      //이 화면에서 사용 할 데이터 준비 등... 
    },[])
    ```

- 2) 앱에서 사용자가 저장,조회,수정,삭제 버튼을 클릭

## 2. open API (날씨)

날씨 데이터를 제공해주는 일정 요청에 대해선 무료 API를 제공해주는 openweathermap api 를 사용해볼 것이다.

1) 현재 위치(좌표) 데이터 필요, 가져오기
2) 위치 데이터를 이용해 현재 위치 날씨 데이터 가져오기

Expo에선 역시나 그렇듯 쉽게 현재 위치 데이터를 얻게 해주는 도구를 제공해준다.

expo-location 

[공식 문서 링크](https://docs.expo.io/versions/latest/sdk/location/)

```s
expo install expo-location
```

API는 API를 만든 서버 개발자가 사용법을 정리해서 알려줍니다. 아래 날씨 API는 아래 공식 문서에 설명서가 적혀 있다.

[사용 할 날씨 관련 API 공식문서 링크](https://openweathermap.org/api)

**서버가 제공하는 도메인 형식의 API를 사용하려면, 사용을 위한 도구가 필요합니다. 이를 `axios` 라고 부른다.**

아래와 같이 설치를 진행한다.

```jsx
yarn add axios
```

https://openweathermap.org/current
위 API 문서를 참고해서 아래 코드를 작성한다. 

```js
const temp = result.data.main.temp; 
const condition = result.data.weather[0].main
```

```js
async, await
//참고로, js는 빨리 끝나는 순서대로 실행하기 때문에 순서를 맞추고 싶을 때 위 함수를 사용한다.
```

## 2. Serverless

서버리스란 이름 그대로 서버가 없는 것이 아니라, 서버를 직접 만들 필요가 없다는 것이다. 

서버를 직접 구현, 구성 할 필요없이 필요한 서버 기능을 제공하는 곳에서, 서비스를 사용하기만 하면 된다.

## 3. Firebase

프로젝트를 생성하고, 타입으로는 웹을 선택하고 key값을 받는다.

모듈을 설치한다.
```js
expo install firebase
```

key값을 firbaseConfig.js에 저장한다.

### 파일 스토리지(storage)

가장먼저 사용하게 되는 파이어베이스 서비스는 파일 스토리지이다. 간단히 파일 저장소이다.

멀리 있는 파일 저장소에 이미지 및 사용 할 파일을 올려두고, 필요할 때마다 꺼내 쓰는 용도로 사용하면 된다.

### 리얼타임 데이터베이스 - 설정

우리가 배운 리스트, 딕셔너리 구조, 즉 **JSON 형태**로 저장/관리되는 데이터베이스 서비스이다.

이 서비스를 사용 할 땐, 파이어베이스에서 제공해주는 함수들을 이용하기만 하면 데이터 저장/수정/삭제가 가능하다.

데이터의 저장 위치를 알았다면, 파이어베이스의 리얼타임 데이터베이스 전용 함수에 데이터 저장 위치를 알려주면서 데이터를 가져올 수 있다.

```js
firebase_db.ref('/tip').once('value').then((snapshot) => {
   let tip = snapshot.val();
})
```

ref('/tip') 이 부분에서 /tip 영역에 가지고 오고 싶은 데이터의 주소를 넣어주면 된다. 
이 주소 앞부분에는 https://sparta-myhoneytip.firebaseio.com/ 과 같은 기본 주소가 생략되어 있다.

firebaseConfig.js에서 이미 파이어베이스 계정을 세팅했기 때문에, 기본 주소와 정보들은 앱 내에서 사용하는 파이어베이스 함수들이 알고 있는 상태이다.

```js
firebase_db.ref('/tip').once('value').then((snapshot) => {})
```

이 코드는 서버리스를 이용하여 데이터베이스를 조회하기 위해,
파이어베이스 측에서 정해놓은 API 사용방법이다. 따라서 우린 공식 문서 그대로 사용 방법을 적용해야 한다.

조회한 데이터는 snapshot 부분에 담겨서 {} 내부에서 사용할 수 있는데, 그 중 실제 우리에게 필요한 데이터는 snapshot.val()로 가져와 변수에 담아 사용할 수 있다.

### 데이터

1) 자세한 내용에 대한 데이터

2) 데이터들이 실시간으로 변경될 수 있다.

3) 큰 데이터들이 이동하는 것은 앱 퍼포먼스 저하 원인이다.

따라서 데이터는 그때그땨  변경된 데이터가 항상 반영되는(반영해야되는) 파이어베이스 데이터베이스로부터 가져오는 게 좋고, idx 번호만 넘겨서 필요한 데이터는 서버로부터 그때그때 오도록 해서 오고가는 데이터의 크기를 줄이는 것이 좋다.

### 고유 ID

이때 사용자마다 고유한 정보들을 관리하려면, 구분을 위해 사용자 고유 ID 값 정도의 데이터가 필요하다.

관련 모듈을 사용하면, 사용자들마다 고유한 ID 값으로 데이터를 관리할 수 있다.

이 코드를 이용하면 앱 어디서든지 동일한 사용자 유니크 아이디를 생성 및 사용할 수 있다.

[expo-contants 공식 문서](https://docs.expo.io/versions/latest/sdk/constants/) 

```jsx
expo install expo-constants
```

```jsx
import Constants from 'expo-constants';

console.log(Constants.installationId)
```