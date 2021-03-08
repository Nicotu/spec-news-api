import { NewsCard } from "../molecules";
import { createUseStyles } from "react-jss";
import { colors, device } from "../../theme";

const useStyles = createUseStyles(() => ({
  wrapper: {
    display: "flex",
    flexWrap: "nowrap",
    overflow: "scroll",
    width: "100%",

    "& article": {
      width: "50%",
      marginRight: 32,
    },
  },

  [`@media ${device.laptop}`]: {
    wrapper: {
      display: "block",
      overflow: "revert",

      "& article": {
        display: "block",
        minWidth: "0",
        marginBottom: 16,
      },
    },
  },
}));

export const Favourites = ({ items }) => {
  const classes = useStyles({});

  const FavouritesItems = items.map((item, index) => {
    return (
      <NewsCard {...item} key={`favourites-${index}`} index={index} slim />
    );
  });

  return <div className={classes.wrapper}>{FavouritesItems}</div>;
};
