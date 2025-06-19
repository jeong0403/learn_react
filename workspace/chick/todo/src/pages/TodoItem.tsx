
// 이 객체가 바로 item
interface TodoItem {
  _id: number;
  title: string;
  done: boolean;
}


interface TodoItemProps {
  item: TodoItem;
  hello: string;
}

// 매개변수의 타입을 정의하지 않으면 에러가 발생한다.
function TodoItem({item}: TodoItemProps) {

  // 어떤 값을 삭제하려고 하는지 삭제하고자 하는 id 값을 넘겨줘야 함
  const handleDelete = (_id: number) => {
    console.log(_id, '삭제 요청.');
  };

  return(
    <li>
        {/* itemList에 있는 값들로 바꿔줌(기존에 하드코딩 된 값을 배열의 있는 값으로 바꿈) */}
        <span>{ item._id }</span>
        <span>
          <s>{ item.title }</s>
        </span>
        <button type="button" onClick={ (event) => handleDelete(item._id) }>삭제</button>
      </li>
  );
}

export default TodoItem;