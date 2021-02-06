import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0]);

  const nextAnecdote = () => {
    let r = Math.floor(Math.random() * 6);
    setSelected(r)
  }

  const vote = (index) => () =>{
    let copy = [... votes];
    copy[index] += 1;
    console.log(index, copy)
    setVotes(copy);
  }
  
  const getMax = () => {
    let voteMax = Math.max.apply(Math, votes);
    return {
      votes: voteMax,
      index: votes.indexOf(voteMax)
    }
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <button onClick={vote(selected)}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[getMax().index]} has {getMax().votes} votes.</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)