import React from "react";

const Button = (props) => {
  return <Button className={"Button" + props.buttonType}>{props.text}</Button>;
};

export default Button;
