import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  text: {
    display: "block",
    position: "relative",
    fontWeight: (props) => (props.bold ? "700" : ""),
    color: (props) => props.color,
    fontStyle: (props) => (props.italic ? "italic" : "normal"),
  },
}));

export const Text = ({
  bold,
  color,
  margin,
  size,
  body,
  tag: Tag,
  align,
  italic,
}) => {
  const classes = useStyles({ bold, color, margin, size, body, align, italic });

  return (
    <Tag
      className={classes.text}
      size={size}
      color={color}
      margin={margin}
      align={align}
      bold={bold}
      italic={italic}
    >
      {body}
    </Tag>
  );
};

// Text.defaultProps = {
//   bold: false,
//   tag: "span",
//   size: "body",
//   color: colors.black,
//   margin: "10px",
//   text: "lorem ipsum",
// };
