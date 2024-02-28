/* eslint-disable react/prop-types */


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

  export default Course;