import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Button({ icon ,event}, props) {
    
  return <button onClick={event} {...props}> <FontAwesomeIcon  icon={icon}  /></button>;
}
export default Button;
