import type { TodoItem } from "@pages/TodoItem";
import { produce } from "immer";
// 타입가드를 미리 추가한 타입 선언 방식
// type TodoAction =
//   | { type: 'ADD'; value: TodoItem }
//   | { type: 'TOGGLE' | 'DELETE'; value: { _id: number } };

// 아래와 같이 타입을 선언하면 switch문에서 타입 가드를 따로 선언해야 함
interface TodoAction {
  type: 'ADD' | 'TOGGLE' | 'DELETE';
  value: TodoItem | { _id: number };
}


function todoReducer(state: TodoItem[], action: TodoAction) {
  let newState = state;
  // TODO 1. 상태 관리 로직 작성 (과제: todoReducer 완성하기)

  const targetIndex = state.findIndex(item => item._id === action.value._id);

  switch(action.type){
    case 'ADD':
      newState = produce(state, draft => { 
        draft.push(action.value as TodoItem) }); // 타입 단언 사용하면 interfact 사용했을 때 생기는 타입 에러 없어짐
        // if('title' in action.value) { // 타입 가드 -> 위에서 타이틀에 나오는 건
        //   draft.push(action.value);
        // }
      break;
    case 'TOGGLE':
      // immer가 내부적으로 값을 비교해서 관련된 것들을 교체하는 작업을 함
      // immer를 사용하면 객체 불변성을 보장 받을 수 있다
      newState = produce(state, draft => { 
      draft[targetIndex].done = !draft[targetIndex].done});
      break;
    case 'DELETE':
      newState = produce(state, draft => {
        draft.splice(targetIndex, 1);
      });
      break;
  }

  return newState;
}

export default todoReducer;