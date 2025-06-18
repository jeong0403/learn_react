import TodoInfo from "@pages/TodoInfo";
import TodoList from "@pages/TodoList";

function App() {

  const todoId = location.pathname.split('/').pop(); // 5


  return(
    <>
    {/* todoId가 있으면 todoinfo를 보여주고 없으면 todolist 보여주기 */}
    { todoId && <TodoInfo />}
    { !todoId && <TodoList />}
    </>
  )
}

export default App;