// 연습 목적: useEffect 훅의 실행 타이밍과 cleanup 동작 실습
// - props 없이 컴포넌트 내부에서 상태(count, step)를 직접 정의하여 관리함
// - useEffect의 다양한 실행 조건을 실험하며 console.log로 동작을 확인함
// - setInterval, clearInterval을 활용한 부수 효과 및 정리 메커니즘 확인 목적

import { useEffect, useState } from "react";

function Pcounter() {
  console.log("PCounter 컴포넌트 렌더링");

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // useEffect(setup, dependencies?);
  // TODO 1. 마운트 시 한 번만 실행
  // useEffect(() => {
  //   setTimeout( () => {
  //     setCount(count + step)
  //   },1000);
  //   console.log("[1] 마운트 후에 한 번 실행됨");
  // }, []);

  // TODO 2. 매 렌더링마다 실행 (의존성 배열 없음)
  // useEffect(() => {
  //   // setTimeout(() => {
  //   //   setCount(count + step)
  //   // }, 1000);
  //   console.log("[2] 렌더링마다 실행됨 (state 변경 포함)");
  // });

  // TODO 3. 특정 값(step)이 변경될 때만 실행
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(prev => prev + step); // 현재 count에 바뀐 step 더함
  //   },1000)
  //   console.log(`[3] step(${step})이 바뀌었을 때만 실행됨`);
  // }, [step]);

  // TODO 4. cleanup 실험 (이전 타이머 제거 확인) : 이전 리소스 정리하는 역할
  // useEffect(() => {
  //   // setup
  //   console.log("[4] setup: 타이머 시작됨");

  //   const timer = setInterval(() => {
  //     console.log("현재 시간:", new Date().toLocaleTimeString());
  //   }, 1000);

  //   // cleanup
  //   return () => {
  //     console.log("[4] cleanup: 타이머 정리됨");
  //     clearInterval(timer);
  //   };
  // }, [step]);

  // 카운터 증가
  const handleUp = () => {
    setCount(count + step);
  }

  // 카운터 감소
  const handleDown = () => {
    setCount(count - step);
  }
  
  // 카운터 초기화
  const handleReset = () => {
    setCount(0);
  }

  // 가상 DOM을 계산하는 시점
  console.log('렌더링 중', document.querySelector('span')?.textContent);

  useEffect(() => { // 렌더링 후에만 나오는 useEffect
    console.log('렌더링 후', document.querySelector('span')?.textContent);
  })

  return (
    <div style={{ padding: "1rem", border: "1px solid blue" }}>
      <h1>02 useEffect - PCounter 실습</h1>

      <button onClick={ handleUp }>+ 증가</button>
      <button onClick={ handleDown }>- 감소</button>
      <button onClick={ handleReset }>Reset</button>

      <br />
      <label>
        증감치:
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </label>
      <span>{ count }</span>
    </div>
  );
}

export default Pcounter;
