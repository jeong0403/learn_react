import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import type { TodoItem } from "./TodoItem";

function Todo() {
  // TodoInput이 addItem()를 써야 한다. 이후 목록에 추가까지 되어야 한다.
  // addItem을 누가 가지고 있냐? Todo가 가지고 있음. 따라서 부모인 Todo가 TodoInput에 전달하는 방식으로 진행하려고 App내에 있는 코드 전체를 옮겨 왔음.
  // 샘플 목록
  const initItemList: TodoItem[] = [
    { num: 1, title: "자바스크립트 공부", done: true },
    { num: 2, title: "JS 프로젝트", done: true },
    { num: 3, title: "React 공부", done: false },
  ];

  // 상태로 관리
  // 상태가 수정 되면 화면이 리렌더링되는 리액트
  const [itemList, setItemList] = React.useState(initItemList);

  // 할일 추가
  function addItem(title: string) {
    console.log("할일 추가");
    // 데이터 갱신, itemList에 item 추가
    // num, title, done 속성을 가진 item 객체 생성
    const item: TodoItem = { num: itemList[itemList.length-1]?.num + 1 || 1, title, done: false};
    // 객체의 불변성을 유지하기 위한 코드 ...itemList(기존 배열), item(추가한 배열)
    setItemList([ ...itemList, item ]);
    // 대신 위 코드로 변경
    // itemList.push(item);
    // 상태가 변경된 것을 적용하기 위해 setItemList에 itemList를 얕은 복사함
    // setItemList([ ...itemList] );
  }

  // 완료/미완료 처리
  function toggleDone(num: number) {
    console.log(num, "완료/미완료");
    // 데이터 갱신, itemList에서 num에 해당하는 item의 done 값을 수정
    // 객체의 불변성을 위해서 객체를 새롭게 추가하는 JSON 표기법 사용함 (??)
    // { ...item, done: !item.done } true일 때 나오는 이 값이 기존 객체는 복사하고 새로운 객체를 추가하는 형태인 것 (얕은 복사 아님)
    const newItemList = itemList.map(item => item.num === num ? { ...item, done: !item.done } : item );
    setItemList(newItemList);
    // const selectedItem = itemList.find((item) => item.num === num);
    // // item의 done 값을 수정
    // selectedItem.done = !selectedItem.done;
    // setItemList([ ...itemList ]);
  }

  // 할일 삭제
  function deleteItem(num: number) {
    console.log(num, "할일 삭제");
    // 데이터 갱신, itemList에서 num에 해당하는 item 삭제
    const newItemList = itemList.filter(item => item.num !== num);
    setItemList(newItemList);
    // const index = itemList.findIndex((item) => item.num === num);
    // // 달라야 리렌더링하는 것을 기억할 것
    // // 원본 배열에 있는 값을 제거하거나 추가하는 것이라 상태가 바뀌지 않았다고 react가 인식하므로 변경 필요
    // itemList.splice(index, 1);
    // setItemList(itemList);
  }

  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem = { addItem } />
            <TodoList itemList = { itemList } toggleDone = { toggleDone } deleteItem = { deleteItem } />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;