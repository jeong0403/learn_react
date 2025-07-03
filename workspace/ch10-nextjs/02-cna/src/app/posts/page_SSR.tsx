// SSR 서버사이드렌더링
import { fetchPosts } from "@/data/functions/boardFetch";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: '게시물 목록 조회',
  description: '게시물 목록 조회 페이지입니다.'
}

export default async function ListPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await fetchPosts();
  console.log('API 서버로부터 받은 목록 수', data.length);
  // post.id하면 타입 에러 발생함 -> board.ts에서 _id로 정의했음
  const posts = data.map(post => <li key={ post._id }><Link href={`/posts/${post._id}`}>{ post._id } - { post.title }</Link></li>);

  return (
    <>
    <h1>목록 조회</h1>
    <ul>
      { posts }
    </ul>
    </>
  );
}