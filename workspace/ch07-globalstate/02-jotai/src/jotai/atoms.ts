import { atom } from 'jotai';

// Read & Write atom
export const countAtom = atom(6); // 상태 하나를 정의

// Read-only atom
// const countAtom = atom(6);

// export const getCountAtom = atom(
//   (get) => get(countAtom), // Read 함수 
//   // () => {}, // Write 함수를 지정하지 않으면 읽기 전용
// ); // 상태 하나를 정의

// Write only atom
export const countDownAtom = atom(
  null, // Read 함수 - null일 경우 "읽기 불가능"을 의미
  (get, set, step: number) => {
    const count = get(countAtom); // get을 통해서 count atom 읽어와라
    set(countAtom, count - step); // set을 통해서 countAtom의 값을 step만큼 줄여라
  } // Write 함수
);