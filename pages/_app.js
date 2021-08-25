import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router'

function MyApp({ Component, pageProps }) {
  const progress = new ProgressBar({
    size: 4,
    color: "#512da8",
    className: "bar-of-progress",
    delay: 100,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);
  return <Component {...pageProps} />
}

export default MyApp
