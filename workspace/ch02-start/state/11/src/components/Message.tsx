import { useState } from "react";

// 모듈 스코프 변수로 지정하면 컴포넌트가 리렌더링 되더라도 값은 유지되지만 모든 Message 컴포넌트가 공유하게 됨
// let count = 0;

function Message(){
  console.log('Message 렌더링');
  const [ msg, setMsg ] = useState('');
  // 컴포넌트가 리렌더링 되어도 이전 상태값이 유지됨
  // 상태값이 바뀌면 화면이 리렌더링 된다.
  const [ count, setCount ] = useState(0);

  // 지역변수이기 때문에 리렌더링 되면 0으로 초기화 된다. (리렌더링 = Message 함수 내부 전체가 다시 실행된다.)
  // let count = 0;

  // 메시지가 수정되면 event를 전달 받고 제네릭 문법으로 value를 기본적으로 가진 inputElement로 바꿈
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputMsg = event.target.value;
    setMsg(inputMsg);
    setCount(count + 1);
  };

  /*
  제어 컴포넌트
    - input 요소에 value, onChange를 추가
    - 리엑트의 state와 input 요소의 value 동기화
  비제어 컴포넌트
    - input 요소에 value, onChange를 추가하지 않음
    - 리엑트의 state와 input 요소의 value 동기화 되지 않을 수 있음
  */

  return(
    <div>
      <input type="text" value={ msg } onChange={ handleChange }/>
      <br />
      <span>입력 메세지: { msg } </span>
      <br />
      <span>입력 횟수: { count } </span>
    </div>
  );
}
export default Message;