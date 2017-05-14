import React, {Component} from 'react';

export default class CountdownForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    let seconds = parseInt(this.refs.seconds.value);
    if (Number.isInteger(seconds)) {
      this.refs.seconds.value='';
      this.props.onSetCountdown(parseInt(seconds,10));
    }
  }

  render() {
    const countdownFormStyle = {};

    return <div>
      <form ref="form" onSubmit={this.onSubmit.bind(this)} style={countdownFormStyle}>
        <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
        <button className="button expanded">Start</button>
      </form>
    </div>
  }
}