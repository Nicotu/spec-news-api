import { useContext } from "react";
import { createUseStyles } from "react-jss";
import Head from "next/head";
import { AppContext } from "../store/store";
import { Divider } from "../components/atoms/";
import { Header, Favourites, NewsFeed } from "../components/organisms";
import { colors, device } from "../theme";

const useStyles = createUseStyles(() => ({
  newsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 1200,
    margin: "0 auto",
  },

  sidebar: {
    width: "100%",
    padding: "0 16px 16px",
    overflow: "hidden",
  },

  content: {
    flex: "1",
    padding: 16,
    borderRight: `1px solid ${colors.gray100}`,
  },

  [`@media ${device.laptop}`]: {
    newsWrapper: {
      flexDirection: "row-reverse",
    },

    sidebar: {
      width: "25%",
      paddingLeft: 32,
    },

    content: {
      paddingRight: 32,
    },
  },
}));

export default function Home() {
  const { topNews, favourites } = useContext(AppContext);
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/xkz5olp.css" />
      </Head>

      <Header />

      <main className={classes.newsWrapper}>
        <aside className={classes.sidebar}>
          <Divider color={colors.red} marginBottom={4} size={2} />
          <Divider color={colors.red200} marginBottom={4} size={2} />
          <Divider color={colors.red200} marginBottom={16} size={2} />
          <Favourites items={favourites} />
        </aside>

        <div className={classes.content}>
          <NewsFeed items={topNews} />
        </div>
      </main>
    </>
  );
}
