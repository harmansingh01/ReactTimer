import React, {Component} from 'react';

export default  class Clock extends Component {

  formatSeconds(totalSeconds) {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    return `${minutes}:${seconds}`;
  }

  render() {
    const clockStyle = {
      alignItems: 'center',
      backgroundColor: '#B5D0E2',
      border: '2px solid #2099E8',
      borderRadius: '50%',
      display: 'flex',
      height:'14rem',
      justifyContent:'center',
      margin:'4rem auto',
      width:'14rem'
    };
    const clock_text = {
      color: '#ffffff',
      fontSize: '2.25rem'
    };

    let {totalSeconds} = this.props;
    return (
      <div style={clockStyle}>
        <span style={clock_text}>{this.formatSeconds(totalSeconds)}</span>
      </div>
    );
  }
}

Clock.defaultProps = {
  totalSeconds: 0
};

Clock.propTypes = {
  totalSeconds: React.PropTypes.number
};