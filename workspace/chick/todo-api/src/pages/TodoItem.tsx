// 이 객체가 바로 item
export interface TodoItem {
  _id: number;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  item: TodoItem;
  deleteItem: (_id: number) => void;
  toggleDone: (_id: number) => void;
}

// 구조 분해 할당으로 작성하고 이 객체에({ item, deleteItem }) 대한 타입을 정의하기
// 매개변수의 타입을 정의하지 않으면 에러가 발생한다.
function TodoItem({ item, deleteItem, toggleDone }: TodoItemProps) {

  // 어떤 값을 삭제하려고 하는지 삭제하고자 하는 id 값을 넘겨줘야 함
  const handleDelete = (_id: number) => {
    console.log(_id, '삭제 요청.');
    deleteItem(_id);
  };

  return(
    <li>
      <span>{ item._id }</span>
      <span onClick={ () => toggleDone(item._id) }>{ item.done ? <s>{ item.title }</s> : item.title }</span>
      <button type="button" onClick={ () => handleDelete(item._id) }>삭제</button>
    </li>
  );
}

export default TodoItem;