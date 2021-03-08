import React from "react";
import { Logo } from "../atoms/logo";
import { colors } from "../../theme";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  heading: {
    borderBottom: `1px solid ${colors.gray100}`,
    marginBottom: 32,
  },

  logo: {
    display: "block",
    width: 247,
    margin: "28px auto",
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.heading}>
      <div className={classes.logo}>
        <Logo color={colors.red} />
      </div>
    </header>
  );
};
