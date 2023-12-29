const Header = (props) => {
  console.log(props.course);
  return (
    <div>
      <h1>Title: {props.course}</h1>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <Part1/>
      <Part2/>
      <Part3/>
    </div>
  );
};


const Part1 =() =>{
 
  const part1 = "Fundamentals of React";
  const exercises1 = 10;

  return (
    <div>
      Part 1: {part1}. Exercises: {exercises1}
    </div>
  )
}
const Part2 =() =>{
  const part2 = "Using props to pass data";
  const exercises2 = 7;
 
  return (
    <div>
      Part 2: {part2}. Exercises: {exercises2}
    </div>
  )
}
const Part3 =() =>{
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      Part 3: {part3} Exercises: {exercises3}
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
      <Content parts={Part1} />
      
      
    </div>
  );
};

export default App;
