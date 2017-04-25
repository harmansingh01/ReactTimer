import React, {Component} from 'react';

const Main = (props) => {
  return <div>
    <div className="row">
      <div>React Boilerplate</div>
      <div className="columns medium-6 large-4 small-centered"> {props.children}</div>
    </div>

  </div>;
};

export default Main;