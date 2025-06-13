import type { TodoItem } from "@pages/TodoItem";

// 타입가드를 미리 추가한 타입 선언 방식
type TodoAction =
  | { type: 'ADD'; value: TodoItem }
  | { type: 'TOGGLE' | 'DELETE'; value: { _id: number } };

// 아래와 같이 타입을 선언하면 switch문에서 타입 가드를 따로 선언해야 할 수도 있음
// interface TodoAction {
//   type: 'ADD' | 'TOGGLE' | 'DELETE';
//   value: TodoItem | { _id: number };
// }


function todoReducer(state: TodoItem[], action: TodoAction) {
  let newState = state;
  // TODO 1. 상태 관리 로직 작성 (과제: todoReducer 완성하기)

  return newState;
}

export default todoReducer;