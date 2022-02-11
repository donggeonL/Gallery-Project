import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import GallerySlider from './GallerySlider';
import ArtSlider from "./ArtSlider";

const ArtGallerySlider = styled.div`
  padding: 80px 0;
  background-color: #eee;
  text-align: center;
`;

const TitleL = styled.h1`
  font-size: 50px;
`;
const TitleM = styled.h1`
  margin-top: 25px;
  font-size: 30px;
  font-weight: lighter;
`;

const ArtGallery = () => {
    const [slideData, setSlideData] = useState({});

    useEffect(() => {
        // fetch(`${API}/biddings/in-progress`)
        fetch('/data/gallerySliderData.json')
            .then(res => res.json())
            .then(data => {
                setSlideData(data.arts);
            });
    }, []);
    return (
        <ArtGallerySlider>
            <TitleL>온라인 아트 갤러리</TitleL>
            <TitleM> 신규 작품</TitleM>

            <GallerySlider>
                {slideData.length &&
                slideData.map((art, index) => {
                    return <ArtSlider key={index} art={art} />;
                })}
            </GallerySlider>
        </ArtGallerySlider>
    );
};

export default ArtGallery;