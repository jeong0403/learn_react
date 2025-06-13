import Button from "@components/Button";
import counterReducer from "../CounterReducer";
import { useReducer, useState } from "react";

interface CounterProps {
  children: string;
}

// Counter 컴포넌트
function Counter({ children='0' }: CounterProps){
  console.log('\tCounter 호출됨');

  const initCount = Number(children);

  // const [ count, setCount ] = useState(initCount);
  // counterReducer: 이 코드 내에서 상태를 모두 관리함
  // useState를 사용하지 않고, hook 사용 (counterReducer에 useReducer 넘겨줌)
  const [ count, countDispatch ] = useReducer(counterReducer, initCount);
  const [ step, setStep ] = useState(1);

  // 증감값 변경 처리
  function handleStepChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newStep = Number(e.target.value);
    setStep(newStep);
  }

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input 
        id="step" 
        type="number" 
        value={ step } 
        onChange={ handleStepChange } 
        />
        {/* counterReducer에게 증가, 감소, 초기화를 위임하는 상황 */}
      <Button color="red" onClick={ () => countDispatch({ type: 'DOWN', value: step}) }>-_-</Button>
      <Button type="reset" onClick={ () => countDispatch({ type: 'RESET', value: step}) }>0_0</Button>
      <Button type="submit" color="blue" onClick={ () => countDispatch({ type: 'UP', value: step}) }>+_+</Button>
      <span>{ count }</span>
    </div>
  );
}
export default Counter;