import type { TodoItem } from "@pages/TodoInfo";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

function TodoAdd() {
  // React Compiler의 기능을 사용하지 않겠다는 선언(reset()이 제대로 동작하지 않음)
  'use no memo'

  const axiosInstance = useAxiosInstance();
  // const navigate = useNavigate();

  // TODO 과제 : 리셋 안 되는 문제 해결하기
  const { register, handleSubmit, reset , setFocus ,formState: { errors } } = useForm<TodoItem>();

  const addTodo = async (formData: TodoItem) => {
    console.log('API 서버에 등록 요청', formData);
    // TODO API 서버에 등록 요청
    try{
      await axiosInstance.post('/todolist', formData);

      alert('할일이 등록 되었습니다.');
      reset();
      setFocus('title');
    }catch(err){
      console.error(err);
      alert('할일 등록에 실패했습니다.');
    }
    // navigate(`/list`);
  };

  return (
      <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        <form onSubmit={ handleSubmit(addTodo) }>
          <label htmlFor="title">제목 :</label>
          <input 
            type="text" 
            id="title" 
            autoFocus 
            // 사용자 입력을 필요로 하는 곳에는 검증이 동반 되어야 한다.
            { ...register('title', { 
              required: '제목을 입력하세요.🚨',
              pattern: {
                value: /\S/,
                message: '제목에 공백만 입력할 수 없습니다.'
              }
            })}/>
            <div className="input-error">{ errors.title?.message }</div>
          <br />
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
            ></textarea>
            <div className="input-error">{ errors.content?.message }</div>
          <br />
          <button type="submit">추가</button>
          <Link to="/todolist">취소</Link>
        </form>
      </div>
    </div>
  );
}

export default TodoAdd;