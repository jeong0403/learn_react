import { createContext } from "react";

interface CounterContextType {
  count: number;
  countUp: (step: number) => void;
}

// 1. Context 생성 -> 초기값만 작성한 상황
export const CounterContext = createContext<CounterContextType>({
  count: 5,
  // 타입 에러 발생하지 말라고 countUp 껍데기만 넣은 거임
  countUp: () => {
    console.log('초기화만 되었음. 실제 함수 지정 안 됨.');
  }
})