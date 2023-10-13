import React, { useState, useEffect, useRef } from 'react'
import './index.css'

function Stopwatch() {
  const [timeInSeconds, setTimeInSeconds] = useState(0)
  const timerIdRef = useRef(null) 

  const renderMinutes = () => {
    const minutes = Math.floor(timeInSeconds / 60)
    return minutes < 10 ? `0${minutes}` : minutes
  }

  const renderSeconds = () => {
    const seconds = Math.floor(timeInSeconds % 60)
    return seconds < 10 ? `0${seconds}` : seconds
  }

  const startButton = () => {
    
    timerIdRef.current = setInterval(runClock, 1000)
  }

  const runClock = () => {
    setTimeInSeconds((prevTime) => prevTime + 1)
  }

  const stopButton = () => {
    clearInterval(timerIdRef.current) 
  }

  const restartButton = () => {
    setTimeInSeconds(0)
    clearInterval(timerIdRef.current) 
  }

  useEffect(() => {
    return () => {
      clearInterval(timerIdRef.current)
    }
  }, [])

  const displayTime = `${renderMinutes()}:${renderSeconds()}`

  return (
    <div className="app-container1">
      <div className="stop-watch-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="stopwatch-card-header">
            <img
              className="clock-image"
              alt="mini-clock"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="time-display" testid="timer">
            {displayTime}
          </h1>
          <div className="buttons-container">
            <button
              className="start-button button"
              type="button"
              onClick={startButton}
            >
              Start
            </button>
            <button
              className="stop-button button"
              type="button"
              onClick={stopButton}
            >
              Stop
            </button>
            <button
              className="restart-button button"
              type="button"
              onClick={restartButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stopwatch
