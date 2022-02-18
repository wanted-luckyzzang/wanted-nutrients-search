
## 🧨 주제
사용자 편의를 고려한 검색창 설계

## 🚅 배포링크


## 🙆‍♀️ 개발자 소개
<table>
  <tr align="center">
    <td><a href="https://github.com/Yena-Yun">윤예나</a></td>
  </tr>
  <tr align="center">
    <td><img src="https://avatars.githubusercontent.com/u/68722179?v=4" width="150px"/></td>
  </tr>
</table>

## 🧪 개발기간 
22.02.17 ~ 22.02.19

## 🍰 기술스택
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![styled-components](https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 

## 🍱 구현 상세
* 검색 자동완성 기능 구현
### [사용자가 원하는 영양제를 빠르게 찾을 수 있도록 🧚‍♀️]
1. 특정 한글 입력값을 영어나 숫자 값으로 인식하도록 처리
```
export const inputToAlpha = {
  비타민: 'vitamin',
  비타민에이: '비타민A',
  비타민비: '비타민B',
  비타민씨: '비타민C',
  비타민디: '비타민D',
  비타민이: '비타민E',
  비타민케이: '비타민K',
  육: '6',
  오메가쓰리: '오메가3',
  vitamin: '비타민',
};
```
2. 띄어쓰기로 구분하여 **입력된 단어를 모두 포함**하는 결과값 반환
#### 
```
    if (keyword.includes(' ')) {
      let keywordRes = keyword.split(' ');
      return keywordRes.every((piece) => name.includes(piece));
    }
```
**'토코'까지 입력했을 때 화면** <br/>
<img src="https://user-images.githubusercontent.com/68722179/154688536-d1bfab62-95fa-4329-a857-c20e34cbd092.png" width="300" /><br/><br/>
**'토코'에서 한 칸 띄우고 '타블렛'을 입력했을 때 화면** <br/>
<img src="https://user-images.githubusercontent.com/68722179/154689279-b68bfe5a-a89f-4bda-a2ac-f395bd011cc7.png" width="300" />


3. 제품명과 브랜드명 모두 검색결과에 포함
4. 영문 대소문자 상관없이 검색

## 최적화  ✈
* **debounce**로 input 입력 최적화
* useCallback, React.memo로 **memoization** 수행

### [사용자 편의를 위한 추가 구현]
* 검색창을 비우면 기존의 자동완성 결과 삭제
* 새로고침 시 input창에 autoFocus


## 🍒 설치 및 실행 방법
프로젝트 클론 - ```yarn install``` -  ```yarn dev``` 
    
    

## 🎷디렉토리 구조

```bash
.
├── components                # 프로젝트 구성 컴포넌트
│     ├── SearchContainer.js
│     ├── SearchIcon.js
│     ├── SearchInput.js
│     └── SearchView.js
├── styles 
│     ├── fonts               # Spoqa Han Sans 폰트 폴더
│     ├── global.js
│     └── theme.js
└── utils                     # 상수 및 Api
│     ├── constants
│     │      ├── inputBtnStyle.js
│     │      └── jsonKey.js       # json 데이터 key 문자열
│     └── getApi.js                # axios 코드

```


## 🧙‍♀️ 커밋 컨벤션

gitmoji를 사용하여 커밋의 목적이나 의도를 시각적으로 쉽게 식별할 수 있도록 하였습니다.

| gitmoji | 사용 예시 |
| --- | --- |
| :sparkles: | 기능 구현 |
| :bug: | 버그 수정 |
| :lipstick: | CSS 스타일링 |
| :wrench: | 설치 관련 파일 |
| :truck: | 디렉토리 또는 파일 이동 |
| :recycle: | 리팩토링 |
