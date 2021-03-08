import "../styles/globals.css";
import AppContextProvider from "../store/store";

import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
