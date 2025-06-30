// 페이지 이동할 때 주소를 바꾸게 하고, 주소에 맞는 컴포넌트로 랜더링하기 위해서 라우터 사용함
// 싱글페이지이기 때문에 활용하는 것
import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";

const Layout = lazy(() => import('@components/Layout'));
const About = lazy(() => import('@pages/About'));
const ErrorPage = lazy(() => import('@pages/ErrorPage'));
const Home = lazy(() => import('@pages/Home'));
const TodoAdd = lazy(() => import('@pages/TodoAdd'));
const TodoEdit = lazy(() => import('@pages/TodoEdit'));
const TodoInfo = lazy(() => import('@pages/TodoInfo'));
const TodoList = lazy(() => import('@pages/TodoList'));

// 객체를 라우팅 규칙에 알맞게 전달
const router = createBrowserRouter([
  { 
    path: "/", 
    // 시작 주소가 /(슬래시) 요소들은 url이 Layout이 랜더링 되도록 만듦
    element: <Layout/>,
    errorElement: <ErrorPage />,
    // Outlet 이용했을 때 루트의 자식이 되도록 만들어줌
    children: [
      { index: true, element: <Home />},
      { path: "home", element: <Navigate to="/"/>},
      { path: "about", element: <About /> },
      { path: "todolist", element: <TodoList /> },
      { 
        path: "todolist/:_id",
        element: <TodoInfo />,
        children: [
          { path: "edit", element: <TodoEdit /> },
        ]
      },
        { path: "add", element: <TodoAdd /> },
    ]
  },
]);

export default router;