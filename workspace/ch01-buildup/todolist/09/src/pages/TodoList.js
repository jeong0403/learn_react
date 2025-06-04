import TodoItem from './TodoItem.js';
import Reaction from '../reaction.js';

function TodoList({ itemList, toggleDone, deleteItem }){ // 구조 분해 할당으로 itemList를 선언
  const items = itemList.map( item => TodoItem({ item, toggleDone, deleteItem })); // 콜백 함수 모아서 배열로 반환하는 mpa함수
  return(
    Reaction.createElement('ul', { class: 'todolist' }, items) // createElement의 자식으로 items 배열로 전달
  );
}

export default TodoList;