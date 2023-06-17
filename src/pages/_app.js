import { useEffect } from "react";
import Router from "next/router";
import { initGA, logPageView } from "analytics";
import "rc-drawer/assets/index.css";
import "react-modal-video/css/modal-video.min.css";
import "swiper/swiper-bundle.min.css";
import "react-slideshow-image/dist/styles.css";
import "typeface-dm-sans";
import "./styles.css";
import "react-awesome-lightbox/build/style.css";
import "@fontsource-variable/open-sans";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import { VideoProvider } from "contexts/video/video.provider";
import theme from "theme";
import SEO from "components/seo";

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
          <Component {...pageProps} />
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}
