import { useState } from "react";

function PApp() {
  // TODO: 메세지를 입력하면 입력 메세지에 반영되도록 수정
  const [msg, setMsg] = useState("");
  console.log("PApp 렌더링!");
  return (
    <>
      <h1>01 useState - 입력 상태 관리 연습</h1>
        {/* TODO: input 요소에 상태 연결
          - value에는 상태(msg)를 넣고
          - onChange에서는 setMsg를 사용해 상태를 업데이트합니다 */}
        <input
          type="text"
          value={msg}
          onChange={(e) => {setMsg(e.target.value)}}
        />
        <br />
        <br />
        {/* TODO: msg 상태를 화면에 출력하세요 */}
        <span>입력된 메시지: {msg} </span>
    </>
  );
  
}

export default PApp;
