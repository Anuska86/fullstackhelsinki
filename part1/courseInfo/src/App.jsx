const Header = (props) => {
  return (
    <div>
      <h1>Title: {props.course.name}</h1>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
       <p>
        {props.course.parts[0].name} {props.course.parts[0].exercises}
      </p>
      <p>
        {props.course.parts[1].name} {props.course.parts[1].exercises}
      </p>
      <p>
        {props.course.parts[2].name} {props.course.parts[2].exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
        <p>
        {props.course.parts[0].name} {props.course.parts[0].exercises}
      </p>
      <p>
        {props.course.parts[1].name} {props.course.parts[1].exercises}
      </p>
      <p>
        {props.course.parts[2].name} {props.course.parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {

  const course = {
    name: "Half Stack application development",

    parts: [
      { name: "Name: Fundamentals of React.", exercises: 10 },
      { name: "Name: Using props to pass data.", exercises: 7 },
      { name: "Name: State of a component.", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
