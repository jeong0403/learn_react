import Counter from './components/Counter.js';
import Header from './components/Header.js';
import Reaction from './reaction.js';

// App 컴포넌트(어플리케이션의 시작점)
// 기존 const App으로 변수 형태로 만드는 것 보다 함수로 만드는 게 활용하기 더 좋아서 변경
function App() {
  console.log("\t App 함수 호출됨");
  return (
    Reaction.createElement("div", { id: "app" }, Header, Counter)
  );
}

export default App;