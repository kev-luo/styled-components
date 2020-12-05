import React, { useState } from "react";
import AbsoluteWrapper from "../components/Styled/AbsoluteWrapper";
import FeedHeader from "../components/animated/FeedHeader";

export default function About() {
  const [open, setOpen]= useState(false);
  return (
    <AbsoluteWrapper>
      <div style={{ position: "absolute", top: "10rem", left: "50%" }}>
        <FeedHeader open={open}>
          <div>About</div>
        </FeedHeader>
        <button onClick={() => setOpen(!open)}>Click Me</button>
      </div>
    </AbsoluteWrapper>
  );
}
