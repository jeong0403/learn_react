import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { Link, Outlet, useMatch, useParams } from "react-router";

export interface TodoItem {
  _id: number;
  title: string;
  content?: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

function TodoInfo() {

  const axiosInstance = useAxiosInstance();

  // useParams:  "/list/:_id" 정의된 path 값이 있을 때
  // 주소창의 값이 "/list/3"일 경우 useParams()가 리턴하는 값: { _id: 3 }
  const { _id } = useParams();
  
  console.log(useParams());

  // 몰라도  지장 없는 부분
  const infoMatch = useMatch('/todolist/:_id');

  const [ data, setData ] = useState<TodoItem | null>(null);

  const fetchTodoInfo = async () => {
    console.log('API 서버에 상세 정보 요청');
    // API 서버에 상세 정보 요청
    try{
      const res = await axiosInstance.get<{ item: TodoItem }>(`/todolist/${_id}`);
      setData(res.data.item);
    }catch(err){
      console.error(err);
      alert('할 일 조회에 실패했습니다.')
    }
  
  }

  useEffect(() => {
    fetchTodoInfo();
  }, []); // 빈 배열을 전달해서 마운트시에만 실행

  return (
      <div id="main">
        <h2>할일 상세 보기</h2>
        {/* data있을 때만 노출 되도록 조건부 렌더링 */}
        { data && 
          <>
        <div className="todo">
          <div>제목 : { data.title }</div>
          <div>내용 : { data.content }</div>
          <div>상태 : { data.done ? '완료' : '미완료' }</div>
          <div>작성일 : { data.createdAt }</div>
          <div>수정일 : { data.updatedAt }</div>

          { infoMatch &&
            <>
            <Link to={`/todolist/${ _id }/edit`}>수정</Link>
            <Link to="/todolist">목록</Link>  
            </>
          }

        </div>
        {/* Outlet의 context를 사용한다 -> TodoEdit과 연관 */}
        {/* Outelet에는 본래 context라는 속성만 있다. 여기에 item 속성을 가진 객체로 넘긴다.  */}
        <Outlet context={{item: data}}/>
          </>
        }
      </div>
  );
}

export default TodoInfo;
