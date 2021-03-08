import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { Cta } from "../Cta";
import { colors } from "../../../theme";
import { Text, Image, RemoveCta } from "../../atoms";
import { AppContext } from "../../../store/store";

const useStyles = createUseStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",

    "& button": {
      marginTop: "auto",
      marginBottom: 18.5,
    },
  },

  heading: {},

  imageWrapper: {
    height: 150,
    overflow: "hidden",
  },

  textWrapper: {
    marginBottom: 14,
    width: (props) => (props.slim ? "70%" : "100%"),
  },

  authorWrapper: {
    marginBottom: 2,
    maxWidth: "80%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    color: colors.red,
  },

  author: {
    textDecoration: "none",
    color: colors.red,
  },

  remove: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

export const NewsCard = ({
  title,
  author,
  urlToImage,
  index,
  added,
  slim,
  id,
}) => {
  const classes = useStyles({ slim });
  const { actions } = useContext(AppContext);

  const addToFavourites = () => {
    actions.addToFavourites({
      title,
      author,
      id: index,
    });
  };

  return (
    <article className={classes.card}>
      <address className={classes.authorWrapper}>
        <a rel="author" href="#" className={classes.author}>
          {author || "N/A"}
        </a>
      </address>

      <div className={classes.textWrapper}>
        <Text tag="h2" body={title} />
      </div>

      {!slim && !added && (
        <Cta
          text="add"
          textColor={colors.red}
          shiftBackground
          borderColor={colors.red}
          action={() => addToFavourites()}
        ></Cta>
      )}

      {slim && (
        <div
          className={classes.remove}
          onClick={() => actions.removeFavourite(index, id)}
        >
          <RemoveCta />
        </div>
      )}

      {added && (
        <Cta
          text="added"
          textColor={colors.gray600}
          bgColor={colors.gray50}
          borderColor={colors.gray600}
        ></Cta>
      )}

      {urlToImage && (
        <div className={classes.imageWrapper}>
          <Image url={urlToImage} cover />
        </div>
      )}
    </article>
  );
};
