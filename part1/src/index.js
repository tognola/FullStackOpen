import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Gaston" />
      <Hello name="Gaston 1" />
      <Hello name="Gaston 2" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))