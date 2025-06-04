import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Todo from './pages/Todo.js';
import Reaction from './reaction.js';

function App(){
  // 샘플 목록
  const initItemList = [
    { num: 1, title: "자바스크립트 공부", done: true },
    { num: 2, title: "JS 프로젝트", done: true },
    { num: 3, title: "React 공부", done: false },
  ];

  const [itemList, setItemList] = Reaction.useState(initItemList);

  let lastNum = itemList.length;

  // 할일 추가
  function addItem(title){
  console.log('할일 추가');
  const item = { num: itemList[itemList.length-1]?.num + 1 || 1, title, done: false };
  // newItemList.push(item);
  // setItemList(newItemList);
  setItemList([...itemList, item]);
}

  // 완료/미완료 처리
  function toggleDone(num){
  console.log(num, '완료/미완료');
  const newItemList = itemList.map(item => item.num === num ? { ...item, done: !item.done } : item);
  // const newItemList = itemList.map( item =>{ return item.num === num ? { ...item, done:!item.done } : item })
  setItemList(newItemList);
}

  // 할일 삭제
  function deleteItem(num){
  console.log(num, '할일 삭제');
  // filter: 콜백 함수가 true를 return하는 경우만 반환함
  const newItemList = itemList.filter(item => item.num !== num );
  setItemList(newItemList);
}

  return (
    Reaction.createElement('div', { id: 'todo' },
      Header,
      // 낱개로 나열해서 전달하는 것보다는 객체로 묶어서 보내는게 좋다! 객체로 묶지 않으면 이 안에서 순서가 바뀔 때 일일이 todo 호출하거나 사용할때마다 바꿔야 함
      Todo({ itemList, addItem, toggleDone, deleteItem }),
      Footer
    )
  );
}

export default App;