import Button from "@components/Button";
import useCounter from "@hooks/useCounter";

interface CounterProps {
  children: string;
}

// Counter 컴포넌트
function Counter({ children = "1" }: CounterProps) {
  console.log("\tCounter 호출됨");

  const initCount = Number(children);
  const { count, stepRef, down, up, reset } = useCounter(initCount);

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input
        id="step"
        type="number"
        // defaultValue로 하지 않고 그냥 value로 하면 비제어 컴포넌트가 되지 않아서 리렌더링이 되지 않는다.
        // 증감치의 값은 이미 바뀐 상태지만 리렌더링 되지 않아서 숫자가 올라가지 않고 버튼을 아무거나 클릭하면 리렌더링 되면서 바뀐 숫자가 반영된다.
        defaultValue={stepRef.current}
        onChange={(event) => (stepRef.current = Number(event.target.value))}
      />
      <Button color="red" onClick={down}>
        -_-
      </Button>
      <Button type="reset" onClick={reset}>
        0_0
      </Button>
      <Button type="submit" color="blue" onClick={up}>
        +_+
      </Button>
      <span>{count}</span>
    </div>
  );
}
export default Counter;