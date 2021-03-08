import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  button: {
    border: "1px solid",
    width: 104,
    fontFamily: '"josefin-sans",sans-serif',
    fontWeight: 600,
    borderColor: (props) => props.borderColor,
    backgroundColor: (props) => props.bgColor || "transparent",
    color: (props) => props.textColor,
    position: "relative",
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 360,
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: "1.2rem",

    "&:after": {
      content: (props) => (props.shiftBackground ? `""` : "none"),
      position: "absolute",
      top: 4,
      left: 4,
      bottom: -4,
      right: -4,
      backgroundColor: "#fdf3f4",
      borderRadius: 360,
      transition: `all .15s ease-in-out`,
      transitionProperty: `background-color`,
      zIndex: -1,
    },
  },
}));

export const Cta = ({
  children,
  borderColor,
  shiftBackground,
  bgColor,
  textColor,
  text,
  action,
}) => {
  const classes = useStyles({
    borderColor,
    shiftBackground,
    bgColor,
    textColor,
  });

  return (
    <button className={classes.button} onClick={action}>
      <span>{text}</span>
    </button>
  );
};

Cta.defaultProps = {
  borderColor: "black",
};
