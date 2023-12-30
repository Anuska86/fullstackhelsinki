const Header = (props) => {
  return (
    <div>
      <h1>Title: {props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  );
};



const Total = (props) => {
  return (
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  let text = "Exercises: ";
  const parts = [
    { name: "Name: Fundamentals of React.", exercises: text + 10 },
    { name: "Name: Using props to pass data.", exercises: text + 7 },
    { name: "Name: State of a component.", exercises: text + 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
     </div>
  );
};

export default App;
