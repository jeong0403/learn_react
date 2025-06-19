import axios from "axios";

const API_SERVER = 'https://fesp-api.koyeb.app/todo';

function useAxiosInstance() {
  // axios의 메서드 중 하나 -> instance 생성해줌
  const instance = axios.create({
    baseURL: API_SERVER, // 기본 URL
    timeout: 1000*5,
    headers: {
      // 그 동안은 get 방식으로만 받기 때문에 설정이 필요 없었지만 이제는 서버로 넘겨야 하는 상황이다.
      // 서버에게 json 표기로 데이터 보낼거야라고 알려주는 상황
      'Content-Type': 'application/json', // 요청 바디의 데이터 타입
      // 설정하지 않으면 크롬일 경우 "application/json, text/plain, */*"
      Accept: 'application/json', // 응답 바디의 데이터 타입이 json이면 좋겠음
    }

  });
  return instance;
}

export default useAxiosInstance;