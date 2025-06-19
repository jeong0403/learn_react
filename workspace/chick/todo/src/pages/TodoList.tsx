import TodoItem from "./TodoItem";

function TodoList() {
  // 샘플 목록
  const itemList = [
    { _id: 1, title: "자바스크립트 공부", done: true },
    { _id: 2, title: "JS 프로젝트", done: true },
    { _id: 3, title: "React 공부", done: false },
  ];
  // 배열의 각 인자들이 콜백 함수의 첫 번째 인자값으로 전달됨 -> itme
  const liList = itemList.map((item) => {
    return(
      // 부모: TodoList -> 자식: TodoItem item을 전달함(하나가 아닌 객체 형태로 넘긴다! = props)
      // 반복 렌더링하는 map을 사용할 때는 key를 꼭 써야 한다.
      <TodoItem key={ item._id } item={ item } hello="world"/>
    );
  });

  return (
    <ul className="todolist">
      { liList }
    </ul>
  );
}
export default TodoList;
