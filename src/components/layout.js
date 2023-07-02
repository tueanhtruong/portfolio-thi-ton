import { useGetCurrentUser } from "queries";
import React, { useCallback, useEffect } from "react";
import Sticky from "react-stickynode";
import { Waypoint } from "react-waypoint";
import {
  useStickyDispatch,
  useStickyState,
} from "../contexts/app/app.provider";
import Footer from "./footer/footer";
import Header from "./header/header";

export default function Layout({ children, scrollOptions, endButton }) {
  const isSticky = useStickyState("isSticky");
  const dispatch = useStickyDispatch();
  const { user } = useGetCurrentUser();
  const setSticky = useCallback(
    () => dispatch({ type: "SET_STICKY" }),
    [dispatch]
  );
  const removeSticky = useCallback(
    () => dispatch({ type: "REMOVE_STICKY" }),
    [dispatch]
  );

  useEffect(() => {
    if (user) dispatch({ type: "SET_AUTH", auth: true, user });
    else dispatch({ type: "SET_AUTH", auth: false, user: null });
  }, [user]);

  const onWaypointPositionChange = ({ currentPosition }) => {
    if (currentPosition === "above") {
      setSticky();
    }
    if (currentPosition === "below") {
      removeSticky();
    }
  };

  return (
    <React.Fragment>
      <Sticky enabled={isSticky} innerZ={991}>
        <Header
          className={`${isSticky ? "sticky" : "unSticky"}`}
          scrollOptions={scrollOptions}
          endButton={endButton}
        />
      </Sticky>
      <Waypoint
        onEnter={removeSticky}
        // onLeave={setSticky}
        onPositionChange={onWaypointPositionChange}
      />

      <main
        sx={{
          variant: "layout.main",
        }}
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
