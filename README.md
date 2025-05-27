# React 프로그래밍
* 멋쟁이 사자처럼 FrontEnd BootCamp 13기
* 예제 테스트(GitHub Page): <https://febc-13.github.io/React/workspace-ins>

# 1. 수업 목차

## 1장 리액트 빌드업
* [ch01-buildup](./workspace-ins/ch01-buildup)

## 2장 리액트 시작하기
* [ch02-start](./workspace-ins/ch02-start)

## 3장 클래스 컴포넌트와 컴포넌트의 라이프 사이클
* [ch03-class](./workspace-ins/ch03-class)

## 4장 리액트 훅
* [ch04-hooks](./workspace-ins/ch04-hooks)

## 5장 리액트 라우터
* [ch05-router](./workspace-ins/ch05-router)

## 6장 컨텍스트 API
* [ch06-contextapi](./workspace-ins/ch06-contextapi)

## 7장 전역 상태 관리
* [ch07-globalstate](./workspace-ins/ch07-globalstate)

## 8장 리액트에서 CSS 사용
* [ch08-css](./workspace-ins/ch08-css)

## 9장 HTTP 통신과 Ajax
* [ch09-ajax](./workspace-ins/ch09-ajax)

## 10장 Next.js
* [ch10-nextjs](./workspace-ins/ch10-nextjs)

## 11장 프로젝트 준비
* [ch11-skeleton](./workspace-ins/ch11-skeleton)

## 12장 React App
* [ch12-app](./workspace-ins/ch12-app)

# 2. 개발 환경 구축

## 2.1 프로그램 설치
* 본인의 OS에 맞는 버전 다운로드 후 설치
  - Nodejs 설치 <https://nodejs.org/en/download/>
  - Visual Studio Code 설치 <https://code.visualstudio.com/download>
  - Git 설치 <https://git-scm.com/downloads>
  - API 클라이언트 설치
    - Postman <https://www.postman.com/downloads>
    - Bruno <https://www.usebruno.com/downloads>

## 2.2 실습 준비
### 2.2.1 Github 저장소 복사
1. 리액트 실습 Github 저장소
    * `https://github.com/FEBC-13/React.git`
    
2. 터미널 프로그램 실행 후 개발 수업에 사용할 폴더 생성 후 이동
    * 예시
    ```sh
    mkdir febc13
    cd febc13
    ```

3. 리액트 수업에 사용할 폴더 생성 후 이동
    ```sh
    mkdir 03_react
    cd 03_react
    ```
    
4. 실습 저장소를 로컬에 clone
    ```sh
    git clone https://github.com/FEBC-13/React.git
    ```

### 2.2.2 실습 저장소의 변경사항 동기화
* github 저장소의 변경사항을 가져올 때
    ```sh
    git pull origin main
    ```

* 충돌 발생시 임시로 필요한 코드만 복사
    - 현재 폴더 하위에 sample/02 폴더만 복사하는 예시
    ```sh
    npx degit https://github.com/FEBC-13/React/sample/02 sample/02 
    ```

### 2.2.3 Visual Studio Code 설정
1. VSCode 실행
2. 프로젝트 선택
    * File > Open Folder... > febc13/03_react/React 선택
3. File > Preferences > Settings
    * "Files: Auto Save": onFocusChange
    * "Editor: Font Size": 각자 맞춰서 조절
    * "Editor: Tab Size": 2
    * "Editor: Detect Indentation": 체크 해제
    * Workspace 탭 > "Files: Readonly Include"
      - Readonly Include가 보이지 않을 경우 VSCode를 최신 버전(1.79 이상)으로 업데이트
      - Add Pattern > `workspace-ins/**` 입력한 후 OK 선택
      - Add Pattern > `sample/**` 입력한 후 OK 선택

### 2.2.4 React 개발용 웹브라우저 플러그인

#### React Developer Tools
* 리액트 컴포넌트 트리를 확인하고 컴포넌트 내부 데이터를 한눈에 볼 수 있어서 디버깅에 도움
* Chrome: 크롬 웹스토어에서 React developer tools로 검색 후 설치
  - <https://chromewebstore.google.com/search/react%20developer%20tools>
* 설치하면 크롬 개발자 도구에 Components 탭이 추가됨

### sample 폴더 복사
* sample/01/workspace 폴더를 복사해서 프로젝트 루트에 붙여넣기
* 완성된 강사의 코드는 workspace-ins 폴더에서 확인

## 2.3 실습 테스트
### 2.3.1 웹 서버 구동
1. VSCode의 터미널로 이동
    * VSCode 하단의 TERMINAL이 보이지 않으면 View > Terminal

2. Live Server 구동
    * 프로젝트 루트에서 실행
    ```sh
    npx live-server workspace
    ```

### 2.3.2 테스트
* 웹 브라우저로 접속
  - <http://127.0.0.1:8080>
  - <http://localhost:8080>

* 각 예제 클릭해서 테스트
  - .js: Javascript 문법 관련 실습은 브라우저 개발자 도구 > 콘솔 탭에서 결과 확인
  - .html: DOM, Ajax 관련 실습은 새로운 화면으로 이동 후 테스트
  - Vite로 생성한 프로젝트는 안내 화면을 참고해서 Node.js 환경에서 테스트

# 3. 팁
## 3.1 VSCode에서 소스코드 비교
* 비교할 두개의 파일을 VSCode에서 오픈(예시, student.js, ins.js)
* student.js 파일이 활성화 되어있는 상태에서
* View > Command Palette (단축키 F1) > File: Compare Active File With... 선택
* 비교할 대상 파일 선택(ins.js)
* student.js <-> ins.js 파일의 차이점 쉽게 확인 가능

## 3.2 참고 사이트

### 온라인 코드 편집기(HTML, CSS, JS)
* CodePen: <https://codepen.io>

### 웹 기반 React 개발
* Codesandbox: <https://codesandbox.io>
* Stackblitz: <https://stackblitz.com>

### 바벨 REPL
* <https://babeljs.io/repl>

### React 공식 문서
* <https://ko.react.dev>

### JSX 변환기 (HTML을 JSX로 변환)
* <https://transform.tools/html-to-jsx>

### 객체 불변성 라이브러리 immer
* <https://immerjs.github.io/immer>

### props의 타입 검증을 위한 PropTypes
* <https://www.npmjs.com/package/prop-types>

### Form 입력값 검증을 위한 react-hook-form
* <https://react-hook-form.com>

### 정규표현식 테스트
* <https://regexr.com>

### 초보자를 위한 리액트
* <https://react.vlpt.us>

### Recoil
* <https://recoiljs.org/ko>

### Zustand
* <https://docs.pmnd.rs/zustand>

### Redux (한국어)
* <https://ko.redux.js.org>

### React Redux
* <https://react-redux.js.org>

### Redux Toolkit
* <https://redux-toolkit.js.org>

### API Client
#### Postman
* 홈페이지: <https://www.postman.com>
* 다운로드: <https://www.postman.com/downloads>
* 문서: <https://learning.postman.com/docs>

#### Bruno
* 홈페이지: <https://www.usebruno.com>
* 다운로드: <https://www.usebruno.com/downloads>
* 문서: <https://docs.usebruno.com/introduction>