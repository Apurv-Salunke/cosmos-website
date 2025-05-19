'use client'

import { useEffect, useState } from "react";
import { SmoothCursor } from "./smooth-cursor";

export function CursorWrapper() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchDevice);
  }, []);

  if (isTouchDevice) return null;
  
  return <SmoothCursor />;
} 