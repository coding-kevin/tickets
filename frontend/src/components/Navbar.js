import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      <nav className="main-nav" data-testid="navbar">
        <div className="nav-items-main">
          <div className="navbar-name">
            <a href="https://www.codingkevin.com">KEVIN MCLAUGHLIN</a>
          </div>
          <i id="hamburger" className=" bars icon" onClick={toggleNav}></i>
        </div>
        <div className={`nav-items ${toggleMenu ? "navbar-show" : "navitems"}`}>
          <a href="https://kevin-tickets-backend.herokuapp.com/users/login">
            Tickets
          </a>
          <a href="https://www.codingkevin.com/diagrams/index.html">Diagrams</a>
          <a href="https://www.codingkevin.com/reading_levels/reading-levels.html">
            Reading Levels
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
