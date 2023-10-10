import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './ImageContainer.css';

const ImageContainer = ({ image }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === image.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === image.length - 1 ? 0 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {image.map((item, idx) => {
        return (
          <img
            src={item.images}
            alt={item.thumbnail}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
            {
                image.map((_, idx) => {
                    return(
                        <button
                         key={idx}
                         className={
                            slide === idx ? "indicator" : "indicator indicator-inactive"
                         }
                         onClick={() => setSlide(idx)}
                        ></button>
                    );
                })
            }
      </span>
    </div>
  );
};

export default ImageContainer;
