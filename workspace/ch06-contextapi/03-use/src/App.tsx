import { useEffect } from 'react';
import Left1 from '@/components/Left1';
import Right1 from '@/components/Right1';
import './App.css';
import { CounterProvider } from '@/contexts/CounterContext';

function App() {

  useEffect(()=>{
    console.log('# App 렌더링.');
  });

  return (
    <>
      <h1>03 Context API - use 훅</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
          {/* 2번 예제에서는 CounterContext로 감쌌었음 */}
          <CounterProvider>
            <Left1 />
            <Right1 />
          </CounterProvider>
        </div>
      </div>
    </>
  );
}

export default App;