import { useEffect } from 'react';

const mousedownEventName = 'mousedown';

const useClickOutside = (ref, clickOutside) => {

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        clickOutside();
      }
    };

    window.addEventListener(mousedownEventName, handleClickOutside);

    return () => window.removeEventListener(mousedownEventName, handleClickOutside);

  }, [ref, clickOutside]);
};

export default useClickOutside;
