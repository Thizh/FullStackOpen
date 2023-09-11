import { useState } from 'react'
// Exercises 1.1 - 1.2

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part1 = (props) => {
  return(
    <>
       <p>{props.part1} {props.exercises1}</p>
    </>
  )
}

const Part2 = (props) => {
  return(
    <>
       <p>{props.part2} {props.exercises2}</p>
    </>
  )
}

const Part3 = (props) => {
  return(
    <>
       <p>{props.part3} {props.exercises3}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part1 part1={props.part1} exercises1={props.exercises1} />
      <Part2 part2={props.part2} exercises2={props.exercises2} />
      <Part3 part3={props.part3} exercises3={props.exercises3} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of Exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}


export default App
