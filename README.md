
## 검색창 설계

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![styled-components](https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 

### 개발기간 : 22.02.17 ~ 22.02.19

## 배포링크:

## 구현 기능

* 

## 6. 디렉토리 구조

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


## 7. 설치 및 실행 방법
프로젝트 클론 후 다음 명령어를 실행해주세요.

    ```bash
      yarn install
      yarn dev
    ```
** json-server만 실행 시
    ```bash
      yarn json-server
    ```
    
    
## 8. 커밋 컨벤션

gitmoji를 사용하여 커밋의 목적이나 의도를 시각적으로 쉽게 식별할 수 있도록 하였습니다.

| gitmoji | 사용 예시 |
| --- | --- |
| :sparkles: | 기능 구현 |
| :bug: | 버그 수정 |
| :lipstick: | CSS 스타일링 |
| :wrench: | 설치 관련 파일 |
| :truck: | 디렉토리 또는 파일 이동 |
| :recycle: | 리팩토링 |
