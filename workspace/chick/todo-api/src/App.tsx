import Footer from "./components/Footer";
import Header from "./components/Header";
import Todo from "./pages/Todo";


// App - 부모, Header - 자식
function App(){
  // const title = '할 일 목록';

  return(
    // 태그처럼 보이지만 자바스크립트 코드임
    <div id="todo">
    <Header />
    {/* props */}
    {/* <Todo title={ title }/> */}
    <Todo />
    <Footer />
  </div>
  );
}

export default App;