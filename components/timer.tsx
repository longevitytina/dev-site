import React, {useState, useRef, useEffect} from 'react'
import './timer.css';

/**Prompt:

Build a timer UI with start, pause, and reset buttons.
The time should count in seconds. When the timer is running, the background changes color. When paused, the color is neutral.

Tests:

useEffect, useRef, setInterval, clearInterval

State: isRunning, time

Conditional styling

Event handling */

export default function Timer(){
  // track the interval numbers
  // if timer is running
  // track intervalID so we can clear it
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


  const handleStart = () =>{
    if(!isRunning){
      setIsRunning(true);
    }
  };

  const handlePause = () =>{
    setIsRunning(false);
  };

  const handleReset = () =>{
    setIsRunning(false);
    setTime(0)
  };

  useEffect(()=>{

    //timer running - start interval
    if(isRunning){
      // TODO - fix this
      intervalRef.current = setInterval(()=>{
        setTime((t)=>t+1)
      }, 1000)
    }else if(intervalRef.current){
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    //clear interval on mount
    return ()=>{
      if(intervalRef.current){
        clearInterval(intervalRef.current);
        intervalRef.current =  null
      }
    }
  },[isRunning])

  const timerStyle = {
    backgroundColor: isRunning? '#497B48': 'white'
  }

  return (

    <div className='timer-wrapper' style={timerStyle}>
      <div className='timer-numbers'>{time}</div>
      <div className='buttons-wrapper'>
        <button className='button start' onClick={handleStart}>start</button>
        <button className='button reset' onClick={handleReset}>reset</button>
        <button className='button pause' onClick={handlePause}>pause</button>
      </div>
    </div>
  )

}
