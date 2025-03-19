'use client';

import Iridescence from './iridescence';

interface IridescenceWrapperProps {
  color?: [number, number, number];
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
}

export default function IridescenceWrapper({
  color = [1, 1, 1],
  speed = 1.0,
  amplitude = 0.1,
  mouseReact = true,
}: IridescenceWrapperProps) {
  return (
    <div className="fixed inset-0 -z-10">
      <Iridescence
        color={color}
        speed={speed}
        amplitude={amplitude}
        mouseReact={mouseReact}
        className="iridescence-container"
      />
    </div>
  );
}
