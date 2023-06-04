/** @jsx jsx */
import { Container, Flex, jsx } from "theme-ui";
import { Link } from "components/link";
import Logo from "components/logo";
import { Link as ScrollLink } from "react-scroll";

import { DrawerProvider } from "contexts/drawer/drawer.provider";
import { NavigationPaths } from "./header.data";
import MobileDrawer from "./mobileDrawer";
import { useRouter } from "next/router";

export default function Header({ className, endButton, scrollOptions = [] }) {
  const { pathname } = useRouter();

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo />
          <Flex as="nav" sx={styles.nav}>
            {scrollOptions.length === 0
              ? NavigationPaths.map(({ path, label }, i) => (
                  <Link
                    path={path}
                    label={label}
                    sx={{
                      ...styles.nav.navLink,
                      ...(pathname === path ? { color: "primary" } : {}),
                    }}
                    key={i}
                  />
                ))
              : scrollOptions.map(({ path, label }, i) => (
                  <ScrollLink
                    activeClass="active"
                    sx={styles.nav.navLink}
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-16}
                    duration={800}
                    key={`scroll-link-${i}`}
                  >
                    {label}
                  </ScrollLink>
                ))}
          </Flex>
          {endButton && (
            <Link
              path={endButton.path}
              ml={2}
              label={endButton.label}
              sx={styles.headerBtn}
              variant="buttons.primary"
            />
          )}
          <MobileDrawer
            pathname={pathname}
            scrollOptions={scrollOptions}
            endButton={endButton}
          />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    fontSize: "16px",
    fontWeight: 700,
    backgroundColor: "c8995630",
    display: "inline-block",
    "@media screen and (max-width: 1100px)": {
      display: "none",
    },
  },
  header: {
    color: "text_white",
    fontWeight: "normal",
    py: "4px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#F5F0EA",
    transition: "all 0.4s ease",
    "&.sticky": {
      backgroundColor: "background",
      color: "text",
      py: "2px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    maxWidth: "1430px",
    "@media(max-width:1440px)": {
      maxWidth: "1230px",
    },
    "@media screen and (max-width: 1100px)": {
      justifyContent: "space-between",
    },
  },
  nav: {
    mx: "auto",
    "@media screen and (max-width: 1100px)": {
      display: "none",
    },
    navLink: {
      fontSize: "16px",
      color: "#02073E",
      fontWeight: "400",
      cursor: "pointer",
      lineHeight: "1.2",
      mr: "48px",
      transition: "500ms",
      ":last-child": {
        mr: "0",
      },
      "&:hover, &.active": {
        color: "primary",
      },
    },
  },
};
