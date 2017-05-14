import React, { Component } from 'react';
import Clock from "./clock";
import CountdownForm from "./countdownform";


export  default class Countdown extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    };
  }

  handleSetCountdown(seconds){
    this.setState({count:seconds})
  }
  render(){
    return (<div>
      <Clock totalSeconds={this.state.count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)}/>
      </div>
    );
  }
}