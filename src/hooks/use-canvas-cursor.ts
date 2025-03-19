import { useEffect, useCallback, useRef } from 'react';

// Define interfaces for our types
interface OscillatorOptions {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
}

interface LineOptions {
  spring: number;
}

interface NodeType {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Position {
  x: number;
  y: number;
}

interface CanvasSettings {
  debug: boolean;
  friction: number;
  trails: number;
  size: number;
  dampening: number;
  tension: number;
}

// Define our oscillator instance type
interface OscillatorInstance {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;
  init(options: OscillatorOptions): void;
  update(): number;
  value(): number;
}

// Define our line instance type
interface LineInstance {
  spring: number;
  friction: number;
  nodes: NodeType[];
  init(options: LineOptions): void;
  update(): void;
  draw(): void;
}

// Custom type for our canvas context with additional properties
interface CustomCanvasContext extends CanvasRenderingContext2D {
  running: boolean;
  frame: number;
}

const useCanvasCursor = (): void => {
  // Use refs to store mutable values that persist across renders without triggering re-renders
  const ctxRef = useRef<CustomCanvasContext | null>(null);
  const oscillatorRef = useRef<OscillatorInstance | null>(null);
  const posRef = useRef<Position>({ x: 0, y: 0 });
  const linesRef = useRef<LineInstance[]>([]);
  
  // Settings don't change, so they can be defined outside of any hooks
  const settings: CanvasSettings = {
    debug: true,
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  // Create Oscillator factory function
  const createOscillator = useCallback((options: OscillatorOptions = {}): OscillatorInstance => {
    const instance = {
      phase: options.phase || 0,
      offset: options.offset || 0,
      frequency: options.frequency || 0.001,
      amplitude: options.amplitude || 1,
      
      init(options: OscillatorOptions = {}): void {
        this.phase = options.phase || 0;
        this.offset = options.offset || 0;
        this.frequency = options.frequency || 0.001;
        this.amplitude = options.amplitude || 1;
      },
      
      update(): number {
        this.phase += this.frequency;
        const value = this.offset + Math.sin(this.phase) * this.amplitude;
        return value;
      },
      
      value(): number {
        return this.update();
      }
    };
    
    return instance;
  }, []);

  // Create Node factory function
  const createNode = useCallback((): NodeType => {
    return {
      x: 0,
      y: 0,
      vy: 0,
      vx: 0,
    };
  }, []);

  // Create Line factory function - settings is stable and doesn't need to be in deps
  const createLine = useCallback((options: LineOptions): LineInstance => {
    const instance = {
      spring: options.spring + 0.1 * Math.random() - 0.02,
      friction: settings.friction + 0.01 * Math.random() - 0.002,
      nodes: [] as NodeType[],
      
      init(options: LineOptions): void {
        this.spring = options.spring + 0.1 * Math.random() - 0.02;
        this.friction = settings.friction + 0.01 * Math.random() - 0.002;
        this.nodes = [];
        
        for (let i = 0; i < settings.size; i++) {
          const node = createNode();
          node.x = posRef.current.x;
          node.y = posRef.current.y;
          this.nodes.push(node);
        }
      },
      
      update(): void {
        let spring = this.spring;
        const firstNode = this.nodes[0];
        
        firstNode.vx += (posRef.current.x - firstNode.x) * spring;
        firstNode.vy += (posRef.current.y - firstNode.y) * spring;
        
        for (let i = 0, len = this.nodes.length; i < len; i++) {
          const currentNode = this.nodes[i];
          
          if (i > 0) {
            const prevNode = this.nodes[i - 1];
            currentNode.vx += (prevNode.x - currentNode.x) * spring;
            currentNode.vy += (prevNode.y - currentNode.y) * spring;
            currentNode.vx += prevNode.vx * settings.dampening;
            currentNode.vy += prevNode.vy * settings.dampening;
          }
          
          currentNode.vx *= this.friction;
          currentNode.vy *= this.friction;
          currentNode.x += currentNode.vx;
          currentNode.y += currentNode.vy;
          
          spring *= settings.tension;
        }
      },
      
      draw(): void {
        const ctx = ctxRef.current;
        if (!ctx) return;
        
        let x = this.nodes[0].x;
        let y = this.nodes[0].y;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        
        for (let i = 1, len = this.nodes.length - 2; i < len; i++) {
          const currentNode = this.nodes[i];
          const nextNode = this.nodes[i + 1];
          x = 0.5 * (currentNode.x + nextNode.x);
          y = 0.5 * (currentNode.y + nextNode.y);
          ctx.quadraticCurveTo(currentNode.x, currentNode.y, x, y);
        }
        
        const secondLastNode = this.nodes[this.nodes.length - 2];
        const lastNode = this.nodes[this.nodes.length - 1];
        ctx.quadraticCurveTo(secondLastNode.x, secondLastNode.y, lastNode.x, lastNode.y);
        ctx.stroke();
        ctx.closePath();
      }
    };
    
    // Initialize the nodes
    instance.init(options);
    
    return instance;
  }, [createNode]); // settings is stable and doesn't need to be in deps

  // Render function that updates and draws the canvas
  const render = useCallback((): void => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    if (!ctx.running) return;
    
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    
    const oscillator = oscillatorRef.current;
    if (oscillator) {
      ctx.strokeStyle = `hsla(${Math.round(oscillator.update())},50%,50%,0.2)`;
    }
    
    ctx.lineWidth = 1;
    
    const lines = linesRef.current;
    for (let i = 0; i < settings.trails; i++) {
      const line = lines[i];
      line.update();
      line.draw();
    }
    
    ctx.frame++;
    window.requestAnimationFrame(render);
  }, []); // settings.trails is stable and doesn't need to be in deps

  // Resize canvas function
  const resizeCanvas = useCallback((): void => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    if (!ctx.canvas) return;
    
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }, []);

