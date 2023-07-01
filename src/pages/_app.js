import "@fontsource-variable/open-sans";
import { initGA, logPageView } from "analytics";
import "bulma/css/bulma.css";
import SEO from "components/seo";
import { StickyProvider } from "contexts/app/app.provider";
import { VideoProvider } from "contexts/video/video.provider";
import Router from "next/router";
import "rc-drawer/assets/index.css";
import { useEffect } from "react";
import "react-awesome-lightbox/build/style.css";
import "react-modal-video/css/modal-video.min.css";
import "react-slideshow-image/dist/styles.css";
import "swiper/swiper-bundle.min.css";
import { SWRConfig } from "swr";
import theme from "theme";
import { ThemeProvider } from "theme-ui";
import "typeface-dm-sans";
import "./styles.css";
// Import the functions you need from the SDKs you need

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();

    Router.events.on("routeChangeComplete", logPageView);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <VideoProvider>
          <SEO
            description="A specialist in writing content with experience of search engine algorithms. I'm also skilled with keyword research, data mining instruments, ranking techniques."
            title="Thi Ton - SEO Executive Portfolio"
            author="Ton Nu Mai Thi"
          />
          <SWRConfig
            value={{
              onError: (error, key) => {
                console.log("error, key: ", error, key);
              },
            }}
          >
            <Component {...pageProps} />
          </SWRConfig>
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}
