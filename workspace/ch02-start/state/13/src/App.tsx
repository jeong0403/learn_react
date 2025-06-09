import { useState } from 'react';
import './App.css';

function App(){
  console.log('App 렌더링');
  const [ position, setPosition ] = useState({ x: 50, y: 150});
  return(
    <>
     <h1>13 상태관리 대상이 객체일 경우 주의 사항</h1>
    <div className="container" onPointerMove={ event => {
      // client.X로 써도 됨
      // 현재 포인터의 좌표 값이 console로 출력 됨
      console.log(event.pageX, event.pageY);

      // 리렌더링이 되지 않음(객체의 속성만 수정)
      // 참조 타입의 객체일 경우 아래와 같이 속성값을 바꾼다고 해서 변경되는 게 아님!
      // position.x = event.pageX;
      // position.y = event.pageY;

      // 리렌더링 됨 (새로운 객체로 생성 -> 참조 주소를 바꿔야 함)
      // 객체 상태를 업데이트할 때는 항상 '새로운 객체를 만들어서' 전달해야 한다
      const newPosition = {
        x: event.pageX,
        y: event.pageY,
      }
      setPosition(newPosition);
      // setPosition({ x: event.pageX, y: event.pageY });과 동일함
    } }></div>
    <div className="circle" style={{ pointerEvents: 'none', transform: `translate(${position.x}px, ${position.y}px)`}}></div>
    </>
  );
}

export default App;