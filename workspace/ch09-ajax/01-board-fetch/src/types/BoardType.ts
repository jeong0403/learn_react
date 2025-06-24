export interface BoardInfoType {
  _id: number;
  title: string;
  content: string;
  // replies 값이 없는 경우도 고려 필요
  replies: ReplyType[];
}

export interface ReplyType {
  _id: number;
  content: string;
}