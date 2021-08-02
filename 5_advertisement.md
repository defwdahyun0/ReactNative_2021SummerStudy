# Advertisement

## 수익형 앱

- 앱 마켓에 유료앱 배포 수익 모델
- 앱 내 배너 광고 수익 모델
- 앱 콘텐츠 판매 수익 모델: 인 앱 결제
- 구독 수익 모델
- 앱 개발 용역 수익 모델
- 외부 브랜드 광고 수익 모델

가장 쉽게 수익 구조를 앱에 연결 할 수 있는 방법은 [**앱 내 배너 광고 수익 모델]** 이다.

1. 배너 클릭
2. 배너 광고 시청
3. 배너 광고 사용자 참여

이 3가지 모두 앱에 쉽게 적용할 수 있는 방법을 구글 애드몹 광고 서비스에서 제공해준다. 

## 구글 광고, 애드몹

구글 애드몹에서는 총 4가지의 광고 유형을 제공한다.

구글 애드몹 역시 Expo에서 지원해준다.

하지만 공식 문서에서 애드몹의 사용가능 플랫폼을 보면, 모두 가능하지만 웹에서는 안된다는 것을 확인할 수 있습니다. 웹의 경우 구글에서는 구글 애드센스를 지원하기 때문인데, 우린 앱개발 중이니 참고만 합니다!

admop 설치
```s
expo install expo-ads-admob
```

app.json 하단 추가
```js
"ios": {
      "supportsTablet": true,
      "buildNumber": "1.0.0",
      "bundleIdentifier": "com.myhoneytip",
      "config": {
        "googleMobileAdsAppId": ""
      }
    },
    "android": {
          "package": "com.myhoneytip",
          "versionCode": 1,
          "config": {
            "googleMobileAdsAppId": ""
          }
  },
```

코드를 통해, 배너를 구현한다. 


## 배포

앱을 배포하기 위해서는 필요한 것들이 있다.

1) 앱 로고

2) 스플래시 스크린(앱 시작 초기 화면)

온라인 포토샵: https://pixlr.com/kr/x/
무료 이미지 사이트: unplash

3) 앱 마켓에 올릴 설명 이미지

이 외에도 앱 버전 관리, 안드로이드, iOS 인증서 관리 등이 있다.

아래 코드를 통해 파일 형태로 저장할 수 있다.
```s
expo build:android
```

이후, 구글 개발자 계정과 애플 개발자 계정을 연동해서 출시를 진행한다.

구글 개발자 계정
https://developer.android.com/distribute/console?hl=ko

