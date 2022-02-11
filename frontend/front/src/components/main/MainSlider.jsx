import React, { useState, useEffect } from 'react';
// import { API } from '../../../config';
import { useHistory } from 'react-router';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainSlider = () => {
    const [slideData, setSlideData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        // fetch(`${API}/banners`)
        fetch('/data/mainSliderData.json')
            .then(res => res.json())
            .then(data => {
                setSlideData(data.banners);
            });
    }, []);

    return (
        <MainSlideBanner>
            <Slider {...Settings}>
                {slideData.map(banner => {
                    return (
                        <React.Fragment key={banner.link_url}>
                            <SlideWrapper
                                style={{ backgroundImage: `url(${banner.image_url})` }}
                            >
                                <TxtBox>{banner.text}</TxtBox>
                            </SlideWrapper>
                        </React.Fragment>
                    );
                })}
            </Slider>
        </MainSlideBanner>
    );
};

// 버튼
const MainSlideBanner = styled.div`
  //margin: 40px auto 0;
  height: 800px;

  .slick-prev {
    position: absolute;
    top: 400px;
    left: 50px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    content: '/f061';
    z-index: 10;

    :before {
      top: 0;
      left: 0;
      opacity: 1;
      color: black;
      font-size: 50px;
    }

    :hover:before {
      color: #eee;
    }
    
  }

  .slick-next {
    position: absolute;
    top: 400px;
    right: 50px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    content: '/f060';
    z-index: 11;

    :before {
      top: 0;
      right: 0;
      width: 50px;
      height: 50px;
      opacity: 1;
      color: black;
      font-size: 50px;
      //font-family: 'Font Awesome 5 Free';
    }

    :hover:before {
      color: #eee;
    }


  }
`;

const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 800px;
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
`;

const TxtBox = styled.div`
  padding: 50px;
  width: 1000px;
  background: rgba(0, 0, 0, 0.8);
  font-size: 40px;
  font-weight: lighter;
`;


export default MainSlider;

const Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2750,
};
