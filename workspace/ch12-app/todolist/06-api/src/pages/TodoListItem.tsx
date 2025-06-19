import type { TodoItem } from "@pages/TodoInfo";
import { Link } from "react-router"

interface TodoListItemProps {
  item: TodoItem;
  handleDelete: (_id: number) => void;
}

function TodoListItem({ item, handleDelete }:TodoListItemProps) {
  return (
    <li>
      <span>{ item._id }</span>
      <Link to={`/todolist/${ item._id }`}>{ item.done ? <s>{ item.title }</s> : item.title }</Link>
      {/* 삭제하면 todolist 리렌더링 되도록 해야 함 */}
      <button type="button" onClick={ () => handleDelete(item._id) }>삭제</button>
    </li>
  );
}

export default TodoListItem;