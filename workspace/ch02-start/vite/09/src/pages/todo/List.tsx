import type { TodoItem } from "../../App";

interface TodoListProps {
  list: TodoItem[]
}

// Todo 목록을 전달받아서 출력해야 함
// ts는 배열의 매개변수는 기본적으로 타입을 선언하게 되어 있음
function TodoList({ list }: TodoListProps) {
  // li를 만들 때의 전형적인 작성 방식
  const itemList = list.map(item => {
    return <li key={ item._id } > { item.title } - { item.done ? '완료' : '진행중' }</li>
  });
  return (
    <ul className="todolist">
      { itemList }
    </ul>
  );
}
export default TodoList;
