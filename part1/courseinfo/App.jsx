import { useState } from 'react'
// Exercises 1.1 - 1.2
// Exercises 1.3 - 1.5

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part1 = (props) => {
  return (
    <>
      <p>{props.part1} {props.exercises1}</p>
    </>
  )
}

const Part2 = (props) => {
  return (
    <>
      <p>{props.part2} {props.exercises2}</p>
    </>
  )
}

const Part3 = (props) => {
  return (
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content
        part1={course.parts[0].name} exercises1={course.parts[0].exercises}
        part2={course.parts[1].name} exercises2={course.parts[1].exercises}
        part3={course.parts[2].name} exercises3={course.parts[2].exercises}
      />
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />
    </div>
  )
}


export default App