  // Initialize lines
  const initLines = useCallback((): void => {
    const lines: LineInstance[] = [];
    for (let i = 0; i < settings.trails; i++) {
      lines.push(createLine({ spring: 0.4 + (i / settings.trails) * 0.025 }));
    }
    linesRef.current = lines;
  }, [createLine]); // settings.trails is stable and doesn't need to be in deps

  // Mouse and touch event handlers
  const handleMouseMove = useCallback((e: MouseEvent | TouchEvent): void => {
    if ('touches' in e) {
      posRef.current.x = e.touches[0].pageX;
      posRef.current.y = e.touches[0].pageY;
    } else {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
    }
    e.preventDefault();
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent): void => {
    if (e.touches.length === 1) {
      posRef.current.x = e.touches[0].pageX;
      posRef.current.y = e.touches[0].pageY;
    }
  }, []);

  // Main mouse movement handler
  const onMousemove = useCallback((e: MouseEvent | TouchEvent): void => {
    document.removeEventListener('mousemove', onMousemove);
    document.removeEventListener('touchstart', onMousemove);
    document.addEventListener('mousemove', handleMouseMove as EventListener);
    document.addEventListener('touchmove', handleMouseMove as EventListener);
    document.addEventListener('touchstart', handleTouchStart);
    
    handleMouseMove(e);
    initLines();
    render();
  }, [handleMouseMove, handleTouchStart, initLines, render]);

  // Focus and blur handlers
  const focusHandler = useCallback((): void => {
    const ctx = ctxRef.current;
    if (ctx && !ctx.running) {
      ctx.running = true;
      render();
    }
  }, [render]);
  
  const blurHandler = useCallback((): void => {
    const ctx = ctxRef.current;
    if (ctx) {
      ctx.running = true;
    }
  }, []);

  // Canvas initialization
  const renderCanvas = useCallback((): void => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    // Cast to our custom context type with additional properties
    const ctx = context as CustomCanvasContext;
    ctx.running = true;
    ctx.frame = 1;
    ctxRef.current = ctx;
    
    // Create oscillator instance
    oscillatorRef.current = createOscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });
    
    document.addEventListener('mousemove', onMousemove as EventListener);
    document.addEventListener('touchstart', onMousemove as EventListener);
    document.body.addEventListener('orientationchange', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('focus', focusHandler);
    window.addEventListener('blur', blurHandler);
    
    resizeCanvas();
  }, [blurHandler, createOscillator, focusHandler, onMousemove, resizeCanvas]);

  // Setup and cleanup with useEffect
  useEffect(() => {
    renderCanvas();

    return () => {
      const ctx = ctxRef.current;
      if (ctx) {
        ctx.running = false;
      }
      document.removeEventListener('mousemove', onMousemove as EventListener);
      document.removeEventListener('touchstart', onMousemove as EventListener);
      document.body.removeEventListener('orientationchange', resizeCanvas);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('focus', focusHandler);
      window.removeEventListener('blur', blurHandler);
    };
  }, [blurHandler, focusHandler, onMousemove, renderCanvas, resizeCanvas]);
};

export default useCanvasCursor;
