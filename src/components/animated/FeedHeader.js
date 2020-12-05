import React from "react";
import { useSpring, animated } from "react-spring";

export default function FeedHeader({ children, open }) {
  const fade = useSpring({
    transform: open ? 'scale(1)' : 'scale(0)',
    // transform: open ? 'translate3d(0,0,0)' : 'translate3d(0,-50px, 0)'
  });

  return <animated.div style={fade}>{children}</animated.div>;
}
