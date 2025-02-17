// components/ImageSlider.jsx
"use client";

import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Slide = React.memo(({ child }) => (
  <div
    className="flex-shrink-0 w-screen overflow-hidden"
    onDragStart={(e) => e.preventDefault()}
  >
    {React.isValidElement(child)
      ? React.cloneElement(child, {
          draggable: false,
          className: "w-full h-auto block object-cover",
        })
      : child}
  </div>
));

const ImageSlider = ({ children, interval = 3000, dragThreshold = 50 }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const childrenCount = React.Children.count(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const rafIdRef = useRef(null);
  const latestWalk = useRef(0);

  // Smooth scroll to a given slide index.
  const scrollToIndex = useCallback(
    (index) => {
      if (sliderRef.current) {
        const slideWidth = sliderRef.current.clientWidth;
        sliderRef.current.scrollTo({
          left: index * slideWidth,
          behavior: "smooth",
        });
      }
    },
    []
  );

  // Arrow navigation (circular).
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1 >= childrenCount ? 0 : prev + 1;
      scrollToIndex(newIndex);
      return newIndex;
    });
  }, [childrenCount, scrollToIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1 < 0 ? childrenCount - 1 : prev - 1;
      scrollToIndex(newIndex);
      return newIndex;
    });
  }, [childrenCount, scrollToIndex]);

  // Auto slide effect.
  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, interval);
    return () => clearInterval(autoSlide);
  }, [interval, handleNext]);

  // Update slider scroll position via requestAnimationFrame.
  const updateScrollPosition = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollStart - latestWalk.current;
    }
    rafIdRef.current = null;
  }, [scrollStart]);

  // Mouse and Touch Handlers
  const handleDragStart = useCallback((pageX) => {
    setIsDragging(true);
    setStartX(pageX - sliderRef.current.offsetLeft);
    setScrollStart(sliderRef.current.scrollLeft);
  }, []);

  const handleDragMove = useCallback(
    (pageX) => {
      if (!isDragging) return;
      const x = pageX - sliderRef.current.offsetLeft;
      latestWalk.current = x - startX;
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(updateScrollPosition);
      }
    },
    [isDragging, startX, updateScrollPosition]
  );

  const handleDragEnd = useCallback(() => {
    let newIndex = currentIndex;
    if (latestWalk.current < -dragThreshold) {
      newIndex = currentIndex + 1 >= childrenCount ? 0 : currentIndex + 1;
    } else if (latestWalk.current > dragThreshold) {
      newIndex = currentIndex - 1 < 0 ? childrenCount - 1 : currentIndex - 1;
    }
    scrollToIndex(newIndex);
    setCurrentIndex(newIndex);
    setIsDragging(false);
    latestWalk.current = 0;
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  }, [childrenCount, currentIndex, dragThreshold, scrollToIndex]);

  const handleMouseDown = useCallback((e) => {
    handleDragStart(e.pageX);
  }, [handleDragStart]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    handleDragMove(e.pageX);
  }, [isDragging, handleDragMove]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) handleDragEnd();
  }, [isDragging, handleDragEnd]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) handleDragEnd();
  }, [isDragging, handleDragEnd]);

  const handleTouchStart = useCallback((e) => {
    handleDragStart(e.touches[0].pageX);
  }, [handleDragStart]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleDragMove(e.touches[0].pageX);
  }, [isDragging, handleDragMove]);

  const handleTouchEnd = useCallback(() => {
    if (isDragging) handleDragEnd();
  }, [isDragging, handleDragEnd]);

  // Update currentIndex on scroll (when not dragging).
  const handleScroll = useCallback(() => {
    if (sliderRef.current && !isDragging) {
      const slideWidth = sliderRef.current.clientWidth;
      const index = Math.round(sliderRef.current.scrollLeft / slideWidth);
      setCurrentIndex(index);
    }
  }, [isDragging]);

  // Memoize slides to avoid re-mapping on every render.
  const slides = useMemo(
    () =>
      React.Children.map(children, (child, index) => (
        <Slide key={index} child={child} />
      )),
    [children]
  );

  return (
    <div className="relative w-screen">
      {/* Slider container */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
        onDragStart={(e) => e.preventDefault()} // Prevent default image dragging.
        style={{ touchAction: "pan-y" }} // Allow vertical scrolling on mobile.
        className={`flex overflow-x-scroll select-none w-full no-scrollbar ${
          isDragging ? "scroll-auto" : "scroll-smooth"
        }`}
      >
        {slides}
      </div>

      {/* Left Arrow Button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 z-20"
        aria-label="Previous Slide"
      >
        <IoIosArrowBack
          size={32}
          className="text-white opacity-50 hover:opacity-75 transition"
        />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 z-20"
        aria-label="Next Slide"
      >
        <IoIosArrowForward
          size={32}
          className="text-white opacity-50 hover:opacity-75 transition"
        />
      </button>
    </div>
  );
};

export default ImageSlider;
