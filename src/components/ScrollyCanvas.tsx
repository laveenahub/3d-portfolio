"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 75; // frame_00 to frame_74

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Track image objects to prevent re-fetching
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  // Store canvas dimensions for resize events
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // 1. Get scroll progress of the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Map scroll progress (0 - 1) to frame index (0 - 74)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Format number to be two digits: 00, 01, ..., 74
      const paddedIndex = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Handle Resize Events
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    // Initial size
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update Canvas whenever frameIndex changes or dimensions change
  useEffect(() => {
    // Only draw if we have images and canvas is ready
    if (images.length === 0 || !canvasRef.current || dimensions.width === 0) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // We subscribe to the motion value to paint the canvas on scroll without React re-renders
    const unsubscribe = frameIndex.on("change", (latestValue) => {
      const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latestValue)));
      const img = images[index];

      if (!img || !img.complete) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;

      // Calculate logic for object-fit: cover
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    });

    // Draw initial frame if we just loaded or resized
    if (images[0]) {
      frameIndex.set(frameIndex.get()); // trigger the draw
    }

    return () => unsubscribe();
  }, [images, dimensions, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="h-full w-full object-cover" />
        <Overlay scrollYProgress={scrollYProgress} />
        
        {/* Loading State fallback */}
        {images.length < FRAME_COUNT && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] flex-col z-50">
             <div className="w-12 h-12 border-4 border-neutral-800 border-t-white rounded-full animate-spin"></div>
             <p className="mt-4 text-neutral-400 font-mono text-sm tracking-widest uppercase">Loading Assets</p>
          </div>
        )}
      </div>
    </div>
  );
}
