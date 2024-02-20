/* eslint-disable react/prop-types */
/*data>>courseData>>response*/

const Header = (props) => {
  console.log('Header:')
  console.log(props)
  return (
    <div>
      <h1>Title: {props.headerData}</h1>
    </div>
  );
};

const Course = (props) => {
  console.log('Course:')
  console.log(props)
  return (
    <div>
      <Header headerData={props.courseData.name} />
      <Content ContentData={props.courseData.parts} />
    </div>
  );
}



const Content = (props) => {
  console.log(props);
  return (
    <div>
       <p>
        {props.ContentData[0].name} {props.ContentData[0].exercises}
      </p>
      <p>
        {props.ContentData[1].name} {props.ContentData[1].exercises}
      </p>
      <p>
        {props.ContentData[2].name} {props.ContentData[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const courseInfo = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course courseData={courseInfo} />
}

export default App
