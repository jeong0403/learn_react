import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
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

  // 할 일 삭제
  const deleteItem = (_id: number) => { // _id: 2일 경우 1, 3만 담은 새로운 배열을 반환
    // 어떤 _id 값이 적힌 줄을 하나 삭제한 후의 전체 리스트를 newItemList로 설정
    // ex. _id가 2가 아닌 사람들만 모아서 전체를 새로운 배열로 반환. 즉, true를 반환한 항목만 모아서 배열을 반환!
    const newItemList = itemList.filter((item) => item._id !== _id);
    setItemList(newItemList);
  };

  // 배열의 각 인자들이 콜백 함수의 첫 번째 인자값으로 전달됨 -> itme
  const liList = itemList.map((item) => {
    return(
      // 부모: TodoList -> 자식: TodoItem item을 전달함(하나가 아닌 객체 형태로 넘긴다! = props)
      // 반복 렌더링하는 map을 사용할 때는 key를 꼭 써야 한다.
      <TodoItem key={ item._id } item={ item } deleteItem={ deleteItem }/>
    );
  });

  return (
    <ul className="todolist">
      { liList }
    </ul>
  );
}
export default TodoList;
