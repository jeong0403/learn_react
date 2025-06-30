import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  color?: string;
  bg?: string;
  variant?: 'basic' | 'cancel' | 'confirm';
}

// styled를 사용하면 style이 적용된 버튼 컴포넌트가 적용됨
// props의 값 꺼내서 사용하겠다.
const BasicButtonStyle = styled.button<ButtonProps>`
  background-color: ${ (props) => props.bg || 'gray' };
  border: none;
  color: ${ (props) => props.color || 'black' };
  padding: 6px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
`;

// 기존 스타일 그대로 상속 받고, 바꿀 것만 오버라이딩함
const CancelButtonStyle = styled(BasicButtonStyle)`
  background-color: red;
  color: white;
`;

const ConfirmButtonStyle = styled(BasicButtonStyle)`
  background-color: blue;
  color: white;
`;

function Button({ children, variant='basic', ...rest }: ButtonProps){
  switch(variant){
    case 'cancel':
      return <CancelButtonStyle {...rest}>{ children }</CancelButtonStyle>;
    case 'confirm':
      return <ConfirmButtonStyle {...rest}>{ children }</ConfirmButtonStyle>;
    case 'basic':
      default:
      return <BasicButtonStyle {...rest}>{ children }</BasicButtonStyle>;
  }
}

export default Button;