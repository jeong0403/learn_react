import React from "react";

export interface TodoItem {
  _id: number;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  item: TodoItem;
  toggleDone: (_id: number) => void;
  deleteItem: (_id: number) => void;
}

// TODO 2. 컴포넌트 메모이제이션

function TodoItem({ item, toggleDone, deleteItem }: TodoItemProps){
  console.log('\t\t\t\tTodoItem 렌더링', item);
  return (
    <li>
      <span>{ item._id }</span>
      <span onClick= { () => toggleDone(item._id) }>{ item.done ? <s>{ item.title }</s> : item.title }</span>
      <button type="button" onClick={ () => deleteItem(item._id) }>삭제</button>
    </li>
  );
}

// 리엑트의 메모이제이션하는 기능 : 컴포넌트를 memoize한 후 리렌더링 될 때 props가 변경되지 않으면 memoize된 컴포넌트를 반환(컴포넌트 전용의 메모이제이션 함수라고 생각하면 됨)
// export default TodoItem;
export default React.memo(TodoItem);