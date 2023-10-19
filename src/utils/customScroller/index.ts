import {useEffect, useRef} from "react";
import { TimerType } from "../../react-app-env";

const RESIZE_REACTION_DELAY = 400; 

const useCustomScroller = () => {
  const debouncedWindowSizeHandler = useRef<TimerType>();

  const createHorizontalPage = () => {
    console.warn(window.innerWidth);
  };

  const handleResize = () => {
    clearTimeout(debouncedWindowSizeHandler.current);
    debouncedWindowSizeHandler.current = setTimeout(createHorizontalPage, RESIZE_REACTION_DELAY);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};

export default useCustomScroller;
