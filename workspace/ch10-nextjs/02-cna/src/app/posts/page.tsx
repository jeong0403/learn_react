'use client';

import { fetchPosts } from "@/data/functions/boardFetch";
import { Post } from "@/types/board";
import Link from "next/link";
import { useEffect, useState } from "react";

// use client에서는 metadata를 export할 수 없음 따라서 주석처리!
// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: '게시물 목록 조회',
//   description: '게시물 목록 조회 페이지입니다.'
// }

export default function ListPage() {
  const [ data, setData ] = useState<Post[] | null>(null);
  
  async function fetchAsyncPosts(){
    const resData = await fetchPosts();
    setData(resData);
  }
  // useEffect 없으면 무한 호출됨
  useEffect(() => {
    fetchAsyncPosts();
  }, []); // 최초 마운트 때 한 번만 호출

  console.log('API 서버로부터 받은 목록 수', data?.length);
  const posts = data?.map(post => <li key={ post._id }><Link href={`/posts/${post._id}`}>{ post._id } - { post.title }</Link></li>);

  return (
    <>
    <h1>목록 조회</h1>
    <ul>
      { posts }
    </ul>
    </>
  );
}