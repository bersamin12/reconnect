import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';

const SwipeComponent = () => {
  const [props, set] = useSpring(() => ({ x: 0 }));

  const bind = useGesture({
    onDrag: ({ offset: [x] }) => set({ x }),
  });

  return (
    <animated.div
      {...bind()}
      style={{ ...props, touchAction: 'none' }}
      className="bg-blue-500 w-64 h-64"
    >
      Swipe me!
    </animated.div>
  );
};

export default SwipeComponent;
