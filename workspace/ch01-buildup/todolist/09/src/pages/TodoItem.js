import Reaction from '../reaction.js';

function TodoItem( {item, toggleDone, deleteItem} ){ // App으로부터 전달받은 toggleDone 사용하기 위해 props에 추가함
  return(
    Reaction.createElement('li', { 'data-num': item.num },
        Reaction.createElement('span', null, item.num),
        // onclick: toggleDone(item.num)을 하면 즉시 실행됨 -> 렌더링 중에도 계속 실행되어 무한루프 발생
        // onclick할 때만 실행됨 -> 함수 실행이 아니라 '함수 등록'으로 바꿔야 무한루프 x
        Reaction.createElement('span', { onclick: () => toggleDone(item.num)},
          item.done ? Reaction.createElement('s', null, item.title) : item.title) ,
        Reaction.createElement('button', { type: 'button', onclick: () => deleteItem(item.num) }, '삭제'))
  );
}

export default TodoItem;