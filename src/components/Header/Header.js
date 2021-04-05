import { NavLink } from "react-router-dom";

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <div className="header__text">
          <p>The personal blog of</p>
          <h1>Dr. Jhon H. Watson</h1>
        </div>
      </div>
      <div className="header__navigation">
        <NavLink to='/'>Home</NavLink>
        <div className="header__logo"/>
        <NavLink to='/blog'>Blog</NavLink>
      </div>
    </div>
  );
}

export default Header;