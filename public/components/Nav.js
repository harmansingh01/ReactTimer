import * as React from "react";
import{Link, IndexLink} from 'react-router';
const Nav = () => {
  return <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li>
          <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
        </li>
        <li>
          <Link to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
        </li>

      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li>Created By Preet</li>
      </ul>
    </div>
  </div>;
};

export default Nav;