import React from "react";

interface ShippingProps {
  fees: number;
  handlePayment: () => void;
}

// TODO 컴포넌트를 메모이제이션 해서 불필요한 리렌더링 방지
function Shipping({ fees, handlePayment }: ShippingProps) {
  console.log("Shipping 렌더링.");

  return (
    <>
      <h2>배송비</h2>
      <div>
        배송비: {fees.toLocaleString()}원<br />
      </div>
      <br />
      <button type="button" onClick={handlePayment}>
        결제
      </button>
    </>
  );
}
// 개발자가 React.memo라고 코드에 작성해서 메모하겠다는 의미 (수동으로 함)
// 메모이제이션 기능이 있는 함수를 리턴한다
export default React.memo(Shipping);