// 목록 보는 화면
import type { TodoListRes } from "#types/todo";
import useAxios from "@hooks/useAxios";

function TodoList() {
  // 함수 호출할 때 데이터 타입을 제네릭 형태로 넘겨주면 하단에서 타입 단언 하지 않아도 됨
  const { isLoading, error, data } = useAxios<TodoListRes>({ url: "/todolist?delay=1000" })
  // const { isLoading, error, data } = useAxios<TodoListRes>({ url: "/todolist?delay=1000" });
  console.log("App랜더링", isLoading, error, data);
  return (
    <>
      <h1>10 customHook - useFatch, useAxios 커스텀 훅 사용</h1>
      <h2>할일 목록</h2>

      {/* 로딩중일 때 로딩중 메시지 표시 */}
      {isLoading && <p>로딩중...</p>}

      {/* 에러가 있을 경우 빨간색으로 에러 메시지 표시 */}
      {error && <p style={{ color: "red" }}>{error.message}</p>}

      {/* Todo 목록을 리스트로 렌더링 */}
      <ul>
        {/* 보간법 안에서 if문 사용 못함 -> 타입가드 쓸 수 없는 상황(서버에서 어떤 타입을 줄지 정확히 모를 때 사용) */}
        {/* 명확하게 난 어떤 데이터가 넘어올지 알기 때문에 타입 단언을 진행하면 됨 */}
        {data?.items.map((item) => (
          <li key={item._id}><a href={`/todolist/${item._id}`}>{item.title}</a></li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;