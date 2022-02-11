import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Slider = ({ children }) => {
    const [prevBtnShow, setPrevBtnShow] = useState(false);
    const [nextBtnShow, setNextBtnShow] = useState(true);
    const slider = useRef();
    const prevBtn = useRef();

    const scroll = direction => {
        let scrollAmount = 0;

        const slide = setInterval(e => {
            if (direction === 'left') {
                slider.current.scrollLeft -= 30;
            } else {
                slider.current.scrollLeft += 30;
            }
            setPrevBtnShow(!!slider.current.scrollLeft);
            scrollAmount += 5;

            if (scrollAmount >= 100) {
                setNextBtnShow(!(scrollAmount >= 100 && slider.current.scrollLeft > 0));
                clearInterval(slide);
            }
        }, 20);
    };

    return (
        <Wrapper ref={slider}>
            {prevBtnShow && (
                <DirectionBtn
                    onClick={() => {
                        scroll('left');
                    }}
                    ref={prevBtn}
                >
                    <i className="xi-angle-left-min" />
                </DirectionBtn>
            )}
            {children}
            {nextBtnShow && (
                <DirectionBtn
                    type="next"
                    onClick={() => {
                        scroll('right');
                    }}
                >
                    <i className="xi-angle-right-min" />
                </DirectionBtn>
            )}
        </Wrapper>
    );
};

export default Slider;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', 'center')}
  width: 800px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DirectionBtn = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  right: ${({ type }) => type === 'next' && '10%'};
  outline: none;
  border: 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgColor};
  box-shadow: rgba(100, 100, 111, 0.5) 0 0.5rem 2rem 0;
  font-size: 2rem;
  i {
    color: ${({ theme }) => theme.primaryColor};
  }
  .xi-angle-left-min {
    margin-left: -2px;
  }
`;
