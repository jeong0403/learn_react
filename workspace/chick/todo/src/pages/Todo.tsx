function Todo() {
  // console.log(props);
  // props는 부모가 가진 데이터를 전달하는데, 부모쪽에서 관리를 해야 할 경우만 사용하는게 좋다.
  // title로 선언하고 하든지 혹은 하드코딩 해도 되는 부분이기 때문이다.
  // const title = '할 일 목록'

  return(
    <div id="main">
      <h2>할 일 목록</h2>
      {/* 자바스크립트의 예약어로 class가 있으므로, className으로 바꿔서 적어야 함 */}
      <div className="todoinput">
        <input type="text" autoFocus />
        <button type="button">추가</button>
      </div>
      <ul className="todolist">
        <li>
          <span>1</span>
          <span><s>샘플1</s></span>
          <button type="button">삭제</button>
        </li>
        <li>
          <span>2</span>
          <span>샘플2</span>
          <button type="button">삭제</button>
        </li>
        <li>
          <span>3</span>
          <span>샘플3</span>
          <button type="button">삭제</button>
        </li>
      </ul>
    </div>
  );
}

export default Todo;