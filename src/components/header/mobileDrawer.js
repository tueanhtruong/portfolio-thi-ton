import React, { useContext } from "react";
import { Box } from "theme-ui";
import { Scrollbars } from "react-custom-scrollbars";
import Drawer from "components/drawer";
import { DrawerContext } from "contexts/drawer/drawer.context";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import menuItems, { NavigationPaths } from "./header.data";
import Logo from "components/logo";
import LogoDark from "assets/mai-thi-logo.svg";
// import { Link as ScrollLink } from "react-scroll";
import { Link } from "components/link";

const MobileDrawer = ({ pathname }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: "TOGGLE",
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="22px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#02073E" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Logo src={LogoDark} />
          <Box sx={styles.menu}>
            {NavigationPaths.map(({ path, label }, i) => (
              <Link
                path={path}
                label={label}
                sx={{
                  ...styles.menu.link,
                  ...(pathname === path ? { color: "primary" } : {}),
                }}
                key={i}
              />
              // <ScrollLink
              //   to={path}
              //   key={i}
              //   spy={true}
              //   smooth={true}
              //   sx={styles.menu.link}
              // >
              //   {label}
              // </ScrollLink>
            ))}
          </Box>

          {/* <Box sx={styles.menuFooter}>
            <Button variant="primary" sx={styles.button}>
              Try for Free
            </Button>
          </Box> */}
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",

    "@media screen and (min-width: 992px)": {
      display: "none",
    },
  },

  drawer: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(180deg, #E1F6F9 0%, #0361d015 100%)",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "30px",
    right: "30px",
    zIndex: "1",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "30px",
    pb: "40px",
    px: "30px",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",

    link: {
      fontSize: "15px",
      fontWeight: "500",
      color: "#02073E",
      py: "4px",
      marginTop: 16,
      cursor: "pointer",
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
  },

  button: {
    fontSize: "15px",
    fw: "700",
    height: "48px",
    borderRadius: "3px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
    backgroundColor: "#02073E",
    color: "#fff",
  },
};

export default MobileDrawer;
