import React from "react";
import Pparent from "./Pparent";
const Child = (props) => {
  return (
    <div>
      <button onClick={ () => props.newMessage("new message") }>
        Update message
      </button>
    </div>
  );
}

export default Child;