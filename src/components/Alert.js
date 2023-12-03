import React from "react";

const Alert = (props) => {
  return (
    <>
    {props.alert &&
    <div>
      <div className={`alert alert-${props.alert.type}`} role="alert">
        {props.alert.msg}
      </div>
    </div>
  }
  </>
  );
};

export default Alert;

