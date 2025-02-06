// components/ImageSlider.jsx
"use client";
import React, { useRef, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const ImageSlider = ({ children, interval = 3000, dragThreshold = 50 }) => {
	const sliderRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollStart, setScrollStart] = useState(0);
	const childrenCount = React.Children.count(children);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Refs to help throttle drag updates via requestAnimationFrame.
	const rafIdRef = useRef(null);
	// We'll use latestWalk to store the raw drag distance (difference between pointer position and initial pointer)
	const latestWalk = useRef(0);

	// Smoothly scroll to a given slide index.
	const scrollToIndex = (index) => {
		if (sliderRef.current) {
			const slideWidth = sliderRef.current.clientWidth;
			sliderRef.current.scrollTo({
				left: index * slideWidth,
				behavior: "smooth",
			});
		}
	};

	// Arrow navigation (circular).
	const handleNext = () => {
		setCurrentIndex((prev) => {
			const newIndex = prev + 1 >= childrenCount ? 0 : prev + 1;
			scrollToIndex(newIndex);
			return newIndex;
		});
	};

	const handlePrev = () => {
		setCurrentIndex((prev) => {
			const newIndex = prev - 1 < 0 ? childrenCount - 1 : prev - 1;
			scrollToIndex(newIndex);
			return newIndex;
		});
	};

	// Auto slide effect.
	useEffect(() => {
		const autoSlide = setInterval(() => {
			handleNext();
		}, interval);
		return () => clearInterval(autoSlide);
	}, [interval, childrenCount]);

	// --- DRAG HANDLERS (using raw drag offset) ---

	// Called via requestAnimationFrame to update the slider's scroll position.
	const updateScrollPosition = () => {
		if (sliderRef.current) {
			// Simulate the drag by subtracting the raw drag offset.
			sliderRef.current.scrollLeft = scrollStart - latestWalk.current;
		}
		rafIdRef.current = null;
	};

	const handleMouseDown = (e) => {
		setIsDragging(true);
		setStartX(e.pageX - sliderRef.current.offsetLeft);
		setScrollStart(sliderRef.current.scrollLeft);
	};

	const handleMouseMove = (e) => {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.pageX - sliderRef.current.offsetLeft;
		latestWalk.current = x - startX;
		if (rafIdRef.current === null) {
			rafIdRef.current = requestAnimationFrame(updateScrollPosition);
		}
	};

	// On drag end, determine if a slide change is needed.
	const handleDragEnd = () => {
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
	};

	const handleMouseLeave = () => {
		if (isDragging) {
			handleDragEnd();
		}
	};

	const handleMouseUp = () => {
		if (isDragging) {
			handleDragEnd();
		}
	};

	// Touch support (mirrors mouse events).
	const handleTouchStart = (e) => {
		setIsDragging(true);
		setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
		setScrollStart(sliderRef.current.scrollLeft);
	};

	const handleTouchMove = (e) => {
		if (!isDragging) return;
		const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
		latestWalk.current = x - startX;
		if (rafIdRef.current === null) {
			rafIdRef.current = requestAnimationFrame(updateScrollPosition);
		}
	};

	const handleTouchEnd = () => {
		if (isDragging) {
			handleDragEnd();
		}
	};

	// (Optional) Update current index during scroll when not dragging.
	const handleScroll = () => {
		if (sliderRef.current && !isDragging) {
			const slideWidth = sliderRef.current.clientWidth;
			const index = Math.round(sliderRef.current.scrollLeft / slideWidth);
			setCurrentIndex(index);
		}
	};

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
				{React.Children.map(children, (child, index) => {
					if (React.isValidElement(child)) {
						return (
							<div
								key={index}
								className="flex-shrink-0 w-screen overflow-hidden"
								onDragStart={(e) => e.preventDefault()}
							>
								{React.cloneElement(child, {
									draggable: false,
									className: "w-full h-auto block object-cover",
								})}
							</div>
						);
					}
					return (
						<div
							key={index}
							className="flex-shrink-0 w-screen overflow-hidden"
							onDragStart={(e) => e.preventDefault()}
						>
							{child}
						</div>
					);
				})}
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
