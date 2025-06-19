import { isRouteErrorResponse, useRouteError } from "react-router";

function ErrorPage() {

  // 에러도 어떤 에러인지 확인하려고 작성
  const err = useRouteError();
  let message = '예상하지 못한 에러가 발생했습니다.';
  console.error(err);
  if(isRouteErrorResponse(err)) {
    if(err.status === 404) {
      message = '존재하지 않는 페이지입니다.';
    }
  }

  return (
      <div id="main">
        <div className="todo">
          <h2>에러 발생</h2>
          <p>잠시후 다시 이용해 주세요.</p>
        </div>
      </div>
  );
}

export default ErrorPage;
