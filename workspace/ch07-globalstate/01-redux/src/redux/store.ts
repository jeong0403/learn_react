// redux에서는 redux-toolkit 사용을 권장
import { createStore } from "redux";
import counterReducer from "./counterReducer";

// store가 Reducers 호출
const store = createStore(counterReducer);

export default store;