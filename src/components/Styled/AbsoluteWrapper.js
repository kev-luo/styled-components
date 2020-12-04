import React from "react";

export default function AbsoluteWrapper({ children }) {
  return <div style={{ position: "absolute", width: "100%" }}>{children}</div>;
}
