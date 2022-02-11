import React, { useState, useEffect } from 'react';
// import { API } from '../../../config';
import styled, { css } from 'styled-components';

const NewAtists = () => {
  const [artData, setArtData] = useState([]);
  const [numIdx, setNumIdx] = useState(-1);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // fetch(`${API}/artists/new`)
    fetch('/data/NewAtistsData.json')
        .then(res => res.json())
        .then(data => {
          setArtData(data.artists);
        });
  }, []);

  const idxHandler = index => {
    setNumIdx(index);
    setHover(!hover);
  };

  return (
      <NewAtistsInfo>
        <Line />
        <TitleL>신규작가</TitleL>
        <ArtInfo>
          {artData.map((artinfo, idx) => {
            const props = {
              key: artinfo.id,
              hover: hover,
              colorHover: numIdx === idx,
              onMouseEnter: () => idxHandler(idx),
              onMouseLeave: () => idxHandler(-1),
            };
            return (
                <ArtFragment key={idx}>
                  <Liner />
                  <ImgBox imageUrl={artinfo.thumbnail_url}>
                    <Hover {...props} />
                    <Shadow />
                  </ImgBox>
                  <ArtName {...props}>
                    <NameBox />
                    <Name>{artinfo.name}</Name>
                  </ArtName>
                </ArtFragment>
            );
          })}
        </ArtInfo>
      </NewAtistsInfo>
  );
};

const NewAtistsInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
  background-color: #eee;
`;

const Line = styled.div`
  position: absolute;
  top: -40px;
  height: 80px;
  width: 2px;
  background-color: #d5a770;
`;

const TitleL = styled.h1`
  font-size: 50px;
`;

const ArtInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: auto;
  gap: 60px;
`;

const ArtFragment = styled.div`
  position: relative;
  margin-top: 60px;
  cursor: pointer;
`;

const Liner = styled.div`
  position: absolute;
  top: 10px;
  left: -10px;
  background-color: #d5a770;
  height: 85px;
  width: 30px;
`;

const ImgBox = styled.div`
  position: relative;
  width: 280px;
  height: 400px;
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
`;

const Hover = styled.div`
  position: absolute;
  width: 315px;
  height: 100%;
  bottom: 0;
  left: 0;
  transition: 0.5s;

  ${props => {
  if (props.colorHover) {
    return css`
        background-color: #D5A770;
        opacity: 0.7;
      `;
  } else {
    return css`
        opacity: 0;
      `;
  }
}}
  z-index: 10;
`;

const Shadow = styled.div`
  box-shadow: inset 0 -111px 103px -30px rgb(0 0 0 / 80%);
  position: absolute;
  width: 315px;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 5;
`;

const ArtName = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 315px;
  transition: 0.5s;
  bottom: ${props => (props.colorHover ? '20px' : '0')};
  left: 0;
  z-index: 10;
`;

const NameBox = styled.div`
  position: absolute;
  bottom: 100px;
  left: 80px;
  width: 50px;
  height: 50px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
`;

const Name = styled.p`
  position: absolute;
  bottom: 85px;
  color: #fff;
  font-size: 50px;
`;
export default NewAtists;
