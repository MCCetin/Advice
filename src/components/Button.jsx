import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ icon, event, size = "2x" }, props) {
  return (
    <button onClick={event} {...props}>
      <FontAwesomeIcon size={size} icon={icon} />
    </button>
  );
}
export default Button;
