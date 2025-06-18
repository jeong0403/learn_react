import { useEffect } from "react";
import { Link, Outlet, useMatch, useParams } from "react-router";

export interface TodoItem {
  _id: number;
  title: string;
  content?: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

const item = {
  _id: 2,
  title: '자바스크립트 복습',
  content: '리액트도 당연히 복습.',
  done: false,
  createdAt: '2025.06.17 16:49:00',
  updatedAt: '2025.06.17 16:49:00',
};

function TodoInfo() {

  // useParams:  "/list/:_id" 정의된 path 값이 있을 때
  // 주소창의 값이 "/list/3"일 경우 useParams()가 리턴하는 값: { _id: 3 }
  const { _id } = useParams();
  
  console.log(useParams());

  // 몰라도  지장 없는 부분
  const infoMatch = useMatch('/todolist/:_id');

  // sideeffect(부수효과) 생기지 않도록 최초 한 번 호출
  useEffect(() => {
    // TODO API 서버와 통신해서 item 받아오기

  }, []);

  return (
      <div id="main">
        <h2>할일 상세 보기</h2>
        <div className="todo">
          <div>제목 : { item.title }</div>
          <div>내용 : { item.content }</div>
          <div>상태 : { item.done ? '완료' : '미완료' }</div>
          <div>작성일 : { item.createdAt }</div>
          <div>수정일 : { item.updatedAt }</div>

          { infoMatch &&
            <>
            <Link to={`/todolist/${ _id }/edit`}>수정</Link>
            <Link to="/todolist">목록</Link>  
            </>
          }

        </div>

        {/* Outlet의 context를 사용한다 -> TodoEdit과 연관 */}
        {/* Outelet에는 본래 context라는 속성만 있다. 여기에 item 속성을 가진 객체로 넘긴다.  */}
        <Outlet context={{item}}/>
      </div>
  );
}

export default TodoInfo;
