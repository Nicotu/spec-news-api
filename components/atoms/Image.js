import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((coverStyle) => ({
  imageWrapper: {
    display: "flex",
    width: "100%",
    height: "inherit",
  },

  image: {
    width: "100%",
    ...coverStyle,
  },
}));

export const Image = ({ url, cover, position }) => {
  let coverStyle = "";

  if (cover) {
    coverStyle = {
      objectFit: "cover",
      objectPosition: position || "center",
    };
  }

  const classes = useStyles({ coverStyle });

  return (
    <div className={classes.imageWrapper}>
      <img src={url} className={classes.image} />
    </div>
  );
};
