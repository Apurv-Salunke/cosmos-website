import React from 'react';
import { useInView } from 'react-intersection-observer';

interface LoadOnScrollProps {
  children: React.ReactNode;
  rootMargin?: string;
  minHeight?: number | string;
}

const LoadOnScroll: React.FC<LoadOnScrollProps> = ({ children, rootMargin = '200px 0px', minHeight = 200 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin,
  });

  return (
    <div ref={ref} style={{ minHeight }}>
      {inView ? children : <div style={{ minHeight }} />}
    </div>
  );
};

export default LoadOnScroll; 