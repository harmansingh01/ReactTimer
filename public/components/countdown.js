import React, { Component } from 'react';
import Clock from "./clock";


export  default class Countdown extends Component {
  render(){
    return (<div>
      <Clock totalSeconds={129}/>
      </div>
    );
  }
}