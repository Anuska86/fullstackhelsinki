/* eslint-disable react/prop-types */
/*data>>courseData>>response*/

const Course = (props) => {
  console.log("Course:");
  return (
    <div>
      {props.courseData?.map((object, i) => {
        console.log(object);
        return (
          <div key={i}>
            <Header headerData={object} />
            <Content contentData={object.parts} />
            <Total totalExercises={object.parts} />
          </div>
        );
      })}
    </div>
  );
};

const Header = ({ headerData }) => {
  console.log("Header:");
  console.log(headerData);
  return (
    <div>
      <h1>Title: {headerData.name}</h1>
    </div>
  );
};

const Content = ({ contentData }) => {
  console.log("Content:");
  console.log(contentData);
  return (
    <div>
      {contentData?.map((object, i) => {
        return (
          <p key={i}>
            {object.name} {object.exercises}
          </p>
        );
      })}
    </div>
  );
};

const Total = ({ totalExercises }) => {
  let total = totalExercises.reduce((x, y) => (x = x + y.exercises), 0);
  return (
    <div>
      <h1>The total of exercises is: {total}</h1>
    </div>
  );
};

const App = () => {
  const courseInfo = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Course courseData={courseInfo} />;
};

export default App;
