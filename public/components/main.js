import React, {Component} from 'react';
import Nav from "./Nav";
import Clock from "./clock";

const Main = (props) => {
  return <div>
    <Nav/>
    <div className="row">
      <div className="columns medium-6 large-4 small-centered"> {props.children}</div>
    </div>
  </div>;
};

export default Main;