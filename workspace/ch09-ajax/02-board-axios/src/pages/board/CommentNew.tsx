import useAxiosInstance from "@/hooks/useAxiosInstance";
import { useState } from "react";

function CommentNew() {

  // 댓글 내용 저장
  const [ content, setContent ] = useState('');

  // axios instance
  const axios = useAxiosInstance();

  // API 서버에 댓글 등록 요청
  // formData의 type으로 FormData를 전달 받음
  const requestAddComment = async (formData: FormData) => {
    try {
      const response = await axios.post('/posts/1/replies', formData);

      // TODO 댓글 등록 후 댓글 목록 갱신(requestCommentList()를 props로 전달 받아서 호출)

    } catch (err) {
      // alert('게시물 상세 조회에 실패했습니다.\n잠시 후 다시 요청하시기 바랍니다.')
    }
  };

  const handleAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO 중복 요청 방지(서버 요청 시작 전에 버튼 비활성화, 서버 응답 완료 후에 버튼 활성화)
    // preventDefault: 브라우저의 기본 동작 취소할 때 사용
    event.preventDefault();
    // 이벤트 버블링 event를 처리하는 건 currentTarget
    const formData = new FormData(event.currentTarget);
    requestAddComment(formData);
  }

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={ handleAddComment }>
        <textarea
          name="content"
          rows={3} cols={30} 
          placeholder="댓글 내용" 
          value={ content }
          onChange={ e => setContent(e.target.value) }
          /><br />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CommentNew;