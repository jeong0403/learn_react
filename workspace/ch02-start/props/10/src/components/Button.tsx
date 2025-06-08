// props를 지정하면 꼭 타입을 지정해야 함
interface ButtonProps {
  children: string;
  type?: 'button' | 'reset' | 'submit';
  color?: 'red' | 'green' | 'blue';
  onClick: (event: React.MouseEvent) => void;
}
// childern은 해당 컴포넌트의 자식 요소를 의미한다. Counter에서 버튼 사이에 적힌 텍스트는 자식 요소이기 때문에 이걸 받아온다는 것을 적어야 함
function Button({ children, type="button", color, onClick: handleClick }: ButtonProps){
  return(
    <button
        type={ type }
        onClick={ handleClick }
        style={{ backgroundColor: color }}
        className="rounded-button"
      >{ children }</button>
  );
}

export default Button;