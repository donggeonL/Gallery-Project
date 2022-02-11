import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 8px;
  border: 1px solid black;
  height: 300px;
  text-align: center;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 20%;
  height: 250px;
  border-radius: 8px;
  background-color: skyblue;
  transition: 0.8s ease-in-out all;
  gap: 20px;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const Profile = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: red;
`;

const Name = styled.div`
  font-size: 27px;
`;

const Intro = styled.div`
  font-size: 11px;
`;

const Major = styled.div`
  font-size: 15px;
`;


const TodayArtist = () => {
  return <Container>
    오늘의 작가
    <CardWrapper>
      <Card>
        <Profile />
        <Name> 이 동건</Name>
        <Major> 소묘 </Major>
        <Intro> 소묘 작가 이동건 입니다.</Intro>
      </Card>
      <Card>
        <Profile />
        <Name> 김 영석</Name>
        <Major> 풍경화 </Major>
        <Intro> 풍경화 작가 김영석 입니다.</Intro>
      </Card>
      <Card>
        <Profile />
        <Name> 이 동윤</Name>
        <Major> 채색 </Major>
        <Intro> 채색 작가 이동윤 입니다.</Intro>
      </Card>
      <Card>
        <Profile />
        <Name> 유 해식</Name>
        <Major> 조각 </Major>
        <Intro> 조각 작가 유해식 입니다.</Intro>
      </Card>

    </CardWrapper>
  </Container>
};

export default TodayArtist;
