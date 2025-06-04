import Reaction from '../reaction.js';

// Counter 컴포넌트
function Counter() {
  console.log("\t Counter 호출됨");
  // let count = 0;

  const [count, setCount] = Reaction.useState(0);

  // 카운터 감소
  const handleDown = () => {
    // 데이터 갱신, count 값 감소
    setCount(count - 1);
  };

  // 카운터 증가
  const handleUp = () => {
    // 데이터 갱신, count 값 증가
    // 기존 : count++;에서 자동화하면서 아래 코드로 변경
    setCount(count + 1);
  };

  // 카운터 초기화
  const handleReset = (event) => {
    // 데이터 갱신, count 값 초기화
    setCount(0);
  };

  return Reaction.createElement( "div", { id: "counter" },
    Reaction.createElement( "button", { type: "button", onclick: handleDown }, "-" ), // event 전달할 때 화살표 함수에 감싸야지 handleDown(event) 이렇게 적으면 안 됨!
    Reaction.createElement( "button", { type: "button", onclick: (event) => handleReset(event) }, 0 ),
    Reaction.createElement( "button", { type: "button", onclick: handleUp }, "+" ),
    Reaction.createElement("span", null, count)
  ); // 0에서 count로 변경
}

export default Counter;