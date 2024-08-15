import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import React, { useRef, useEffect } from "react";

const Slider = React.forwardRef(
  (
    {
      items = [],
      activeIndex = 0,
      centerMode,
      magnifiedIndex = 0,
      activeSlideCSS = "scale-75",
      ...props
    },
    ref
  ) => {
    const carouselRef = useRef(null);

    useEffect(() => {
      const style = document.createElement("style");
      style.innerHTML = `
        @media (max-width: 600px) {
          .button-container {
            display: none;
          }
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }, []);

    const isSmall = (index) => {
      if (props?.activeIndex + magnifiedIndex >= items?.length) {
        return index !== props?.activeIndex + magnifiedIndex - items?.length;
      } else {
        return index !== props.activeIndex + magnifiedIndex;
      }
    };

    const slideItems = centerMode
      ? items?.map((child, index) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, activeSlideCSS]
                .filter(Boolean)
                .join(" "),
            });
          }
          return React.cloneElement(child);
        })
      : items;

    const slidePrev = () => {
      if (carouselRef.current) {
        carouselRef.current.slidePrev();
      }
    };

    const slideNext = () => {
      if (carouselRef.current) {
        carouselRef.current.slideNext();
      }
    };

    return (
      <div className="relative">
        <AliceCarousel
          items={slideItems}
          infinite
          ref={(el) => {
            carouselRef.current = el;
            if (ref) {
              if (typeof ref === "function") {
                ref(el);
              } else {
                ref.current = el;
              }
            }
          }}
          {...props}
          touchTracking
          mouseTracking
          disableButtonsControls
        />
        <div className="button-container absolute inset-0 flex justify-center items-center z-10 pointer-events-auto">
          <div
            className="bg-dark-0 p-4 rounded-full flex justify-between items-center"
            style={{ width: "80px", height: "80px" }}
          >
            <button
              onClick={slidePrev}
              className="bg-dark-0 p-1 rounded-full"
            >
              <img
                src="images/img_arrow_left_white_0_1.svg"
                alt="Left Arrow"
                className="h-4 w-4"
              />
            </button>
            <button
              onClick={slideNext}
              className="bg-dark-0 p-1 rounded-full"
            >
              <img
                src="images/img_arrow_right.svg"
                alt="Right Arrow"
                className="h-4 w-4"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export { Slider };
