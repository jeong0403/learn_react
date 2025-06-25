import CommentNew from "@/pages/board/CommentNew";
import type { ReplyType } from "@/types/BoardType";
import { useEffect, useState } from "react";

function CommentList() {

  // 서버에 데이터를 저장할 상태
  // data에 서버로부터 응답 받은 데이터 넣음
  const [ data, setData ] = useState<ReplyType[] | null>(null);

  // 로딩 상태
  const [ isLoading, setIsLoading ] = useState(false);

  // 에러 상태
  const [ error, setError ] = useState<Error | null>(null);

  // API 서버에 1번 게시물의 댓글 목록을 fetch() 요청으로 보낸다.
  const requestCommentList = async () => {
    try {
      // 로딩 상태를 true로 지정
      setIsLoading(true);

      // fetch는 promise를 반환하므로 async와 await을 붙이면 동기함수처럼 편하게 사용할 수 있다.
      // 주소 수정 (기존: 상세 목록 조회 -> 댓글 목록 조회)
      const response = await fetch('https://fesp-api.koyeb.app/market/posts/1/replies?page=1&limit=5&delay=1000', {
        // header -> name-vale쌍인 객체 형태
        headers: {
          'Client-Id': 'openmarket'
        }
      });
      console.log('response', response);
      const jsonData = await response.json();
      console.log('jsonData', jsonData);
      if(jsonData.ok) { // 응답이 성공일 경우
        // 댓글 목록 출력
        // item -> 서버로부터 전달 받은 데이터
        setData(jsonData.item);
        setError(null);
      }else { // 응답이 실패일 경우
        // 에러 메시지 출력
        // try 블럭 안에서 에러 던지면 try 블럭 내에서 catch한다!
        throw new Error(jsonData.message);
      }
    } catch (err) {
      setError(err as Error);
      // 에러메시지와 데이터 메시지 동시에 출력 되는 경우가 발생할 수 있으니 해당 데이터를 일단 null처리한다.
      setData(null);
      // alert('네트워크 문제로 인해 게시물 상세 조회에 실패했습니다.\n잠시 후 다시 요청하시기 바랍니다.')
      console.error(err);
    } finally {
      // 성공, 실패와 상관 없이 로딩 상태를 false로 지정
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestCommentList();
  }, []); // 마운트 후에 한 번만 실행

  const replyList = data?.map(reply => <li key={ reply._id }>{ reply.content }</li>);

  /* // JSX는 switch문 사용할 수 없으니깐 return 위에서 변수에 담아서 진행 가능
  let content = null;
  if(isLoading) {
    content = <p>댓글 로딩중...</p>
  } else if(error) {
    content = <p>{ error.message }</p>
  } else if(data) {
    content =
    <>
      <ul>
        { replyList }
      </ul>
      <CommentList />
      </>;
  }
  */

  return (
    <>
      <h3>댓글 목록</h3>
      { isLoading && <p>댓글 로딩중...</p>}
      { error && <p>{ error.message }</p>}
      { data && 
        <>
          <ul>
            { replyList }
          </ul>
          <CommentNew />
        </>
      }
    </>
  );
}

export default CommentList;