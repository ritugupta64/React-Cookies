import React from "react";

const buttonStyles = {
  padding: "5px 20px",
  cursor: "pointer",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: "20px",
  position: "absolute",
  transform: "uppercase",
  background: "none",
};



const Button = ({ children, onClick, name ,show}) => {
 // let f = {display:(show == 1 )? null:'none'}
  return(
 
  <button onClick={onClick} style={{ ...buttonStyles}} className={name === 'nope' ? 'btnNope' : 'btnLike' }>
    {children}
  </button>
)};

export default Button;
