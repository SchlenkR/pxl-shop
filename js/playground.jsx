import { useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { LedMatrix, configs } from 'pxl-device-view';
import * as Pxl from '@pxl/api';

// Scoped styles - neutralize pxl-device-view global CSS that conflicts with shop layout
const style = document.createElement('style');
style.textContent = `
  /* Reset pxl-device-view's global .app-content that conflicts with shop layout */
  .app-section .app-content {
    flex: unset;
    display: block;
    overflow: visible;
  }
  
  /* Playground-scoped styles */
  #pxl-playground .ledMatrix {
    display: grid;
    gap: 3px;
    width: 100%;
    height: 100%;
  }
  #pxl-playground .led {
    border-radius: 3px;
  }
`;
document.head.appendChild(style);

const WIDTH = 24;
const HEIGHT = 24;
const FPS = 40;

// Hardcoded scene (no fonts for now)
const scene = (ctx) => {
  ctx.drawBackground(Pxl.Colors.Black);

  const t = ctx.elapsed / 1000;
  const cx = 12 + Math.sin(t * 2) * 8;
  const cy = 12 + Math.cos(t * 2) * 8;

  ctx.drawRectXyWh(2, 2, 8, 6, Pxl.Colors.Red);
  ctx.drawRectXyWh(2, 16, 20, 6, Pxl.Paints.horizontalGradient(20, Pxl.Colors.Yellow, Pxl.Colors.Magenta));
  ctx.drawCircle(cx, cy, 3, Pxl.Colors.Green);
};

function Playground() {
  const ledMatrixRef = useRef(null);

  useEffect(() => {
    let controller = null;

    const startPxl = async () => {
      try {
        // Create a target that pushes frames to the LedMatrix component
        const ledMatrixTarget = (pixels, ctx) => {
          if (ledMatrixRef.current) {
            ledMatrixRef.current.pushFrame(pixels);
          }
        };

        controller = await Pxl.startBrowser(scene, ledMatrixTarget, WIDTH, HEIGHT, FPS);
      } catch (error) {
        console.error('Failed to start PXL:', error);
      }
    };

    startPxl();

    return () => {
      if (controller) {
        controller.stop();
      }
    };
  }, []);

  const config = {
    width: WIDTH,
    height: HEIGHT,
    fps: FPS,
    frameBufferSize: 30,
    relativeFbDelayUntilStart: 0.8,
    turnOffDelayAfterBufferUnderrun: 5000,
    cyclicBufferLogEveryMs: undefined,
    visualConfig: configs.soft,
  };

  return <LedMatrix ref={ledMatrixRef} config={config} />;
}

const container = document.getElementById('pxl-playground');
if (container) {
  const root = createRoot(container);
  root.render(<Playground />);
}
