const Header = (props) => {

  return (
    <div>
      <h1>Title: {props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part position={1} part={props.part1} exercises={props.exercises1}/>
      <Part position={2} part={props.part2} exercises={props.exercises2}/>
      <Part position={3} part={props.part3} exercises={props.exercises3}/>
    </div>
  );
};

const Part = (props) =>{
  return (
    <div>
      Part {props.position}: {props.part}. Exercises: {props.exercises}
    </div>
  )
}

/*const Total = (props) => {
  return (
    <div>
      Exercises {props.exercises1} {props.exercises2} {props.exercises3}
    </div>
  );
};*/

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
    </div>
  );
};

export default App;
