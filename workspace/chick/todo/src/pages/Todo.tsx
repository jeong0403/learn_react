import { useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  // 샘플 목록
  const sampleItemList = [
    { _id: 1, title: "자바스크립트 공부", done: true },
    { _id: 2, title: "JS 프로젝트", done: true },
    { _id: 3, title: "React 공부", done: false },
  ];

  // DOM API를 이용해서 코드를 복잡하게 하지 않고 화면 리렌더링 하고 싶을 때 useState를 쓴다.
  // useState가 처음으로 호출될 때 itemList 값은 sampleItemList가 된다.
  // useState가 두 번째 또는 그 이상 호출될 때는 itemList 값은 setItemList()에 전달한 newItemList가 된다. (=리렌더링)
  const [ itemList, setItemList ] = useState(sampleItemList);

  // 값이 바뀌어도 리렌더링이 발생하지 않음 (리렌더링 되어도 바뀌지 않는 리스트의 _id 값이 됨)
  // { current: 4 } 리턴
  const nextId = useRef(itemList.length + 1); // 초기값 설정

  // 할 일 삭제
  const deleteItem = (_id: number) => { // _id: 2일 경우 1, 3만 담은 새로운 배열을 반환
    // 어떤 _id 값이 적힌 줄을 하나 삭제한 후의 전체 리스트를 newItemList로 설정
    // ex. _id가 2가 아닌 사람들만 모아서 전체를 새로운 배열로 반환. 즉, true를 반환한 항목만 모아서 배열을 반환!
    const newItemList = itemList.filter((item) => item._id !== _id);
    setItemList(newItemList);
  };

  // 할 일 추가
  const addItem = (title: string) => {
    const newItem = { _id: nextId.current++, title, done: false };
    // 기존 배열을 복사해서 사용해야 함 (참조할 때 주소까지 복사가 되지 않음)
    // 예전 state나 바뀐 state나 동일한 값을 참조하므로 불변성 법칙에 어긋나지 않으니 깊은 복사할 필요가 없다.
    // 새로운 주소를 가진 객체로 만든다.
    setItemList([ ...itemList, newItem ])
  };

  // 완료/미완료 처리
  const toggleDone = (_id: number) => {
    console.log(`${_id} 완료/미완료 처리`);
    
  };

  return(
    <div id="main">
      <h2>할 일 목록</h2>
      <TodoInput addItem={ addItem } />
      <TodoList itemList={ itemList } deleteItem={ deleteItem }/>
    </div>
  );
}

export default Todo;