import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";

interface TodoListPropType {
  itemList: TodoItemType[];
  deleteItem: (_id: number) => void,
}


function TodoList({ itemList, deleteItem }: TodoListPropType) {

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
