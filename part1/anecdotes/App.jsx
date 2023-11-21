import { useState } from 'react'

const Display = (props) => {
  return (
    <>
    <h1>Anecdote {props.text}</h1>
    <p>{props.anecdotes[props.index]}</p>
    <p>has {props.points[props.index]} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  

  const randomNum = () => {
    const selectedIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(selectedIndex)
  }

  const handleVoteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const maxVote = points.reduce((maxVote, currentNumber, currentIndex, array) => {
    return currentNumber > array[maxVote] ? currentIndex : maxVote;
  }, 0);
  

  return (
    <div>
      <Display text="of the day" index={selected} anecdotes={anecdotes} points={points} />
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={randomNum}>next anecdotes</button>
      <Display text="with most votes"index={maxVote} anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App