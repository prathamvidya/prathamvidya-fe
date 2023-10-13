import { useEffect, useState } from 'react';

// See tailwind config file for reference (Make sure the breakpoints are same for consistency in the app)
export enum TailwindBreakpoints {
  xs = 368,
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  '2xl' = 1536,
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () =>
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    windowSize,
    // Use these boolean values only when there is significant processing saving as an effect of using them, otherwise use media query provided by tailwind itself
    isScreenXXS: windowSize.width < TailwindBreakpoints.xs,
    isScreenXsPlus: windowSize.width >= TailwindBreakpoints.xs,
    isScreenSmPlus: windowSize.width >= TailwindBreakpoints.sm,
    isScreenMdPlus: windowSize.width >= TailwindBreakpoints.md,
    isScreenLgPlus: windowSize.width >= TailwindBreakpoints.lg,
    isScreenXlPlus: windowSize.width >= TailwindBreakpoints.xl,
    isScreen2xlPlus: windowSize.width >= TailwindBreakpoints['2xl'],
  };
};

export default useWindowSize;
