interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  color?: string;
  bg?: 'gray' | 'red' | 'yellow';
  size?: 'sm' | 'md' | 'lg'
}

function Button({ children, bg="gray", size="md", ...rest }: ButtonProps){
  // 객체로 만들어줘야 번들링에 포함시킨다는 걸 인지하도록 하기 위함
  const btnColor = {
    gray: 'bg-gray-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
  };
  
  // 번들링시 관련 클래스가 제외될 수 있음
  // const btnColor = `bg-${bg}-500`;

  const btnSize = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-2 px-6 text-lg',
  }

  return (
    <button className={`${btnColor[bg]} border-0 text-white py-1.5 px-4 text-center my-1 mx-0.5 rounded-md hover:bg-green-700 duration-300 cursor-pointer  ${btnSize[size]}`} {...rest}>{ children }</button>
  );
}

export default Button;