import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  divider: {
    height: (props) => props.size || 2,
    display: "block",
    width: "100%",
    backgroundColor: (props) => props.color || "black",
    marginBottom: (props) => props.marginBottom,
    marginTop: (props) => props.marginTop,
  },
}));

export const Divider = ({ color, marginBottom, marginTop, size }) => {
  const classes = useStyles({ color, marginBottom, marginTop, size });

  return <span className={classes.divider}></span>;
};
