
import React, {Component} from 'react';

export default  class Clock extends Component{


  formatSeconds(totalSeconds){
    let seconds=totalSeconds%60;
    let minutes= Math.floor(totalSeconds/60);

    if(seconds<10){
      seconds='0'+seconds;
    }
    if(minutes<10){
      minutes='0'+minutes
    }
    return `${minutes}:${seconds}`;
  }
  render(){
    const clockStyle = {
      color: 'blue'

    };
    const clock_text={

    };

    let {totalSeconds}=this.props;
    return(
    <div style={clockStyle}>
      <span style={clock_text}>{this.formatSeconds(totalSeconds)}</span>
    </div>
    );
  }
}

Clock.defaultProps={
  totalSeconds:0
};

Clock.propTypes={
  totalSeconds:React.PropTypes.number
};