import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";

interface TodoListPropos {
  itemList: TodoItemType[];
  toggleDone: (num: number) => void;
  deleteItem: (num: number) => void;
}

function TodoList({ itemList, toggleDone, deleteItem }: TodoListPropos) {
  const list = itemList.map((item) => {
    return <TodoItem key = { item.num } item = { item } toggleDone = { toggleDone } deleteItem = { deleteItem } />;
  });
  // JS에서 { list }로 배열 넣어준건데, 어떻게 동작하지? JSX에서 컴포넌트를 풀어서 전달해준다.
  return (
    <ul className="todolist">
      { list }
    </ul>
  );
}

export default TodoList;