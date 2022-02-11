import React from 'react';
import styled from 'styled-components';

const ArtSlider = ({ art }) => {
    const { thumbnail_url, title, artist } = art;

    const textLengthOverCut = text => {
        return text.length > 20 ? `${text.substr(0, 20)}...` : text;
    };

    return (
        <ArtSliderAll>
            <ArtWork>
                <img src={thumbnail_url} alt="" />
            </ArtWork>
            <Name>{artist}</Name>
            <Title>{textLengthOverCut(title)}</Title>
        </ArtSliderAll>
    );
};

const ArtSliderAll = styled.div`
  flex-direction: column;
  margin: 1rem 0.7rem;
  padding: 50px 0 25px;
  text-align: right;
`;

const ArtWork = styled.div`
  padding: 5px;
  border: 5px solid #000;
  background-color: #fff;

  img {
    width: auto;
    height: 300px;
  }
`;

const Name = styled.p`
  margin: 10px;
  font-size: 15px;
`;

const Title = styled.p`
  font-size: 15px;
`;

export default ArtSlider;
