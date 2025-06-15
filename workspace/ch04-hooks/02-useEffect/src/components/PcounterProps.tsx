// 연습 목적: props로 전달받은 값을 기반으로 상태 초기화 및 useEffect 반응 실험
// - 부모 컴포넌트에서 전달한 step 값을 props로 받아 사용
// - props로 받은 값을 상태로 초기화한 후, 상태 관리 및 변화 실습
// - props가 바뀔 때 useEffect가 반응하는지 확인 실험

import { useEffect, useState } from "react";

// props 타입 정의
interface CounterProps {
  step?: number; // 부모 컴포넌트에서 전달받을 값
}

// props를 받는 컴포넌트 정의
function PcounterProps({ step = 1 }: CounterProps) {
  console.log("PcounterProps 렌더링");

  // props.step을 기반으로 상태 초기화
  const [count, setCount] = useState(0);

  // TODO 1. props로 전달받은 step이 바뀔 때마다 실행
  // 현재는 App에서 고정된 값(step=5)을 넘겨주므로 마운트 시 1회만 실행됨
  useEffect(() => {
    console.log(`[1] props.step 값이 바뀜: ${step}`);
  }, [step]);

  return (
    <div style={{ padding: "1rem", border: "1px solid green" }}>
      <h2>PcounterProps 컴포넌트</h2>

      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + step)}>+ 증가</button>
      <button onClick={() => setCount(count - step)}>- 감소</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <p>전달받은 증감치(step): {step}</p>
    </div>
  );
}

export default PcounterProps;
