import { countAtom, countDownAtom } from '@/jotai/atoms';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  // useState처럼 getter, setter 모두 사용(구독)
  // const [ count, setCount ] = useAtom(countAtom);
  // const countUp = (step: number) => {
  //   setCount(count + step);
  // };

  // setter만 사용(구독하지 않음) -> 리렌더링 발생하지 않도록
  const setCount = useSetAtom(countAtom);
  const countUp = (step: number) => {
    setCount((count) => count + step ); // 이전 상태값(prevState) 을 인자로 받아 정확하게 새로운 값을 계산
  }

  // 쓰기 전용 atom (로직을 atom에 정의)
  const countDown = useSetAtom(countDownAtom);

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => countDown(1) }>-1</button>
      <button onClick={ () => countUp(1) }>+1</button>
    </div>
  );
}

export default Right3;