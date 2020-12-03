import React, { useState } from "react";
import ReactMapGL, {
  GeolocateControl,
  Marker,
  LinearInterpolator,
  FlyToInterpolator,
} from "react-map-gl";
import { IoPin } from "react-icons/io5";

export default function Map() {
  const [darkmode, setDarkmode] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 41.47544,
    longitude: -81.78469,
    width: "100vw",
    height: "100vh",
    zoom: 13,
  });

  const lightMap = "mapbox://styles/kvnluo/cki8ay4gvbbum19pj0ry9bf4r";
  const darkMap = "mapbox://styles/kvnluo/cki8azb472zvd19obw4ydlvjd";

  return (
    <div>
      <ReactMapGL
        transitionDuration={2000}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={darkmode ? darkMap : lightMap}
        {...viewport}
        onViewportChange={(newViewport) => setViewport(newViewport)}
      >
        <Marker latitude={41.47544} longitude={-81.78469} offsetLeft={-20} offsetTop={-10}>
          <IoPin size={25} color="blue"/>
        </Marker>
        {/* button that zooms to user location */}
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapGL>
    </div>
  );
}
