import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const GallerySlider = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const goPrev = () => {
        if (currentSlide === 0) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const goNext = () => {
        if (currentSlide === children.length) {
            setCurrentSlide(currentSlide);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    useEffect(() => {
        const slide = slideRef.current;
        slide.style.transition = 'all 0.5s ease-in-out';
        slide.style.transform = `translate(-${currentSlide * 10}%)`;
    }, [currentSlide]);

    return (
        <Slider>
            <SlideRef>
                <Kids ref={slideRef}>{children}</Kids>
            </SlideRef>
            <Prev onClick={goPrev}>
                <i className="xi-angle-left-min" />
            </Prev>
            <Next onClick={goNext}>
                <i className="xi-angle-right-min" />
            </Next>
        </Slider>
    );
};

const Slider = styled.div`
  width: auto;
  position: relative;
  margin: 0 auto;
`;

const SlideRef = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1000px;
  overflow: hidden;
`;

const Kids = styled.div`
  display: flex;
  width: auto;
  height: auto;
`;

const Button = styled.div`
  position: absolute;
  top: 40%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  font-size: 35px;
  color: #000;

  &:hover {
    transition: 0.5s;
    color: #fff;
    background-color: gray;
    cursor: pointer;
  }
`;

const Prev = styled(Button)`
  left: 5%;
  padding-right: 4px;
`;

const Next = styled(Button)`
  right: 5%;
  padding-left: 4px;
  
`;

export default GallerySlider;
