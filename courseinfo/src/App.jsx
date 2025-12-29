// Header component
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

// Part1 component
const Part1 = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

// Part2 component
const Part2 = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

// Part3 component
const Part3 = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

// Content component
const Content = (props) => {
  return (
    <div>
      <Part1 name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part2 name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part3 name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

// Footer component
const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {
          props.parts[0].exercises
          + props.parts[1].exercises
          + props.parts[2].exercises
        }
      </p>
    </div>
  )
}

// App component
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10, 
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
