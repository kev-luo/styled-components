import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { IoPin } from "react-icons/io5";

import { useDarkModeContext } from "../../utils/DarkContext";

export default function Map() {
  const {
    state: { darkmode },
  } = useDarkModeContext();
  const [viewport, setViewport] = useState({
    latitude: 41.47544,
    longitude: -81.78469,
    height: "100vh",
    width: "100vw",
    zoom: 13,
  });

  const lightMap = "mapbox://styles/kvnluo/cki8ay4gvbbum19pj0ry9bf4r";
  const darkMap = "mapbox://styles/kvnluo/cki8azb472zvd19obw4ydlvjd";

  return (
    <ReactMapGL
      transitionDuration={2000}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle={darkmode ? darkMap : lightMap}
      {...viewport}
      onViewportChange={(newViewport) => setViewport(newViewport)}
    >
      <Marker
        latitude={41.47544}
        longitude={-81.78469}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <IoPin size={25} color="blue" />
      </Marker>
    </ReactMapGL>
  );
}
