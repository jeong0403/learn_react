import Counter from "@components/Counter";
import Header from "@components/Header";
import Pcounter from "@components/Pcounter";
import PcounterProps from "@components/PcounterProps";


function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Counter>100</Counter> */}
      <Pcounter />
      {/* 부모(App)으로부터 속성값(props) step={5}를 받음 */}
      <PcounterProps step={5}/>
    </>
  );  
}

export default App
