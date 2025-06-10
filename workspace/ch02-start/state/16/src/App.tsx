import { useForm } from "react-hook-form";

const errorStyle = {
  fontsize: '12px',
  color: 'red',
  fontweight: 'bold',
}

interface User {
  name: string;
  email: string;
  cellphone: string;
}

// 이메일 검증 정규식
    const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // 휴대폰 검증 정규식
    const cellphoneExp = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;

function App() {

  // useForm이 return하는 게 객체임. 그러므로 구조분해할당으로 바로 꺼낼 것
  // 이때 fromState는 객체로 이루어져 있기 때문에 한 번 더 꺼낸 게 errors임
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onSubmit', // default: onSubmit, 최초 검증 시점
    reValidateMode: 'onBlur', // default: onChange, 재검증 시점
    criteriaMode: 'firstError', // default: firstError, errors 객체에 첫 오류 하나만 포함하거나 전부 포함하거나 전부 포함
    defaultValues: {
      // 초기값으로 사용할 객체와 그 속성의 초기값
      name: '',
      email: '',
      cellphone: '010',
    }
  });

  // 검증 완료 후에 실행할 코드
  const onSubmitHandler = (user: User) => {
  console.log('서버에 전송...', user);
  };

  return (
    <>
      <h1>16 회원가입 입력값 검증 (feat. react-hook-form)</h1>
      {/* 버튼을 눌렀을 때 onSubmitHandler가 발생하도록 등록함 */}
      <form onSubmit={ handleSubmit(onSubmitHandler) }> 
        <label htmlFor="name">이름</label>
        <input id="name"
        // 위에서 받아온 register를 전개 연산자 구문으로 펼침
        // register 함수의 두 번째 인자로 검증 규칙을 전달함
          { ...register('name', {
            required: '이름을 입력하세요.',
            minLength: { // 최소 길이 지정
              value: 2, // value로 글자 수 지정
              message: '2글자 이상 입력하세요.'
            },
            pattern: {
              value: /^[^\d]*$/, // 숫자가 포함되지 않도록 설정
              message: '숫자는 입력할 수 없습니다.'
            }
          }) }
        />
        <br />
        <div style={ errorStyle }>{ errors.name?.message}</div>

        <label htmlFor="email">이메일</label>
        <input id="email" 
          { ...register('email', {
            required: '이메일을 입력하세요.',
            pattern: {
              value: emailExp,
              message: '이메일 양식에 맞지 않습니다.'
            }
          }) }
        />
        <br />
        <div style={ errorStyle }>{ errors.email?.message}</div>

        <label htmlFor="cellphone">휴대폰</label>
        <input id="cellphone"
          { ...register('cellphone', {
            required: '휴대폰 번호를 입력하세요.',
            pattern: {
              value: cellphoneExp,
              message: '휴대폰 형식에 맞지 않습니다.'
            }
          }) }
        />
        <br />
        <div style={ errorStyle }>{ errors.cellphone?.message}</div>

        <button type="submit">가입</button>
      </form>

      <p> 
        {/* useState로 직접 user 객체 상태를 관리하지 않고, react-hook-form이 자체적으로 폼 상태를 관리함 */}
        이름: { watch('name') }
        <br />
        이메일: { watch('email') }
        <br />
        휴대폰: { watch('cellphone') }
        <br />
      </p>
    </>
  );
}

export default App;
