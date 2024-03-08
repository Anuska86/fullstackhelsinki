/* eslint-disable react/prop-types */
const Notification = (props) => {
  let showComponent =
    props.message === "" || props.message === undefined ? false : true;

  return (
    <div
      className="addedContact"
      style={{ display: showComponent ? "block" : "none" }}
    >
      {props.message}
    </div>
  );
};

export default Notification;
