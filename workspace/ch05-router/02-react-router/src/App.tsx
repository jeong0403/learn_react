import { RouterProvider } from "react-router";
import router from "./routes";

function App() {
  return (
    // 탑 레벨이라 <></> 없애도 됨
      <RouterProvider router={ router } />
  );
}

export default App;
