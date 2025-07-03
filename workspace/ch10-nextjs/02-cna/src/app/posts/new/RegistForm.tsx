'use client';

import { createPost } from "@/data/actions/boardAction";
import { useActionState } from "react";

export default function RegistForm() {

  const [ state, formAction, isPending ] = useActionState(createPost, null);

  console.log('isPending state', isPending, state);
  return (
    <>
    <h1>게시글 등록</h1>
    <form action={formAction}>
      <input type="text" name="title" />
      <input type="text" name="content" />
      <button>등록</button>
    </form>
    </>
  );
}