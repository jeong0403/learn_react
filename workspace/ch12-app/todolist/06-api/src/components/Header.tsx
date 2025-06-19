import { NavLink } from "react-router";

function Header() {
  return (
    // 단일 태그는 프래그먼트 생략 가능
      <header>
      <h1>Todo List</h1>
      <nav>
        <div>
          <ul>
            {/* 주소 새로고침 때문에 a -> Link to로 변경  */}
            {/* isActive는 정해진 이름이라 변경 불가하다. */}
            <li><NavLink className={ ({ isActive }) => isActive ? 'menu-dark' : 'menu' } to="/">Home</NavLink></li>
            <li><NavLink className={ ({ isActive }) => isActive ? 'menu-dark' : 'menu' } to="/about">About</NavLink></li>
            <li><NavLink className={ ({ isActive }) => isActive ? 'menu-dark' : 'menu' } to="/todolist">TodoList</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
