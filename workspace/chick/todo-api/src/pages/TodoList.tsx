import useAxiosInstance from "../hooks/useAxiosInstance";
import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";

interface TodoListPropType {
  itemList: TodoItemType[];
  deleteItem: (_id: number) => void;
  toggleDone: (_id: number) => void;
}


function TodoList({ itemList, deleteItem, toggleDone }: TodoListPropType) {
  
  const axiosInstance = useAxiosInstance();
  
  // 목록을 서버로부터 받아오는 함수
  const fetchList = async () => {
    try {
      const res = await axiosInstance.get('/todolist');
      // fulfilled 상태
      console.log('서버의 응답', res);
      // res는 어떻게 생긴 객체일까? 어떤 모습으로 데이터를 담고 있을까? => 확인용
      // res는 Promise 객체로 반환
      // 1. pending 작업 진행 중 → 로딩 스피너나 스켈레톤 UI 표시
      // 2. fulfilled 작업성공
      // 3. rejected 작업실패
    } catch (err) {
      // rejected 상태
      console.error(err);
    }
  };

  fetchList();

  // 배열의 각 인자들이 콜백 함수의 첫 번째 인자값으로 전달됨 -> itme
  const liList = itemList.map((item) => {
    return(
      // 부모: TodoList -> 자식: TodoItem item을 전달함(하나가 아닌 객체 형태로 넘긴다! = props)
      // 반복 렌더링하는 map을 사용할 때는 key를 꼭 써야 한다.
      <TodoItem key={ item._id } item={ item } deleteItem={ deleteItem } toggleDone={ toggleDone }/>
    );
  });

  return (
    <ul className="todolist">
      { liList }
    </ul>
  );
}
export default TodoList;
