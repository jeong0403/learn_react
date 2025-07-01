import axios from 'axios';

export default function useAxiosInstance() {
  const instance = axios.create({
    baseURL: 'https://fesp-api.koyeb.app/todo',
    timeout: 5000,
    headers: {
      // 특수문자 있으면 따옴표 없을 때 에러 발생한다. 대소문자 구별하지 않음.
      'Content-Type': 'application/json', // 요청 바디의 데이터 타입
      // 속성명도 따옴표 붙이지 않아도 된다.
      Accept: 'application/json' // 기대하는 응답 데이터 타입
    }
  });
  
  
  return instance;
}