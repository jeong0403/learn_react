function TodoInput() {
  return(
    <>
    {/* 자바스크립트의 예약어로 class가 있으므로, className으로 바꿔서 적어야 함 */}
      <div className="todoinput">
        <input type="text" autoFocus />
        <button type="button">추가</button>
      </div>
    </>
  );
}

export default TodoInput;