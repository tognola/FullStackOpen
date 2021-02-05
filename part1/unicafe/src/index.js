import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const btnGood = () =>  () => {setGood(good + 1)}
  const btnNeutral = () =>  () => {setNeutral(neutral + 1)}
  const btnBad = () =>  () => {setBad(bad + 1)}



  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={btnGood()}/>
      <Button text="neutral" handleClick={btnNeutral()}/>
      <Button text="bad" handleClick={btnBad()}/>
      
      <h1>statistics</h1>
      <Statistics  good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)