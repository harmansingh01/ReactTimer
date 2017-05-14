import * as React from "react";
import{Link, IndexLink} from 'react-router';
const Nav = () => {
  const style = {
    backgroundColor: '#333333'
  };

  const menuText = {
    color: 'white'
  };
  return <div style={style} className="top-bar">
    <div className="top-bar-left">
      <ul style={style} className="menu">
        <li style={menuText}>React Time App</li>
        <li>
          <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
        </li>
        <li>
          <Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
        </li>

      </ul>
    </div>
    <div className="top-bar-right">
      <ul style={style} className="menu">
        <li style={menuText}>Created By Preet</li>
      </ul>
    </div>
  </div>;
};

export default Nav;