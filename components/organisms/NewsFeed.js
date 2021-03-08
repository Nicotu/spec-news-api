import React from "react";
import { NewsCard } from "../molecules";
import { createUseStyles } from "react-jss";
import { device } from "../../theme";

const useStyles = createUseStyles(() => ({
  feed: {
    display: "grid",
    gridTemplateColumns: `repeat(1, minmax(0, 1fr))`,

    [`@media ${device.laptop}`]: {
      gridTemplateColumns: (props) => props.desktopColumns,
      gap: "32px",
    },
  },
}));

export const NewsFeed = ({ items, columns }) => {
  const desktopColumns = `repeat(${columns || 3}, minmax(0, 1fr))`;
  const classes = useStyles({ desktopColumns });

  const NewsItems = items.map((item, index) => {
    return (
      <NewsCard
        {...item}
        className={classes.card}
        key={`news-${index}`}
        index={index}
      />
    );
  });

  return <section className={classes.feed}>{NewsItems}</section>;
};

NewsFeed.defaultPropd = {
  items: [],
};
