import RegistForm from "@/app/posts/new/RegistForm";
import { Metadata } from "next";


// seo 접근성을 위해 사용하는 것 -> 서버단에서 실행 되어야 함 
export const metadata: Metadata = {
  title: '게시글 등록',
  description: '게시글 등록 페이지입니다.'
}

export default function NewPage() {

  return (
    <>
      <RegistForm />
    </>
  );
}