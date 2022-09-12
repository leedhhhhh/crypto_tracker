<div align="center">

# CRYPTO TRACKER 🔐

<img src="https://user-images.githubusercontent.com/86703459/187052944-d372934a-cbe2-4c68-8550-32ec4f1d52fe.gif" width="400" height="400" />
<img src="https://user-images.githubusercontent.com/86703459/187052946-ed1df785-6378-4574-a5ab-b28c24b027b8.gif" width="400" height="400" />

<br /><br />

# USE STACK 🔧

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactHook-EC5990?style=flat-square&logo=React&logoColor=white"/>

<br /><br />

# 프로젝트 소개

TypeScript 와 React , Recoil 을 활용한 간단한 코인사이트이며 API를 통해 실시간 차트, 가격, 1시간 전 시세현황 등을 출력해주었다.<br />
좌측 상단의 번개 아이콘을 누르면 다크모드와 라이트모드를 설정 할 수 있다.

<br /><br />

# 배운점 및 느낀점

TypeScirpt를 처음 사용해봤는데 JavaScript와 다르게 Type에 엄격한 점이 마음에 들었다.<br />
아직까지도 궁금증을 해결하지 못한 점은 'strickNullChecks의 설정을 끄면 생기는 문제가 있을까?' 인데<br />
프로젝트 개발 당시 차트의 1시간 전 가격을 출력해주기 위해 

```c
interface PriceData {
  percent_change_1h: number;
}
```

인터페이스에 number 을 할당해주고 가져다 쓰니 개체가 'undefined'인 것 같습니다. 라는 에러가 출력이 되었다.<br />
여러 고민 끝에 strickNullChecks="false" 를 써줘서 해결을 했지만 <br />
type 에 엄격한 TypeScript를 쓰면서 null 검사를 엄격하게 하지 않는게
과연 TypeScript를 사용하는 의미가 있을까? 라는 생각이 들었고 이 부분은 더 고민 후 고쳐볼 생각이다.<br />

그 이외에도 Router를 사용하면서 터무니 없게도 <Link>를 <Router> 바깥에 써주면서 생겼던 오류 때문에 몇시간을 쩔쩔 맨 기억도 있고<br />
자바스크립트를 잘 안다고 생각했지만 useQuery를 사용하면서 두번째 인자의 함수에 실행값이 들어가면 안되는걸 공부해놓고 ()를 붙여놓고 왜 안되지라는
어이없는 생각을 하면서 콜백함수에 대한 개념도 다시 익히는 좋은 시간이 되었다.


</div>

## page
https://leedhhhhh.github.io/crypto_tracker


