import React, { useState } from "react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const lightMap = "mapbox://styles/kvnluo/cki8ay4gvbbum19pj0ry9bf4r"
  const darkMap = "mapbox://styles/kvnluo/cki8azb472zvd19obw4ydlvjd"

  return (
    <div>
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={darkMap}
        {...viewport}
        onViewportChange={newViewport => setViewport(newViewport)}
      >
        <GeolocateControl positionOptions={{enableHighAccuracy: true}} trackUserLocation={true} />
      </ReactMapGL>
    </div>
  );
}
