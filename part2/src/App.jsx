/* eslint-disable react/prop-types */
/*data>>courseData>>response*/

const Course = (props) => {
  console.log(props);
  return (
    <div>
      <ul>
      {props.courseData.map((currentCourse) => (
      <Header headerData={currentCourse.courseData.name} />
      <Content contentData={currentCourse.courseData.parts} />
      <Total totalExercises={currentCourse.courseData.parts} />
      )
      )
      }
      </ul>
    </div>

  )
};

const Header = (props) => {
  console.log("Header:");
  console.log(props);

  return (
    <div>
      <h1>Title: {props.headerData.name}</h1>
    </div>
  );
};

const Content = (props) => {
  console.log("Content:");
  console.log(props);
  return (
    <div>
      <p>
        {props.contentData[0].name} {props.contentData[0].exercises}
      </p>
      <p>
        {props.contentData[1].name} {props.contentData[1].exercises}
      </p>
      <p>
        {props.contentData[2].name} {props.contentData[2].exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  let total = props.totalExercises.reduce((x, y) => (x = x + y.exercises), 0);
  return (
    <div>
      <h1>The total of exercises is: {total}</h1>
    </div>
  );
};

const App = () => {
  const courseInfo =  [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courseData={courseInfo} />;
};

export default App;
