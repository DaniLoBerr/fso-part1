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
      <Part1 name={props.part1.name} exercises={props.part1.exercises} />
      <Part2 name={props.part2.name} exercises={props.part2.exercises} />
      <Part3 name={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

// Footer component
const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.totalExercises}
      </p>
    </div>
  )
}

// App component
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10, 
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }
  const totalExercises = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App
