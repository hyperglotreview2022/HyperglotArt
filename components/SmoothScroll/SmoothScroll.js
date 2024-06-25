import React, { useEffect, useRef } from "react";
import styles from '../../styles/SmoothScroll.module.css';
import useWindowSize from "../../hooks/WindowSize";

const SmoothScroll = ({ children }) => {
  const windowSize = useWindowSize();
  const scrollingContainerRef = useRef(null);

  const data = {
    ease: 0.095,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    if (scrollingContainerRef.current) {
      document.body.style.height = `${
        scrollingContainerRef.current.getBoundingClientRect().height
      }px`;
    }
  };

  useEffect(() => {
    let animationFrameId;
    const smoothScrollingHandler = () => {
      if (scrollingContainerRef.current) {
        data.current = window.scrollY;
        data.previous += (data.current - data.previous) * data.ease;
        data.rounded = Math.round(data.previous * 100) / 100;
        scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
      }
      animationFrameId = requestAnimationFrame(smoothScrollingHandler);
    };

    smoothScrollingHandler();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className={styles.parent}>
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;



