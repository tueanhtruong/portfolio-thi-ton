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
            description="I am currently a Mid-Level Content SEO Specialist at AB Media in Da Nang. I am a creative, organized, and efficient specialist with 3+ years of English content writing experience and knowledge of search engine algorithms and ranking techniques. I'm also skilled with keyword research and data mining instruments such as Google Search Console, Google Keyword Planner, Google Analytics, Ahrefs, Majestic, Screaming Frog, Keyword Tool, SEO Quake, Surferseo, SERP Robot, etc."
            title="Thi Ton - Content SEO Specialist"
          />
          <Component {...pageProps} />
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}
