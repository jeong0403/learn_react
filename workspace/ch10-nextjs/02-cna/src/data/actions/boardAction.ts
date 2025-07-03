'use server'; // 서버 액션 (서버 함수랑 다름 - 2024.09에 바뀜 .. 서버 함수 안에 서버 액션이 들어가는거긴 함)
import { PostInfoRes } from "@/types/board";

// 게시글 등록
export async function createPost(prevState: PostInfoRes, formData: FormData){
  const title = formData.get('title');
  const content = formData.get('content');
  const body = { title, content, type: 'qna'};
  console.log(body);
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`, {
    method: 'POST',
    body: JSON.stringify({ title, content, type: 'qna' }),
    headers: {
      'Client-Id': 'openmarket',
      'Content-Type': 'application/json',
    }
  });

  const data = await res.json();
  return data;
}