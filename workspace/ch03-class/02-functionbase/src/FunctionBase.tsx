// 01-classbase에서 class 기반 -> Function으로 바꿈

import { useState } from "react";

function Parent() {
  return (
    <div>
      <h1>02 클래스 컴포넌트 - 함수형 컴포넌트와 같이 사용</h1>
      {/* 가정: 1번 클릭했을 때 level을 1씩 혹은 5씩 증가하는 기능 만들거야 */}
      <ClickMe level={10} />
      <ClickMe level={5} />
      <ClickMe />
    </div>
  );
}

function ClickMe({ level = 1 }) {
  const [ count, setCount ] = useState(level);

  const increase = () => {
    setCount(count +  level);
  }

  return (
    <div>
      클릭 횟수 X { level } : { count }
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default Parent;
