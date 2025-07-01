import { Metadata } from "next";

export async function generateMetadata({ params } : { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  
  const data = {
    // 템플릿 리터럴 방식 (아래 { id } 적는 것과 차이 발생하는 이유)
    title: `${ id }번 게시물`,
    content: '게시판 이용 수칙입니다.'
  };

  return {
    title: data.title,
    description: data.content,
  };
}

// 이 함수가 반환한 배열만큼 SSG 페이지를 미리 생성
// 빌드하면 .next/server/app/posts/1.html, 2.html, 3.html
export function generateStaticParams() {
  // 공지글에 대한 fetch 작업
  const posts = [
    { id: '1', title: '1번 제목' },
    { id: '2', slug: '2', sid: '3', title: '2번 제목' },
    { id: '3', slug: '2', sid: '3', title: '4번 제목' },
  ];

  return posts;
}

/* export default function InfoPage() {
  return <h1>상세 조회 - 1번 게시물</h1>;
  } */
// Next.js 15 부터 params는 비동기 처리 필요 async await 붙여야함. 그리고 타입을 명확하게 해야 한다.
export default async function InfoPage({ params } : { params: Promise<{ id: string }> }) {
  const pageParams = await params;
  console.log('pageParams', pageParams);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    // JSX 문법
    <h1>상세 조회 - { pageParams.id }번 게시물</h1>
  );
}