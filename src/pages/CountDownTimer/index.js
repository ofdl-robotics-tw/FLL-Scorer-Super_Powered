import React from 'react';
import CountDownTimer from '../../components/Timer';

function Timer(props) {

  let hoursMinSecs = {hours:0 , minutes: 2 , seconds: 30}
  hoursMinSecs = props.timeInit;


  return (
    <div className="App">
        <CountDownTimer hoursMinSecs={hoursMinSecs}/>
    </div>
  );
}

export default Timer;