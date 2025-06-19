import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  // console.log(props);
  // props는 부모가 가진 데이터를 전달하는데, 부모쪽에서 관리를 해야 할 경우만 사용하는게 좋다.
  // title로 선언하고 하든지 혹은 하드코딩 해도 되는 부분이기 때문이다.
  // const title = '할 일 목록'

  return(
    <div id="main">
      <h2>할 일 목록</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default Todo;