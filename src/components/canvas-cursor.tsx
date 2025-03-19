'use client';

import useCanvasCursor from '@/hooks/use-canvas-cursor';
import dynamic from 'next/dynamic';

const CanvasCursor = () => {
  useCanvasCursor();

  return <canvas className="pointer-events-none fixed inset-0" id="canvas" />;
};

// Use dynamic import with ssr: false to ensure this component only runs on the client
export default dynamic(() => Promise.resolve(CanvasCursor), { ssr: false });
