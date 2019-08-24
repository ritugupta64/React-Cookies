import React from "react";

const cardStyles = {
  background: "whitesmoke",
  width: "320px",
  height: "320px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
  borderRadius: "10px",
};

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }} className="boxShadow borderImage">{children}</div>
);

export default Card;
