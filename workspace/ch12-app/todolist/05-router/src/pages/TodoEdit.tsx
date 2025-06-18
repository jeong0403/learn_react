import type { TodoItem } from "@pages/TodoInfo";
import { Link, useNavigate, useOutletContext } from "react-router";

interface OutletContextProps {
  item: TodoItem;
}

function TodoEdit() {
  // 훅은 탑레벨에서만 선언해야 함 -> 컴포넌트 바로 밑! (탑레벨이 코드 제일 위가 아님 return 바로 위에 써도 되기 때문)
  // 자바스크립트 코드 상에서 페이지 이동시키고 싶을 때 사용 = useNavigate
  const navigate = useNavigate();

  // TodoInfo에서 받아 온 Outlet의 item을 사용한다.
  const { item } = useOutletContext<OutletContextProps>();
  
  const updateTodo = (event: React.FormEvent) => {
    // 실제 submit하면 안 되니까 막기
    event.preventDefault();
    // TODO API 서버에 수정 요청 (나중에 할 일)
    
    alert('할 일이 수정 되었습니다.');
    
    // 상세 보기로 이동
    // navigate(-1); // -1은 히스토리에서 뒤로가기 효과 window.history.go(-1)
    navigate(`/todolist/${item._id}`); // 상대 경로로 하지 않으면 현재 주소 뒤에 수정되는 주소를 더 붙여버리므로 오류난 페이지로 감
  }

  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={ updateTodo }>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" defaultValue={ item.title } autoFocus />
          <br/>
          <label htmlFor="content">내용 :</label>
          {/* defaultvalue나 value로 작성하지 않으면 콘솔에 에러남 */}
          <textarea id="content" cols={23} rows={5} defaultValue={ item.content }/> 
          <br/>
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" defaultChecked={ item.done } />
          <br/>
          <button type="submit">수정</button>
          <Link to={`/todolist/${ item._id }`}>취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;