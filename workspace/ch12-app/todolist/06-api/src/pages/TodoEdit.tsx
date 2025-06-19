import useAxiosInstance from "@hooks/useAxiosInstance";
import type { TodoItem } from "@pages/TodoInfo";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useOutletContext } from "react-router";

interface OutletContextProps {
  item: TodoItem;
}

function TodoEdit() {

  const axiosInstance = useAxiosInstance();

  // 훅은 탑레벨에서만 선언해야 함 -> 컴포넌트 바로 밑! (탑레벨이 코드 제일 위가 아님 return 바로 위에 써도 되기 때문)
  // 자바스크립트 코드 상에서 페이지 이동시키고 싶을 때 사용 = useNavigate
  const navigate = useNavigate();

  // TodoInfo에서 받아 온 Outlet의 item을 사용한다.
  const { item } = useOutletContext<OutletContextProps>();

  const { register, handleSubmit, formState: { errors } } = useForm<TodoItem>({
    defaultValues: {
      title: item.title,
      content: item.content,
      done: item.done,
    }
  })

  // form이 검증을 완료하고 호출되는 함수
  const updateTodo = async (formData: TodoItem) => {
    console.log('API 서버에 수정 요청', formData);
    try {
      // TODO API 서버에 수정 요청
      await axiosInstance.patch(`/todolist/${item._id}`, formData);

      alert('할 일이 수정 되었습니다.');
      
      // 상세 보기로 이동
      // navigate(-1); // -1은 히스토리에서 뒤로가기 효과 window.history.go(-1)
      navigate(`/todolist/${item._id}`); // 상대 경로로 하지 않으면 현재 주소 뒤에 수정되는 주소를 더 붙여버리므로 오류난 페이지로 감
    } catch (err) {
      console.error(err);
      alert('할 일 수정에 실패했습니다.')
    }
  }

  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={handleSubmit(updateTodo) }>
          {/* 제목 */}
          <label htmlFor="title">제목 :</label>
          <input 
            type="text" 
            id="title"
            // register: React Hook Form에서 제공하는 메서드로 form에 input 요소 등록할 때 필수로 써야 함
            // 해당 input의 값을 추적, 유효성 검사, 제출 시 함께 form 데이터 모아 전달
            // register를 명시적으로 작성 -> 여기서 title이라는 이름으로 필드 등록한 상태
            // 정확히는 폼 요소를 직접 제어x, ref를 통해 폼 요소 추적
            { ...register('title', { 
              required: '제목을 입력하세요.🚨',
              pattern: {
                value: /\S/,
                message: '제목에 공백만 입력할 수 없습니다.'
              }
            })}  
          />
          <div className="input-error">{ errors.title?.message }</div>
          <br/>
          {/* 내용 */}
          <label htmlFor="content">내용 :</label>
          <textarea
            id="content" cols={23} rows={5}
            { ...register('content', {
              required: '내용을 입력하세요.🚨',
              pattern: {
                value: /\S/,
                message: '내용에 공백만 입력할 수 없습니다.'
              }
            })}
            />
          <div className="input-error">{ errors.content?.message }</div>
          <br/>
          <label htmlFor="done">완료 :</label>
          <input 
            type="checkbox" 
            id="done" 
            { ...register('done')} />
          <br/>
          <button type="submit">수정</button>
          <Link to={`/todolist/${ item._id }`}>취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;