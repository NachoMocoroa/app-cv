import { useEffect, useState } from 'react';

const resizeEventName = 'resize';

const useWindowSize = () => {

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handler();

    window.addEventListener(resizeEventName, handler);

    return () => window.removeEventListener(resizeEventName, handler);
    
  }, []);

  return windowSize;
};

export default useWindowSize;
