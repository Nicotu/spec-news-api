import React from "react";
import { createUseStyles } from "react-jss";
import { colors } from "../../theme";

const useStyles = createUseStyles(() => ({
  button: {
    borderRadius: "50%",
    padding: "0.5em",
    width: "30px",
    height: "30px",
    border: `1px solid ${colors.red}`,
    color: colors.red,
    position: "relative",
    background: "none",
    cursor: "pointer",

    "&:after": {
      content: `""`,
      position: "absolute",
      display: "block",
      backgroundColor: colors.red,
      height: 1,
      top: 13,
      left: 5,
      right: 5,
      transform: "rotate(45deg)",
    },

    "&:before": {
      content: `""`,
      position: "absolute",
      display: "block",
      backgroundColor: colors.red,
      width: 1,
      left: 13,
      top: 5,
      bottom: 5,
      transform: "rotate(45deg)",
    },
  },

  buttonBg: {
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    color: "blue",
    position: "absolute",
    backgroundColor: "#fdf3f4",
    top: 2,
    left: 2,
    zIndex: -1,
  },
}));

export const RemoveCta = (props) => {
  const classes = useStyles();

  return (
    <button className={classes.button}>
      <span className={classes.buttonBg}></span>
    </button>
  );
};
