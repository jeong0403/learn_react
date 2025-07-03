// 게시물 한 건
export interface Post {
  _id: number;
  title: string;
  content: string;
}

// API 서버의 게시물 상세 조회 응답
export interface PostInfoRes {
  ok: 0 | 1;
  item: Post;
}

// API 서버의 게시물 목록 응답
export interface PostListRes {
  ok: 0 | 1;
  item: Post[];
}