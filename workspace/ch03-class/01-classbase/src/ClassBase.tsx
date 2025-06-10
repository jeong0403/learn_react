import { Component } from "react";

interface ClickMeProps {
  level?: number;
}

interface ClickMeState {
  count: number;
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>01 클래스 컴포넌트</h1>
        {/* 가정: 1번 클릭했을 때 level을 1씩 혹은 5씩 증가하는 기능 만들거야 */}
        <ClickMe level={10} />
        <ClickMe level={5} />
        <ClickMe />
      </div>
    );
  }
}

class ClickMe extends Component<ClickMeProps, ClickMeState> {

  // state/setState는 부모에 정의 되어 있는 이름
  // 상태는 state 변수 하나만 사용 가능해서 여러 개의 상태를 관리하려면 그 값을 객체로 지정(작성할 때 콤마 찍고 작성하면 됨)
  // 함수형에서는 state 변수를 여러 개 지정 가능(useState 훅)
  state = { count: 0 };

  // ClickMe props가 생성자의 props 타입으로 지정되면 됨
  constructor(props: ClickMeProps) {
    // 부모 클래스의 생성자를 통해 this를 생성하고 초기화 하므로
    // super()를 호출해야 자식 클래스에서 this 사용 가능
    // super(props)를 호출해야 자식 클래스에서 this.props 사용 가능
    super(props);
    // props 기반으로 초기 상태값을 저장한다라고 표현
    this.state = { count: props.level || 1};
  }

  increase = () => {
    this.setState({ count: this.state.count + (this.props.level ?? 1) });
  }

  render(){
    return(
      <div>
        클릭 횟수 X { this.props.level || 1 } : { this.state.count }
        <button onClick={ this.increase }>클릭</button>
      </div>
    );
  }
}

export default Parent;
